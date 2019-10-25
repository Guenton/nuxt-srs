<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- H3 with Link to pos/edit -->
      <H3withButton h3text="Add new Position" button-text="Cancel and Return" link-to="/pos" />
      <!-- Add new Position Form -->
      <b-row>
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="onReset">
            <!-- Position Box -->
            <b-card bg-variant="light">
              <b-form-group
                label-cols-lg="3"
                label="Position"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <!-- Title Input - Validates with 2 characters -->
                <b-form-group
                  label="Title:"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-2"
                  :state="validation.title"
                  :invalid-feedback="invalidTitle()"
                >
                  <b-form-input
                    v-model="form.title"
                    :state="validation.title"
                    @focus="titleValidator()"
                    @keydown="titleValidator()"
                  >
                  </b-form-input>
                </b-form-group>
                <!-- Shorthand Input - Not Required -->
                <b-form-group
                  label="Abbreviation:"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-input
                    v-model="form.shorthand"
                    :state="validation.shorthand"
                    @focus="shorthandValidator()"
                    @keydown="shorthandValidator()"
                  >
                  </b-form-input>
                </b-form-group>
              </b-form-group>
            </b-card>
            <!-- Success & Error Alert Containers -->
            <AlertBox :show="hasSuc" variant="success" :text="response.success" />
            <AlertBox :show="hasErr" variant="danger" :text="response.error" />
            <!-- Submit & Reset Buttons -->
            <b-form-row class="my-3">
              <b-col class="text-right">
                <b-button
                  type="submit"
                  variant="success"
                  class="px-4"
                  :disabled="incompleteValidation"
                >
                  Submit Position
                </b-button>
              </b-col>
              <b-col class="text-left">
                <b-button type="reset" variant="secondary" class="px-4">
                  Reset Form
                </b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
      <!-- Dynamic Search Result Container -->
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="queryHasResult" variant="info">
            <p>Found the Following Positions with similar names</p>
            <ul>
              <li v-for="position in queryResult" :key="position.pos_id">
                <strong>Position #{{ position.posmain_id }}:</strong>
                {{ position.shorthand }} - {{ position.title }}
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
        title: "",
        shorthand: ""
      },
      validation: {
        shorthand: null,
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
    },
    incompleteValidation() {
      if (
        this.validation.title === null ||
        this.validation.title === false ||
        this.validation.shorthand === null ||
        this.validation.shorthand === false
      )
        return true;
      else return false;
    }
  },
  methods: {
    titleValidator() {
      if (this.form.title.length >= 5) {
        this.response.success = "";
        this.response.error = "";
        this.validation.title = true;
        this.queryResult = [];
        this.searchInput("title");
      } else {
        this.validation.title = false;
      }
    },
    shorthandValidator() {
      if (this.form.shorthand.length >= 2) {
        this.response.success = "";
        this.response.error = "";
        this.validation.shorthand = true;
        this.queryResult = [];
        this.searchInput("shorthand");
      } else {
        this.validation.shorthand = false;
      }
    },
    invalidTitle() {
      if (this.form.title.length > 0) {
        const remainingChars = 5 - this.form.title.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
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
    validFeedback() {
      return "Great!";
    },
    async searchInput(fieldString) {
      const query = fieldString === "shorthand" ? this.form.shorthand : this.form.title;
      const url = `${api}/search/pos`;
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
      const url = `${api}/pos`;
      try {
        const response = await this.$axios.$post(url, this.form);
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.form.shorthand = "";
          this.form.title = "";
          this.validation.shorthand = null;
          this.validation.title = null;
          this.response.success = response.suc;
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    onReset(event) {
      if (event) event.preventDefault();
      this.form.shorthand = "";
      this.form.title = "";
      this.validation.shorthand = null;
      this.validation.title = null;
      this.response.success = "";
      this.response.error = "";
      this.queryResult = [];
    }
  }
};
</script>
