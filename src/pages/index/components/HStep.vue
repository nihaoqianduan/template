<template>
  <div class="h-step">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "HStep",
  props: {
    carShow: Boolean,
    active: [Number, String],
  },
  data() {
    return {
      unfold: false,

      list: [1, 2, 3, 4, 5],
      car: require("@/assets/images/car.png"),
      step: 2,
    };
  },
  methods: {
    handleOnClick(item) {
      // console.log(item);
      this.$emit("click", item);
    },
  },
};
</script>
<style lang="less" scoped >
.h-step {
}
</style>