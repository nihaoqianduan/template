import Vue from "vue";
import VueI18n from "vue-i18n";

import zh from "./zh";
import en from "./en";

Vue.use(VueI18n);

// const wjdc_lang = window.localStorage.getItem("wjdc_lang");

// let lang = wjdc_lang || "zh";

let lang = "zh";

const i18n = new VueI18n({
  locale: lang,
  messages: {
    zh,
    en
  }
});

export default i18n;
