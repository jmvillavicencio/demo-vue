import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../../api';


export const state = {
  answers: {},
  fetching: false,
};

export const actions = {
  fetchAnswers({ commit }) {
    commit('setFetching', true);
    return Api.stackoverflow.getAnswers()
      .then((answers) => {
        commit('setCommits', answers);
        commit('setFetching', false);
      });
  },
};

export const mutations = {
  setCommits(localState, answers) {
    Vue.set(localState, 'answers', answers);
  },
  setFetching(localState, fetching) {
    Vue.set(localState, 'fetching', fetching);
  },
};

export const getters = {
  answers: ({ answers }) => answers,
  fetching: ({ fetching }) => fetching,
};

export default {
  namespaced: true,
  state() { return Object.assign({}, state); },
  mutations,
  getters,
  actions,
};
