<template>
  <div>
    <b-card bg-variant="light" class="my-4">
      <canvas id="ChartCanvas" :class="height"></canvas>
    </b-card>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "line"
    },
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default() {
        return {
          responsive: true,
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25
                }
              }
            ]
          }
        };
      }
    },
    height: {
      type: String,
      required: false,
      default: "vh60"
    }
  },
  data() {
    return {
      chartMemory: null
    };
  },
  mounted() {
    this.createChart(this.type, this.type, this.data, this.options);
  },
  methods: {
    createChart(chartId, type, data, options) {
      const ctx = document.getElementById("ChartCanvas");
      const myChart = new Chart(ctx, { type, data, options });
      this.chartMemory = myChart;
    }
  }
};
</script>

<style>
.vh10 {
  max-height: 10vh;
  position: relative;
}
.vh20 {
  max-height: 20vh;
  position: relative;
}
.vh30 {
  max-height: 30vh;
  position: relative;
}
.vh40 {
  max-height: 40vh;
  position: relative;
}
.vh50 {
  max-height: 50vh;
  position: relative;
}
.vh60 {
  max-height: 60vh;
  position: relative;
}
.vh70 {
  max-height: 70vh;
  position: relative;
}
.vh80 {
  max-height: 80vh;
  position: relative;
}
.vh90 {
  max-height: 90vh;
  position: relative;
}
.vh100 {
  max-height: 100vh;
  position: relative;
}
</style>
