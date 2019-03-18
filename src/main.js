// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'oreo-ui/components/theme-oreo/src/index.less';
import Vue from 'vue'
import App from './App'
import router from './router'

import oreoVue from 'oreo-ui/components/index';

import '@/filters'

Vue.config.productionTip = false;

Vue.use(oreoVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
