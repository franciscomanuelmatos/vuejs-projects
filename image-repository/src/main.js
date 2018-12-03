import Vue from 'vue'
import App from './App.vue'
import store from './store';
import VueRouter from 'vue-router';

import AuthHandler from './components/AuthHandler';
import ImageList from './components/ImageList';
import UploadForm from './components/UploadForm';

Vue.config.productionTip = false

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    { path: '/', component: ImageList },
    { path: '/upload', component: UploadForm },
    { path: '/oauth2/callback', component: AuthHandler }
  ],
  mode: 'history'  
});

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
