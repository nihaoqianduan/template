<template>
  <h-container class="home">
    <cell-group>
      <cell v-for="(item, index) in list" :key="index" :title="item" @click="handleOnClick(item)"></cell>
    </cell-group>
  </h-container>
</template>
<script>
import { Cell, CellGroup } from 'vant';
import 'vant/lib/cell/style/index';
import 'vant/lib/cell-group/style/index';
export default {
  name: 'home',
  components: {
    Cell, CellGroup
  },
  data () {
    return {
      list: ['Form', 'ImagePreview']
    }
  },
  methods: {
    handleOnClick (name) {
      this.$router.push({ name: name });
    }
  }
}
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
}
</style>
