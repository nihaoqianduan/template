<template>
  <oreo-popup
    class="pic-preview"
    v-model="visible"
    @click-overlay="handleOverlay"
    :fullscreen="fullscreen"
    :overlay="false"
    transition="oreo-zoom"
    @touchmove.prevent
    @click.native.self="close"
  >
    <div class="preview-content" @click.self="close">
      <swiper :options="swiperOption" ref="mySwiper" style="width:100%">
        <swiper-slide class="wrapper" v-for="(item, index) in images" :key="index">
          <img class="preview-img" :src="item" alt />
        </swiper-slide>
      </swiper>
      <div class="pagination">{{count}}/{{sum}}</div>
    </div>
  </oreo-popup>
</template>
<script>
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  name: 'pic-preview',
  components: { swiper, swiperSlide },
  data () {
    return {
      fullscreen: true,
      images: [],
      count: 1,
      swiperOption: {
        // loop: true,
        on: {
          slideChange: () => {
            // console.log(this.$refs.mySwiper.swiper.activeIndex)
            this.count = this.$refs.mySwiper.swiper.activeIndex + 1;
          },
          click: () => {
            // this.close()
          }
        }
      },
      visible: false
    }
  },
  computed: {
    sum () {
      return this.images.length;
    }
  },
  methods: {
    handleOverlay () {
      this.close();
    },
    close () {
      this.visible = false;
    },
    show (index = -1) {
      if (index < 0) {
        console.error('入参格式错误，请检查入参');
        return;
      }
      this.$refs.mySwiper.swiper.slideTo(index)
      this.visible = true;
      this.count = index + 1;
    }
  }
}
</script>
<style lang="less" scoped>
.pic-preview {
  background-color: #000000;
  color: #ffffff;
  .preview-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .wrapper {
    width: 100%;
    height: 5.13rem;
    .preview-img {
      width: 100%;
      height: 100%;
    }
  }
  .pagination {
    font-size: 0.28rem;
    text-align: right;
    position: absolute;
    right: 0.3rem;
    bottom: 0.28rem;
  }
}
</style>
