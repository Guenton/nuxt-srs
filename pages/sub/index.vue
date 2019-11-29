<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        @refresh="resetPage"
        h3text="Subsidiaries"
        button-text="Add Subsidiary"
        link-to="/sub/add"
        variant="success"
      />
      <!-- Async table with get request -->
      <b-collapse id="scopeSubTable" :visible="hasTable">
        <b-row>
          <b-col>
            <b-table
              :items="tableData"
              :fields="tableFields"
              @row-selected="onRowSelected"
              striped
              selectable
              hover
              sticky-header
            >
            </b-table>
          </b-col>
        </b-row>
        <b-row>
          <b-col class="text-right">
            <b-button variant="danger" class="px-4" to="/sub/delete">
              Delete Subsidiaries
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
      <!-- No Subsidiaries Msg -->
      <AlertBox :show="emptyDb" text="There are currently no Subsidiaries in the Database" />
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" :text="error" variant="danger" />
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
        { key: "scopesub_id", label: "Subsidiary #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "country", label: "Subsidiary Location", sortable: true },
        { key: "title", label: "Subsidiary Name", sortable: true }
      ],
      tableData: [],
      idLink: "",
      error: ""
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
      const url = `${api}/scope-sub/md`;
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
      const subId = items[0].scopesub_id;
      const url = `/sub/edit/${subId}`;
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
