<template>
  <div>
    <NavbarHome />
    <b-container class="mt-5">
      <H3header h3text="Add new Subsidiary" />
      <b-row>
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="onReset">
            <b-form-row>
              <b-col>
                <!-- Shorthand Input - Validates with 2 characters -->
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
                        @keyup="shorthandValidator()"
                      />
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <!-- Shorthand Input - Validates with 5 characters -->
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
                        @keyup="titleValidator()"
                      />
                    </b-form-group>
                  </b-col>
                </b-form-row>
                <!-- Shorthand Input - Validates with 5 characters -->
                <b-form-row>
                  <b-col>
                    <b-form-group
                      label="Location:"
                      :state="validation.location"
                      :invalid-feedback="invalidLocation()"
                      :valid-feedback="validFeedback()"
                    >
                      <b-form-input
                        v-model="form.location"
                        :state="validation.location"
                        trim
                        @focus="locationValidator()"
                        @keyup="locationValidator()"
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
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import H3header from "~/components/H3header";
export default {
  components: {
    NavbarHome,
    H3header
  },
  data() {
    return {
      form: {
        shorthand: "",
        title: "",
        location: ""
      },
      validation: {
        shorthand: null,
        title: null,
        location: null
      }
    };
  },
  methods: {
    shorthandValidator() {
      if (this.form.shorthand.length >= 2) {
        this.validation.shorthand = true;
      } else {
        this.validation.shorthand = false;
      }
    },
    titleValidator() {
      if (this.form.title.length >= 5) {
        this.validation.title = true;
      } else {
        this.validation.title = false;
      }
    },
    locationValidator() {
      if (this.form.location.length >= 3) {
        this.validation.location = true;
      } else {
        this.validation.location = false;
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
        const remainingChars = 5 - this.form.title.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    invalidLocation() {
      if (this.form.location.length > 0) {
        const remainingChars = 3 - this.form.location.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    validFeedback() {
      return "Great!";
    },
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
      this.form.shorthand = "";
      this.form.title = "";
      this.validation.shorthand = null;
      this.validation.title = null;
    }
  }
};
</script>
