import Vue from 'vue';
import Vuex from 'vuex';
import { createMatchElementArray } from '../../helpers/stores';
import Api from '../../api';

export const state = () => ({
  list: [],
});

export const actions = {
  async fetchAll({ commit, dispatch }) {
    const jobs = await Api.job.getAll();
    dispatch('experiences/addList', jobs, { root: true });
    commit('setList', jobs);
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
