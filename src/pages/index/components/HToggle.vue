<template>
  <div class="h-toggle">
    <div
      class="item"
      :class="{ active: checked == index }"
      v-for="(item, index) in list"
      :key="index"
      @click="handleOnClick(index)"
    >
      <div class="item-value">{{ item.value }}</div>
      <div>{{ item.label }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HToggle",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    checked: [String, Number],
  },
  methods: {
    handleOnClick(value) {
      this.$emit("update:checked", value);
      this.$emit("onChange", value);
    },
  },
};
</script>
<style lang="less" scoped >
.h-toggle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.2rem;
  margin-bottom: 0.4rem;
  .item {
    padding: 0.34rem 0;
    text-align: center;
    flex: 1;
    background-color: #f0f5ff;
    color: #999999;
    font-size: 0.24rem;
    .item-value {
      font-size: 0.4rem;
    }
    &:first-child {
      border-radius: 0.16rem 0 0 0.16rem;
    }
    &:last-child {
      border-radius: 0 0.16rem 0.16rem 0;
    }
    &.active {
      background: linear-gradient(90deg, #3377ff 0%, #4c97ff 100%);
      color: #ffffff;
      position: relative;
      border-radius: 0.16rem;
      &::after {
        content: "";
        width: 0.16rem;
        height: 0.16rem;
        background: linear-gradient(90deg, #3377ff 0%, #4c97ff 100%);
        position: absolute;
        left: 50%;
        bottom: -0.08rem;
        transform: translateX(-50%) rotate(45deg);
      }
    }
  }
}
</style>