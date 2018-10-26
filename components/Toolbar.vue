<template>
  <v-toolbar
    fixed
    app
    clipped-left
  >
    <v-toolbar-title v-text="title"/>
  </v-toolbar>
</template>
<script>
export default {
  data() {
    return {
      title: 'Demo',
    };
  },
};
</script>
