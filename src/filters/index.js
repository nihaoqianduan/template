import Vue from "vue";
import $ from "@/i18n/index";

const filters = {
  formatFlag(v, type) {
    const map = {
      0: $.t("tab2"),
      "-1": $.t("tab3")
    };
    const obj = {
      0: $.t("tab6"),
      "-1": $.t("tab7")
    };
    return Number(type) === 1 ? map[v] : Number(type) === 2 && obj[v];
  },
  formatFlagB(v) {
    const obj = {
      0: $.t("tab6"),
      "-1": $.t("tab7")
    };
    return obj[v];
  },
  formatStatus(v) {
    const map = [$.t("status4"), $.t("status4")];
    return map[v];
  },
  formatType(v) {
    const obj = {
      1: "上车",
      2: "下车"
    };
    return obj[v];
  },
  formatDetaultAvatar(v) {
    if (!v || v === "null") {
      return require("@/assets/images/test2.png");
    }
    return v;
  }
};

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});
