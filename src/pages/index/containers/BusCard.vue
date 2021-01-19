<template>
  <div class="bus-card">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        class="bus-swiper-slide"
        v-for="(item, index) in busList"
        :key="index"
      >
        <div class="title" @click="handleOnClickDetails(item, index)">
          <span>{{ item.lineName }}</span>
        </div>
        <div class="footer" @click="handleOnClickDetails(item, index)">
          <div class="left">
            <div class="left-tag">
              {{ item.schedulerName }}
            </div>
            <div>{{ item.startTime }}发车</div>
          </div>
          <div class="right">
            {{ item.busNumber }}
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <img :src="bg" class="bg" alt="" />
    <h-popup v-model="show">
      <div class="bus-popup">
        <div class="header">车次信息</div>
        <swiper
          ref="mySwiper2"
          :options="swiperOptions2"
          @click-slide="handleOnClickPopup"
        >
          <swiper-slide
            class="popup-swiper-slide"
            v-for="(item, index) in busList"
            :key="index"
          >
            <div
              class="info"
              :class="{ active: info == index }"
              @click="info = index"
            >
              <div class="info-title">{{ item.schedulerName }}</div>
              <div class="info-value">{{ item.startTime }}发车</div>
            </div>
          </swiper-slide>
        </swiper>
        <div class="main">
          <div class="list">
            <div class="list-label">
              <img :src="address" class="icon" alt="" />
              <span>{{ $t("label1") }}</span>
            </div>
            <div class="list-value">{{ schedulingDetails.lineName }}</div>
          </div>
          <div class="list">
            <div class="list-label">
              <img :src="car" class="icon" alt="" />
              <span>{{ $t("label2") }}</span>
            </div>
            <div class="list-value">
              <!-- 宇通校车 ·  -->
              {{ schedulingDetails.busNumber }}
            </div>
          </div>
          <div class="list">
            <div class="list-label">
              <img :src="teacher" class="icon" alt="" />
              <span>{{ $t("label3") }}</span>
            </div>
            <div class="list-value">
              <span
                >{{ schedulingDetails.teacherName }} ·
                {{ schedulingDetails.teacherPhone }}</span
              >
              <a :href="'tel:' + schedulingDetails.teacherPhone">
                <img class="icon-phone" :src="phone" alt="" />
              </a>
            </div>
          </div>
          <div class="list">
            <div class="list-label">
              <img :src="siji" alt="" class="icon" />
              <span>{{ $t("label4") }}</span>
            </div>
            <div class="list-value">
              <span
                >{{ schedulingDetails.driverName }} ·
                {{ schedulingDetails.driverPhone }}</span
              >
              <a :href="'tel:' + schedulingDetails.driverPhone">
                <img class="icon-phone" :src="phone" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </h-popup>
  </div>
</template>
<script>
import HPopup from "../components/HPopup";
import dayjs from "dayjs";
export default {
  name: "BusCard",
  components: { HPopup },
  props: {
    busList: {
      type: Array,
    },
    swiperIndex: [String, Number],
  },
  data() {
    const self = this;
    return {
      bg: require("@/assets/images/bg.png"),
      address: require("@/assets/images/address.png"),
      teacher: require("@/assets/images/teacher.png"),
      siji: require("@/assets/images/siji.png"),
      car: require("@/assets/images/car2.png"),
      phone: require("@/assets/images/phone.png"),
      show: false,
      swiperOptions: {
        spaceBetween: 16,
        on: {
          slideChange: function () {
            // console.log(this.activeIndex);
            self.$emit("update:swiperIndex", this.activeIndex);
          },
        },
      },
      swiperOptions2: {
        slidesPerView: 2,
        spaceBetween: 16,
      },
      info: 0,
      scheduling: [],
    };
  },
  computed: {
    formatStyle() {
      return {
        "background-image": `url(${this.bg})`,
      };
    },
    schedulingDetails() {
      let obj = {};
      const id = this.busList[this.info].schedulerId;
      if (this.scheduling.length > 0) {
        for (let i = 0; i < this.scheduling.length; i++) {
          const item = this.scheduling[i];
          if (item.schedulerId == id) {
            obj = item;
          }
        }
      }
      return obj;
    },
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(this.swiperIndex);
  },
  methods: {
    async handleOnClickDetails(item, index) {
      console.log("66666");
      const [err, res] = await this.$http.schedulerList({
        date: dayjs().format("YYYYMMDD"),
      });
      if (err) return;
      this.scheduling = res.data;
      this.info = index;
      this.show = true;
    },
    handleOnClickPopup(index) {
      this.info = index;
    },
  },
};
</script>
<style lang="less" scoped >
.bus-swiper-slide {
  width: 100%;
  height: 2.4rem;
  background: linear-gradient(90deg, #3377ff 0%, #59a1ff 100%);
  border-radius: 0.24rem 0.24rem 0px 0px;
  color: #ffffff;
  padding: 0.36rem 0.32rem;
  box-sizing: border-box;
  position: relative;

  & > .title {
    margin-bottom: 0.2rem;
    display: flex;
    align-items: center;
    font-size: 0.38rem;
    font-weight: 800;
    .icon-dx {
      width: 0.4rem;
      height: 0.12rem;
      margin: 0 0.16rem;
    }
  }

  & > .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // position: absolute;
    // left: 0.32rem;
    // right: 0.32rem;
    // z-index: 999;
    .left {
      display: flex;
      align-items: center;
      .left-tag {
        color: #3377ff;
        font-size: 0.22rem;
        padding: 3px 8px;
        border-radius: 0.1rem;
        background-color: #ffffff;
        margin-right: 0.12rem;
      }
    }
    .right {
      width: 1.4rem;
      height: 0.4rem;
      border: 1px solid #ffffff;
      border-radius: 0.2rem;
      text-align: center;
      line-height: 0.4rem;
      font-size: 0.22rem;
    }
  }
}

.bus-card {
  padding: 0.1rem 0.32rem 0;
  box-sizing: border-box;
  position: relative;

  & > .bg {
    width: 100%;
    position: absolute;
    left: 0;
    // bottom: -1px;
    bottom: -0.14rem;
    right: 0;
    // z-index: 99;
    z-index: 1;
    // z-index: -1;
  }
}
.bus-popup {
  width: 6.22rem;
  box-sizing: border-box;
  font-size: 0.3rem;
  color: #333;
  position: relative;
  padding: 0.4rem;
  background-color: #ffffff;
  border-radius: 0.32rem;

  & > .header {
    text-align: center;
    font-size: 0.36rem;
    margin-bottom: 0.4rem;
    color: #222;
    font-weight: 800;
  }
  & > .info-list {
    width: 100%;
    display: -webkit-box;
    overflow-x: scroll;
  }

  .popup-swiper-slide {
    padding-bottom: 0.2rem;
  }

  .info {
    width: 2.56rem;
    background-color: #f0f5ff;
    border-radius: 0.16rem;
    padding: 0.26rem 0.24rem;
    margin-right: 0.3rem;
    color: #999;
    .info-title {
      font-size: 0.26rem;
    }
    .info-value {
      font-size: 0.3rem;
      font-weight: 800;
    }
    &.active {
      background: linear-gradient(90deg, #406ffd 0%, #5890ff 100%);
      color: #ffffff;
      position: relative;
      &::after {
        content: "";
        width: 0.2rem;
        height: 0.2rem;
        background: linear-gradient(90deg, #406ffd 0%, #5890ff 100%);
        transform: translateX(-50%) rotate(45deg);
        position: absolute;
        left: 50%;
        bottom: -0.1rem;
      }
    }
  }

  & > .main {
    & > .list {
      padding-top: 0.4rem;
      margin-bottom: 0.2rem;
      .list-label {
        color: #999999;
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;
        .icon {
          width: 0.32rem;
          height: 0.32rem;
          margin-right: 0.12rem;
        }
      }
      .list-value {
        color: #222;
        font-size: 0.3rem;
        padding-left: 0.44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .icon-phone {
          width: 0.48rem;
          height: 0.48rem;
        }
      }
    }
  }
}
</style>