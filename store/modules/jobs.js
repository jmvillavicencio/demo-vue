import Vue from 'vue';
import Vuex from 'vuex';
import { createMatchElementArray } from '../../helpers/stores';

const _jobs = require('../../static/mocks/jobs.json');
export const state = () => ({
  list: [],
});

export const actions = {
  async fetchAll({ commit, dispatch }) {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        const jobs = _jobs.map(e => ({ ...e, type: 'job' }))
        dispatch('experiences/addList', jobs, { root: true });
        commit('setList', jobs);
        resolve();
      }, 2500);
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
  jobsList: ({ list }) => list,
};

export default {
  namespaced: true,
  state() { return state(); },
  mutations,
  getters,
  actions,
};
