<script>
/* eslint-disable vue/name-property-casing */
export default {
  name: 'jv-list-tile',
  props: {
    to: {
      default: null,
      type: Object,
    },
  },
  render (h) {
    const isRouteLink = !!this.to;
    const hasVueRouter = this.$route;
    let isActive = hasVueRouter && this.$route.name === this.to.name;
    const { tag, data } = isRouteLink ?
      {
        tag: 'router-link',
        data: {
          props: {
            to: this.to,
          },
        },
      } :
      {
        tag: this.tag || 'div',
        data: {
          class: this.classes,
        },
      };

    data.attrs = Object.assign({}, data.attrs, this.$attrs);
    return h('div', {
      class: `jv-list-tile ${isActive && 'active'}`,
    }, [h(tag, data, this.$slots.default)]);
  },
};
</script>
<style>
.jv-list-tile {
  text-align: center;
  padding: 20px;
}
.jv-list-tile a {
  text-decoration: none;
}
.jv-list-tile:hover, .jv-list-tile.active {
  color: #e6e6e6;
  box-shadow: 1px 1px 7px 0px #666;
  transition: 0.2s;
}
.jv-list-tile:hover {
  background-color: #0D47A1;
  opacity: 0.95;
}
.jv-list-tile.active {
  background-color: #0D47A1;
}
.jv-list-tile a, .jv-list-tile i {
  color: #999!important;
}
.jv-list-tile:hover a, .jv-list-tile:hover i, .jv-list-tile.active a, .jv-list-tile.active i {
  color: #e6e6e6!important;
}
</style>
