<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3withButton
        h3text="Add new Employee"
        button-text="Cancel and Return"
        link-to="/emp"
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
                      label="First Name:"
                      :state="validation.firstname"
                      :invalid-feedback="invalidFirstname()"
                      :valid-feedback="validFeedback()"
                    >
                      <b-form-input
                        v-model="form.firstname"
                        :state="validation.firstname"
                        trim
                        @focus="firstnameValidator()"
                        @keyup="firstnameValidator()"
                      />
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <!-- Last Name Input - Validates with 5 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Last Name:"
                      :state="validation.lastname"
                      :invalid-feedback="invalidLastname()"
                      :valid-feedback="validFeedback()"
                    >
                      <b-form-input
                        v-model="form.lastname"
                        :state="validation.lastname"
                        trim
                        @focus="lastnameValidator()"
                        @keyup="lastnameValidator()"
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
            <p>Found the Following Employees with similar names</p>
            <ul>
              <li v-for="employee in queryResult" :key="employee.emp_id">
                <strong>Employee #{{ employee.emp_id }}:</strong>
                {{ employee.firstname }}
                {{ employee.lastname }}
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
        firstname: "",
        lastname: ""
      },
      validation: {
        firstname: null,
        lastname: null
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
    firstnameValidator() {
      this.response.success = null;
      this.response.error = null;
      if (this.form.firstname.length >= 2) {
        this.validation.firstname = true;
        this.queryResult = [];
        this.searchInput("firstname");
      } else {
        this.validation.firstname = false;
      }
    },
    lastnameValidator() {
      this.response.success = null;
      this.response.error = null;
      if (this.form.lastname.length >= 2) {
        this.validation.lastname = true;
        this.queryResult = [];
        this.searchInput("lastname");
      } else {
        this.validation.lastname = false;
      }
    },
    invalidFirstname() {
      if (this.form.firstname.length > 0) {
        const remainingChars = 2 - this.form.firstname.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    invalidLastname() {
      if (this.form.lastname.length > 0) {
        const remainingChars = 2 - this.form.lastname.length;
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
        fieldString === "firstname" ? this.form.firstname : this.form.lastname;
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/search/emp",
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
          "http://localhost:3000/api/emp",
          this.form
        );
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.response.success = response.suc;
          this.form.firstname = "";
          this.form.lastname = "";
          this.validation.firstname = null;
          this.validation.lastname = null;
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.firstname = "";
      this.form.lastname = "";
      this.validation.firstname = null;
      this.validation.lastname = null;
      this.response.success = null;
      this.response.error = null;
      this.queryResult = [];
    }
  }
};
</script>
