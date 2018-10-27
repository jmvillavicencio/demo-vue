import Vue from 'vue';
import Vuex from 'vuex';
import { createMatchElementArray } from '../../helpers/stores';
import Api from '../../api';

export const state = () => ({
  list: [],
});

export const actions = {
  async fetchAll({ commit, dispatch }) {
    const projects = await Api.project.getAll();
    dispatch('experiences/addList', projects, { root: true });
    commit('setList', projects);
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
