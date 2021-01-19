<template>
  <div class="h-cell">
    <div class="header">
      <div class="left">
        <span>郑州大学北门</span>
      </div>
      <div class="right">
        <span>3/4</span>
        <van-icon
          :name="unfold ? 'arrow-up' : 'arrow'"
          @click="unfold = !unfold"
        />
      </div>
    </div>
    <div class="main" v-if="!unfold">
      <div class="tag">小明</div>
      <div class="tag">小明</div>
      <div class="tag">小明</div>
    </div>
    <div class="h-cell-box" v-else>
      <slot></slot>
    </div>
  </div>
</template>
<script>
// import { Icon } from "vant";
import VanIcon from "vant/lib/icon/index";
export default {
  name: "HCell",
  components: { VanIcon },
  data() {
    return {
      unfold: false,
    };
  },
};
</script>
<style lang="less" scoped >
.h-cell {
  border: 1px solid #eee;
  border-radius: 0.1rem;
  margin-bottom: .3rem;
  .header {
    background-color: #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem;
  }
  .main {
    padding: 0.2rem;
    display: flex;
    .tag {
      padding: 2px 0.2rem;
      border: 1px solid #eee;
      border-radius: 0.3rem;
      margin-right: 0.2rem;
    }
  }
  .h-cell-box {
    padding: 0 0.2rem;
  }
}
</style>