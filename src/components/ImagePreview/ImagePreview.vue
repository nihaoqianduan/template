<template>
  <popup v-model="visible" class="pic-preview">
    <div class="preview-content" @click.self="close">
      <swipe :initial-swipe="index">
        <swipe-item v-for="(item, index) in images" :key="index">
          <img class="preview-img" :src="item" alt />
        </swipe-item>
      </swipe>
    </div>
  </popup>
</template>
<script>
import { Popup, Swipe, SwipeItem } from "vant";
export default {
  name: "pic-preview",
  components: { Popup, Swipe, SwipeItem },
  data() {
    return {
      images: [],
      index: 0,
      visible: false
    };
  },
  methods: {
    close() {
      this.visible = false;
    },
    show(index = 0) {
      if (index < 0) {
        console.error("入参格式错误，请检查入参");
        return;
      }
      // console.log(index);
      this.visible = true;
      this.index = index - 0;
    }
  }
};
</script>
<style lang="less" scoped>
.pic-preview {
  background-color: #000000;
  color: #ffffff;
  .preview-content {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .preview-img {
    width: 100vw;
    height: 5.13rem;
  }
}
</style>
