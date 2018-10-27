import Vue from 'vue';
import Vuex from 'vuex';
import api from './modules/api';
import experiences from './modules/experiences';
import github from './modules/github';
import jobs from './modules/jobs';
import projects from './modules/projects';
import stackoverflow from './modules/stackoverflow';

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    state: {},
    actions: {
      nuxtServerInit: async ({ dispatch, commit }) => {
        return dispatch('api/checkStatus');
      },
    },
    mutations: {},
    getters: {},
    modules: {
      api,
      experiences,
      github,
      jobs,
      projects,
      stackoverflow,
    },
  });
}
