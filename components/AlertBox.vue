<template>
  <b-row v-show="show" class="mt-4">
    <b-col>
      <b-alert :show="show" :variant="variant" dismissible fade>
        {{ text }}
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "",
      required: false
    },
    variant: {
      type: String,
      default: "info",
      required: false
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>
