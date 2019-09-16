<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <b-row class="mt-4">
        <b-col class="text-left">
          <h3>Positions</h3>
        </b-col>
        <b-col class="text-right mb-2">
          <b-button variant="secondary" @click="resetPage">
            Refresh
          </b-button>
          <b-button variant="info" to="/pos/add">
            Add Position
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
          <b-button variant="danger" to="/pos/delete">
            Delete Position
          </b-button>
        </b-col>
      </b-row>
      <!-- Edit table hidden until selection was made -->
      <b-row v-show="showtable">
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="resetPage">
            <H3header h3text="Edit Employees" />
            <b-form-row v-for="(pos, index) in form" :key="pos.emp_id">
              <b-col sm="2" align-v="center" class="text-center">
                <b-row>
                  <b-col sm="12">
                    <b-row>
                      <strong>Position #{{ pos.pos_id }}:</strong>
                    </b-row>
                  </b-col>
                  <b-col sm="12">
                    <b-row>{{ pos.shorthand }} {{ pos.title }}</b-row>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-form-group label="Abbreviation">
                  <b-form-input v-model="form[index].shorthand" trim />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Title">
                  <b-form-input v-model="form[index].title" trim />
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
        { key: "pos_id", label: "Position #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "title", label: "Title", sortable: true }
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
      const response = await this.$axios.$get("http://localhost:3000/api/pos");
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
          "http://localhost:3000/api/pos"
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
          "http://localhost:3000/api/pos",
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
