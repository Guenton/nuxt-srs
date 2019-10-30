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
        title: "CSO",
        children: [
          {
            name: "Marlon Richardson",
            title: "GOM",
            children: [
              {
                name: "Gregory Frederica",
                title: "SM",
                children: [{ name: "Rudolf Coffie", title: "TC" }]
              },
              {
                name: "Kilian Prinsen",
                title: "SM",
                children: [{ name: "Gregory Brigitha", title: "TCI" }]
              },
              {
                name: "Elton Wilson",
                title: "SM",
                children: [
                  { name: "Francis Statie", title: "TC" },
                  { name: "Shaun Winklaar", title: "IA" }
                ]
              },
              {
                name: "Jos Van Ingen",
                title: "SM",
                children: [
                  { name: "Miguel Arrindell", title: "TC" },
                  { name: "Franklin Arrindell", title: "IA" }
                ]
              },
              { name: "Giovanni Hennep", title: "CRCM" }
            ]
          },
          { name: "Winoca Casilio", title: "Adm.Cord" },
          { name: "Guenton Brooks", title: "Proj.Man" },
          {
            name: "Carlos Martha",
            title: "GIM",
            children: [
              {
                name: "Dubberlysse Merce",
                title: "IM",
                children: [
                  { name: "Dudley Liberia", title: "IB" },
                  { name: "Julio Flanders", title: "IA" },
                  { name: "Rodrick Candelaria", title: "IA" },
                  { name: "Dyron Cleofa", title: "IA" }
                ]
              },
              { name: "Hendrik Kroon", title: "IE" }
            ]
          }
        ]
      }
    };
  }
};
</script>
