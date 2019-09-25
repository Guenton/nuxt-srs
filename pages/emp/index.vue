<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <b-row class="mt-4">
        <b-col class="text-left">
          <h3>Employees</h3>
        </b-col>
        <b-col class="text-right mb-2">
          <b-button variant="secondary" @click="resetPage">
            Refresh
          </b-button>
          <b-button variant="info" to="/emp/edit">
            Edit Employees
          </b-button>
        </b-col>
      </b-row>
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
import NavbarHome from "~/components/NavbarHome";
import H3header from "~/components/H3header";

export default {
  components: {
    NavbarHome,
    H3header
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
