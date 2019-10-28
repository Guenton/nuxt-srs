<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        h3text="Positions"
        button-text="Add Positions"
        link-to="/pos/add"
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
                        <li v-for="item in assig" :key="item.id">
                          <strong>S-Code {{ item.servtype_id }}:</strong>
                          {{ item.title }}
                        </li>
                      </ul>
                    </b-alert>
                  </b-col>
                  <b-col cols="2" class="pl-0">
                    <b-button block :to="idLink" variant="info">
                      Edit
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
    AlertBox,
    H3withRefresh
  },
  data() {
    return {
      tableFields: [
        { key: "posmain_id", label: "Position #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "title", label: "Title", sortable: true }
      ],
      tableData: [],
      assig: [],
      form: {},
      idLink: "",
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
  mounted() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      const url = `${api}/pos/md`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.error = response.err;
        } else {
          this.tableData = response.data;
          this.tableData.forEach(row => {
            row._showDetails = false;
          });
        }
      } catch (error) {
        this.error = error;
      }
    },
    async onRowClicked(row) {
      this.tableData.forEach(row => {
        row._showDetails = false;
      });
      this.form.posmain_id = row.posmain_id;
      this.idLink = `/pos/edit/${this.form.posmain_id}`;
      row._showDetails = !row._showDetails;
      const url = `${api}/pos-assig/sm?id=${this.form.posmain_id}`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.error = response.err;
        } else {
          this.assig = response.data;
        }
      } catch (err) {
        this.error = err;
      }
    },
    resetPage(event) {
      if (event) event.preventDefault();
      this.tableData = [];
      this.assig = [];
      this.form = {};
      this.error = "";
      this.onLoad();
    }
  }
};
</script>
