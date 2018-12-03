import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

import store from './store';
import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.config.productionTip = false;

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm, beforeRouteEnter: checkAuth },
    { path: '/oauth2/callback', component: AuthHandler, beforeRouteEnter: checkAuth }
  ],
  mode: 'history'
});

function checkAuth(to, from, next) {
  if (!store.state.token) {
    next('/')
  } else {
    next()
  }
}

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
