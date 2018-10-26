import Vue from 'vue';
import Vuex from 'vuex';
import { createMatchElementArray } from '../../helpers/stores';
import Api from '../../api';

export const state = {
  status: 0,
};

export const actions = {
  checkStatus({ commit }) {
    const status = Api.status.ping();
    commit('setStatus', status);
  },
};

export const mutations = {
  setStatus(localState, status) {
    Vue.set(localState, 'status', status);
  },
};

export const getters = {
  status: ({ status }) => status,
};

export default {
  namespaced: true,
  state() { return Object.assign({}, state); },
  mutations,
  getters,
  actions,
};
