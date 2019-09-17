<template>
  <b-row class="mt-4">
    <b-col>
      <b-alert :show="show" variant="info">
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
