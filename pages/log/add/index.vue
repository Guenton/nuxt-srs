<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Return to Log Page -->
      <H3withButton h3text="Add new Service Log" button-text="Return to Logs" link-to="/log" />
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
            <b-form-group label-cols-sm="3" label="Archtype:" label-align-sm="right" class="mb-2">
              <b-form-select
                v-model="form.archType"
                :options="archTypeOptions"
                :state="validation.archType"
                @change="serviceByArch"
              >
              </b-form-select>
            </b-form-group>
            <!-- Type Selector -->
            <b-form-group label-cols-sm="3" label="Type:" label-align-sm="right" class="mb-2">
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
            <b-form-group label-cols-sm="3" label="Origin:" label-align-sm="right" class="mb-2">
              <b-form-select
                v-model="form.depScope"
                :options="depScopeOptions"
                :state="validation.depScope"
                @change="depScopeValidator"
              >
              </b-form-select>
            </b-form-group>
            <!-- Location -->
            <b-form-group label-cols-sm="3" label="Location:" label-align-sm="right" class="mb-2">
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
            <b-form-group label-cols-sm="3" label="Footprint:" label-align-sm="right" class="mb-2">
              <b-form-input
                v-model="form.footprint"
                placeholder="Enter Footprint Number"
                :state="validation.footprint"
                :invalid-feedback="invalidFootprint"
                :valid-feedback="validFeedback"
                @keyup="footprintValidator"
              >
              </b-form-input>
            </b-form-group>
            <!-- Case Management # -->
            <b-form-group
              label-cols-sm="3"
              label="Case Management:"
              label-align-sm="right"
              class="mb-2"
            >
              <b-input-group>
                <template v-slot:prepend>
                  <b-form-select
                    v-model="form.cmYear"
                    class="mr-3 pr-5 pl-3"
                    :options="cmYearOptions"
                    :state="validation.cmYear"
                    @focus="cmValidator"
                    @change="cmValidator"
                  >
                  </b-form-select>
                </template>
                <b-form-input
                  v-model="form.cmSeq"
                  placeholder="Select Year and Enter Number"
                  :state="validation.cmSeq"
                  @focus="cmValidator"
                  @keyup="cmValidator"
                >
                </b-form-input>
              </b-input-group>
              <b-form-invalid-feedback :state="validation.footprint">
                {{ invalidFootprint() }}
              </b-form-invalid-feedback>
              <b-form-invalid-feedback :state="validation.cmSeq">
                {{ invalidCm() }}
              </b-form-invalid-feedback>
            </b-form-group>
          </b-form-group>
          <!-- Dynamic Search Result Box -->
          <b-alert :show="queryHasResult" variant="info">
            <p>
              Found the Following Footprint Numbers with similar starting values
            </p>
            <ul>
              <li v-for="footprint in queryResult" :key="footprint">
                Footprint #:
                <strong> {{ footprint.footprint }}</strong>
              </li>
            </ul>
          </b-alert>
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
              v-model="form.description"
              placeholder="Enter a short description for this service..."
              rows="3"
              max-rows="6"
              :state="validation.description"
              :invalid-feedback="invalidDescription"
              :valid-feedback="validFeedback"
              @focus="descriptionValidator"
              @keyup="descriptionValidator"
            ></b-form-textarea>
            <b-form-invalid-feedback :state="validation.description">
              {{ invalidDescription() }}
            </b-form-invalid-feedback>
          </b-form-group>
        </b-card>
        <!-- Submit & Reset Buttons -->
        <b-form-row class="mt-3">
          <b-col class="text-right">
            <b-button type="submit" variant="success" class="px-4" :disabled="!minimumValidation">
              Pre-Register
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
      <b-row>
        <AlertBox :show="hasSuc" variant="success" :text="response.success" />
        <AlertBox :show="hasErr" variant="danger" :text="response.error" />
      </b-row>
    </b-container>
    <b-modal id="submitModal" title="Service Pre-Registration">
      <p class="my-4 text-center">
        {{ response.success }}
      </p>
      <template v-slot:modal-footer>
        <b-container>
          <b-row align-h="between">
            <b-col cols="6">
              <b-button block variant="info" @click="onReset">
                Add another Service
              </b-button>
            </b-col>
            <b-col cols="6">
              <b-button block variant="success" @click="expandSID">
                Expand SID# {{ response.sid }}
              </b-button>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-modal>
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
        superScope: null,
        footprint: null,
        cmYear: null,
        cmSeq: null,
        description: ""
      },
      validation: {
        archType: null,
        serviceType: null,
        depScope: null,
        superScope: null,
        footprint: null,
        cmYear: null,
        cmSeq: null,
        description: null
      },
      response: {
        success: "",
        error: "",
        sid: null
      },
      queryResult: []
    };
  },
  computed: {
    archNotSelected() {
      return !this.validation.archType;
    },
    cmYearOptions() {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const options = [
        { value: null, text: "" },
        { value: currentYear, text: currentYear },
        { value: currentYear - 1, text: currentYear - 1 },
        { value: currentYear - 2, text: currentYear - 2 },
        { value: currentYear - 3, text: currentYear - 3 },
        { value: currentYear - 4, text: currentYear - 4 }
      ];
      return options;
    },
    validFeedback() {
      return "Great!";
    },
    minimumValidation() {
      if (
        this.validation.archType &&
        this.validation.serviceType &&
        this.validation.depScope &&
        this.validation.superScope &&
        this.validation.description
      ) {
        return true;
      } else {
        return false;
      }
    },
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
  mounted() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
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
        this.validation.serviceType = null;
        this.form.serviceType = null;
        this.serviceTypeOptions = [{ value: null, text: "Select Service Type" }];
        return false;
      } else {
        this.validation.serviceType = null;
        this.form.serviceType = null;
        this.serviceTypeOptions = [{ value: null, text: "Select Service Type" }];
        this.response.success = "";
        this.response.error = "";
        this.validation.archType = true;
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
    footprintValidator() {
      if (isNaN(this.form.footprint)) {
        this.validation.footprint = false;
      } else {
        this.validation.footprint = true;
        this.response.success = "";
        this.response.error = "";
        this.queryResult = [];
        this.searchFootprint();
      }
      if (!this.form.footprint) {
        this.validation.footprint = null;
      }
    },
    descriptionValidator() {
      if (this.form.description.length < 5) {
        this.validation.description = false;
      } else if (this.form.description.length > 200) {
        this.validation.description = false;
      } else {
        this.validation.description = true;
      }
    },
    cmValidator() {
      if (!this.form.cmYear) {
        this.validation.cmYear = false;
      } else {
        this.validation.cmYear = true;
      }
      if (isNaN(this.form.cmSeq) || !this.form.cmSeq) {
        this.validation.cmSeq = false;
      } else {
        this.validation.cmSeq = true;
      }
      if (!this.form.cmYear && !this.form.cmSeq) {
        this.validation.cmYear = null;
        this.validation.cmSeq = null;
      }
    },
    invalidFootprint() {
      return "Footprints can only be Numbers";
    },
    invalidDescription() {
      if (this.form.description.length >= 200) {
        const tooManyChars = this.form.description.length - 200;
        return `Please remove at least ${tooManyChars} more characters`;
      } else if (this.form.description.length > 0) {
        const remainingChars = 5 - this.form.description.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
      }
    },
    invalidCm() {
      if (!this.form.cmYear && !this.form.cmSeq) {
        return "Please select the Case-Year value and enter the Case-Sequence number";
      } else if (!this.form.cmYear) {
        return "Please select the Case-Year value";
      } else if (!this.form.cmSeq) {
        return "Please enter the Case-Sequence number";
      } else if (isNaN(this.form.cmSeq)) {
        return "Case-Sequence can only be a number";
      }
    },
    async searchFootprint() {
      const query = this.form.footprint;
      if (query.length < 4) {
        return;
      }
      const url = `${api}/search/footprint`;
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
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      const url = `${api}/service`;
      try {
        const response = await this.$axios.$post(url, this.form);
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.response.success = response.suc;
          this.response.sid = response.sid;
          this.$bvModal.show("submitModal");
        }
      } catch (error) {
        this.response.error = error;
      }
    },
    expandSID() {
      const url = `/log/add/${this.response.sid}`;
      this.$router.push(url);
    },
    onReset(event) {
      event.preventDefault();
      this.$bvModal.hide("submitModal");
      this.archTypeOptions = [{ value: null, text: "Select Service Archtype" }];
      this.serviceTypeOptions = [{ value: null, text: "Select Service Type" }];
      this.depScopeOptions = [{ value: null, text: "Select Request Origin" }];
      this.superScopeOptions = [{ value: null, text: "Select Origin Location" }];
      this.form.archType = null;
      this.form.serviceType = null;
      this.form.depScope = null;
      this.form.superScope = null;
      this.form.footprint = null;
      this.form.cmYear = null;
      this.form.cmSeq = null;
      this.form.description = "";
      this.validation.archType = null;
      this.validation.serviceType = null;
      this.validation.depScope = null;
      this.validation.superScope = null;
      this.validation.footprint = null;
      this.validation.cmYear = null;
      this.validation.cmSeq = null;
      this.validation.description = null;
      this.response.success = "";
      this.response.error = "";
      this.response.sid = null;
      this.queryResult = [];
      this.onLoad();
    }
  }
};
</script>
