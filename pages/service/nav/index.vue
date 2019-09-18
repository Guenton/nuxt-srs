<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withButton
        h3text="Services"
        button-text="Edit Services"
        link-to="service/edit"
        button-variant="info"
      />
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
      <!--Error Alert Container -->
      <AlertBox :show="hasError" variant="danger" :err-msg="error" />
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import H3withButton from "~/components/H3withButton";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3withButton,
    AlertBox
  },
  data() {
    return {
      tableFields: [
        { key: "type_id", label: "Service #", sortable: true },
        { key: "title", label: "Service Type", sortable: true },
        { key: "archtype", label: "Service Category", sortable: true }
      ],
      tableData: [],
      showtable: false,
      error: null
    };
  },
  computed: {
    hasError() {
      return this.error !== null;
    }
  },
  async mounted() {
    try {
      const response = await this.$axios.$get(
        "http://localhost:3000/api/service"
      );
      this.tableData = response.data;
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    onRowSelected(items) {
      this.form = items;
      console.log(this.form);
    }
  }
};
</script>
