<template>
  <b-row class="mt-4">
    <b-col>
      <b-alert :show="show" variant="danger">
        {{ errorMsg }}
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    errorMsg: {
      type: String,
      default: "An Unspecified Error has Occured",
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
