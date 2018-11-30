import imgur from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  finalizeLogin: ({ commit }, urlHash) => {
    const { access_token } = qs.parse(urlHash.replace('#', ''));
    commit('setToken', access_token);
  },
  login: () => {
    imgur.login();
  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}