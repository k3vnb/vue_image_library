import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  images: []
};

const getters = {
  allImages: state => state.images
}

const actions = {
  async fetchImages({ rootState, commit }) {
    //rootState is all of state held in our Vuex Store -- rootState gives us ability to reach into other modules and access data/state stored within. So rootState.auth is accessing the auth module
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState }, images){

    // get access token
    const { token } = rootState.auth;

    // call api module to perform upload
    await api.uploadImages(images, token);

    //redirect our user to ImageList component
    router.push('/');

  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
