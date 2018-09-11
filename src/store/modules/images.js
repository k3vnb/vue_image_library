import api from '../../api/imgur';

const state = {
  image: []
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
  async uploadImages({ commit }, images){
    console.log(images);
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
