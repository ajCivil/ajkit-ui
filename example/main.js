import Vue from 'vue'
import App from './App.vue'

import Demo from '../components/lib/demo'
import '../components/css/demo.scss'
Vue.use(Demo)
// import ajKitUI from '../dist/index.umd.js'
// import '../dist/css/index.css'
// Vue.use(ajKitUI)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
