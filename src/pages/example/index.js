import Vue from "vue";
import App from "./App";
import router from "./router";

import http from "@/service/http";

import "@/filters";

import "@/components/base";

Vue.config.productionTip = false;

Vue.prototype.$http = http;

// eslint-disable-next-line no-new
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
