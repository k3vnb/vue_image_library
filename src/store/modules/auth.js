import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null
};

//getters is ES6 shortform for const getters = { isLoggedIn: (state) => { return !!state.token}};
const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  login: () => {
    api.login();
  },
  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token)
  },
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
