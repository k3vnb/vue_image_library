import Vuex from 'vuex';
import Vue from 'vue';
import auth from './modules/auth';

//we are telling Vue to use Vuex as a data store, library, or middleware
Vue.use(Vuex);

//store is the overall collections of modules, state, getters
export default new Vuex.Store({
  modules: {
    auth
  }
})
