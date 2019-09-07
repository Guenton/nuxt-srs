<template>
  <div>
    <NavbarHome />
    <b-container>
      <H3header h3text="Positions" />
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
  }
};
</script>
