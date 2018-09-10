import api from '../../api/imgur';

const state = {
  image: []
};

const getters = {
  allImages: state => state.images
}

const actions = {
  async fetchImages({ rootState }) {
    //rootState is all of state held in our Vuex Store -- rootState gives us ability to reach into other modules and access data/state stored within. So rootState.auth is accessing the auth module
    rootState.auth.token;
    //above line can also be written as: const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
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
