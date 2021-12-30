/**
 *  vant 组件全局注册
 *  2021-02-20 何志兵
 */
import Vue from "vue";
import { Field, Button, CellGroup, Toast, Popup, Form } from "vant";

import NcpPopup from '@/components/Hpopup';


const obj = {
  Field,
  Button,
  CellGroup,
  Toast,
  Popup,
  Form
};

Vue.prototype.$toast = Toast;

Object.keys(obj).forEach((key) => {
  Vue.component(obj[key].name, obj[key]);
});

Vue.use(NcpPopup);
