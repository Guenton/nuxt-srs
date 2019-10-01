<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Return to Log Page -->
      <H3withButton h3text="Expand SID" button-text="Return to Logs" link-to="/log" />
      <!-- Pre Registration Details with Button -->
      <b-row align-h="between" align-v="center">
        <b-col cols="10">
          <b-collapse v-show="regTableHasData" id="preRegInfo" v-model="preRegDisplay">
            <b-alert show class="p-2">
              <b-card>
                <b-table
                  small
                  hover
                  :items="preRegTable.serv"
                  :fields="preRegTableFields.serv"
                ></b-table>
              </b-card>
              <b-card class="mt-1">
                <b-table
                  small
                  hover
                  :items="preRegTable.typeScope"
                  :fields="preRegTableFields.typeScope"
                ></b-table>
              </b-card>
              <b-card v-if="displayReg" class="mt-1">
                <b-table
                  small
                  hover
                  :items="preRegTable.reg"
                  :fields="preRegTableFields.reg"
                ></b-table>
              </b-card>
            </b-alert>
          </b-collapse>
        </b-col>
        <b-col class="text-right" cols="2">
          <b-button variant="info" size="sm" @click="preRegToggle">
            {{ toggleBtn }} SID Details
          </b-button>
        </b-col>
      </b-row>
      <!-- SID Expansion Form -->
      <b-form>
        <!-- Assignations with Dynamic Employee Adds -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Assignations"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <template v-for="(emp, i) in form.emp">
              <b-form-group
                :key="emp"
                label-cols-sm="3"
                label="Employee:"
                label-align-sm="right"
                class="mb-2"
              >
                <b-form-select
                  v-model="form.emp[i]"
                  :options="dropdown.emp"
                  :state="!(form.emp[i] === null)"
                >
                </b-form-select>
              </b-form-group>
            </template>
          </b-form-group>
          <b-row align-h="start">
            <b-col cols="2">
              <b-button
                block
                size="sm"
                variant="info"
                class="float-right"
                @click="addEmployeeDropdown"
                >Add
              </b-button>
            </b-col>
            <b-col cols="2">
              <b-button
                block
                size="sm"
                variant="secondary"
                class="float-right"
                @click="remEmployeeDropdown"
                >Remove
              </b-button>
            </b-col>
          </b-row>
        </b-card>
        <!-- Timeline Input -->
        <b-card bg-variant="light" class="mt-4">
          <b-form-group
            label-cols-lg="3"
            label="Timeline"
            label-size="lg"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-group label-cols-sm="3" label="Requested:" label-align-sm="right" class="mb-2">
              <b-form-input v-model="dateTime.requestDate" type="date" @change="tlRequested" />
              <b-form-input v-model="dateTime.requestTime" type="time" @change="tlRequested" />
            </b-form-group>
            <b-form-group label-cols-sm="3" label="Started:" label-align-sm="right" class="mb-2">
              <b-form-input v-model="dateTime.startedDate" type="date" @change="tlStarted" />
              <b-form-input v-model="dateTime.startedTime" type="time" @change="tlStarted" />
            </b-form-group>
            <b-form-group label-cols-sm="3" label="Finished:" label-align-sm="right" class="mb-2">
              <b-form-input v-model="dateTime.finishedDate" type="date" @change="tlFinished" />
              <b-form-input v-model="dateTime.finishedTime" type="time" @change="tlFinished" />
            </b-form-group>
          </b-form-group>
        </b-card>
      </b-form>
      <b-button class="mt-3" variant="success" @click="visualize">Visualize</b-button>
    </b-container>
  </div>
</template>

<script>
// import api from "~/assets/apiMap";
import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3withButton from "~/components/H3withButton";

export default {
  components: {
    NavbarHome,
    H3withButton
  },
  data() {
    return {
      sid: this.$route.params.sid,
      preRegDisplay: true,
      preRegTableFields: {
        serv: [
          { key: "serv_id", label: "SID#" },
          { key: "date_in", label: "Log Date" },
          { key: "time_in", label: "Time" },
          { key: "described", label: "Description" }
        ],
        typeScope: [
          { key: "archtype", label: "Archtype" },
          { key: "typ", label: "Type" },
          { key: "depscope", label: "Scope" },
          { key: "superscope", label: "Global Scope" }
        ],
        reg: [
          { key: "footprint", label: "Footprint #" },
          { key: "cm_year", label: "CaseManagement #" },
          { key: "cm_seq", label: "" }
        ]
      },
      preRegTable: {
        serv: [],
        typeScope: [],
        reg: []
      },
      dateTime: {
        requestDate: null,
        requestTime: null,
        startedDate: null,
        startedTime: null,
        finishedDate: null,
        finishedTime: null
      },
      form: {
        emp: [null],
        requested: null,
        started: null,
        finished: null
      },
      validation: {
        emp: null
      },
      dropdown: {
        emp: [{ value: null, text: "Please select an option" }]
      },
      response: {
        error: ""
      }
    };
  },
  computed: {
    toggleBtn() {
      return this.preRegDisplay ? "Hide" : "Show";
    },
    displayReg() {
      return this.preRegTable.reg.footprint || this.preRegTable.reg.cm_seq;
    },
    regTableHasData() {
      return this.preRegTable.serv.length > 0;
    }
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      // Get Pre-Reg Stuff
      const preRegUrl = `${api}/serv/pre?sid=${this.sid}`;
      const response = await this.$axios.$get(preRegUrl);
      this.preRegTable = response;
      // Get Employee Dropdown
      const empUrl = `${api}/emp`;
      const employees = await this.dropdownRequest(empUrl);
      employees.forEach(itm => {
        const fullName = itm.firstname.concat(" ", itm.lastname);
        this.dropdown.emp.push({
          value: itm.emp_id,
          text: fullName
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
    preRegToggle() {
      this.preRegDisplay = !this.preRegDisplay;
    },
    empValidator() {
      if (this.form.emp.includes(null)) {
        this.validation.emp = false;
      } else {
        this.validation.emp = true;
      }
    },
    addEmployeeDropdown() {
      this.form.emp.push(null);
    },
    remEmployeeDropdown() {
      if (this.form.emp.length > 1) {
        this.form.emp.pop();
      }
    },
    tlRequested() {
      this.form.requested = new Date(this.dateTime.requestDate + " " + this.dateTime.requestTime);
    },
    tlStarted() {
      this.form.started = new Date(this.dateTime.startedDate + " " + this.dateTime.startedTime);
    },
    tlFinished() {
      this.form.finished = new Date(this.dateTime.finishedDate + " " + this.dateTime.finishedTime);
    },
    visualize() {
      console.log(this.form);
    }
  }
};
</script>
