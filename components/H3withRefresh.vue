<template>
  <b-row class="mt-4">
    <b-col class="text-left">
      <h3>{{ h3text }}</h3>
    </b-col>
    <b-col class="text-right mb-2">
      <b-button variant="secondary" @click="refresh()">
        Refresh
      </b-button>
      <b-button :variant="variant" :to="linkTo">
        {{ buttonText }}
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    h3text: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: false,
      default: "Add"
    },
    linkTo: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default: "info"
    }
  },
  methods: {
    refresh() {
      this.$emit("refresh");
    }
  }
};
</script>
