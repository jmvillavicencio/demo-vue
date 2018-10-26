<template>
  <v-card
    class="pa-0"
    height="100%"
  >
    <v-container
      fluid
      grid-list-lg
      class="pa-2"
    >
      <v-layout row>
        <v-flex xs5>
          <v-img
            :src="item.image"
            contain
            position="center top"
          />
        </v-flex>
        <v-flex xs7>
          <v-card-title class="pa-1">
            <div>
              <div class="title">{{ item.position }}</div>
              <div>{{ item.company }}</div>
              <div>({{ item.from }} - {{ item.to }})</div>
            </div>
          </v-card-title>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex xs12>
          <v-chip
            v-for="skill in item.skills"
            :key="skill"
            small
            color="blue darken-3 mt-0 ml-0"
            label
            text-color="white">{{ skill }}</v-chip>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
export default {
  name: 'jv-job-card',
  props: {
    item: {
      default: () => ({}),
      type: Object,
    },
  },
};
</script>
