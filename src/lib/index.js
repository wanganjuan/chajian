import wxy from './wxy'

export default {
  install (Vue, options) {
    Vue.component('wxy-msg', wxy)
    Vue.prototype.$msg = wxy
  }
}