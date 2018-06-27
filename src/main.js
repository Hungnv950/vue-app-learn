// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'

import App from './App'
import router from './router'
import Default from '@/layouts/Default'
import NoNav from '@/layouts/NoNav'

Vue.config.productionTip = false;

Vue.use(VueFire);

Vue.component('default-layout', Default);
Vue.component('no-nav-layout', NoNav);

Vue.config.productionTip = false;

import firebase from './configFirebase'

firebase.auth().onAuthStateChanged(function (user) {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
  });
});
