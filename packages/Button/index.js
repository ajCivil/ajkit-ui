import Button from "./lib/Button.vue";

Button.install = function (Vue) {
  Vue.component(Button.name, Button);
};  

export default Button;