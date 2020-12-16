// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import http from "@/service/http";

import "@/filters";

import "@/components/base";
import { Toast } from "vant";

Vue.config.productionTip = false;

Vue.use(Toast);
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
