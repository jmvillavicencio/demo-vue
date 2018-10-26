<template>
  <v-layout
    row
    justify-center
  >
    <v-dialog
      v-model="dialog"
      persistent
      max-width="800px"
    >
      <v-card>
        <v-card-title>
          <span class="title">Filter experience</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex
                v-for="filterType in getFilterTypes()"
                :key="filterType"
                xs12
                sm12
                md12
              >
                <span class="subheading">{{ capitalize(filterType) }}</span>
                <v-layout wrap>
                  <v-flex
                    v-for="(filter, index) in getFiltersByType(filterType)"
                    :class="getClassForExperienceColumns(Object.keys(filters[filterType]).length)"
                    :key="`${filterType}-${index}`"
                  >
                    <v-checkbox
                      v-model="settedFilters[filterType][filter]"
                      :label="capitalize(filter)"
                      required
                      class="ma-0"
                      @blur="$v.checkbox.$touch()"
                    />
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn
            v-if="filtersApplied"
            color="red darken-1"
            class="white--text"
            @click.native="resetFilters"
          >Reset</v-btn>
          <v-spacer />
          <v-btn
            color="blue darken-1"
            flat
            @click.native="closeDialog"
          >Close</v-btn>

          <v-btn
            color="green darken-1"
            class="white--text"
            @click.native="applyFilter"
          >Apply</v-btn>

        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      dialog: false,
      settedFilters: {},
    };
  },
  computed: {
    ...mapGetters({
      filtersApplied: 'experiences/filtersApplied',
      filters: 'experiences/filters',
    }),
  },
  watch: {
    filters() {
      this.setFilters(this.filters);
    },
  },
  beforeMount() {
    this.setFilters(this.filters);
    this.$root.$on('SHOW_EXPERIENCE_FILTER_MODAL', () => {
      this.dialog = true;
    });
  },
  methods: {
    ...mapActions({
      updateFilters: 'experiences/updateFilters',
    }),
    getClassForExperienceColumns(numOfElements) {
      if (numOfElements > 20) {
        return { 'xs3': true };
      }
      if (numOfElements > 12) {
        return { 'xs4': true };
      }
      if (numOfElements > 6) {
        return { 'xs6': true };
      }
      return { 'xs12': true };
    },
    getFilterTypes() {
      return Object.keys(this.filters).sort();
    },
    getFiltersByType(filterType) {
      return Object.keys(this.filters[filterType]).sort();
    },
    closeDialog() {
      this.dialog = false;
    },
    applyFilter() {
      this.updateFilters(this.settedFilters);
      this.closeDialog();
    },
    resetFilters() {
      this.$store.dispatch('experiences/resetFilters');
      this.closeDialog();
    },
    setFilters(filters) {
      this.settedFilters = JSON.parse(JSON.stringify(filters));
    },
  },
};
</script>
<style>
.v-input--selection-controls.ma-0 .v-input__slot {
  margin-bottom: 0px;
}
</style>
