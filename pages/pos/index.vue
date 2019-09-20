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
            sticky-header="65vh"
            select-mode="single"
            :items="tableData"
            :fields="tableFields"
            @row-clicked="onRowClicked"
          >
            <template v-slot:row-details="row">
              <b-card>
                <b-row align-v="center">
                  <b-col cols="10">
                    <b-alert show variant="info" class="my-1">
                      <p>Services Normally Assigned to this Position:</p>
                      <ul>
                        <li v-for="item in normAs" :key="item.id">
                          <strong>{{ item.archtype }}:</strong>
                          {{ item.title }}
                        </li>
                      </ul>
                    </b-alert>
                  </b-col>
                  <b-col cols="2" class="pl-0">
                    <b-button block to="/pos/add" variant="success">
                      Add
                    </b-button>
                  </b-col>
                </b-row>
              </b-card>
            </template>
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
      <AlertBox :show="hasError" variant="danger" :text="error" />
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
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    AlertBox
  },
  data() {
    return {
      tableFields: [
        { key: "pos_id", label: "Position #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "title", label: "Title", sortable: true }
      ],
      tableData: [],
      normAs: [],
      form: {},
      error: ""
    };
  },
  computed: {
    hasUpdate() {
      return this.update.length > 0;
    },
    hasError() {
      return this.error.length > 0;
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.$get("http://localhost:3000/api/pos");
      if (response.err) {
        this.error = response.err;
      }
      this.tableData = response.data;
      this.tableData.forEach(item => {
        item._showDetails = false;
      });
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    async onRowClicked(item) {
      this.form.pos_id = item.pos_id;
      item._showDetails = !item._showDetails;
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/normas",
          { params: { posId: this.form.pos_id } }
        );
        if (response.err) {
          this.error = response.err;
        }
        this.normAs = response.data;
      } catch (err) {
        this.error = err;
      }
    },
    async resetPage(event) {
      if (event) {
        event.preventDefault();
      }
      this.tableData = [];
      this.normAs = [];
      this.form = {};
      this.error = "";
      try {
        const response = await this.$axios.$get(
          "http://localhost:3000/api/pos"
        );
        if (response.err) {
          this.error = response.err;
        }
        this.tableData = response.data;
        this.tableData.forEach(item => {
          item._showDetails = false;
        });
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
