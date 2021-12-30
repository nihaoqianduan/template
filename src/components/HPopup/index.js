/* eslint-disable no-unused-vars */
/**
 * 自定义popup插件
 * 2021-11-18 hzb
 */
const popupJsx = {
  data() {
    return {
      message: "",
      show: false,
      position: "center",
      on: {},
      childProps: {}
    };
  },
  render(h) {
    var self = this;
    return h(
      "van-popup",
      {
        props: {
          value: self.show,
          position: self.position,
          "close-on-click-overlay": false,
          round: true
        },
        on: {
          "click-overlay": () => {
            self.show = false;
          }
        }
      },
      [
        h(self.message, {
          props: self.childProps,
          on: {
            close(e) {
              if (self.on && self.on.close) {
                self.on.close(() => {
                  self.show = false;
                }, e);
              } else {
                self.show = false;
              }
            },
            ok(e) {
              if (self.on && self.on.ok) {
                self.on.ok(() => {
                  self.show = false;
                }, e);
              } else {
                self.show = false;
              }
            }
          }
        })
      ]
    );
  }
};

// 创建popup构造器
let PopupConstrutor = null;

export default {
  install(Vue, options) {
    PopupConstrutor = Vue.extend(popupJsx);

    let zdyPopup = document.querySelector(".zdy-popup");
    if (!zdyPopup) {
      zdyPopup = document.createElement("div");
      zdyPopup.className = "zdy-popup";
      document.body.appendChild(zdyPopup);
    }

    const zdyPopupInstall = new PopupConstrutor().$mount(".zdy-popup");

    Vue.prototype.$NcpPopup = function (message, option) {
      zdyPopupInstall.message = message;
      zdyPopupInstall.show = true;

      Object.assign(zdyPopupInstall, option);
    };
  }
};
