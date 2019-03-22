import Vue from 'vue';
import HContainer from './HContainer';
import HForm from './HForm';

const hComponent = [HContainer, HForm]

const install = function (Vue) {
    Vue.component(this.name, this)
}

hComponent.forEach((item) => {
    item.install = install;

    Vue.use(item)
})
