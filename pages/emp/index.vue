<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        h3text="Employees"
        button-text="Add Employee"
        link-to="/emp/add"
        variant="success"
        @refresh="resetPage"
      />
      <!-- Async table with get request -->
      <b-collapse id="empTable" :visible="hasTable">
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
        <b-row>
          <b-col class="text-right">
            <b-button variant="danger" class="px-4" to="/emp/delete">
              Delete Employee
            </b-button>
          </b-col>
        </b-row>
      </b-collapse>
      <!-- Loading Spinner -->
      <b-row v-show="isLoading" class="my-5">
        <b-col class="text-center">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </b-col>
      </b-row>
      <!-- No Employees Msg -->
      <AlertBox :show="emptyDb" text="There are currently no Employees in the Database" />
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" variant="danger" :text="error" />
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3withRefresh from "~/components/H3withRefresh";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3withRefresh,
    AlertBox
  },
  data() {
    return {
      tableFields: [
        { key: "empmain_id", label: "Employee #", sortable: true },
        { key: "firstname", label: "First Name", sortable: true },
        { key: "middlename", label: "Middle Name", sortable: true },
        { key: "lastname", label: "Last Name", sortable: true },
        { key: "position", label: "Position", sortable: true },
        { key: "subsidiary", label: "Subsidiary", sortable: true }
      ],
      tableData: [],
      error: "",
      isLoading: true
    };
  },
  computed: {
    hasTable() {
      return this.tableData.length > 0;
    },
    emptyDb() {
      return !this.hasTable && !this.isLoading;
    },
    hasError() {
      return this.error !== "";
    }
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      const url = `${api}/emp/md`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.error = response.err;
        } else {
          this.tableData = response.data;
          this.isLoading = false;
        }
      } catch (error) {
        this.error = error;
      }
    },
    onRowSelected(items) {
      const empId = items[0].empmain_id;
      const url = `/emp/edit/${empId}`;
      this.$router.push(url);
    },
    resetPage(event) {
      if (event) event.preventDefault();
      this.isLoading = true;
      this.tableData = [];
      this.error = "";
      this.onLoad();
    }
  }
};
</script>
