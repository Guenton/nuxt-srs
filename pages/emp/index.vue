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
            <b-form-row
              v-for="(employee, index) in form"
              :key="employee.emp_id"
            >
              <b-col sm="2" align-v="center" class="text-center">
                <strong>Employee ID: {{ employee.emp_id }}</strong>
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
                <b-button type="submit" variant="success">Submit</b-button>
              </b-col>
              <b-col class="text-left">
                <b-button type="reset" variant="secondary">Reset</b-button>
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
      error: null,
      form: [],
      showtable: false
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.$get("http://localhost:3000/api/emp");
      this.tableData = response.data;
      console.log(response);
    } catch (error) {
      this.error = error;
      console.log(error);
    }
  },
  methods: {
    onRowSelected(items) {
      this.form = items;
      this.showtable = items.length > 0;
    },
    onSubmit(event) {
      event.preventDefault();
    },
    onReset(event) {
      event.preventDefault();
    }
  }
};
</script>
