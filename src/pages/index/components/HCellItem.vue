<template>
  <div class="h-cell-item">
    <div class="left">
      <img :src="avatar" alt="" class="avatar" />
      <div>{{ item.childName }}</div>
    </div>
    <div class="right">
      <span>{{ item.onTime }}</span>
      <span class="right-btn" :class="{ 'not-car': item.onFlag == '-1' }">{{
        item.onFlag | formatFlag(type)
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "HCellItem",
  props: {
    item: Object,
    type: {
      type: [String, Number],
      default: 1,
    },
  },
  data() {
    return {
      avatar: require("@/assets/images/test2.png"),
    };
  },
};
</script>
<style lang="less" scoped >
.h-cell-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  &:not(:last-child) {
    border-bottom: 0.01rem solid #e5e5e5;
  }
  .left {
    display: flex;
    align-items: center;
    font-size: 0.24rem;
    .avatar {
      width: 0.48rem;
      height: 0.48rem;
      border-radius: 50%;
      margin-right: 0.18rem;
      // background-color: #999;
    }
  }
  .right {
    font-size: 0.22rem;
    font-weight: 800;
    .right-btn {
      display: inline-block;
      padding: 2px 6px;
      border-radius: 3px;
      color: #fff;
      background: linear-gradient(90deg, #3377ff 0%, #4c97ff 100%);
      margin-left: 0.16rem;
      &.not-car {
        background: linear-gradient(90deg, #ff9d3e 0%, #ffb958 100%);
      }
    }
  }
}
</style>