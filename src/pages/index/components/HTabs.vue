<template>
  <div class="h-tabs">
    <div
      class="tab-item"
      :class="{ active: active == item.value }"
      v-for="(item, index) in tabs"
      :key="index"
      @click="handleOnClick(item)"
    >
      {{ item.label }}
    </div>
    <div class="history-btn" v-if="history" @click="handleOnClickHistory">
      {{ $t("label8") }}
    </div>
  </div>
</template>
<script>
export default {
  name: "HTabs",
  props: {
    value: [String, Number],
    history: Boolean,
  },
  data() {
    return {
      //   active: 0,
      tabs: [
        {
          label: this.$t("tab4"),
          value: 0,
        },
        {
          label: this.$t("tab5"),
          value: 1,
        },
      ],
    };
  },
  computed: {
    active: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  },
  methods: {
    handleOnClick(item) {
      this.active = item.value;
    },
    handleOnClickHistory() {
      this.$router.push({
        path: "/history",
      });
    },
  },
};
</script>
<style lang="less" scoped >
.h-tabs {
  display: flex;
  align-items: flex-end;
  position: relative;
  .tab-item {
    padding: 0.1rem 0 0.2rem;
    position: relative;
    margin-right: 0.3rem;
    color: #999999;
    font-size: 0.26rem;
    &::after {
      content: "";
      width: 0.4rem;
      height: 3px;
      background-color: rgba(0, 0, 0, 0);
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-radius: 3px;
    }
    &.active {
      color: #222222;
      font-size: 0.32rem;
      &::after {
        background-color: #3377ff;
      }
    }
  }
  .history-btn {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
    font-size: 0.24rem;
  }
}
</style>