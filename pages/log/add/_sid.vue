<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Return to Log Page -->
      <H3withButton h3text="Expand SID" button-text="Return to Logs" link-to="/log" class="mb-2" />
      <!-- Pre Registration Details with Button -->
      <b-row align-h="between" align-v="center">
        <b-col>
          <b-collapse v-show="regTableHasData" id="preRegInfo" v-model="show.preReg">
            <b-alert show class="p-2">
              <!-- General SID Info -->
              <b-card>
                <b-table
                  :items="preRegTable.serv"
                  :fields="preRegTableFields.serv"
                  small
                  hover
                ></b-table>
              </b-card>
              <!-- Type & Scope Info -->
              <b-card class="mt-1">
                <b-table
                  :items="preRegTable.typeScope"
                  :fields="preRegTableFields.typeScope"
                  small
                  hover
                ></b-table>
              </b-card>
              <!-- Registry Info -->
              <b-card v-if="displayReg" class="mt-1">
                <b-table
                  :items="preRegTable.reg"
                  :fields="preRegTableFields.reg"
                  small
                  hover
                ></b-table>
              </b-card>
            </b-alert>
          </b-collapse>
        </b-col>
      </b-row>
      <!-- SID Expansion Form -->
      <b-form novalidate @submit="onSubmit" @reset="onReset">
        <!-- Row of Form Buttons -->
        <b-row>
          <!-- Toggle SID Pre-Reg Information -->
          <b-col cols="3">
            <b-button block variant="info" size="sm" @click="preRegToggle">
              {{ togglePreRegBtn }} SID Details
            </b-button>
          </b-col>
          <!-- Show Assignees Button -->
          <b-col cols="3">
            <b-button :pressed="show.assignees" block size="sm" variant="info" @click="empToggle">
              {{ toggleAssigneesBtn }} Assignees
            </b-button>
          </b-col>
          <!-- Show Timeline Button -->
          <b-col cols="3">
            <b-button :variant="btnVariant.timeline" block size="sm" @click="tlToggle">
              {{ toggleTlBtn }}
            </b-button>
          </b-col>
          <!-- Show Expenses Button -->
          <b-col cols="3">
            <b-button :variant="btnVariant.expenses" block size="sm" @click="finToggle">
              {{ toggleFinBtn }}
            </b-button>
          </b-col>
        </b-row>
        <!-- Assignees with Dynamic Employee Input -->
        <b-collapse id="assigneesMenu" v-model="show.assignees">
          <b-card bg-variant="light" class="mt-3" @mouseleave="empValidator">
            <b-form-group
              label-cols-lg="3"
              label="Assignees"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <!-- Dynamic Employee Adds -->
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
              <hr />
            </b-form-group>
            <!-- Invalid Feedback Messages -->
            <b-form-invalid-feedback :state="empSelectOne" class="mb-2">
              Please select at least one Employee
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="empSelectAll" class="mb-2">
              Please select an Employee or remove obsolete Boxes
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="empHasDuplicates" class="mb-2">
              You have entered the same Employee twice
            </b-form-invalid-feedback>
            <!-- Employee Box Expansion & Reduction Buttons -->
            <b-row align-h="start">
              <b-col cols="2">
                <b-button block size="sm" variant="info" @click="addEmployeeDropdown">Add</b-button>
              </b-col>
              <b-col cols="2">
                <b-button block size="sm" variant="secondary" @click="remEmployeeDropdown">
                  Remove
                </b-button>
              </b-col>
              <b-col cols="2" offset-md="6">
                <b-button block size="sm" variant="secondary" @click="show.assignees = false">
                  Hide Assignees
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>
        <!-- Timeline Input -->
        <b-collapse id="timelineMenu" v-model="show.timeline">
          <b-card bg-variant="light" class="mt-3">
            <b-form-group
              label-cols-lg="3"
              label="Timeline"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <!-- Request Date/Time Selectors -->
              <b-form-group
                label-cols-sm="3"
                label="Requested:"
                label-align-sm="right"
                class="mb-2"
              >
                <b-form-input
                  v-model="dateTime.requestDate"
                  :state="validation.request"
                  type="date"
                  @change="tlRequest"
                />
                <b-form-input
                  v-model="dateTime.requestTime"
                  :state="validation.request"
                  type="time"
                  @change="tlRequest"
                />
              </b-form-group>
              <!-- Start Date/Time Selectors -->
              <b-form-group label-cols-sm="3" label="Started:" label-align-sm="right" class="mb-2">
                <b-form-input
                  v-model="dateTime.startDate"
                  :state="validation.start"
                  type="date"
                  @change="tlStart"
                />
                <b-form-input
                  v-model="dateTime.startTime"
                  :state="validation.start"
                  type="time"
                  @change="tlStart"
                />
              </b-form-group>
              <!-- Finish Date/Time Selectors -->
              <b-form-group label-cols-sm="3" label="Finished:" label-align-sm="right" class="mb-2">
                <b-form-input
                  v-model="dateTime.finishDate"
                  :state="validation.finish"
                  type="date"
                  @change="tlFinish"
                />
                <b-form-input
                  v-model="dateTime.finishTime"
                  :state="validation.finish"
                  type="time"
                  @change="tlFinish"
                />
              </b-form-group>
              <hr />
            </b-form-group>
            <b-form-invalid-feedback :state="tlValidationMsgShow">
              Please input both Date and Time
            </b-form-invalid-feedback>
            <b-row align-h="end">
              <b-col cols="2" offset-md="6">
                <b-button block size="sm" variant="danger" @click="closeTimeline">
                  Discard
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>
        <!-- Expenses with Dynamic Financial Input -->
        <b-collapse id="expensesMenu" v-model="show.expenses">
          <b-card bg-variant="light" class="mt-3" @mouseleave="finValidator">
            <b-form-group
              label-cols-lg="3"
              label="Expenses"
              label-size="lg"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <!-- Dynamic Employee Adds -->
              <template v-for="(fin, i) in form.fin">
                <!-- Cost Type Selector -->
                <b-form-group
                  :key="'costType' + i"
                  label-cols-sm="3"
                  label="Cost Type:"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-select
                    v-model="form.fin[i].costType"
                    :options="dropdown.costType"
                    :state="!(form.fin[i].costType === null)"
                  >
                  </b-form-select>
                </b-form-group>
                <!-- Description Input -->
                <b-form-group
                  :key="'description' + i"
                  label-cols-sm="3"
                  label="Description:"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-input
                    v-model="form.fin[i].description"
                    :state="!(form.fin[i].description === '')"
                  >
                  </b-form-input>
                </b-form-group>
                <!-- Amount & Curency Input -->
                <b-form-group
                  :key="'amount' + i"
                  label-cols-sm="3"
                  label="Amount:"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-row>
                    <!-- Amount Input -->
                    <b-col cols="7">
                      <b-form-input
                        v-model="form.fin[i].amount"
                        :state="!(form.fin[i].amount === null)"
                        type="number"
                        step="0.01"
                      >
                      </b-form-input>
                    </b-col>
                    <!-- Currency Selector -->
                    <b-col cols="5">
                      <b-form-select
                        v-model="form.fin[i].currency"
                        :options="dropdown.currency"
                        :state="!(form.fin[i].currency === null)"
                        class="mr-3 pr-5 pl-3"
                      >
                      </b-form-select>
                    </b-col>
                  </b-form-row>
                </b-form-group>
                <!-- Cost Bearer Selector -->
                <b-form-group
                  :key="'bearer' + i"
                  label-cols-sm="3"
                  label="S&I Budget:"
                  label-align-sm="right"
                  class="mb-2 mt-4"
                >
                  <b-form-select
                    v-model="form.fin[i].bearer"
                    :options="dropdown.bearer"
                    :state="!(form.fin[i].bearer === null)"
                  >
                  </b-form-select>
                </b-form-group>
                <!-- Signature Selector -->
                <b-form-group
                  :key="'signature' + i"
                  label-cols-sm="3"
                  label="Signed by:"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-select
                    v-model="form.fin[i].signature"
                    :options="dropdown.signature"
                    :state="!(form.fin[i].signature === null)"
                  >
                  </b-form-select>
                </b-form-group>
                <hr :key="'horizontal-line' + i" />
              </template>
            </b-form-group>
            <!-- Invalid Feedback Messages -->
            <b-form-invalid-feedback :state="validation.fin" class="mb-2">
              Please Complete the Expense report or discard all expenses
            </b-form-invalid-feedback>
            <b-form-invalid-feedback :state="validation.fin" class="mb-2">
              Please make {{ finValidationCount }} more boxes green
            </b-form-invalid-feedback>
            <!-- Expence Box Expansion, Reduction and Discard Buttons -->
            <b-row align-h="start">
              <b-col cols="2">
                <b-button block size="sm" variant="info" @click="addExpense">Add</b-button>
              </b-col>
              <b-col cols="2">
                <b-button block size="sm" variant="secondary" @click="remExpense">Remove</b-button>
              </b-col>
              <b-col cols="2" offset-md="6">
                <b-button block size="sm" variant="danger" @click="closeFin">
                  Discard
                </b-button>
              </b-col>
            </b-row>
          </b-card>
        </b-collapse>
        <!-- Submit & Reset Buttons -->
        <b-collapse id="FormButtons" v-model="validation.emp">
          <b-row class="my-3">
            <b-col class="text-right">
              <b-button :disabled="incompleteValidation" block type="submit" variant="success"
                >Submit</b-button
              >
            </b-col>
            <b-col class="text-left">
              <b-button block type="reset" variant="secondary">Reset</b-button>
            </b-col>
          </b-row>
        </b-collapse>
      </b-form>
    </b-container>
  </div>
</template>

<script>
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
          { key: "superscope", label: "Location" }
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
        startDate: null,
        startTime: null,
        finishDate: null,
        finishTime: null
      },
      form: {
        emp: [null],
        request: null,
        start: null,
        finish: null,
        fin: []
      },
      validation: {
        emp: null,
        request: null,
        start: null,
        finish: null,
        fin: null
      },
      finValidationCount: null,
      dropdown: {
        emp: [{ value: null, text: "Please select an employee" }],
        costType: [{ value: null, text: "Please select a cost type" }],
        currency: [{ value: null, text: "Currency" }],
        bearer: [{ value: null, text: "Please select S&I Budget" }],
        signature: [{ value: null, text: "Please select signature" }]
      },
      show: {
        preReg: true,
        assignees: true,
        timeline: false,
        expenses: false
      },
      btnVariant: {
        timeline: "info",
        expenses: "info"
      },
      res: {
        err: ""
      }
    };
  },
  computed: {
    togglePreRegBtn() {
      return this.show.preReg ? "Hide" : "Show";
    },
    toggleAssigneesBtn() {
      return this.show.assignees ? "Hide" : "Show";
    },
    toggleTlBtn() {
      return this.show.timeline ? "Discard Timeline" : "Show Timeline";
    },
    toggleFinBtn() {
      return this.show.expenses ? "Discard Expenses" : "Show Expenses";
    },
    displayReg() {
      return this.preRegTable.reg.footprint || this.preRegTable.reg.cm_seq;
    },
    regTableHasData() {
      return this.preRegTable.serv.length > 0;
    },
    empSelectOne() {
      if (this.form.emp.length === 1 && this.form.emp[0] === null) {
        return false;
      } else {
        return true;
      }
    },
    empSelectAll() {
      if (this.form.emp.length > 1 && this.validation.emp === false) {
        return false;
      } else {
        return true;
      }
    },
    empHasDuplicates() {
      if (this.empArrayHasDuplicates() && this.validation.emp === false) {
        return false;
      } else {
        return true;
      }
    },
    tlValidationMsgShow() {
      if (
        this.validation.request === false ||
        this.validation.start === false ||
        this.validation.finish === false
      ) {
        return false;
      } else {
        return true;
      }
    },
    incompleteValidation() {
      if (
        this.validation.emp === false ||
        this.validation.request === false ||
        this.validation.start === false ||
        this.validation.finish === false ||
        this.validation.fin === false
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      // Get Pre-Reg Stuff
      this.getPreRegData();
      // Get Dropdowns
      this.getEmpDropown();
      this.getCostTypeDropdown();
      this.getCurrencyDropdown();
      this.getCostBearerDropdown();
      this.getSignatureDropdown();
    },
    async getPreRegData() {
      const preRegUrl = `${api}/serv/pre?id=${this.sid}`;
      try {
        const res = await this.$axios.$get(preRegUrl);
        if (res.err) {
          this.res.err = res.err;
        } else {
          this.preRegTable = res;
        }
      } catch (err) {
        this.res.err = err;
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
    async getEmpDropown() {
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
    async getCostTypeDropdown() {
      const costTypeUrl = `${api}/cost-type`;
      const costTypes = await this.dropdownRequest(costTypeUrl);
      costTypes.forEach(itm => {
        this.dropdown.costType.push({
          value: itm.costtype_id,
          text: itm.title
        });
      });
    },
    async getCurrencyDropdown() {
      const currencyUrl = `${api}/cost-currency`;
      const currencies = await this.dropdownRequest(currencyUrl);
      currencies.forEach(itm => {
        this.dropdown.currency.push({
          value: itm.currency_id,
          text: itm.iso
        });
      });
    },
    async getCostBearerDropdown() {
      const bearerUrl = `${api}/sub`;
      const bearers = await this.dropdownRequest(bearerUrl);
      bearers.forEach(itm => {
        this.dropdown.bearer.push({
          value: itm.sub_id,
          text: itm.shorthand
        });
      });
    },
    async getSignatureDropdown() {
      const sigUrl = `${api}/cost-signature`;
      const signatures = await this.dropdownRequest(sigUrl);
      signatures.forEach(itm => {
        this.dropdown.signature.push({
          value: itm.costsig_id,
          text: itm.title
        });
      });
    },
    preRegToggle() {
      this.show.preReg = !this.show.preReg;
    },
    empToggle() {
      this.show.assignees = !this.show.assignees;
    },
    tlToggle() {
      if (this.show.timeline) {
        this.closeTimeline();
        this.btnVariant.timeline = "info";
      } else {
        this.show.timeline = true;
        this.btnVariant.timeline = "danger";
      }
    },
    finToggle() {
      if (this.show.expenses) {
        this.closeFin();
        this.btnVariant.expenses = "info";
      } else {
        this.openFin();
        this.btnVariant.expenses = "danger";
      }
    },
    closeTimeline() {
      this.show.timeline = false;
      this.dateTime = {
        requestDate: null,
        requestTime: null,
        startDate: null,
        startTime: null,
        finishDate: null,
        finishTime: null
      };
      this.form.request = null;
      this.form.start = null;
      this.form.finish = null;
      this.validation.request = null;
      this.validation.start = null;
      this.validation.finish = null;
    },
    openFin() {
      this.form.fin = [
        {
          costType: null,
          amount: null,
          currency: null,
          description: "",
          bearer: null,
          signature: null
        }
      ];
      this.validation.fin = false;
      this.finValidationCount = 6;
      this.show.expenses = true;
    },
    closeFin() {
      this.show.expenses = false;
      this.form.fin = [];
      this.validation.fin = null;
    },
    empValidator() {
      if (this.form.emp.includes(null)) {
        this.validation.emp = false;
      } else if (this.empArrayHasDuplicates()) {
        this.validation.emp = false;
      } else {
        this.validation.emp = true;
      }
    },
    finValidator() {
      let count = 0;
      this.form.fin.forEach(fin => {
        if (!fin.costType) count++;
        if (!fin.amount) count++;
        if (!fin.currency) count++;
        if (!fin.description) count++;
        if (!fin.bearer) count++;
        if (!fin.signature) count++;
      });
      this.finValidationCount = count;
      if (count > 0) {
        this.validation.fin = false;
      } else {
        this.validation.fin = true;
      }
    },
    empArrayHasDuplicates() {
      if (this.form.emp.length === new Set(this.form.emp).size) {
        return false;
      } else {
        return true;
      }
    },
    addEmployeeDropdown() {
      this.form.emp.push(null);
    },
    addExpense() {
      this.form.fin.push({
        costType: null,
        amount: null,
        currency: null,
        description: "",
        bearer: null,
        signature: null
      });
    },
    remEmployeeDropdown() {
      if (this.form.emp.length > 1) {
        this.form.emp.pop();
      }
    },
    remExpense() {
      if (this.form.fin.length > 1) {
        this.form.fin.pop();
      }
    },
    tlRequest() {
      if (!this.dateTime.requestDate && !this.dateTime.requestTime) {
        this.validation.request = null;
        this.form.request = null;
      } else if (!this.dateTime.requestDate || !this.dateTime.requestTime) {
        this.validation.request = false;
        this.form.request = null;
      } else {
        this.validation.request = true;
        this.form.request = new Date(this.dateTime.requestDate + " " + this.dateTime.requestTime);
      }
    },
    tlStart() {
      if (!this.dateTime.startDate && !this.dateTime.startTime) {
        this.validation.start = null;
        this.form.start = null;
      } else if (!this.dateTime.startDate || !this.dateTime.startTime) {
        this.validation.start = false;
        this.form.start = null;
      } else {
        this.validation.start = true;
        this.form.start = new Date(this.dateTime.startDate + " " + this.dateTime.startTime);
      }
    },
    tlFinish() {
      if (!this.dateTime.finishDate && !this.dateTime.finishTime) {
        this.validation.finish = null;
        this.form.finish = null;
      } else if (!this.dateTime.finishDate || !this.dateTime.finishTime) {
        this.validation.finish = false;
        this.form.finish = null;
      } else {
        this.validation.finish = true;
        this.form.finish = new Date(this.dateTime.finishDate + " " + this.dateTime.finishTime);
      }
    },
    onSubmit() {
      event.preventDefault();
      console.log(this.form);
    },
    onReset() {
      if (event) {
        event.preventDefault();
      }
      this.dateTime = {
        requestDate: null,
        requestTime: null,
        startDate: null,
        startTime: null,
        finishDate: null,
        finishTime: null
      };
      this.form = {
        emp: [null],
        request: null,
        start: null,
        finish: null,
        fin: [
          {
            costType: null,
            amount: null,
            currency: null,
            description: "",
            bearer: null,
            signature: null
          }
        ]
      };
      this.validation = {
        emp: null,
        request: null,
        start: null,
        finish: null,
        fin: false
      };
      this.show = {
        preReg: true,
        assignees: true,
        timeline: true,
        expenses: true
      };
      this.finValidationCount = 6;
    }
  }
};
</script>
