<template>
  <div>
    <NavbarHome />
    <b-container>
      <Chart :data="data" />
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import Chart from "~/components/Chart";

export default {
  components: {
    NavbarHome,
    Chart
  },
  data() {
    return {
      data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [
          {
            // one line graph
            label: "Number of Moons",
            data: [0, 0, 1, 2, 67, 62, 27, 14],
            backgroundColor: [
              "rgba(54,73,93,.5)", // Blue
              "rgba(54,73,93,.5)",
              "rgba(54,73,93,.5)",
              "rgba(54,73,93,.5)",
              "rgba(54,73,93,.5)",
              "rgba(54,73,93,.5)",
              "rgba(54,73,93,.5)",
              "rgba(54,73,93,.5)"
            ],
            borderColor: [
              "#36495d",
              "#36495d",
              "#36495d",
              "#36495d",
              "#36495d",
              "#36495d",
              "#36495d",
              "#36495d"
            ],
            borderWidth: 3
          },
          {
            // another line graph
            label: "Planet Mass (x1,000 km)",
            data: [4.8, 12.1, 12.7, 6.7, 139.8, 116.4, 50.7, 49.2],
            backgroundColor: [
              "rgba(71, 183,132,.5)" // Green
            ],
            borderColor: ["#47b784"],
            borderWidth: 3
          }
        ]
      }
    };
  }
};
</script>

<style></style>
