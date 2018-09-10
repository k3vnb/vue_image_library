import api from '../../api/imgur'

const state = {
  image: []
};

const getters = {
  allImages: state => state.images
}

const actions = {
  fetchImages() {
    //rootState is all of state held in our Vuex Store -- rootState gives us ability to reach into other modules and access data/state stored within. So rootState.auth is accessing the auth module
    api.fetchImages({ rootState }) {
      rootState.auth.token
      //above line can also be written as: const { token } = rootState.auth;
      api.fetchImages();
    };
  }
}

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  }
};
