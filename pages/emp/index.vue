<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3header h3text="Employees" />
      <b-row>
        <b-col>
          <b-table striped hover :items="tableData"></b-table>
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
      error: null
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
  }
};
</script>
