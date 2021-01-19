<template>
  <div class="not">
    <h-step active="4">
      <h-step-item
        :name="index"
        v-for="(item, index) in list"
        :key="index"
        @click="handleOnClick"
        toggle
        :item="item"
        :type="type"
      >
        <div
          slot="header-right"
          class="header-right"
          @click="handleOnClickBackTrack(item, index)"
        >
          {{ $t("label9") }}
        </div>
      </h-step-item>
    </h-step>
    <van-popup v-model="show" position="bottom" round closeable>
      <div class="not-popup">
        <div class="title">{{ $t("title3") }}</div>
        <div class="card">
          <div class="card-item">
            <div class="card-label">{{ $t("placeholder1") }}：</div>
            <div class="card-value">{{ backTrack.stationName }}</div>
          </div>
          <div class="card-item">
            <div class="card-label">{{ $t("placeholder2") }}：</div>
            <div class="card-value">{{ type | formatType }}</div>
          </div>
          <div class="card-item">
            <div class="card-label">{{ $t("placeholder3") }}：</div>
            <div class="card-value">{{ schedulerName }}</div>
          </div>
        </div>
        <div class="not-sub">{{ $t("title4") }}</div>
        <div class="not-cell">
          <div
            class="not-cell-item"
            v-for="(item, index) in notList"
            :key="index"
            @click="handleOnClickClose(index)"
          >
            <span>{{ item.childName }}</span>
            <img :src="close" class="icon-close" alt="" />
          </div>
        </div>
        <div
          class="not-button"
          :class="{ disabled: notList.length === 0 }"
          @click="handleOnSubmit"
        >
          {{ $t("button") }}
        </div>
      </div>
    </van-popup>
  </div>
</template>
<script>
import HStep from "../components/HStep";
import HStepItem from "../components/HStepItem";
import { Popup } from "vant";
import dayjs from "dayjs";
export default {
  name: "Not",
  components: { HStep, HStepItem, [Popup.name]: Popup },
  props: {
    list: Array,
    type: [String, Number],
    schedulerName: String,
  },
  data() {
    return {
      show: false,
      notList: [],
      close: require("@/assets/images/close2.png"),
      backTrack: {},
    };
  },
  methods: {
    handleOnClick(item) {
      this.$emit("click", item);
    },
    handleOnClickClose(index) {
      this.$delete(this.notList, index);
    },
    async handleOnSubmit() {
      if (this.notList.length === 0) return;
      const param = {
        schedulerId: this.$parent.schedulerId,
        stationId: this.backTrack.stationId,
        type: this.type,
        date: dayjs().format("YYYYMMDD"),
        outidList: this.notList.map((item) => item.outid),
      };
      const [err, res] = await this.$http.saveRecord(param);
      if (err) return;
      // console.log(res);
      this.show = false;
      window.location.reload();
    },
    handleOnClickBackTrack(item, index) {
      this.notList = JSON.parse(JSON.stringify(item.childList));
      this.backTrack = item;
      this.show = true;
    },
  },
};
</script>
<style lang="less" scoped >
.not {
  .header-right {
    color: #3377ff;
    font-size: 0.26rem;
  }

  .not-popup {
    padding: 0 0.4rem 0.6rem;
    .title {
      color: #222;
      font-size: 0.34rem;
      font-weight: 500;
      padding: 0.3rem 0;
      box-sizing: border-box;
      text-align: center;
      margin-bottom: 0.3rem;
    }
    .card {
      width: 100%;
      background: #f7f7f7;
      border-radius: 0.16rem;
      padding: 0.4rem 0.36rem;
      box-sizing: border-box;
      margin-bottom: 0.4rem;
      .card-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.28rem;
        &:not(:last-child) {
          margin-bottom: 0.4rem;
        }
        .card-label {
          color: #999;
        }
        .card-value {
          color: #222;
        }
      }
    }

    .not-sub {
      color: #222;
      font-size: 0.32rem;
      font-weight: 800;
      margin-bottom: 0.4rem;
    }

    .not-cell {
      display: flex;
      flex-wrap: wrap;
      min-height: 2rem;
      margin-bottom: 0.3rem;

      .not-cell-item {
        width: 1.4rem;
        height: 0.64rem;
        text-align: center;
        line-height: 0.64rem;
        background-color: #f0f5ff;
        border-radius: 0.32rem;
        margin-right: 0.32rem;
        color: #3377ff;
        font-size: 0.26rem;
        position: relative;

        &:nth-child(4n) {
          margin-right: 0;
        }

        .icon-close {
          width: 0.28rem;
          height: 0.28rem;
          position: absolute;
          top: -0.1rem;
          right: -0.1rem;
        }
      }
    }

    .not-button {
      width: 100%;
      height: 0.88rem;
      background: linear-gradient(90deg, #3377ff 0%, #4c97ff 100%);
      box-shadow: 0px 7px 15px 0px rgba(51, 119, 255, 0.3);
      border-radius: 0.44rem;
      text-align: center;
      line-height: 0.88rem;
      color: #fff;
      &.disabled {
        opacity: 0.6;
      }
    }
  }
}
</style>