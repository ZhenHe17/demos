// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '../src/router/index'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/reset.css'
import utils from './packages/utils'

axios.defaults.baseURL = '//localhost:3000'
axios.defaults.timeout = 6000

Vue.prototype.$http = axios
Vue.prototype.$utils = utils
Vue.use(ElementUI)

Vue.router = router

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
