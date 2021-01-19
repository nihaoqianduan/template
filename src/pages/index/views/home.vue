<template>
  <h-container class="home" v-if="loading">
    <div class="header">
      <div class="title">{{ $t("title") }}</div>
      <div class="desc">{{ busData.date }} {{ busData.week }}</div>
      <img
        :src="busData.avatar | formatDetaultAvatar"
        class="avatar"
        alt=""
        :onerror="formatAvatar"
      />
    </div>
    <bus-card
      v-if="busData.schedulerList.length > 0"
      :busList="busData.schedulerList"
      :swiperIndex.sync="swiperIndex"
    ></bus-card>
    <div class="main" v-if="busData.schedulerList.length > 0">
      <h-box>
        <h-tabs v-model="active" history />
        <component
          :is="componentId"
          unfold
          :schedulerId="schedulerObj.schedulerId"
          :schedulerName="schedulerObj.schedulerName"
        ></component>
      </h-box>
    </div>
  </h-container>
</template>
<script>
import BusCard from "../containers/BusCard";
import HBox from "../components/HBox";
import HTabs from "../components/HTabs";
import GetIn from "../containers/GetIn";
import GetOut from "../containers/GetOut";
export default {
  name: "Home",
  components: { BusCard, HBox, HTabs, GetIn, GetOut },
  data() {
    return {
      active: 0,
      busData: {},
      swiperIndex: 0,
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
    schedulerObj() {
      let obj = {};
      if (this.busData.schedulerList && this.busData.schedulerList.length > 0) {
        obj = this.busData.schedulerList[this.swiperIndex];
      }
      return obj;
    },
  },
  async created() {
    this._busIndex();
    this._getStationList();
  },
  methods: {
    // 首页数据
    async _busIndex() {
      const [err, res] = await this.$http.busIndex();
      if (err) return;
      this.busData = res.data;
      for (let i = 0; i < res.data.schedulerList.length; i++) {
        const item = res.data.schedulerList[i];
        if (item.currentFlag) {
          this.swiperIndex = i;
        }
      }
      this.loading = true;
    },
    _getStationList() {},
  },
};
</script>
<style lang="less" scoped>
.home {
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
</style>
