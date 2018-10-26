<template>
  <v-app light>
    <navigation-nav />
    <toolbar />
    <v-content>
      <v-alert
        :value="!apiStatus"
        type="warning"
      >
        The API is not responding.
      </v-alert>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapGetters } from 'vuex';
  import NavigationNav from '~/components/NavigationNav';
  import Toolbar from '~/components/Toolbar';

  export default {
    components: { NavigationNav, Toolbar },
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    computed: {
      ...mapGetters({
        apiStatus: 'api/status',
      }),
    },
  };
</script>
