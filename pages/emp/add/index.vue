<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Return to Employee Page -->
      <H3withButton h3text="Add new Employee" button-text="Return to Employees" link-to="/emp" />
      <!-- Add Employee Form -->
      <b-form novalidate @submit="onSubmit" @reset="onReset">
        <!-- Name Box -->
        <b-card bg-variant="light">
          <b-form-group
            label-cols-lg="3"
            label="Name"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- First Name Input - Validates with 2 characters -->
            <b-form-group
              label="First Name:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-2"
              :state="validation.firstname"
              :invalid-feedback="invalidFirstname()"
            >
              <b-form-input
                v-model="form.firstname"
                :state="validation.firstname"
                @focus="size2Validator('firstname')"
                @keydown="size2Validator('firstname')"
              >
              </b-form-input>
            </b-form-group>
            <!-- Middle Name Input - Not Required -->
            <b-form-group label="Middle Name:" label-cols-sm="3" label-align-sm="right" class="mb-2"
              ><b-form-input v-model="form.middlename"> </b-form-input>
            </b-form-group>
            <!-- Last Name Input - Validates with 2 characters -->
            <b-form-group
              label="Last Name:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-2"
              :state="validation.lastname"
              :invalid-feedback="invalidLastname()"
            >
              <b-form-input
                v-model="form.lastname"
                :state="validation.lastname"
                @focus="size2Validator('lastname')"
                @keydown="size2Validator('lastname')"
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Dynamic Search Result Container -->
        <b-collapse id="nameSearchResult" :visible="searchNameHasResult">
          <b-alert show variant="info" class="mt-1">
            <p>Found the Following Employees with similar names</p>
            <ul>
              <li v-for="emp in search.name" :key="emp.empmain_id">
                <strong>Employee #{{ emp.empmain_id }}:</strong>
                {{ emp.firstname }} {{ emp.lastname }}
                <em> - {{ emp.position }} at {{ emp.subsidiary }}</em>
              </li>
            </ul>
          </b-alert>
        </b-collapse>
        <!-- Address info -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Address"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Address Input - Validates with 2 characters -->
            <b-form-group label="Address:" label-cols-sm="3" label-align-sm="right" class="mb-2">
              <b-form-input v-model="form.address"> </b-form-input>
            </b-form-group>
            <!-- Neigborhood Name Input - Not Required -->
            <b-form-group
              label="Neighborhood:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-2"
              ><b-form-input v-model="form.hood"> </b-form-input>
            </b-form-group>
            <!-- Email Name Input - Validates with Regex -->
            <b-form-group
              label="Email:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-2"
              :state="validation.email"
              invalid-feedback="Please enter a valid Email Address"
            >
              <b-form-input
                v-model="form.email"
                :state="validation.email"
                @focus="emailValidator"
                @keydown="emailValidator"
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Identification info -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Identification"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Date of Birth Input - Validates with not required -->
            <b-form-group
              label="Date of Birth:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-2"
              :state="validation.dob"
            >
              <b-form-input
                v-model="preFormatDate"
                type="date"
                :state="validation.dob"
                @change="dateValidator"
              ></b-form-input>
            </b-form-group>
            <!-- Passport Input - Validates with 2 characters -->
            <b-form-group
              label="Passport:"
              label-cols-sm="3"
              label-align-sm="right"
              class="mb-2"
              :state="validation.passport"
              invalid-feedback="System only accepts 9-character passports"
            >
              <b-form-input
                v-model="form.passport"
                :state="validation.passport"
                @change="passportValidator"
                @focus="passportValidator"
              ></b-form-input>
            </b-form-group>
            <!-- ID Input - Validates with 2 characters -->
            <b-form-group label="ID:" label-cols-sm="3" label-align-sm="right" class="mb-2">
              <b-form-input v-model="form.identification"> </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Work info -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Work"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <!-- Position Selector -->
            <b-form-group label-cols-sm="3" label="Position:" label-align-sm="right" class="mb-2">
              <b-form-select
                v-model="form.pos"
                :options="dropdown.pos"
                :state="validation.pos"
                @change="workValidator"
              >
              </b-form-select>
            </b-form-group>
            <!-- Subsidiary Selector -->
            <b-form-group label-cols-sm="3" label="Subsidiary:" label-align-sm="right" class="mb-2">
              <b-form-select
                v-model="form.sub"
                :options="dropdown.sub"
                :state="validation.sub"
                @change="workValidator"
              >
              </b-form-select>
            </b-form-group>
          </b-form-group>
        </b-card>
        <!-- Submit & Reset Buttons -->
        <b-form-row class="mt-3">
          <b-col class="text-right">
            <b-button type="submit" variant="success" class="px-4" :disabled="incompleteValidation">
              Submit Employee
            </b-button>
          </b-col>
          <b-col class="text-left">
            <b-button type="reset" variant="secondary" class="px-4">
              Reset Form
            </b-button>
          </b-col>
        </b-form-row>
      </b-form>
      <!-- Success & Error Alert Containers -->
      <AlertBox :show="hasSuc" variant="success" :text="response.success" />
      <AlertBox :show="hasErr" variant="danger" :text="response.error" />
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
      preFormatDate: null,
      form: {
        firstname: "",
        middlename: "",
        lastname: "",
        address: "",
        hood: "",
        email: "",
        dob: null,
        passport: "",
        identification: "",
        pos: null,
        sub: null
      },
      validation: {
        firstname: null,
        lastname: null,
        email: null,
        dob: null,
        passport: null,
        pos: null,
        sub: null
      },
      response: {
        success: "",
        error: ""
      },
      search: {
        name: []
      },
      dropdown: {
        pos: [{ value: null, text: "Please select Position" }],
        sub: [{ value: null, text: "Please select Subsidiary" }]
      }
    };
  },
  computed: {
    hasSuc() {
      return this.response.success.length > 0;
    },
    hasErr() {
      return this.response.error.length > 0;
    },
    searchNameHasResult() {
      return this.search.name.length > 0;
    },
    incompleteValidation() {
      if (
        this.validation.firstname === null ||
        this.validation.lastname === null ||
        this.validation.pos === null ||
        this.validation.sub === null ||
        this.validation.firstname === false ||
        this.validation.lastname === false ||
        this.validation.email === false ||
        this.validation.dob === false ||
        this.validation.passport === false ||
        this.validation.pos === false ||
        this.validation.sub === false
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.getPosDropdown();
    this.getSubDropdown();
  },
  methods: {
    size2Validator(box) {
      this.response.success = "";
      this.response.error = "";
      this.search.name = [];
      if (box === "firstname") {
        if (this.form.firstname.length >= 2) {
          this.validation.firstname = true;
          this.searchName("firstname");
        } else this.validation.firstname = false;
      }
      if (box === "lastname") {
        if (this.form.lastname.length >= 2) {
          this.validation.lastname = true;
          this.searchName("lastname");
        } else this.validation.lastname = false;
      }
    },
    emailValidator() {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(String(this.form.email).toLowerCase())) {
        this.validation.email = true;
      } else if (!this.form.email) {
        this.validation.email = null;
      } else this.validation.email = false;
    },
    passportValidator() {
      if (!this.form.passport) {
        this.validation.passport = null;
      } else if (this.form.passport.length === 9) {
        this.validation.passport = true;
      } else this.validation.passport = false;
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
    invalidAddress() {
      if (this.form.address.length > 0) {
        const remainingChars = 2 - this.form.address.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    dateValidator() {
      if (!this.preFormatDate) {
        this.validation.dob = null;
        this.form.dob = null;
      } else {
        this.validation.dob = true;
        this.form.dob = new Date(this.preFormatDate);
      }
    },
    workValidator() {
      if (!this.form.pos && this.form.sub) {
        this.validation.pos = false;
        this.validation.sub = true;
      } else if (this.form.pos && !this.form.sub) {
        this.validation.pos = true;
        this.validation.sub = false;
      } else if (!this.form.pos && !this.form.sub) {
        this.validation.pos = false;
        this.validation.sub = false;
      } else {
        this.validation.pos = true;
        this.validation.sub = true;
      }
    },
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
    async getPosDropdown() {
      const posUrl = `${api}/pos/md`;
      const positions = await this.dropdownRequest(posUrl);
      positions.forEach(itm => {
        this.dropdown.pos.push({
          value: itm.posmain_id,
          text: itm.title
        });
      });
    },
    async getSubDropdown() {
      const subUrl = `${api}/scope-sub/sm`;
      const subs = await this.dropdownRequest(subUrl);
      subs.forEach(itm => {
        this.dropdown.sub.push({
          value: itm.scopesub_id,
          text: itm.shorthand
        });
      });
    },
    async searchName(fieldString) {
      const query = fieldString === "firstname" ? this.form.firstname : this.form.lastname;
      const url = `${api}/search/emp`;
      try {
        const response = await this.$axios.$get(url, { params: { query } });
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.search.name = response.data;
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      const url = `${api}/emp`;
      try {
        const response = await this.$axios.$post(url, this.form);
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.onReset();
          this.response.success = response.suc;
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    onReset(event) {
      if (event) event.preventDefault();
      this.preFormatDate = null;
      this.form = {
        firstname: "",
        middlename: "",
        lastname: "",
        address: "",
        hood: "",
        email: "",
        dob: null,
        passport: "",
        identification: "",
        pos: null,
        sub: null
      };
      this.validation = {
        firstname: null,
        lastname: null,
        email: null,
        dob: null,
        passport: null,
        pos: null,
        sub: null
      };
      this.response = {
        success: "",
        error: ""
      };
      this.search.name = [];
    }
  }
};
</script>
