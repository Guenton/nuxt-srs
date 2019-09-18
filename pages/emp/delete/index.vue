<template>
  <div>
    <NavbarHome />
    <!-- Dismissible Delete Warning -->
    <DeleteAlert />
    <b-container v-if="showDeleteMenu">
      <H3withButton
        h3text="Delete Employees"
        button-text="Cancel and Return"
        link-to="/emp/edit"
      />
      <!-- Async Employees Table -->
      <b-row>
        <b-col>
          <b-table
            striped
            selectable
            hover
            sticky-header
            select-mode="single"
            selected-variant="danger"
            :items="tableData"
            :fields="tableFields"
            @row-selected="onRowSelected"
          >
          </b-table>
        </b-col>
      </b-row>
      <!-- Delete Selected Employee Confirmation Alert -->
      <b-row v-show="deleteSelected">
        <b-col>
          <b-form novalidate @submit="onSubmit">
            <H3header h3text="Selected Employee" />
            <b-form-row>
              <b-col class="text-center">
                <b-alert show variant="warning">
                  <strong>{{ form.firstname }} {{ form.lastname }}</strong>
                </b-alert>
              </b-col>
            </b-form-row>
            <!-- Dynamic Delete Button -->
            <b-form-row>
              <b-col class="text-center">
                <b-button variant="danger" type="submit">
                  Delete {{ form.firstname }} {{ form.lastname }}
                </b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <!-- Success & Error Alert Containers -->
      <AlertBox :show="hasResult" variant="info" :text="result" />
      <AlertBox :show="hasError" variant="danger" :text="error" />
      <!-- Show Option Buttons After Deletion -->
      <b-row v-if="!showDeleteMenu" class="mt-4">
        <b-col class="text-center">
          <b-button variant="danger" @click="resetPage()">
            Delete Another Employee
          </b-button>
        </b-col>
        <b-col class="text-center">
          <b-button variant="secondary" to="/emp/edit">
            Return to Edit Page
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import DeleteAlert from "~/components/DeleteAlert";
import H3withButton from "~/components/H3withButton";
import H3header from "~/components/H3header";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    DeleteAlert,
    H3withButton,
    H3header,
    AlertBox
  },
  data() {
    return {
      tableFields: [
        { key: "emp_id", label: "Employee #", sortable: true },
        { key: "firstname", label: "First Name", sortable: true },
        { key: "lastname", label: "Last Name", sortable: true }
      ],
      tableData: [],
      form: {
        emp_id: "",
        firstname: "",
        lastname: ""
      },
      deleteSelected: false,
      result: null,
      error: null,
      showDeleteMenu: true
    };
  },
  computed: {
    hasResult() {
      return this.result !== null;
    },
    hasError() {
      return this.error !== null;
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.$get("http://localhost:3000/api/emp");
      this.tableData = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    onRowSelected(items) {
      if (items.length > 0) {
        this.form = items[0];
      }
      console.log(this.form);
      this.deleteSelected = items.length > 0;
    },
    async resetPage() {
      this.tableData = [];
      this.form.emp_id = "";
      this.form.firstname = "";
      this.form.lastname = "";
      this.deleteSelected = false;
      this.result = null;
      this.error = null;
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/emp"
        );
        this.tableData = response.data;
      } catch (error) {
        this.error = error;
      }
      this.showDeleteMenu = true;
    },
    async onSubmit(event) {
      this.showDeleteMenu = false;
      event.preventDefault();
      try {
        const response = await this.$axios.$delete(
          "http://localhost:3000/api/emp",
          { params: { id: this.form.emp_id } }
        );
        this.result = response;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
