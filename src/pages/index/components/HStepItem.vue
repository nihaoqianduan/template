<template>
  <div class="h-step-item" :class="{ active: show }">
    <img class="icon-car" :src="car" alt="" v-if="!!carShow && hight" />
    <div class="step-item-left"></div>
    <div class="step-item-content">
      <div class="step-item-header">
        <span @click="visible = !visible">{{ item.stationName }}</span>
        <slot name="header-right">
          <div class="right" v-if="headerRight">
            <span>{{ item.stationOnNum }}</span
            >/{{ item.stationAllNum }}
          </div>
        </slot>
      </div>
      <div class="step-item-main" v-if="!visible && !toggle">
        <img
          :src="arrow"
          class="icon-arrow"
          alt=""
          @click="visible = !visible"
        />
        <div
          class="tag"
          :class="{ active: show }"
          v-for="(opt, idx) in item.childList"
          :key="idx"
          @click="handleOnClick(opt)"
          v-show="opt.childName"
        >
          {{ opt.childName }}
        </div>
      </div>
      <div class="step-item-cell" v-else>
        <h-cell-item
          v-for="(item, index) in item.childList"
          :key="index"
          @click.native="handleOnClick(item)"
          :item="item"
          :type="type"
        ></h-cell-item>
      </div>
    </div>
  </div>
</template>
<script>
import HCellItem from "../components/HCellItem";
export default {
  name: "HStepItem",
  components: { HCellItem },
  props: {
    headerRight: Boolean,
    name: {
      type: [Number, String],
    },
    toggle: Boolean,
    item: Object,
    type: [String, Number],
  },
  data() {
    return {
      active: 2,
      car: require("@/assets/images/car.png"),
      arrow: require("@/assets/images/arrow.png"),
      visible: false,
    };
  },
  computed: {
    carShow() {
      return this.$parent.carShow;
    },
    show() {
      return this.$parent.active >= this.name;
    },
    hight() {
      // return this.$parent.active == this.name;
      return this.item.currentStation;
    },
  },
  created() {
    this.visible = this.$parent.active == this.name;
  },
  methods: {
    handleOnClick(item) {
      this.$emit("click", item);
    },
  },
};
</script>
<style lang="less" scoped>
.h-step-item {
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding-left: 0.4rem;

  .icon-car {
    width: 0.4rem;
    height: 0.4rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
  }

  .step-item-left {
    width: 0.2rem;
    height: 0.2rem;
    border-radius: 50%;
    border: 2px solid #7faaff;
    margin-right: 0.24rem;
    background-color: #fff;
    transform: translateY(0.1rem);
  }
  .step-item-content {
    flex: 1;
    position: relative;
    padding-bottom: 0.2rem;

    &::before {
      content: "";
      width: 2px;
      height: 100%;
      background-color: #e5edff;
      position: absolute;
      top: 0.2rem;
      left: -0.36rem;
      z-index: -1;
    }
  }
  &.active {
    .step-item-content::before {
      background-color: #7faaff;
    }
  }

  &:last-child {
    .step-item-content::before {
      height: 0;
    }
  }

  .step-item-header {
    padding: 0 0 0.2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #222222;
    font-size: 0.3rem;
    .right {
      font-size: 0.26rem;
      color: #666;
      letter-spacing: 3px;
      & > span {
        color: #3377ff;
      }
    }
  }
  .step-item-main {
    padding: 0.2rem 0.16rem;
    display: flex;
    flex-wrap: wrap;
    background-color: #f7f7f7;
    border-radius: 0.1rem;
    position: relative;
    .icon-arrow {
      width: 4px;
      height: 6px;
      position: absolute;
      right: 0.16rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .tag {
      padding: 2px 0.2rem;
      border-radius: 0.3rem;
      margin-right: 0.2rem;
      background-color: #fff;
      font-size: 0.22rem;
      color: #999;
      &.active {
        color: #222222;
      }
    }
  }
  .step-item-cell {
    background-color: #f7f7f7;
    border-radius: 0.1rem;
    padding: 0 0.16rem;
  }
}
</style>