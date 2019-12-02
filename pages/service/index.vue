<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header Text -->
      <H3header h3text="Services" />
      <!-- Accordion Data -->
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.arch-1 variant="success" block @click="serviceByArch(1)"
              >Security Leadership</b-button
            >
          </b-card-header>
          <b-collapse id="arch-1" accordion="services" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-table
                  :items="serviceData"
                  :fields="serviceFields"
                  striped
                  selectable
                  hover
                  sticky-header
                  @row-selected="onRowSelected"
                ></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.arch-2 variant="success" block @click="serviceByArch(2)"
              >Investigations</b-button
            >
          </b-card-header>
          <b-collapse id="arch-2" accordion="services" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-table
                  :items="serviceData"
                  :fields="serviceFields"
                  striped
                  selectable
                  hover
                  sticky-header
                  @row-selected="onRowSelected"
                ></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.arch-3 variant="success" block @click="serviceByArch(3)"
              >Security Equipment</b-button
            >
          </b-card-header>
          <b-collapse id="arch-3" accordion="services" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-table
                  :items="serviceData"
                  :fields="serviceFields"
                  striped
                  selectable
                  hover
                  sticky-header
                  @row-selected="onRowSelected"
                ></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.arch-4 variant="success" block @click="serviceByArch(4)"
              >Asset Protection</b-button
            >
          </b-card-header>
          <b-collapse id="arch-4" accordion="services" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-table
                  :items="serviceData"
                  :fields="serviceFields"
                  striped
                  selectable
                  hover
                  sticky-header
                  @row-selected="onRowSelected"
                ></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button v-b-toggle.arch-5 variant="success" block @click="serviceByArch(5)"
              >Exectutive Protection</b-button
            >
          </b-card-header>
          <b-collapse id="arch-5" accordion="services" role="tabpanel">
            <b-card-body>
              <b-card-text>
                <b-table
                  :items="serviceData"
                  :fields="serviceFields"
                  striped
                  selectable
                  hover
                  sticky-header
                  @row-selected="onRowSelected"
                ></b-table>
              </b-card-text>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" :text="error" variant="danger" />
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3header from "~/components/H3header";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3header,
    AlertBox
  },
  data() {
    return {
      serviceFields: [
        { key: "type_id", label: "Service #", sortable: true },
        { key: "title", label: "Service Name", sortable: true }
      ],
      serviceData: [],
      error: null
    };
  },
  computed: {
    hasError() {
      return this.error !== null;
    }
  },
  methods: {
    async serviceByArch(arch) {
      const url = `${api}/service/${arch}`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.error = response.err;
        } else {
          this.serviceData = response.data;
        }
      } catch (error) {
        this.error = error;
      }
    },
    onRowSelected(items) {
      console.log(items);
    }
  }
};
</script>
