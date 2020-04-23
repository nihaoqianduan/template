/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import http from "./base";
import Vue from "vue";

const app = new Vue();

const api = {};

const methods = {};

Object.keys(api).forEach((key, index) => {
  methods[key] = param =>
    response((p => http.post(api[key], p))(param))
      .then(res => [null, res])
      .catch(err => [err, null]);
});

function response(promise) {
  return new Promise((resovle, reject) => {
    promise
      .then(res => {
        if (
          res.status === 200 &&
          (res.data.returncode === "100" || res.data.code === "SUCCESS")
        ) {
          resovle(res.data);
        } else if (res.data.returncode === "ERROR") {
          console.log(res.data);
          app.$toast("服务器出错，请稍候重试！");
        } else if (res.data.returncode === "BSNERROR") {
          app.$toast(res.data.returnmsg);
        } else if (res.data.code === "ERROR") {
          app.$toast(res.data.msg);
        } else {
          console.log(res.data);
          app.$toast(res.data.returnmsg);
        }
      })
      .catch(error => {
        console.log(error);
      });
  });
}

export default methods;
