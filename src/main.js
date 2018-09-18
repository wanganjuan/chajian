import Vue from 'vue'
import App from './App.vue'
import Wj from './lib/index'
Vue.use(Wj)
new Vue({
  el: '#app',
  render: h => h(App)
})
