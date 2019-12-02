<template>
  <div>
    <NavbarHome />
    <b-container fluid>
      <b-card variant="light" class="my-4">
        <organization-chart :datasource="ds"></organization-chart>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import OrganizationChart from "vue-organization-chart";
import NavbarHome from "~/components/NavbarHome";
import "vue-organization-chart/dist/orgchart.css";

export default {
  components: {
    OrganizationChart,
    NavbarHome
  },
  data() {
    return {
      ds: {
        name: "Willem Teuben",
        title: "CSO"
        // children: [
        //   { name: "Winoca Casilio", title: "Adm.Cord" },
        //   { name: "Marlon Richardson", title: "Proj.Man" },
        //   {
        //     name: "Carlos Martha",
        //     title: "GIM",
        //     children: [
        //       {
        //         name: "Dubberlysse Merce",
        //         title: "IM",
        //         children: [
        //           { name: "Dudley Liberia", title: "IB" },
        //           { name: "Julio Flanders", title: "IA" },
        //           { name: "Rodrick Candelaria", title: "IA" },
        //           { name: "Dyron Cleofa", title: "IA" }
        //         ]
        //       },
        //       { name: "Hendrik Kroon", title: "IE" }
        //     ]
        //   }
        // ]
      }
    };
  }
};
</script>
