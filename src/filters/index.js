import Vue from "vue";
// import $ from "@/i18n/index";

const filters = {};

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
