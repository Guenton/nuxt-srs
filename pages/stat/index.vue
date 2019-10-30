<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        h3text="Statistic Summary"
        button-text="Add Logs"
        link-to="/log/add"
        variant="success"
        @refresh="resetPage"
      />
      <!-- Async table with get request -->
      <b-collapse id="summaryChart" :visible="!isLoading">
        <Chart v-if="!isLoading" :data="data" />
      </b-collapse>
      <!-- Loading Spinner -->
      <b-row v-show="isLoading" class="my-5">
        <b-col class="text-center">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </b-col>
      </b-row>
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" variant="danger" :text="error" />
    </b-container>
  </div>
</template>

<script>
// import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3withRefresh from "~/components/H3withRefresh";
import Chart from "~/components/Chart";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3withRefresh,
    Chart,
    AlertBox
  },
  data() {
    return {
      error: "",
      isLoading: true,
      data: {
        labels: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
          "Monday"
        ],
        datasets: [
          {
            label: "Security Leadership",
            data: [0, 0, 1, 2, 25, 32, 33, 42],
            backgroundColor: ["rgba(54,73,93,.5)"],
            borderColor: ["#36495d"],
            borderWidth: 2
          },
          {
            label: "Investigations",
            data: [5, 0, 8, 7, 9, 27, 37, 57],
            backgroundColor: ["rgba(71, 183,132,.5)"],
            borderColor: ["#47b784"],
            borderWidth: 2
          },
          {
            label: "Security Equipment",
            data: [10, 15, 22, 8, 32, 37, 50, 49],
            backgroundColor: ["rgba(255,241,118,.5)"],
            borderColor: ["#ffeb3b"],
            borderWidth: 2
          },
          {
            label: "Asset Protection",
            data: [15, 18, 28, 25, 19, 12, 8, 2],
            backgroundColor: ["rgba(255,138,101,.5)"],
            borderColor: ["#ff5722"],
            borderWidth: 2
          },
          {
            label: "Executive Protection",
            data: [20, 21, 17, 15, 16, 19, 18, 17],
            backgroundColor: ["rgba(149,117,205,.5)"],
            borderColor: ["#673ab7"],
            borderWidth: 2
          }
        ]
      }
    };
  },
  computed: {
    hasError() {
      return this.error !== "";
    }
  },
  mounted() {
    this.setTimeframeLabels("day", 7);
    this.onLoad();
  },
  methods: {
    onLoad() {
      this.isLoading = false;
    },
    resetPage(event) {
      if (event) event.preventDefault();
      this.isLoading = true;
      this.error = "";
      this.onLoad();
    },
    setTimeframeLabels(timeframe, steps) {
      const timeframeArr = [];
      if (timeframe === "day") {
        for (let i = 0; i <= steps; i++) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          timeframeArr.push(date.toDateString());
          console.log(date.toDateString());
        }
      } else if (timeframe === "week") {
        for (let i = steps * 7; i >= 0; i -= 7) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          timeframeArr.push(date.toDateString());
          console.log(date.toDateString());
        }
      } else if (timeframe === "month") {
        for (let i = steps; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getMonth() - i);
          timeframeArr.push(date.toDateString());
          console.log(date.toDateString());
        }
      } else {
        // year logic
      }
      this.data.labels = timeframeArr;
    }
  }
};
</script>
