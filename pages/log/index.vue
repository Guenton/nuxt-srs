<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        @refresh="onReset"
        h3text="Recent Logs"
        button-text="Add Log"
        link-to="/log/add"
      />
      <!-- Async table with get request -->
      <b-row>
        <b-col>
          <b-table
            :items="tableData"
            :fields="tableFields"
            @row-selected="onRowSelected"
            striped
            selectable
            hover
            sticky-header="80vh"
          >
          </b-table>
        </b-col>
      </b-row>
      <!-- Error Container -->
      <AlertBox :text="error" :show="hasErr" variant="danger" />
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
        { key: "servmain_id", label: "SID#", sortable: true },
        { key: "date_in", label: "Log Date", sortable: true },
        { key: "time_in", label: "Time", sortable: true },
        { key: "described", label: "Description", sortable: false }
      ],
      tableData: [],
      error: ""
    };
  },
  computed: {
    hasErr() {
      return this.error.length > 0;
    }
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      const sidUrl = `${api}/serv/md`;
      try {
        const response = await this.$axios.$get(sidUrl);
        if (response.err) {
          this.error = response.err;
        } else {
          this.tableData = response.data;
        }
      } catch (error) {
        this.error = error;
      }
    },
    onRowSelected(items) {
      const sid = items[0].servmain_id;
      const url = `/log/${sid}`;
      this.$router.push(url);
    },
    onReset() {
      if (event) event.preventDefault();
      this.tableData = [];
      this.error = "";
      this.onLoad();
    }
  }
};
</script>
