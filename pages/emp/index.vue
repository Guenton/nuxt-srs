<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3header h3text="Employees" />
      <b-row>
        <b-col>
          <b-table
            striped
            selectable
            hover
            :items="tableData"
            @row-selected="onRowSelected"
          ></b-table>
        </b-col>
      </b-row>
      <b-row v-show="showtable">
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="onReset">
            <H3header h3text="Edit Employees" />
            <b-form-row
              v-for="(employee, index) in form"
              :key="employee.emp_id"
            >
              <b-col sm="2" align-v="center" class="text-center">
                <b-row>
                  <strong>Edit Employee #{{ employee.emp_id }}:</strong>
                </b-row>
                <b-row>
                  {{ employee.firstname }} {{ employee.lastname }}
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
                <b-button type="reset" variant="secondary">Reset</b-button>
              </b-col>
            </b-form-row>
            <!-- Success & Error Alert Containers -->
            <b-form-row>
              <b-col>
                <b-alert :show="error" variant="danger">
                  {{ error }}
                </b-alert>
              </b-col>
            </b-form-row>
            <b-form-row>
              <b-col>
                <b-alert :show="error" variant="danger">
                  {{ error }}
                </b-alert>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import H3header from "~/components/H3header";

export default {
  components: {
    NavbarHome,
    H3header
  },
  data() {
    return {
      tableData: [],
      form: [],
      showtable: false,
      error: null,
      success: null
    };
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
    async onSubmit(event) {
      event.preventDefault();
      try {
        const response = await this.$axios.$put(
          "http://localhost:3000/api/emp",
          JSON.stringify(this.form)
        );
        if (response.err) {
          this.error = response.err;
          return;
        } else {
          this.success = response.suc;
          return;
        }
      } catch (error) {
        this.error = error;
      }
    },
    async onReset(event) {
      event.preventDefault();
      this.tableData = [];
      this.error = null;
      this.form = [];
      this.showtable = false;
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/emp"
        );
        this.tableData = response.data;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
