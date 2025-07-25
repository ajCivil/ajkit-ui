import Vue from 'vue'
import App from './App.vue'

import ajKitUI from "ajkit-ui"
Vue.use(ajKitUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
