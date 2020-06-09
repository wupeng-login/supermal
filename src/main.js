
import App from './App.vue'
import store from './store'
import router from './router'
Vue.config.productionTip = false
import Vue from 'vue'
Vue.prototype.$bus = new Vue()
new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
