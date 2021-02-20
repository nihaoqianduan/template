<template>
  <h-container class="home">
    <cell-group>
      <cell
        v-for="(item, index) in list"
        :key="index"
        :title="item"
        @click="handleOnClick(item)"
      ></cell>
    </cell-group>
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
    CellGroup
  },
  data() {
    return {
      list: ["Form", "ImagePreview"]
    };
  },
  methods: {
    handleOnClick(name) {
      this.$router.push({ name: name });
    }
  }
};
</script>
<style lang="less" scoped>
.home {
}
</style>
