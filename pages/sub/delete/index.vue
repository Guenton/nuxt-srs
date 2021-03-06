<template>
  <div>
    <NavbarHome />
    <!-- Dismissible Delete Warning -->
    <DeleteAlert />
    <b-container v-if="showDeleteMenu">
      <H3withButton
        h3text="Delete Subsidiary"
        button-text="Cancel and Return"
        link-to="/sub/edit"
      />
      <!-- Async Subsidiary Table -->
      <b-row>
        <b-col>
          <b-table
            :items="tableData"
            :fields="tableFields"
            striped
            selectable
            hover
            sticky-header
            select-mode="single"
            selected-variant="danger"
            @row-selected="onRowSelected"
          >
          </b-table>
        </b-col>
      </b-row>
      <!-- Delete Selected Position Confirmation Alert -->
      <b-row v-show="deleteSelected">
        <b-col>
          <b-form novalidate @submit="onSubmit">
            <H3header h3text="Selected Subsidiary" />
            <b-form-row>
              <b-col class="text-center">
                <b-alert show variant="warning">
                  <strong>{{ form.shorthand }} - {{ form.title }}</strong>
                </b-alert>
              </b-col>
            </b-form-row>
            <!-- Dynamic Delete Button -->
            <b-form-row>
              <b-col class="text-center">
                <b-button variant="danger" type="submit">Delete {{ form.title }}</b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <!-- Success & Error Alert Containers -->
      <AlertBox :show="hasResult" :text="result" variant="info" />
      <AlertBox :show="hasError" :text="error" variant="danger" />
      <!-- Show Option Buttons After Deletion -->
      <b-row v-if="!showDeleteMenu" class="mt-4">
        <b-col class="text-center">
          <b-button variant="danger" @click="resetPage()">
            Delete Another Subsidiary
          </b-button>
        </b-col>
        <b-col class="text-center">
          <b-button variant="secondary" to="/sub/edit">
            Return to Edit Page
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import DeleteAlert from "~/components/DeleteAlert";
import H3withButton from "~/components/H3withButton";
import H3header from "~/components/H3header";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    DeleteAlert,
    H3withButton,
    H3header,
    AlertBox
  },
  data() {
    return {
      tableFields: [
        { key: "sub_id", label: "Subsidiary #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "location", label: "Subsidiary Location", sortable: true },
        { key: "title", label: "Subsidiary Name", sortable: true }
      ],
      tableData: [],
      form: {
        sub_id: "",
        shorthand: "",
        location: "",
        title: ""
      },
      deleteSelected: false,
      result: null,
      error: null,
      showDeleteMenu: true
    };
  },
  computed: {
    hasResult() {
      return this.result !== null;
    },
    hasError() {
      return this.error !== null;
    }
  },
  async mounted() {
    const url = `${api}/sub`;
    try {
      const response = await this.$axios.$get(url);
      if (response.err) {
        this.error = response.err;
      } else {
        this.tableData = response.data;
      }
    } catch (error) {
      this.error = error;
    }
  },
  methods: {
    onRowSelected(items) {
      if (items.length > 0) {
        this.form = items[0];
      }
      this.deleteSelected = items.length > 0;
    },
    async resetPage() {
      this.tableData = [];
      this.form.pos_id = "";
      this.form.shorthand = "";
      this.form.location = "";
      this.form.title = "";
      this.deleteSelected = false;
      this.result = null;
      this.error = null;
      const url = `${api}/sub`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.error = response.err;
        } else {
          this.tableData = response.data;
        }
      } catch (error) {
        this.error = error;
      }
      this.showDeleteMenu = true;
    },
    async onSubmit(event) {
      this.showDeleteMenu = false;
      event.preventDefault();
      const url = `${api}/sub`;
      try {
        const response = await this.$axios.$delete(url, {
          params: { id: this.form.sub_id }
        });
        this.result = response;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
