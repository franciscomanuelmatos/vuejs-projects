import imgur from '../../api/imgur';

const state = {
  images: []
}

const getters = {
  getAllImages: state => state.images
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
}

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await imgur.fetchImages(token);
    const { data } = response.data;
    commit('setImages', data);
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}