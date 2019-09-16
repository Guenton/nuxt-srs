<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3withButton
        h3text="Add new Position"
        button-text="Cancel and Return"
        link-to="/pos"
      />
      <b-row>
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="onReset">
            <b-form-row>
              <b-col>
                <!-- First Name Input - Validates with 2 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Shorthand:"
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
                <!-- Last Name Input - Validates with 5 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Title:"
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
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="response.success" variant="success">
            {{ response.success }}
          </b-alert>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="response.error" variant="danger">
            {{ response.error }}
          </b-alert>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="queryHasResult" variant="info">
            <p>Found the Following Positions with similar names</p>
            <ul>
              <li v-for="position in queryResult" :key="position.pos_id">
                <strong>Position #{{ position.pos_id }}:</strong>
                {{ position.shorthand }}
                {{ position.title }}
              </li>
            </ul>
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import H3withButton from "~/components/H3withButton";
export default {
  components: {
    NavbarHome,
    H3withButton
  },
  data() {
    return {
      form: {
        shorthand: "",
        title: ""
      },
      validation: {
        shorthand: null,
        title: null
      },
      response: {
        success: null,
        error: null
      },
      queryResult: []
    };
  },
  computed: {
    queryHasResult() {
      return this.queryResult.length > 0;
    }
  },
  methods: {
    shorthandValidator() {
      if (this.form.shorthand.length >= 2) {
        this.response.success = null;
        this.response.error = null;
        this.validation.shorthand = true;
        this.queryResult = [];
        this.searchInput("shorthand");
      } else {
        this.validation.shorthand = false;
      }
    },
    titleValidator() {
      if (this.form.title.length >= 2) {
        this.response.success = null;
        this.response.error = null;
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
      const query =
        fieldString === "shorthand" ? this.form.shorthand : this.form.title;
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/search/pos",
          { params: { query } }
        );
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.queryResult = response.data;
          console.log(response.data);
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      try {
        const response = await this.$axios.$post(
          "http://localhost:3000/api/pos",
          this.form
        );
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
      event.preventDefault();
      this.form.shorthand = "";
      this.form.title = "";
      this.validation.shorthand = null;
      this.validation.title = null;
      this.response.success = null;
      this.response.error = null;
      this.queryResult = [];
    }
  }
};
</script>
