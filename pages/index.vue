<template>
  <v-layout
  >
    <v-card class="ma-3">
      <v-card-title>
        <github-commits />
      </v-card-title>
      <v-card-actions
        class="text-xs-center"
        align-center
      >
        <v-spacer />
        <span class="subheading">Commits in github by date</span>
        <v-spacer />
      </v-card-actions>
    </v-card>
    <v-card class="ma-3">
      <v-card-title>
        <stackoverflow-answers />
      </v-card-title>
      <v-card-actions
        class="text-xs-center"
        align-center
      >
        <v-spacer />
        <span class="subheading">Answers in StackOverflow by date</span>
        <v-spacer />
      </v-card-actions>
    </v-card>
    <v-card class="ma-3">
      <v-card-title>
        <github-repos-participation />
      </v-card-title>
      <v-card-actions
        class="text-xs-center"
        align-center
      >
        <v-spacer />
        <span class="subheading">Github commits by repo</span>
        <v-spacer />
      </v-card-actions>
    </v-card>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex';
import GithubCommits from '~/components/GithubCommits';
import StackoverflowAnswers from '~/components/StackoverflowAnswers';
import GithubReposParticipation from '~/components/GithubReposParticipation';

export default {
  components: { GithubCommits, StackoverflowAnswers, GithubReposParticipation },
  computed: {
    ...mapGetters({
      fetchingCommits: 'github/fetchingCommits',
        fetchingRepos: 'github/fetchingRepos',
    }),
  },
};
</script>
