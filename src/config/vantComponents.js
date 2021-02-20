/**
 *  vant 组件全局注册
 *  2021-02-20 何志兵
 */
import Vue from "vue";
import { Field, Button, CellGroup } from "vant";

const obj = {
  Field,
  Button,
  CellGroup
};

Object.keys(obj).forEach((key) => {
  Vue.component(obj[key].name, obj[key]);
});
