import Vue from 'vue'

Vue.mixin({
  methods: {
    capitalize(_str) {
      let str = _str;
      if (!(str instanceof String)) {
        str = _str.toString();
      }
      return str.replace(/\b\w/g, l => l.toUpperCase());
    },
  },
})
