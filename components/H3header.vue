<template>
  <b-row class="mt-4">
    <b-col>
      <h3 class="text-center mb-3">{{ h3text }}</h3>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    h3text: {
      type: String,
      required: true
    }
  }
};
</script>
