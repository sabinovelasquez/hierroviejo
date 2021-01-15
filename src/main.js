import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import './assets/scss/main.scss'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
