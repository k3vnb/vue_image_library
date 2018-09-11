import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';
import Calc from './components/Calc';
import store from './store/index';

Vue.use(VueRouter);

export const router = new VueRouter({
  //mode: history here will change hash router to a browser router
  mode: 'history',
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler },
    { path: '/calc', component: Calc }
  ]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
