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
      <b-collapse id="empTable" v-model="hasTable">
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
      </b-collapse>
      <!-- Loading Spinner -->
      <b-row v-show="!hasTable" class="my-5">
        <b-col class="text-center">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </b-col>
      </b-row>
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
            <b-form-row v-for="(employee, index) in form" :key="employee.emp_id">
              <b-col sm="2" align-v="center" class="text-center">
                <b-row>
                  <b-col sm="12">
                    <b-row>
                      <strong>Employee #{{ employee.emp_id }}:</strong>
                    </b-row>
                  </b-col>
                  <b-col sm="12">
                    <b-row> {{ employee.firstname }} {{ employee.lastname }} </b-row>
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
      <!-- Success & Error Alert Containers -->
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="hasUpdate" variant="info">
            <p>Update Results:</p>
            <ul>
              <li v-for="item in update" :key="item.id">
                {{ item }}
              </li>
            </ul>
          </b-alert>
        </b-col>
      </b-row>
      <b-row class="mt-4">
        <b-col>
          <b-alert :show="hasError" variant="danger">
            {{ error }}
          </b-alert>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import H3withRefresh from "~/components/H3withRefresh";
import NavbarHome from "~/components/NavbarHome";
import H3header from "~/components/H3header";

export default {
  components: {
    NavbarHome,
    H3withRefresh,
    H3header
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
      form: [],
      update: [],
      showtable: false,
      error: null
    };
  },
  computed: {
    hasTable() {
      return this.tableData.length > 0;
    },
    hasUpdate() {
      return this.update.length > 0;
    },
    hasError() {
      return this.error !== null;
    }
  },
  async mounted() {
    const url = `${api}/emp/md`;
    try {
      const response = await this.$axios.$get(url);
      if (response.err) {
        this.error = response.err;
      } else {
        this.tableData = response.data;
      }
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
      const url = `${api}/emp`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.error = response.err;
        } else {
          this.tableData = response.data;
        }
      } catch (error) {
        this.error = error;
      }
    },
    async onSubmit(event) {
      event.preventDefault();
      const url = `${api}/emp`;
      try {
        const response = await this.$axios.$put(url, this.form);
        this.update = response;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
