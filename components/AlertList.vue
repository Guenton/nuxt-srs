<template>
  <b-row v-show="show" class="mt-4">
    <b-col>
      <b-alert :show="show" :variant="variant">
        <p>Results:</p>
        <ul>
          <li v-for="item in list" :key="item.id">
            {{ item }}
          </li>
        </ul>
      </b-alert>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: false,
      default() {
        return [];
      }
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
