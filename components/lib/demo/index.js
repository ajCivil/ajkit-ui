// import './style.css'
import Demo from './demo.vue'
Demo.install = (app) => {
  app.component(Demo.name, Demo)
}

export default Demo