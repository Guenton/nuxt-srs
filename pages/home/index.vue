<template>
  <div>
    <NavbarHome />
    <transition name="fade" mode="out-in">
      <div class="center-container">
        <Logo />
      </div>
    </transition>
  </div>
</template>

<script>
import NavbarHome from "~/components/NavbarHome";
import Logo from "~/components/Logo";

export default {
  transition: {
    name: "fade",
    mode: "out-in"
  },
  components: {
    NavbarHome,
    Logo
  },
  data() {
    return {
      showImage: true
    };
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<style scoped>
.center-container {
  margin: 0 auto;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
