// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import http from "@/service/http";

import "@/filters";

import "@/components/base";
import { Toast } from "vant";

import VueAwesomeSwiper from "vue-awesome-swiper";

// import style (>= Swiper 6.x)
import "swiper/swiper-bundle.css";

import i18n from "@/i18n/index";

Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false;

Vue.use(Toast);
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  i18n,
  router,
  components: { App },
  template: "<App/>"
});
