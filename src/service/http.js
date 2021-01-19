/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import http from "./base";
import Vue from "vue";
import { search } from "@/utils";

const app = new Vue();

const api = {
  busIndex: "/api/teacher/busIndex", // 首页数据
  schedulerList: "/api/teacher/schedulerList", // 获取班次信息详情
  getStudentInfo: "/api/teacher/getStudentInfo", // 查询学生信息
  getStationList: "/api/teacher/getStationList", // 站点列表
  saveRecord: "/api/teacher/saveRecord", // 补录
  historyList: "/api/teacher/historyList", // 历史记录
  historyInfo: "/api/teacher/historyInfo", // 记录详情
  indexOffRecord: "/api/teacher/indexOffRecord", // 首页下车记录
  indexOnRecord: "/api/teacher/indexOnRecord" // 首页上车记录
};

const methods = {};

Object.keys(api).forEach((key, index) => {
  methods[key] = param =>
    response(
      (p => {
        const data = {
          token: search("token"),
          ...p
        };
        return http.post(api[key], data);
      })(param)
    )
      .then(res => [null, res])
      .catch(err => [err, null]);
});

function response(promise) {
  return new Promise((resovle, reject) => {
    promise
      .then(res => {
        if (res.status === 200 && res.data.code === 200) {
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
