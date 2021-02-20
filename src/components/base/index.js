import Vue from "vue";
import HContainer from "./HContainer";
import HForm from "./HForm";
const a = '';
const hComponent = [HContainer, HForm];

const install = function(vue) {
  vue.component(this.name, this);
};

hComponent.forEach(item => {
  item.install = install;

  Vue.use(item);
});
