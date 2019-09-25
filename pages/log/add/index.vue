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
        <!-- Specification Box -->
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Specification"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Archtype Selector -->
            <b-form-group
              label-cols-sm="3"
              label="Archtype:"
              label-align-sm="right"
            >
              <b-form-select
                v-model="form.archType"
                :options="archTypeOptions"
                :state="validation.archType"
                @change="serviceByArch"
              >
              </b-form-select>
            </b-form-group>
            <!-- Type Selector -->
            <b-form-group
              label-cols-sm="3"
              label="Type:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-form-select
                v-model="form.serviceType"
                :disabled="archNotSelected"
                :options="serviceTypeOptions"
                :state="validation.serviceType"
                @change="serviceTypeValidator"
              >
              </b-form-select>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Scope Box -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Scope"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Origin -->
            <b-form-group
              label-cols-sm="3"
              label="Origin:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-form-select
                v-model="form.depScope"
                :options="depScopeOptions"
                :state="validation.depScope"
                @change="depScopeValidator"
              >
              </b-form-select>
            </b-form-group>
            <!-- Location -->
            <b-form-group
              label-cols-sm="3"
              label="Location:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-form-select
                v-model="form.superScope"
                :options="superScopeOptions"
                :state="validation.superScope"
                @change="superScopeValidator"
              >
              </b-form-select>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Registry Box -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Registry"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Footprint # -->
            <b-form-group
              label-cols-sm="3"
              label="Footprint:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <!-- Case Management # -->
            <b-form-group
              label-cols-sm="3"
              label="Case Management:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-form-input></b-form-input>
            </b-form-group>
            <!-- Case Management # -->
            <b-form-group
              label-cols-sm="3"
              label="Other:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-form-input></b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Description Box -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Service Description"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-textarea
              placeholder="Enter a short description for this service..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-card>
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
      archTypeOptions: [{ value: null, text: "Select Service Archtype" }],
      serviceTypeOptions: [{ value: null, text: "Select Service Type" }],
      depScopeOptions: [{ value: null, text: "Select Request Origin" }],
      superScopeOptions: [{ value: null, text: "Select Origin Location" }],
      form: {
        archType: null,
        serviceType: null,
        depScope: null,
        superScope: null
      },
      validation: {
        archType: null,
        serviceType: null,
        depScope: null,
        superScope: null
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
    const archtypeUrl = `${api}/service-archtype`;
    const archtypes = await this.dropdownRequest(archtypeUrl);
    archtypes.forEach(element => {
      this.archTypeOptions.push({
        value: element.arch_id,
        text: element.archtype
      });
    });
    const depScopeUrl = `${api}/service-depscope`;
    const depScopes = await this.dropdownRequest(depScopeUrl);
    depScopes.forEach(element => {
      this.depScopeOptions.push({
        value: element.depscope_id,
        text: element.depscope
      });
    });
    const superScopeUrl = `${api}/service-superscope`;
    const superScopes = await this.dropdownRequest(superScopeUrl);
    superScopes.forEach(element => {
      this.superScopeOptions.push({
        value: element.superscope_id,
        text: element.superscope
      });
    });
  },
  methods: {
    async dropdownRequest(url) {
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.response.error = response.err;
          return [];
        } else {
          return response.data;
        }
      } catch (error) {
        this.response.error = error;
        return [];
      }
    },
    archTypeValidator() {
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
    serviceTypeValidator() {
      if (this.form.serviceType === null) {
        this.validation.serviceType = false;
      } else {
        this.validation.serviceType = true;
        this.response.success = "";
        this.response.error = "";
      }
    },
    depScopeValidator() {
      if (this.form.depScope === null) {
        this.validation.depScope = false;
      } else {
        this.validation.depScope = true;
        this.response.success = "";
        this.response.error = "";
      }
    },
    superScopeValidator() {
      if (this.form.superScope === null) {
        this.validation.superScope = false;
      } else {
        this.validation.superScope = true;
        this.response.success = "";
        this.response.error = "";
      }
    },
    async serviceByArch() {
      if (!this.archTypeValidator()) {
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
