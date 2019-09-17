<template>
  <b-row class="mt-4">
    <b-col>
      <b-alert :show="show" variant="info">
        <p>Results:</p>
        <ul>
          <li v-for="item in listObj" :key="item.id">
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
    listObj: {
      type: Array,
      required: false,
      default() {
        return [];
      }
    },
    show: {
      type: Boolean,
      required: true,
      default: false
    }
  }
};
</script>
