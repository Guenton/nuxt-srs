<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Return to Log Page -->
      <H3withButton h3text="SID Information" button-text="Return to Logs" link-to="/log" />
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
      sid: this.$route.params.sid
    };
  }
};
</script>
