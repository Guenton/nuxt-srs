<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        h3text="Edit Employees"
        button-text="Add Employee"
        link-to="/emp/add"
        variant="success"
        @refresh="resetPage"
      />
      <!-- Async table with get request -->
      <b-row>
        <b-col>
          <b-table
            striped
            selectable
            hover
            sticky-header
            :items="tableData"
            :fields="tableFields"
            @row-selected="onRowSelected"
          >
          </b-table>
        </b-col>
      </b-row>
      <!-- Delete Button below table -->
      <b-row>
        <b-col class="text-right">
          <b-button variant="danger" to="/emp/delete">
            Delete Employee
          </b-button>
        </b-col>
      </b-row>
      <!-- Edit table hidden until selection was made -->
      <b-row v-show="showtable">
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="resetPage">
            <H3header h3text="Edit Employees" />
            <b-form-row
              v-for="(employee, index) in form"
              :key="employee.emp_id"
            >
              <b-col sm="2" align-v="center" class="text-center">
                <b-row>
                  <b-col sm="12">
                    <b-row>
                      <strong>Employee #{{ employee.emp_id }}:</strong>
                    </b-row>
                  </b-col>
                  <b-col sm="12">
                    <b-row>
                      {{ employee.firstname }} {{ employee.lastname }}
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-form-group label="First Name">
                  <b-form-input v-model="form[index].firstname" trim />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Last Name">
                  <b-form-input v-model="form[index].lastname" trim />
                </b-form-group>
              </b-col>
            </b-form-row>
            <!-- Submit & Reset Buttons -->
            <b-form-row>
              <b-col class="text-right">
                <b-button type="submit" variant="success">Update</b-button>
              </b-col>
              <b-col class="text-left">
                <b-button type="reset" variant="secondary">Cancel</b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
      <!-- Success Alert Container -->
      <InfoAlertList :show="hasUpdate" :list-obj="update" />
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" variant="danger" :text="error" />
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import H3withRefresh from "~/components/H3withRefresh";
import H3header from "~/components/H3header";
import InfoAlertList from "~/components/InfoAlertList";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3withRefresh,
    H3header,
    InfoAlertList,
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
      form: [],
      update: [],
      showtable: false,
      error: null
    };
  },
  computed: {
    hasUpdate() {
      return this.update.length > 0;
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
      this.form = items;
      this.showtable = items.length > 0;
    },
    async resetPage(event) {
      event.preventDefault();
      this.tableData = [];
      this.form = [];
      this.update = [];
      this.error = null;
      this.showtable = false;
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/emp"
        );
        this.tableData = response.data;
      } catch (error) {
        this.error = error;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      try {
        const response = await this.$axios.$put(
          "http://localhost:3000/api/emp",
          this.form
        );
        this.update = response;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
