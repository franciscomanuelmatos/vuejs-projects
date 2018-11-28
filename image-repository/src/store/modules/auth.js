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
  finalizeLogin: () => {
    const urlString = "https://api.imgur.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&response_type=token&state=APPLICATION_STATE";
  },
  login: () => {

  }
}

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
}