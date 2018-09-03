const state = {
  token: null
};

//getters is ES6 shortform for const getters = { isLoggedIn: (state) => { return !!state.token}};
const getters = {
  isLoggedIn: state => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  }
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};
