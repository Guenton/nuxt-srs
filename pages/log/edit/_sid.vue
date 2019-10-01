<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Return to Log Page -->
      <H3withButton h3text="Expand SID" button-text="Return to Logs" link-to="/log" />
      <b-row align-h="between" align-v="center">
        <b-col cols="8">
          <b-collapse v-model="preReg">
            <b-card>Collapsible card of SID# {{ sid }}</b-card>
          </b-collapse>
        </b-col>
        <b-col class="text-right" cols="4">
          <b-button variant="secondary" size="sm" @click="preRegToggle">
            {{ toggleBtn }} Pre-Registration Details
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3withButton from "~/components/H3withButton";

export default {
  components: {
    NavbarHome,
    H3withButton
  },
  data() {
    return {
      sid: this.$route.params.sid,
      preReg: true
    };
  },
  computed: {
    toggleBtn() {
      return this.preReg ? "Hide" : "Show";
    }
  },
  methods: {
    preRegToggle() {
      this.preReg = !this.preReg;
    }
  }
};
</script>
