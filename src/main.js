// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueFullpage from 'vue-fullpage.js'
import VueTouch from 'vue-touch'
import 'lib-flexible'
import uweb from 'vue-uweb'
import store from './assets/js/store'

Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(VueFullpage)

Vue.use(uweb,'YOUR_SITEID_HERE')


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
