import Vue from 'vue';
import Vuex from 'vuex';
import { createMatchElementArray } from '../../helpers/stores';

function getNewFiltersObject(filtersTypes, newFilters) {
  let filtersApplied = 0;
  const newFiltersObj = Object.keys(filtersTypes).reduce((acum, filterType) => {
    const newFilter = {...acum};
    const filters = filtersTypes[filterType];
    newFilter[filterType] = Object.keys(filters).reduce((acum2, filter) => {
      const newObj = { ...acum2 };
      newObj[filter] = (newFilters && newFilters[filterType] && newFilters[filterType][filter]) || false;
      if (newObj[filter]) {
        filtersApplied += 1;
      }
      return newObj;
    }, {});
    return newFilter;
  }, {});
  return {
    filters: newFiltersObj,
    filtersApplied,
  };
}

export const state = () => ({
  list: [],
  filters: {},
  filtersApplied: false,
  acceptableFilters: ['skills', 'company', 'position'],
});

export const actions = {
  resetList({ commit }) {
    commit('setList', []);
  },
  addList({ commit, state: localState }, list) {
    const newList = [...localState.list, ...list];
    commit('setList', newList);
    commit('setFilters', newList.reduce((filters, element) => {
      const newFilters = { ...filters };
      Object.keys(element).forEach((filterType) => {
        const isAcceptedFilter = localState.acceptableFilters.includes(filterType);
        const currentFilter = element[filterType];
        if (isAcceptedFilter && !newFilters[filterType]) {
          newFilters[filterType] = {};
        }
        if (currentFilter instanceof Array) {
          currentFilter.forEach((filter) => {
            if (isAcceptedFilter && !newFilters[filterType][filter]) {
              if (!newFilters[filterType]) {
                newFilters[filterType] = {};
              }
              newFilters[filterType][filter] = false;
            }
          });
        } else {
          if (isAcceptedFilter && !newFilters[filterType][currentFilter]) {
            if (!newFilters[filterType]) {
              newFilters[filterType] = {};
            }
            newFilters[filterType][currentFilter] = false;
          }
        }
      });
      return newFilters;
    }, {}))
  },
  updateFilters({ commit, state: localState }, newFilters) {
    const filtersTypes = localState.filters;
    const { filters, filtersApplied } = getNewFiltersObject(filtersTypes, newFilters);
    commit('setFilters', filters);
    commit('setFiltersApplied', filtersApplied);
  },
  resetFilters({ commit, state: localState }) {
    const filtersTypes = localState.filters;
    const { filters, filtersApplied } = getNewFiltersObject(filtersTypes);
    commit('setFilters', filters);
    commit('setFiltersApplied', false);
  },
};

export const mutations = {
  setList(localState, list) {
    Vue.set(localState, 'list', createMatchElementArray(list));
  },
  setFilters(localState, filters) {
    Vue.set(localState, 'filters', filters);
  },
  setFiltersApplied(localState, filtersApplied) {
    Vue.set(localState, 'filtersApplied', filtersApplied);
  },
};

export const getters = {
  experiencesList: ({ list, filters, filtersApplied }) => {
    if (!filtersApplied) {
      return list;
    }
    return list.filter((experience) => {
      return Object.keys(filters).reduce((include, filterType) => {
        if (experience[filterType] instanceof Array) {
          return include || experience[filterType].some(e => filters[filterType][e]);
        }
        return include || (experience[filterType] && filters[filterType][experience[filterType]]);
      }, false)
    });
  },
  filters: ({ filters }) => filters,
  filtersApplied: ({ filtersApplied }) => filtersApplied,
};

export default {
  namespaced: true,
  state() { return state(); },
  mutations,
  getters,
  actions,
};
