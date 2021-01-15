import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { firestorePlugin } from 'vuefire'

import { BootstrapVue, VBTogglePlugin } from 'bootstrap-vue'
import './assets/scss/main.scss'

Vue.use(BootstrapVue)
Vue.use(VBTogglePlugin)
Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
