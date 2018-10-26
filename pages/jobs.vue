<template>
  <v-container
    fluid
    grid-list-lg
  >
    <div>
      <v-toolbar
        color="blue darken-1"
        dark
        tabs
      >
        <v-toolbar-title>Jobs & Projects</v-toolbar-title>
        <v-spacer />
        <v-text-field
          v-model="searchCriteria"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
          style="max-width: 350px"
        />
        <v-btn
          icon
          class="mt-3"
          @click="showFilterModal"
        >
          <v-badge
            right
            color="red"
            overlap
          >
            <span
              v-if="filtersApplied"
              slot="badge"
            >{{ filtersApplied }}</span>
            <v-icon
              icon
            >
              filter_list
            </v-icon>
          </v-badge>
        </v-btn>
        <v-tabs
          v-if="!searchCriteria && !filtersApplied && !searching"
          slot="extension"
          v-model="tab"
          color="blue darken-1"
          grow
        >
          <v-tabs-slider color="yellow" />
          <v-tab>Jobs</v-tab>
          <v-tab>Projects</v-tab>
        </v-tabs>
      </v-toolbar>
      <div v-if="searching">
        <v-card>
          <v-card-text class="text-xs-center">
            <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="searchedProgress"
              color="blue darken-1"
            >
              {{ searchedProgress }}%
            </v-progress-circular>
          </v-card-text>
        </v-card>
      </div>
      <div v-else>
        <v-tabs-items
          v-if="!searchCriteria && !filtersApplied"
          v-model="tab"
        >
          <v-tab-item>
            <jv-jobs-tab-item-card
              :items="jobsList"
              name="jobs"
            />
          </v-tab-item>
          <v-tab-item>
            <jv-jobs-tab-item-card
              :items="projectsList"
              name="projects"
            />
          </v-tab-item>
        </v-tabs-items>
        <div v-else>
          <jv-jobs-tab-item-card
            :items="experiences"
            name="all"
            @onClearFilters="resetFilters"
          />
        </div>
      </div>
    </div>
    <modal-experience-filter />
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
import ModalExperienceFilter from '~/components/ModalExperienceFilter';

export default {
  components: { ModalExperienceFilter },
  data() {
    return {
      searching: false,
      tab: null,
      items: [],
      searchCriteria: '',
      searchedProgress: 0,
    };
  },
  computed: {
    ...mapGetters({
      experiencesList: 'experiences/experiencesList',
      filtersApplied: 'experiences/filtersApplied',
    }),
    projectsList() {
      return this.experiencesList.filter(e => e.type === 'project');
    },
    jobsList() {
      return this.experiencesList.filter(e => e.type === 'job');
    },
    experiences() {
      return this.experiencesList.filter(e => e.matchelement.includes(this.searchCriteria.toLowerCase()));
    }
  },
  watch: {
    searchedProgress() {
      if (this.searchedProgress >= 100) {
        setTimeout(() => {
          this.searching = false;
        }, 500);
      }
    },
  },
  mounted() {
    this.initFetch();
  },
  methods: {
    showFilterModal() {
      this.$root.$emit('SHOW_EXPERIENCE_FILTER_MODAL');
    },
    async initFetch() {
      this.searching = true;
      this.$store.dispatch('experiences/resetList');
      this.$store.dispatch('experiences/resetFilters');
      await this.fetchAll(['jobs/fetchAll', 'projects/fetchAll']);
    },
    async fetchAll(arr, i = 0) {
      if (i > arr.length - 1) {
        return Promise.resolve();
      }
      await this.$store.dispatch(arr[i]).then(() => {
        this.searchedProgress = Math.ceil(((100 / arr.length) * (i + 1)));
      });
      const ret = await this.fetchAll(arr, i + 1);
      return ret;
    },
    resetFilters() {
      this.searchCriteria = '';
      this.$store.dispatch('experiences/resetFilters');
    },
  },
};
</script>
