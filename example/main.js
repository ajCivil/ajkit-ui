import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import ajKitUI from './index'
import '../lib/'
Vue.use(ajKitUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
