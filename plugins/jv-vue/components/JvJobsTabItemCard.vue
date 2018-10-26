<template>
  <v-card>
    <v-card-text>
      <v-layout
        row
        wrap
      >
        <v-flex
          v-for="(item, index) in items"
          :key="`${name}-${index}`"
          xs3
        >
          <jv-job-card :item="item"/>
        </v-flex>
      </v-layout>
      <v-alert
        v-if="!items.length"
        :value="true"
        type="warning"
        class="black--text"
      >
        No results were found. <v-btn
          small
          color="blue darken-1"
          class="white--text"
          @click="$emit('onClearFilters')"
        >Clear filters</v-btn>
      </v-alert>
    </v-card-text>
  </v-card>
</template>
<script>
  export default {
    name: 'jv-jobs-tab-item-card',
    props: {
      items: {
        default: () => ([]),
        type: Array,
      },
      name: {
        default: '',
        type: String,
      },
    },
  };
</script>
