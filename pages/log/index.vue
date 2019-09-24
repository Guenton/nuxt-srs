<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        h3text="Recent Logs"
        button-text="Add Log"
        link-to="/log/add"
        @refresh="resetPage"
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
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import H3withRefresh from "~/components/H3withRefresh";

export default {
  components: {
    NavbarHome,
    H3withRefresh
  }
};
</script>
