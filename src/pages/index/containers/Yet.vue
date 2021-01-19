<template>
  <div class="yet">
    <h-step active="0">
      <h-step-item
        :name="index"
        v-for="(item, index) in list"
        :key="index"
        @click="handleOnClick"
        toggle
        :item="item"
        :type="type"
      ></h-step-item>
    </h-step>
  </div>
</template>
<script>
import HStep from "../components/HStep";
import HStepItem from "../components/HStepItem";
export default {
  name: "Yet",
  components: { HStep, HStepItem },
  props: {
    list: Array,
    type: [String, Number],
  },
  methods: {
    handleOnClick(item) {
      this.$emit("click", item);
    },
  },
};
</script>
<style lang="less" scoped >
.yet {
}
</style>