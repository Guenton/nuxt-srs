<template>
  <div>
    <NavbarHome />
    <!-- Dismissible Delete Warning -->
    <DeleteAlert />
    <b-container v-if="showDeleteMenu">
      <H3withButton h3text="Delete Position" button-text="Cancel and Return" link-to="/pos" />
      <!-- Async Positions Table -->
      <b-row>
        <b-col>
          <b-table
            :items="tableData"
            :fields="tableFields"
            @row-selected="onRowSelected"
            striped
            selectable
            hover
            sticky-header="50vh"
            select-mode="single"
            selected-variant="danger"
          >
          </b-table>
        </b-col>
      </b-row>
      <!-- Delete Selected Position Confirmation Alert -->
      <b-row v-show="deleteSelected">
        <b-col>
          <b-form @submit="onSubmit" novalidate>
            <H3header h3text="Selected Employee" />
            <b-form-row>
              <b-col class="text-center">
                <b-alert show variant="warning">
                  <strong>{{ form.shorthand }} - {{ form.title }}</strong>
                </b-alert>
              </b-col>
            </b-form-row>
            <!-- Dynamic Delete Button -->
            <b-form-row class="mb-4">
              <b-col class="text-center">
                <b-button variant="danger" type="submit"> Delete {{ form.title }} </b-button>
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
          <b-button @click="resetPage()" variant="danger">
            Delete Another Position
          </b-button>
        </b-col>
        <b-col class="text-center">
          <b-button variant="secondary" to="/pos/edit">
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
        { key: "posmain_id", label: "Position #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "title", label: "Position Name", sortable: true }
      ],
      tableData: [],
      form: {
        posmain_id: "",
        shorthand: "",
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
  mounted() {
    this.onLoad();
  },
  methods: {
    async onLoad() {
      const url = `${api}/pos/md`;
      try {
        const response = await this.$axios.$get(url);
        if (response.err) {
          this.response.error = response.err;
        } else {
          this.tableData = response.data;
        }
      } catch (error) {
        this.error = error;
      }
    },
    onRowSelected(items) {
      if (items.length > 0) {
        this.form = items[0];
      }
      this.deleteSelected = items.length > 0;
    },
    resetPage() {
      this.tableData = [];
      this.form.pos_id = "";
      this.form.shorthand = "";
      this.form.title = "";
      this.deleteSelected = false;
      this.result = null;
      this.error = null;
      this.onLoad();
      this.showDeleteMenu = true;
    },
    async onSubmit(event) {
      this.showDeleteMenu = false;
      event.preventDefault();
      const url = `${api}/pos`;
      try {
        const response = await this.$axios.$delete(url, {
          params: { id: this.form.pos_id }
        });
        this.result = response;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
