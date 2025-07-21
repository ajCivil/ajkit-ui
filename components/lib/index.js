import Demo from './demo/index.js'

const components = [
  Demo
]


const install = function(Vue) {
  if(install.installed) return
  install.installed = true
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

//全部引入
const KIT = {
  install,
  Demo
}

export default KIT

