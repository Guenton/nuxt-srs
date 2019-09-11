<template>
  <div>
    <NavbarHome />
    <b-container class="text-center p-5 my-5">
      <b-img
        fluid
        src="~/static/MCB-si-transparent.png"
        alt="Responsive SI"
        class="py-5"
      >
      </b-img>
    </b-container>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";

export default {
  components: {
    NavbarHome
  }
};
</script>
