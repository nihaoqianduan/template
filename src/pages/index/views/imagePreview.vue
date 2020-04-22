<template>
  <h-container class="main">
    <img
      class="test-image"
      v-for="(item, index) in imgs"
      :key="index"
      :src="item"
      alt
      @click="handleOnClick(index)"
    />
  </h-container>
</template>
<script>
import ImagePreview from '@/components/ImagePreview';
export default {
  name: 'e-image-preview',
  data () {
    return {
      imgs: [
        'http://image4.xyzs.com/upload/f2/fc/324/20150505/143075817383039_0.jpg',
        'http://img3.imgtn.bdimg.com/it/u=239142441,4069198012&fm=26&gp=0.jpg',
        'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1411/20/c4/82016_82016_1416494431000.jpg',
        'http://res.img.ifeng.com/2012/0813/wm_dc81ba65f7283add4bf3bd6e88fba20c.jpg'
      ]
    }
  },
  created () {
    this.imagePreview = new ImagePreview(this.imgs);
  },
  methods: {
    handleOnClick (index) {
      this.imagePreview.show(index)
    }
  }
}
</script>
<style lang="less">
.main {
  font-size: 0.3rem;
  .test-image {
    width: 100%;
    height: 100%;
  }
}
</style>
