<template>
  <div>
    <NavbarHome />
    <b-container class="mt-5">
      <h3 class="text-center mb-3">Add new employee</h3>
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
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
export default {
  components: {
    NavbarHome
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
      }
    };
  },
  methods: {
    firstnameValidator() {
      if (this.form.firstname.length >= 2) {
        this.validation.firstname = true;
      } else {
        this.validation.firstname = false;
      }
    },
    lastnameValidator() {
      if (this.form.lastname.length >= 2) {
        this.validation.lastname = true;
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
    async onSubmit(event) {
      event.preventDefault();
      try {
        const response = await this.$axios.$post(
          "http://localhost:3000/api/emp",
          this.form
        );
        if (response.err) {
          this.response.error = response.err;
          return;
        } else {
          this.response.success = response.suc;
          return;
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
    }
  }
};
</script>
