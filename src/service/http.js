import http from './base';
import Vue from 'vue';

const app = new Vue();

const api = {};

const methods = {};

Object.keys(api).forEach((key, index) => {
  methods[key] = (param) =>
    response(((p) => http.post(api[key], p))(param))
      .then((res) => [null, res])
      .catch((err) => [err, null]);
});

function response(promise) {
  return new Promise((resolve, reject) => {
    promise
      .then((res) => {
        if (res.status === 200 && res.data.code === 200) {
          resolve(res.data);
        } else {
          console.warn(res.data);
          app.$toast(res.data.returnmsg);
        }
      })
      .catch((error) => {
        console.warn(error);
      });
  });
}

export default methods;
