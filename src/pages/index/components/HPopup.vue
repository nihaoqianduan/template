<template>
  <van-overlay :show="show" z-index="99" get-container="body">
    <div class="h-popup">
      <slot></slot>
      <img :src="close" class="popup-close" alt="" @click="handleOnClick" />
    </div>
  </van-overlay>
  <!-- <van-popup v-model="show" get-container="body">
    <div class="h-popup">
      <slot></slot>      
    </div>
    <img :src="close" class="popup-close" alt="" @click="handleOnClick" />
  </van-popup> -->
</template>
<script>
import VanOverlay from "vant/lib/overlay/index";
import { Popup } from "vant";
export default {
  name: "HPopup",
  components: { VanOverlay, [Popup.name]: Popup },
  props: {
    value: Boolean,
  },
  data() {
    return {
      close: require("@/assets/images/close.png"),
    };
  },
  computed: {
    show: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    handleOnClick() {
      this.show = false;
    },
  },
};
</script>
<style lang="less" scoped>
.h-popup {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.popup-close {
  width: 0.64rem;
  height: 0.64rem;
  border-radius: 50%;
  margin: 0.4rem auto 0;
}
</style>