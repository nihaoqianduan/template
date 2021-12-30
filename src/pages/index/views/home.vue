<template>
  <h-container class="home">
    <h1>Hello Vue-template!</h1>
    <van-button @click="handleOnClick('center')">自定义popup</van-button>
    <van-button @click="handleOnClick('top')">自定义popup Top</van-button>
    <van-button @click="handleOnClick('left')">自定义popup Left</van-button>
    <van-button @click="handleOnClick('right')">自定义popup Right</van-button>
    <van-button @click="handleOnClick('bottom')">自定义popup Bottom</van-button>
  </h-container>
</template>
<script>
import TestPopup from "../components/testPopup.vue";
export default {
  name: "Home",
  methods: {
    handleOnClick(position) {
      this.$NcpPopup(TestPopup, {
        childProps: {
          title: "演示title",
        },
        position, // 默认值  center
        on: {
          // 组件内部事件监听处理
          ok: (done, res) => {
            // res 组件向外传递内容
            console.log(res);
            setTimeout(() => {
              done();
            }, 1500);
          },
        },
      });
    },
  },
};
</script>
