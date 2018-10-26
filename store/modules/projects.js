import Vue from 'vue';
import Vuex from 'vuex';
import { createMatchElementArray } from '../../helpers/stores';

const _projects = require('../../static/mocks/projects.json');
export const state = () => ({
  list: [],
});

export const actions = {
  async fetchAll({ commit, dispatch }) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const projects = _projects.map(e => ({ ...e, type: 'project' }))
        dispatch('experiences/addList', projects, { root: true });
        commit('setList', projects);
        resolve();
      }, 3400);
    });
    return;
  },
};

export const mutations = {
  setList(localState, list) {
    Vue.set(localState, 'list', createMatchElementArray(list));
  },
};

export const getters = {
  projectsList: ({ list }) => list,
};

export default {
  namespaced: true,
  state() { return state(); },
  mutations,
  getters,
  actions,
};
