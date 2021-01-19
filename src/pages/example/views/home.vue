<template>
  <h-container class="home">
    <!-- <cell-group>
      <cell v-for="(item, index) in list" :key="index" :title="item" @click="handleOnClick(item)"></cell>
    </cell-group> -->
    <div id="container"></div>
  </h-container>
</template>
<script>
import { Cell, CellGroup } from "vant";
import "vant/lib/cell/style/index";
import "vant/lib/cell-group/style/index";
export default {
  name: "home",
  components: {
    Cell,
    CellGroup,
  },
  data() {
    return {
      list: ["Form", "ImagePreview"],
      car: require("@/assets/images/car2.png"),
    };
  },
  mounted() {
    // console.log(window.BMapGL);
    var BMapGL = window.BMapGL;
    var map = new BMapGL.Map("container"); // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(116.404, 39.915), 14); // 初始化地图,设置中心点坐标和地图级别
    // map.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

    // 自定义标记图标
    var icon = new BMapGL.Icon(this.car, new BMapGL.Size(32, 32));

    // 创建点标记
    var marker1 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.925));
    var marker2 = new BMapGL.Marker(new BMapGL.Point(116.404, 39.915));
    var marker3 = new BMapGL.Marker(new BMapGL.Point(116.395, 39.935));
    var marker4 = new BMapGL.Marker(new BMapGL.Point(116.415, 39.931), {
      icon,
    });
    // 在地图上添加点标记
    map.addOverlay(marker1);
    map.addOverlay(marker2);
    map.addOverlay(marker3);
    map.addOverlay(marker4);
  },
  methods: {
    handleOnClick(name) {
      this.$router.push({ name: name });
    },
  },
};
</script>
<style lang="less" scoped>
.home {
  font-size: 0.32rem;
  // .home-list {
  //   display: grid;
  //   grid-template-columns: repeat(5, 20%);
  //   grid-template-rows: 80px;
  //   .home-list-item {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     border: 1px solid #999999;
  //     word-break: break-all;
  //     text-align: center;
  //     padding: 0.1rem;
  //   }
  // }

  #container {
    width: 100%;
    height: 100vh;
  }
}
</style>
