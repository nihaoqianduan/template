<template>
  <div class="all">
    <h-step active="0" carShow>
      <h-step-item
        :name="index"
        headerRight
        v-for="(item, index) in list"
        :key="index"
        @click="handleOnClick"
        :toggle="unfold"
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
  name: "All",
  components: { HStep, HStepItem },
  props: {
    list: Array,
    type: [String, Number],
  },
  data() {
    return {
      unfold: false,
    };
  },
  created() {
    this.unfold = this.$route.name === "HistoryDetails";
  },
  methods: {
    handleOnClick(item) {
      this.$emit("click", item);
    },
  },
};
</script>
<style lang="less" scoped >
.all {
}
</style>