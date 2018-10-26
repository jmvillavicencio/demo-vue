import Vue from 'vue';
import Vuex from 'vuex';
import Api from '../../api';


export const state = {
  commits: {},
  repos: {},
  fetchingCommits: false,
  fetchingRepos: false,
};

export const actions = {
  fetchCommits({ commit }) {
    commit('setFetchingCommits', true);
    return Api.github.getCommits()
      .then((commits) => {
        commit('setFetchingCommits', false);
        commit('setCommits', commits);
      });
  },
  fetchRepos({ commit }) {
    commit('setFetchingRepos', true);
    return Api.github.getRepos()
      .then((repos) => {
        commit('setFetchingRepos', false);
        commit('setRepos', repos);
      });
  },
};

export const mutations = {
  setCommits(localState, commits) {
    Vue.set(localState, 'commits', commits);
  },
  setRepos(localState, repos) {
    Vue.set(localState, 'repos', repos);
  },
  setFetchingCommits(localState, fetching) {
    Vue.set(localState, 'fetchingCommits', fetching);
  },
  setFetchingRepos(localState, fetching) {
    Vue.set(localState, 'fetchingRepos', fetching);
  },
};

export const getters = {
  commits: ({ commits }) => commits,
  repos: ({ repos }) => repos,
  fetchingRepos: ({ fetchingRepos }) => fetchingRepos,
  fetchingCommits: ({ fetchingCommits }) => fetchingCommits,
};

export default {
  namespaced: true,
  state() { return Object.assign({}, state); },
  mutations,
  getters,
  actions,
};
