<template>
  <v-navigation-drawer
    fixed
    left
    clipped
    app
    permanent
  >
    <v-layout
      align-center
      justify-space-around
      wrap
      class="mt-3"
    >
      <v-avatar
        size="90px"
        color="grey lighten-4"
        class="text-xs-center align-center"
        align-center
      >
        <img
          src="https://media.licdn.com/dms/image/C4D03AQGLhh_qMJPpLA/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=Y8HqwQHsOy_M3EJnCVxph6gH5le3r43T6E2bndR5_9k"
          alt="avatar">
      </v-avatar>
    </v-layout>
    <v-layout
      align-center
      justify-space-around
      wrap
      class="mt-2"
    >
      <span class="subheading">Juan Manuel Villavicencio</span>
    </v-layout>
    <v-layout
      align-center
      justify-space-around
      wrap
      class="mb-2"
    >
      <h4 class="caption">Software Engineer</h4>
    </v-layout>

    <v-layout
      align-center
      justify-space-around
      wrap
    >
      <v-btn
        round
        outline
        small
        color="blue darken-4"
      >
        hire
      </v-btn>
    </v-layout>
    <jv-list class="jv-list-navigation">
      <jv-list-tile :to="{ name: 'index' }">
        <jv-list-tile-icon><v-icon>equalizer</v-icon></jv-list-tile-icon>
        <jv-list-tile-title>Dashboard</jv-list-tile-title>
      </jv-list-tile>
      <jv-list-tile :to="{ name: 'jobs' }">
        <jv-list-tile-icon><v-icon>work</v-icon></jv-list-tile-icon>
        <jv-list-tile-title>jobs & projects</jv-list-tile-title>
      </jv-list-tile>
      <jv-list-tile :to="{ name: 'socials' }">
        <jv-list-tile-icon><v-icon>people</v-icon></jv-list-tile-icon>
        <jv-list-tile-title>socials</jv-list-tile-title>
      </jv-list-tile>
    </jv-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: 'navigation-nav',
};
</script>
<style scoped>
.jv-list-navigation {
  margin-top: 30px;
}
.subheading {
  font-weight: 500;
}
.caption {
  color: #666;
  font-weight: 500;
  font-size: 14px!important;
}
</style>
