<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- H3 with Link to pos/edit -->
      <H3withButton h3text="Add new Position" button-text="Cancel and Return" link-to="/pos" />
      <!-- Add new Position Form -->
      <b-row>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset" novalidate>
            <!-- Position Box -->
            <b-card bg-variant="light">
              <b-form-group
                label-cols-lg="3"
                label="Position"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <!-- Title Input - Validates with 2 characters -->
                <b-form-group
                  :state="validation.title"
                  :invalid-feedback="invalidTitle()"
                  :valid-feedback="validFeedback()"
                  label="Title:"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-input
                    v-model="form.title"
                    :state="validation.title"
                    @focus="titleValidator()"
                    @input="titleValidator()"
                  >
                  </b-form-input>
                </b-form-group>
                <!-- Shorthand Input - Not Required -->
                <b-form-group
                  :state="validation.shorthand"
                  :invalid-feedback="invalidShorthand()"
                  :valid-feedback="validFeedback()"
                  label="Abbreviation:"
                  label-cols-sm="3"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-input
                    v-model="form.shorthand"
                    :state="validation.shorthand"
                    @focus="shorthandValidator()"
                    @input="shorthandValidator()"
                  >
                  </b-form-input>
                </b-form-group>
              </b-form-group>
            </b-card>
            <!-- Assignment Box -->
            <b-card bg-variant="light" class="mt-4">
              <b-form-group
                label-cols-lg="3"
                label="Assignments"
                label-size="lg"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-group
                  :state="validation.assig[0]"
                  :invalid-feedback="invalidAssig()"
                  label-cols-sm="3"
                  label="1:"
                  label-align-sm="right"
                  class="mb-2"
                >
                  <b-form-select
                    v-model="form.assig[0]"
                    :options="dropdown.assig"
                    :state="validation.assig[0]"
                    @input="assigValidator(0)"
                  >
                  </b-form-select>
                </b-form-group>
                <b-collapse :visible="validation.assig[0]">
                  <b-form-group
                    :state="validation.assig[1]"
                    :invalid-feedback="invalidAssig()"
                    label-cols-sm="3"
                    label="2:"
                    label-align-sm="right"
                    class="mb-2"
                  >
                    <b-form-select
                      v-model="form.assig[1]"
                      :options="dropdown.assig"
                      :state="validation.assig[1]"
                      @input="assigValidator(1)"
                    >
                    </b-form-select>
                  </b-form-group>
                </b-collapse>
                <b-collapse :visible="validation.assig[1]">
                  <b-form-group
                    :state="validation.assig[2]"
                    :invalid-feedback="invalidAssig()"
                    label-cols-sm="3"
                    label="3:"
                    label-align-sm="right"
                    class="mb-2"
                  >
                    <b-form-select
                      v-model="form.assig[2]"
                      :options="dropdown.assig"
                      :state="validation.assig[2]"
                      @input="assigValidator(2)"
                    >
                    </b-form-select>
                  </b-form-group>
                </b-collapse>
                <b-collapse :visible="validation.assig[2]">
                  <b-form-group
                    :state="validation.assig[3]"
                    :invalid-feedback="invalidAssig()"
                    label-cols-sm="3"
                    label="4:"
                    label-align-sm="right"
                    class="mb-2"
                  >
                    <b-form-select
                      v-model="form.assig[3]"
                      :options="dropdown.assig"
                      :state="validation.assig[3]"
                      @input="assigValidator(3)"
                    >
                    </b-form-select>
                  </b-form-group>
                </b-collapse>
                <b-collapse :visible="validation.assig[3]">
                  <b-form-group
                    :state="validation.assig[4]"
                    :invalid-feedback="invalidAssig()"
                    label-cols-sm="3"
                    label="5:"
                    label-align-sm="right"
                    class="mb-2"
                  >
                    <b-form-select
                      v-model="form.assig[4]"
                      :options="dropdown.assig"
                      :state="validation.assig[4]"
                      @input="assigValidator(4)"
                    >
                    </b-form-select>
                  </b-form-group>
                </b-collapse>
              </b-form-group>
            </b-card>
            <!-- Success & Error Alert Containers -->
            <AlertBox :show="hasSuc" :text="response.success" variant="success" />
            <AlertBox :show="hasErr" :text="response.error" variant="danger" />
            <!-- Submit & Reset Buttons -->
            <b-form-row class="my-3">
              <b-col class="text-right">
                <b-button
                  :disabled="incompleteValidation"
                  type="submit"
                  variant="success"
                  class="px-4"
                >
                  Submit Position
                </b-button>
              </b-col>
              <b-col class="text-left">
                <b-button type="reset" variant="secondary" class="px-4">
                  Reset Form
                </b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
      <!-- Dynamic Search Result Container -->
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="queryHasResult" variant="info">
            <p>Found the Following Positions with similar names</p>
            <ul>
              <li v-for="position in queryResult" :key="position.pos_id">
                <strong>Position #{{ position.posmain_id }}:</strong>
                {{ position.shorthand }} - {{ position.title }}
              </li>
            </ul>
          </b-alert>
        </b-col>
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
      form: {
        title: "",
        shorthand: "",
        assig: []
      },
      validation: {
        shorthand: null,
        title: null,
        assig: []
      },
      response: {
        success: "",
        error: ""
      },
      queryResult: [],
      dropdown: {
        assig: [{ value: null, text: "Please select Assignment" }]
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
    queryHasResult() {
      return this.queryResult.length > 0;
    },
    incompleteValidation() {
      if (
        this.validation.title === null ||
        this.validation.title === false ||
        this.validation.shorthand === null ||
        this.validation.shorthand === false ||
        this.assigHasDuplicates
      )
        return true;
      else return false;
    },
    assigHasDuplicates() {
      return new Set(this.form.assig).size !== this.form.assig.length;
    }
  },
  mounted() {
    this.getAssigDropdown();
  },
  methods: {
    titleValidator() {
      if (this.form.title.length >= 5) {
        this.response.success = "";
        this.response.error = "";
        this.validation.title = true;
        this.queryResult = [];
        this.searchInput("title");
      } else {
        this.validation.title = false;
      }
    },
    shorthandValidator() {
      if (this.form.shorthand.length >= 2) {
        this.response.success = "";
        this.response.error = "";
        this.validation.shorthand = true;
        this.queryResult = [];
        this.searchInput("shorthand");
      } else {
        this.validation.shorthand = false;
      }
    },
    assigValidator(i) {
      if (this.form.assig[i] === null) this.validation.assig[i] = null;
      else if (this.assigHasDuplicates) this.validation.assig[i] = false;
      else this.validation.assig[i] = true;
    },
    invalidTitle() {
      if (this.form.title.length > 0) {
        const remainingChars = 5 - this.form.title.length;
        return `Enter at least ${remainingChars} more characters`;
      } else {
        return "Please enter something";
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
    invalidAssig() {
      return "You have selected the same Assignment twice";
    },
    validFeedback() {
      return "Great!";
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
    async getAssigDropdown() {
      const servTypeUrl = `${api}/serv-type/sm`;
      const servTypes = await this.dropdownRequest(servTypeUrl);
      servTypes.forEach(itm => {
        this.dropdown.assig.push({
          value: itm.servtype_id,
          text: itm.title
        });
      });
    },
    async searchInput(fieldString) {
      const query = fieldString === "shorthand" ? this.form.shorthand : this.form.title;
      const url = `${api}/search/pos`;
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
    async onSubmit(event) {
      event.preventDefault();
      const url = `${api}/pos`;
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
      this.form = {
        title: "",
        shorthand: "",
        assig: []
      };
      this.validation = {
        shorthand: null,
        title: null,
        assig: []
      };
      this.response = {
        success: "",
        error: ""
      };
      this.queryResult = [];
    }
  }
};
</script>
