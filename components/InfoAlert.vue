<template>
  <b-row class="mt-4">
    <b-col>
      <b-alert :show="show" variant="info">
        {{ infoMsg }}
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    infoMsg: {
      type: String,
      default: "",
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
