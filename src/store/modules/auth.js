import api from '../../api/imgur';
import qs from 'qs';
import { router } from '../../main';

//persisting local storage
const state = {
  // token: null
  token: window.localStorage.getItem('imgur_token')
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
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    //import router, send user to root route now
    router.push('/');
  },
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_token');
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
