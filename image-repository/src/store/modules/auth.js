import imgur from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

const state = {
  token: localStorage.getItem('imgur_token')
}

const getters = {
  isLoggedIn: state => !!state.token
}

const actions = {
  logout: ({ commit }) => {
    localStorage.removeItem('imgur_token');
    commit('setToken', null);
    router.push('/');
  },
  finalizeLogin: ({ commit }, urlHash) => {
    const { access_token } = qs.parse(urlHash.replace('#', ''));
    localStorage.setItem('imgur_token', access_token);
    commit('setToken', access_token);
    router.push('/');
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