import Vue from "vue";
import VueI18n from "vue-i18n";

import zh from "./zh";
import en from "./en";

import { search } from "@/utils";

Vue.use(VueI18n);

const language = search("language") || "zh";

const i18n = new VueI18n({
  locale: language,
  messages: {
    zh,
    en
  }
});

export default i18n;
