import Vue from 'vue'
import App from './App.vue'

import Demo from '../components/demo'
Vue.use(Demo)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
