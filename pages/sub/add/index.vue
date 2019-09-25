<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3withButton
        h3text="Add new Subsidiary"
        button-text="Return to Edit Menu"
        link-to="/sub/edit"
      />
      <!-- Add new Subsidiary Form -->
      <b-row>
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="onReset">
            <b-form-row>
              <b-col>
                <!-- Shorthand (Abbreviation) Input - Validates with 2 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Abbreviation:"
                      :state="validation.shorthand"
                      :invalid-feedback="invalidShorthand()"
                      :valid-feedback="validFeedback()"
                    >
                      <b-form-input
                        v-model="form.shorthand"
                        :state="validation.shorthand"
                        trim
                        @focus="shorthandValidator()"
                        @keydown="shorthandValidator()"
                      />
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <!-- Location (Subsidiary Location) Input - Validates with 5 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Subsidiary Location:"
                      :state="validation.location"
                      :invalid-feedback="invalidLocation()"
                      :valid-feedback="validFeedback()"
                    >
                      <b-form-input
                        v-model="form.location"
                        :state="validation.location"
                        trim
                        @focus="locationValidator()"
                        @keydown="locationValidator()"
                      />
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <!-- Title (Subsidiary Name) Input - Validates with 5 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Subsidiary Name:"
                      :state="validation.title"
                      :invalid-feedback="invalidTitle()"
                      :valid-feedback="validFeedback()"
                    >
                      <b-form-input
                        v-model="form.title"
                        :state="validation.title"
                        trim
                        @focus="titleValidator()"
                        @keydown="titleValidator()"
                      />
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <!-- Submit & Reset Buttons -->
                <b-form-row>
                  <b-col class="text-right">
                    <b-button type="submit" variant="success">Submit</b-button>
                  </b-col>
                  <b-col class="text-left">
                    <b-button type="reset" variant="secondary">Reset</b-button>
                  </b-col>
                </b-form-row>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
      <!-- Success & Error Alert Containers -->
      <AlertBox :show="hasSuc" variant="success" :text="response.success" />
      <AlertBox :show="hasErr" variant="danger" :text="response.error" />
      <!-- Dynamic Search Result Container -->
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="queryHasResult" variant="info">
            <p>Found the Following Subsidiaries with similar names</p>
            <ul>
              <li v-for="sub in queryResult" :key="sub.sub_id">
                <strong>Subsidiary #{{ sub.sub_id }}:</strong>
                {{ sub.shorthand }} - {{ sub.title }}
              </li>
            </ul>
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3withButton from "~/components/H3withButton";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3withButton,
    AlertBox
  },
  data() {
    return {
      form: {
        shorthand: "",
        location: "",
        title: ""
      },
      validation: {
        shorthand: null,
        location: null,
        title: null
      },
      response: {
        success: "",
        error: ""
      },
      queryResult: []
    };
  },
  computed: {
    hasSuc() {
      return this.response.success.length > 0;
    },
    hasErr() {
      return this.response.error.length > 0;
    },
    queryHasResult() {
      return this.queryResult.length > 0;
    }
  },
  methods: {
    resetForm() {
      this.form.shorthand = "";
      this.form.location = "";
      this.form.title = "";
    },
    resetValidation() {
      this.validation.shorthand = null;
      this.validation.location = null;
      this.validation.title = null;
    },
    resetResponse() {
      this.response.success = "";
      this.response.error = "";
    },
    shorthandValidator() {
      if (this.form.shorthand.length >= 2) {
        this.resetResponse();
        this.validation.shorthand = true;
        this.queryResult = [];
        this.searchInput("shorthand");
      } else {
        this.validation.shorthand = false;
      }
    },
    locationValidator() {
      if (this.form.location.length >= 2) {
        this.resetResponse();
        this.validation.location = true;
        this.queryResult = [];
        this.searchInput("location");
      } else {
        this.validation.location = false;
      }
    },
    titleValidator() {
      if (this.form.title.length >= 2) {
        this.resetResponse();
        this.validation.title = true;
        this.queryResult = [];
        this.searchInput("title");
      } else {
        this.validation.title = false;
      }
    },
    invalidShorthand() {
      if (this.form.shorthand.length > 0) {
        const remainingChars = 2 - this.form.shorthand.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    invalidLocation() {
      if (this.form.location.length > 0) {
        const remainingChars = 2 - this.form.location.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    invalidTitle() {
      if (this.form.title.length > 0) {
        const remainingChars = 2 - this.form.title.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    validFeedback() {
      return "Great!";
    },
    async searchInput(fieldString) {
      let query;
      if (fieldString === "shorthand") {
        query = this.form.shorthand;
      } else if (fieldString === "location") {
        query = this.form.location;
      } else {
        query = this.form.title;
      }
      const url = `${api}/search/sub`;
      try {
        const response = await this.$axios.$get(url, { params: { query } });
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.queryResult = response.data;
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      const url = `${api}/sub`;
      try {
        const response = await this.$axios.$post(url, this.form);
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.resetForm();
          this.resetValidation();
          this.response.success = response.suc;
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    onReset(event) {
      if (event) {
        event.preventDefault();
      }
      this.resetForm();
      this.resetValidation();
      this.resetResponse();
      this.queryResult = [];
    }
  }
};
</script>
