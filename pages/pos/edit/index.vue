<template>
  <div>
    <NavbarHome />
    <b-container>
      <!-- Header with Buttons -->
      <H3withRefresh
        h3text="Edit Positions"
        button-text="Add Position"
        link-to="/pos/add"
        variant="success"
        @refresh="resetPage"
      />
      <!-- Async table with get request -->
      <b-row>
        <b-col>
          <b-table
            striped
            selectable
            hover
            sticky-header="65vh"
            :items="tableData"
            :fields="tableFields"
            @row-selected="onRowSelected"
          >
          </b-table>
        </b-col>
      </b-row>
      <!-- Delete Button below table -->
      <b-row>
        <b-col class="text-right">
          <b-button variant="danger" to="/pos/delete">
            Delete Position
          </b-button>
        </b-col>
      </b-row>
      <!-- Edit table hidden until selection was made -->
      <b-row v-show="showtable">
        <b-col>
          <b-form novalidate @submit="onSubmit" @reset="resetPage">
            <H3header h3text="Edit Positions" />
            <b-form-row
              v-for="(position, index) in form"
              :key="position.pos_id"
            >
              <b-col sm="2" align-v="center" class="text-center">
                <b-row>
                  <b-col sm="12">
                    <b-row>
                      <strong>Position #{{ position.pos_id }}:</strong>
                    </b-row>
                  </b-col>
                  <b-col sm="12">
                    <b-row>
                      {{ position.shorthand }}
                    </b-row>
                  </b-col>
                </b-row>
              </b-col>
              <b-col>
                <b-form-group label="Abbreviation">
                  <b-form-input v-model="form[index].shorthand" trim />
                </b-form-group>
              </b-col>
              <b-col>
                <b-form-group label="Position Name">
                  <b-form-input v-model="form[index].title" trim />
                </b-form-group>
              </b-col>
            </b-form-row>
            <!-- Submit & Reset Buttons -->
            <b-form-row>
              <b-col class="text-right">
                <b-button type="submit" variant="success">Update</b-button>
              </b-col>
              <b-col class="text-left">
                <b-button type="reset" variant="secondary">Cancel</b-button>
              </b-col>
            </b-form-row>
          </b-form>
        </b-col>
      </b-row>
      <!-- Success Alert Container -->
      <InfoAlertList :show="hasUpdate" :list-obj="update" />
      <!-- Error Alert Container -->
      <AlertBox :show="hasError" variant="danger" :text="error" />
    </b-container>
  </div>
</template>

<script>
import api from "~/assets/apiMap";
import NavbarHome from "~/components/NavbarHome";
import H3withRefresh from "~/components/H3withRefresh";
import H3header from "~/components/H3header";
import InfoAlertList from "~/components/InfoAlertList";
import AlertBox from "~/components/AlertBox";

export default {
  components: {
    NavbarHome,
    H3withRefresh,
    H3header,
    InfoAlertList,
    AlertBox
  },
  data() {
    return {
      tableFields: [
        { key: "pos_id", label: "Position #", sortable: true },
        { key: "shorthand", label: "Abbreviation", sortable: true },
        { key: "title", label: "Position Name", sortable: true }
      ],
      tableData: [],
      form: [],
      update: [],
      showtable: false,
      error: null
    };
  },
  computed: {
    hasUpdate() {
      return this.update.length > 0;
    },
    hasError() {
      return this.error !== null;
    }
  },
  async mounted() {
    const url = `${api}/pos`;
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
      this.form = items;
      this.showtable = items.length > 0;
    },
    async resetPage(event) {
      if (event) {
        event.preventDefault();
      }
      this.tableData = [];
      this.form = [];
      this.update = [];
      this.error = null;
      this.showtable = false;
      const url = `${api}/pos`;
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
    async onSubmit(event) {
      event.preventDefault();
      const url = `${api}/pos`;
      try {
        const response = await this.$axios.$put(url, this.form);
        this.update = response;
      } catch (error) {
        this.error = error;
      }
    }
  }
};
</script>
