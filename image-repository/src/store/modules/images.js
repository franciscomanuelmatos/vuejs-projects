import imgur from '../../api/imgur';
import { router } from '../../main';

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
  },
  async uploadImages({ rootState }, images) {
    const { token } = rootState.auth;
    await imgur.uploadImages(token, images);
    router.push('/');
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}