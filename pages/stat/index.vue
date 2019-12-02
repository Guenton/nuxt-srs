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
        <Chart v-if="hasLabels" :data="data" />
        <b-row v-show="!isLoading">
          <b-col class="text-center">
            <b-button-group v-show="hasLabels" class="mx-1">
              <b-button :pressed="isArch" variant="info" @click="selectHandler('arch')">
                Archtype
              </b-button>
              <b-button :pressed="isType" variant="info" @click="selectHandler('type')">
                Type
              </b-button>
              <b-button :pressed="isDept" variant="info" @click="selectHandler('dept')">
                Department
              </b-button>
              <b-button :pressed="isLocat" variant="info" @click="selectHandler('locat')">
                Location
              </b-button>
            </b-button-group>
          </b-col>
        </b-row>
        <b-row v-show="!isLoading" class="my-3" align-h="center">
          <b-col cols="4">
            <b-button-group v-show="hasLabels">
              <b-button :pressed="isDay" @click="timeframeHandler('day')">Day</b-button>
              <b-button :pressed="isWeek" @click="timeframeHandler('week')">Week</b-button>
              <b-button :pressed="isMonth" @click="timeframeHandler('month')">Month</b-button>
              <b-button :pressed="isYear" @click="timeframeHandler('year')">Year</b-button>
            </b-button-group>
          </b-col>
          <b-col cols="4">
            <b-button-group v-show="hasLabels">
              <b-button :pressed="graphSteps === 1" @click="stepsHandler(1)">1</b-button>
              <b-button :pressed="graphSteps === 2" @click="stepsHandler(2)">2</b-button>
              <b-button :pressed="graphSteps === 3" @click="stepsHandler(3)">3</b-button>
              <b-button :pressed="graphSteps === 4" @click="stepsHandler(4)">4</b-button>
              <b-button :pressed="graphSteps === 5" @click="stepsHandler(5)">5</b-button>
              <b-button :pressed="graphSteps === 6" @click="stepsHandler(6)">6</b-button>
              <b-button :pressed="graphSteps === 7" @click="stepsHandler(7)">7</b-button>
              <b-button :pressed="graphSteps === 8" @click="stepsHandler(8)">8</b-button>
            </b-button-group>
          </b-col>
        </b-row>
      </b-collapse>
      <!-- Loading Spinner -->
      <b-row v-show="isLoading" class="my-5">
        <b-col class="text-center">
          <b-spinner variant="success" label="Spinning"></b-spinner>
        </b-col>
      </b-row>
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" :text="error" variant="danger" />
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import hue from "~/assets/colorWay";
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
      rawData: [],
      graphSelect: "arch",
      graphSteps: 7,
      graphTimeframe: "week",
      data: {
        labels: [],
        datasets: []
      }
    };
  },
  computed: {
    hasError() {
      return this.error !== "";
    },
    hasLabels() {
      return this.data.labels.length > 1;
    },
    isArch() {
      return this.graphSelect === "arch";
    },
    isType() {
      return this.graphSelect === "type";
    },
    isDept() {
      return this.graphSelect === "dept";
    },
    isLocat() {
      return this.graphSelect === "locat";
    },
    isDay() {
      return this.graphTimeframe === "day";
    },
    isWeek() {
      return this.graphTimeframe === "week";
    },
    isMonth() {
      return this.graphTimeframe === "month";
    },
    isYear() {
      return this.graphTimeframe === "year";
    }
  },
  mounted() {
    this.mainHandler();
  },
  methods: {
    resetPage(event) {
      if (event) event.preventDefault();
      this.graphSelect = "arch";
      this.graphSteps = 7;
      this.graphTimeframe = "week";
      this.mainHandler();
    },
    selectHandler(sel) {
      this.graphSelect = sel;
      this.mainHandler();
    },
    stepsHandler(sel) {
      this.graphSteps = sel;
      this.mainHandler();
    },
    timeframeHandler(sel) {
      this.graphTimeframe = sel;
      this.mainHandler();
    },
    mainHandler() {
      this.isLoading = true;
      this.error = "";
      this.data = { labels: [], datasets: [] };
      const timeframe = this.graphTimeframe;
      if (timeframe === "day") {
        this.dayHandler();
      } else if (timeframe === "week") {
        this.weekHandler();
      } else if (timeframe === "month") {
        this.monthHandler();
      } else {
        this.yearHandler();
      }
      this.isLoading = false;
    },
    graphDataBuilder() {
      const datasets = [];
      const labels = [];
      // Initialize Individual Graph Objects ////
      for (const key in this.rawData[0]) {
        const graphObj = {
          label: key,
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 2
        };
        datasets.push(graphObj);
        labels.push(key);
      }
      for (let i = 0; i < datasets.length; i++) {
        const lbl = labels[i];
        // Populate Data ////
        this.rawData.forEach(item => {
          datasets[i].data.push(item[lbl]);
        });
        // Populate background Color ////
        datasets[i].backgroundColor.push(hue.bg[i]);
        // Populate borderColor ////
        datasets[i].borderColor.push(hue.ln[i]);
      }
      this.data.datasets = datasets;
    },
    onLoad() {
      this.isLoading = false;
    },
    async servLogCountGetter(date, id) {
      const timeframe = this.graphTimeframe;
      const type = this.graphSelect;
      const url = `${api}/count-log-type/${timeframe}`;
      const params = { id, type, date };
      try {
        const response = await this.$axios.$get(url, { params });
        if (response.err) {
          this.response.error = response.err;
          return {};
        } else {
          return response.data[0];
        }
      } catch (error) {
        this.response.error = error;
        return {};
      }
    },
    async dayHandler() {
      const steps = this.graphSteps;
      const timeframeArr = [];
      const rawDataArr = [];
      for (let i = steps; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0);
        timeframeArr.push(date.toDateString());
        const rawData = await this.servLogCountGetter(date);
        if (rawData) rawDataArr.push(rawData);
      }
      this.rawData = rawDataArr;
      this.data.labels = timeframeArr;
      this.graphDataBuilder();
    },
    async weekHandler() {
      const steps = this.graphSteps;
      const timeframeArr = [];
      const rawDataArr = [];
      for (let i = steps * 7; i >= 0; i -= 7) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        date.setHours(0, 0, 0);
        timeframeArr.push(date.toDateString());
        const rawData = await this.servLogCountGetter(date);
        if (rawData) rawDataArr.push(rawData);
      }
      this.rawData = rawDataArr;
      this.data.labels = timeframeArr;
      this.graphDataBuilder();
    },
    async monthHandler() {
      const steps = this.graphSteps;
      const timeframeArr = [];
      const rawDataArr = [];
      for (let i = steps; i >= 0; i--) {
        const date = new Date();
        date.setMonth(date.getMonth() - i);
        date.setDate(1);
        date.setHours(0, 0, 0);
        const month = this.monthToText(date.getMonth());
        timeframeArr.push(month);
        const rawData = await this.servLogCountGetter(date);
        if (rawData) rawDataArr.push(rawData);
      }
      this.rawData = rawDataArr;
      this.data.labels = timeframeArr;
      this.graphDataBuilder();
    },
    async yearHandler() {
      const steps = this.graphSteps;
      const timeframeArr = [];
      const rawDataArr = [];
      for (let i = steps; i >= 0; i--) {
        const date = new Date();
        date.setFullYear(date.getFullYear() - i);
        date.setMonth(0);
        date.setDate(1);
        date.setHours(0, 0, 0);
        timeframeArr.push(date.getFullYear());
        const rawData = await this.servLogCountGetter(date);
        if (rawData) rawDataArr.push(rawData);
      }
      this.rawData = rawDataArr;
      this.data.labels = timeframeArr;
      this.graphDataBuilder();
    },
    monthToText(int) {
      if (int === 0) return "January";
      else if (int === 1) return "February";
      else if (int === 2) return "March";
      else if (int === 3) return "April";
      else if (int === 4) return "May";
      else if (int === 5) return "June";
      else if (int === 6) return "July";
      else if (int === 7) return "August";
      else if (int === 8) return "September";
      else if (int === 9) return "October";
      else if (int === 10) return "November";
      else if (int === 11) return "December";
      else return "monthToTextError";
    }
  }
};
</script>
