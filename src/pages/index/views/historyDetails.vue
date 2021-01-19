<template>
  <h-container class="history-details" v-if="loading">
    <div class="header">
      <div class="title">校车查询</div>
      <div class="desc">{{ busData.date }} {{ busData.week }}</div>
      <img
        :src="busData.avatar | formatDetaultAvatar"
        class="avatar"
        alt=""
        :onerror="formatAvatar"
      />
    </div>
    <div class="bus-card">
      <div class="bus-swiper-slide">
        <div class="title">
          <span>{{ busData.lineName }}</span>
        </div>
        <div class="footer">
          <div class="left">
            <div class="left-tag">{{ busData.schedulerName }}</div>
            <div>{{ busData.startTime }}发车</div>
          </div>
          <div class="right">{{ busData.busNumber }}</div>
        </div>
      </div>
      <img :src="bg" class="bg" alt="" />
    </div>
    <div class="main">
      <h-box>
        <h-tabs v-model="active" />
        <component
          :is="componentId"
          :schedulerId="schedulerId"
          :schedulerName="busData.schedulerName"
        ></component>
      </h-box>
    </div>
  </h-container>
</template>
<script>
import HBox from "../components/HBox";
import HTabs from "../components/HTabs";
import GetIn from "../containers/GetIn";
import GetOut from "../containers/GetOut";
import dayjs from "dayjs";
export default {
  name: "HistoryDetails",
  components: { HBox, HTabs, GetIn, GetOut },
  data() {
    return {
      active: 0,
      busData: {},
      swiperIndex: 0,
      bg: require("@/assets/images/bg.png"),
      schedulerId: "",
      loading: false,
    };
  },
  computed: {
    formatAvatar() {
      return `this.src='${require("@/assets/images/test2.png")}'`;
    },
    componentId() {
      const map = ["GetIn", "GetOut"];
      return map[this.active];
    },
  },
  created() {
    this.schedulerId = this.$route.query.schedulerId;
    this._historyInfo();
  },
  methods: {
    async _historyInfo() {
      const [err, res] = await this.$http.historyInfo({
        schedulerId: this.$route.query.schedulerId,
        date: dayjs().format("YYYYMMDD"),
      });
      if (err) return;
      // console.log(res);
      this.busData = res.data;
      this.loading = true;
    },
  },
};
</script>
<style lang="less" scoped>
.bus-card {
  padding: 0.1rem 0.32rem 0;
  box-sizing: border-box;
  position: relative;

  & > .bg {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: -1px;
    right: 0;
    // z-index: 99;
    z-index: 1;
  }
}
.history-details {
  font-size: 0.32rem;
  background-color: #ffffff;
  position: relative;
  & > .header {
    position: relative;
    padding: 0.32rem;
    & > .title {
      font-size: 0.48rem;
      color: #222;
      font-weight: 800;
      margin-bottom: 0.2rem;
    }
    & > .desc {
      font-size: 0.22rem;
      color: #666;
      background-color: #f0f5ff;
      width: 2rem;
      height: 0.5rem;
      text-align: center;
      line-height: 0.5rem;
      border-radius: 0.25rem;
    }
    & > .avatar {
      width: 1.2rem;
      height: 1.2rem;
      position: absolute;
      right: 0.32rem;
      top: 50%;
      transform: translateY(-50%);
      border-radius: 50%;
      text-align: center;
    }
  }
  & > .main {
    // padding: 0 0.32rem;
    // position: relative;
    // top: -0.3rem;
    padding: 0 0.32rem 0.32rem;
    position: absolute;
    width: 100%;
    z-index: 2;
    top: 4rem;
    // top: -12px;
    // transform: translateY(-12px);
    background-color: #ffffff;
  }
}

.bus-swiper-slide {
  width: 100%;
  // width: 6.66rem;
  height: 2.4rem;
  background: linear-gradient(90deg, #3377ff 0%, #59a1ff 100%);
  border-radius: 0.24rem 0.24rem 0px 0px;
  color: #ffffff;
  padding: 0.36rem 0.32rem;
  box-sizing: border-box;

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
</style>