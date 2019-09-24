<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3withButton
        h3text="Add new Service Log"
        button-text="Return to Logs"
        link-to="/log"
      />
      <!-- Add Log Form -->
      <b-form class="mt-3" novalidate @submit="onSubmit" @reset="onReset">
        <!-- Service Archtype Selector -->
        <b-row align-v="center" class="my-2">
          <b-col sm="3">
            <label for="Archtype">Service Archtype</label>
          </b-col>
          <b-col sm="9">
            <b-form-select
              id="Archtype"
              v-model="form.archType"
              :options="archTypeOptions"
              :state="validation.archType"
              @change="serviceByArch"
            >
            </b-form-select>
          </b-col>
        </b-row>
        <!-- Service Type Selector -->
        <b-row align-v="center" class="my-2">
          <b-col sm="3">
            <label for="ServiceType">Service Type</label>
          </b-col>
          <b-col sm="9">
            <b-form-select
              id="ServiceType"
              v-model="form.serviceType"
              :disabled="archNotSelected"
              :options="serviceTypeOptions"
              :state="validation.serviceType"
              @change="serviceValidator"
            >
            </b-form-select>
          </b-col>
        </b-row>
        <!-- Service Scope -->
        <b-row align-v="center" class="my-2">
          <b-col sm="3">
            <label for="ServiceType">Service Type</label>
          </b-col>
          <b-col sm="9">
            <b-form-select
              id="ServiceType"
              v-model="form.serviceType"
              :disabled="archNotSelected"
              :options="serviceTypeOptions"
              :state="validation.serviceType"
              @change="serviceValidator"
            >
            </b-form-select>
          </b-col>
        </b-row>
      </b-form>
      <!-- Success & Error Alert Containers -->
      <b-row>
        <AlertBox :show="hasSuc" variant="success" :text="response.success" />
        <AlertBox :show="hasErr" variant="danger" :text="response.error" />
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
      archTypeOptions: [
        { value: null, text: "Select Service Archtype" },
        { value: 1, text: "Security Leadership" },
        { value: 2, text: "Investigations" },
        { value: 3, text: "Security Equipment" },
        { value: 4, text: "Asset Protection" },
        { value: 5, text: "Excecutive Protection" }
      ],
      serviceTypeOptions: [{ value: null, text: "Select Service Type" }],
      form: {
        archType: null,
        serviceType: null
      },
      validation: {
        archType: null,
        serviceType: null
      },
      response: {
        success: "",
        error: ""
      }
    };
  },
  computed: {
    archNotSelected() {
      return !this.validation.archType;
    },
    hasSuc() {
      return this.response.success.length > 0;
    },
    hasErr() {
      return this.response.error.length > 0;
    }
  },
  async mounted() {
    const url = `${api}/service-scope`;
    try {
      const response = await this.$axios.$get(url);
      if (response.err) {
        this.response.error = response.err;
      } else {
        response.data.forEach(item => {
          this.serviceTypeOptions.push({
            value: item.type_id,
            text: item.title
          });
        });
        console.log(this.serviceTypeOptions);
      }
    } catch (error) {
      this.response.error = error;
    }
  },
  methods: {
    archValidator() {
      if (this.form.archType === null) {
        this.validation.archType = false;
        return false;
      } else {
        this.validation.archType = true;
        this.response.success = "";
        this.response.error = "";
        return true;
      }
    },
    serviceValidator() {
      if (this.form.serviceType === null) {
        this.validation.serviceType = false;
      } else {
        this.validation.serviceType = true;
        this.response.success = "";
        this.response.error = "";
      }
    },
    async serviceByArch() {
      if (!this.archValidator()) {
        return;
      }
      const arch = this.form.archType;
      const url = `${api}/service/${arch}`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.response.error = response.err;
        } else {
          response.data.forEach(item => {
            this.serviceTypeOptions.push({
              value: item.type_id,
              text: item.title
            });
          });
          console.log(this.serviceTypeOptions);
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    firstnameValidator() {
      if (this.form.firstname.length >= 2) {
        this.response.success = "";
        this.response.error = "";
        this.validation.firstname = true;
        this.queryResult = [];
        this.searchInput("firstname");
      } else {
        this.validation.firstname = false;
      }
    },
    lastnameValidator() {
      if (this.form.lastname.length >= 2) {
        this.response.success = "";
        this.response.error = "";
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
          `http://localhost:3000/api/search/emp`,
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
          this.form.firstname = "";
          this.form.lastname = "";
          this.validation.firstname = null;
          this.validation.lastname = null;
          this.response.success = response.suc;
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
      this.response.success = "";
      this.response.error = "";
      this.queryResult = [];
    }
  }
};
</script>
