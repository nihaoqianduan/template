<template>
  <div class="get-in">
    <h-toggle
      :list="toggleList"
      :checked.sync="toggle"
      @onChange="handleOnChange"
    />
    <component
      :is="componentId"
      @click="handleOnClick"
      :list="list"
      type="1"
      :schedulerName="schedulerName"
    ></component>
    <h-popup v-model="show">
      <div class="inofo-popup">
        <div class="title">{{$t('tag3')}}</div>
        <div class="info">
          <!-- <div class="avatar"></div> -->
          <img :src="avatar" alt="" class="avatar" />
          <div class="info-box">
            <div class="info-name">{{ childDetail.childName }}</div>
            <div class="info-sub">{{ childDetail.deptName }}</div>
          </div>
          <div
            class="flot-button"
            :class="{ 'not-car': childDetail.onFlag == '-1' }"
          >
            {{ childDetail.onFlag | formatFlag(1) }}
          </div>
        </div>
        <div class="list">
          <div class="list-label">
            <img :src="address" alt="" class="icon" />
            <span>{{ $t("label5") }}</span>
          </div>
          <div class="list-value">
            <span>{{ childDetail.station }}</span>
          </div>
        </div>
        <div class="list">
          <div class="list-label">
            <img :src="parent" alt="" class="icon" />
            <span>{{ $t("label6") }}</span>
          </div>
          <div
            class="list-value"
            v-for="(item, index) in childDetail.parentList"
            :key="index"
          >
            <span>{{ item.parentName }} · {{ item.parentPhone }}</span>
            <a :href="'tel:' + item.parentPhone">
              <img class="icon-phone" :src="phone" alt="" />
            </a>
          </div>
        </div>
        <div class="list">
          <div class="list-label">
            <img :src="teacher" alt="" class="icon" />
            <span>{{ $t("label7") }}</span>
          </div>
          <div class="list-value">
            <span
              >{{ childDetail.teacherName }} ·
              {{ childDetail.teacherPhone }}</span
            >
            <a :href="'tel:' + childDetail.teacherPhone">
              <img class="icon-phone" :src="phone" alt="" />
            </a>
          </div>
        </div>
      </div>
    </h-popup>
  </div>
</template>
<script>
import HToggle from "../components/HToggle";
import HCell from "../components/HCell";
import HCellItem from "../components/HCellItem";
import HStep from "../components/HStep";
import HPopup from "../components/HPopup";
import All from "./All";
import Yet from "./Yet";
import Not from "./Not";
import dayjs from "dayjs";
export default {
  name: "GetIn",
  components: { HToggle, HCell, HCellItem, HStep, HPopup, All, Yet, Not },
  props: {
    schedulerId: null,
    schedulerName: String,
  },
  data() {
    return {
      avatar: require("@/assets/images/test2.png"),
      toggle: 0,
      toggleList: [
        {
          label: this.$t("tab1"),
          value: "--",
        },
        {
          label: this.$t("tab2"),
          value: "--",
        },
        {
          label: this.$t("tab3"),
          value: "--",
        },
      ],
      show: false,
      address: require("@/assets/images/address.png"),
      teacher: require("@/assets/images/teacher.png"),
      phone: require("@/assets/images/phone.png"),
      parent: require("@/assets/images/parent.png"),
      allList: [],
      onList: [],
      lackList: [],
      childDetail: {},
    };
  },
  computed: {
    componentId() {
      const map = ["All", "Yet", "Not"];
      return map[this.toggle];
    },
    list() {
      const maps = ["allList", "onList", "lackList"];
      // console.log(this[maps[this.toggle]]);
      return this[maps[this.toggle]];
    },
  },
  created() {
    this._indexOnRecord();
  },
  methods: {
    async _indexOnRecord() {
      const [err, res] = await this.$http.indexOnRecord({
        schedulerId: this.schedulerId,
      });
      if (err) return;
      // console.log(res);
      this.toggleList[0].value = res.data.allNum;
      this.toggleList[1].value = res.data.onNum;
      this.toggleList[2].value = res.data.lackNum;
      // this.option = res;
      this.allList = res.data.allList;
      this.onList = res.data.onList;
      this.lackList = res.data.lackList;
    },
    handleOnChange(value) {
      // console.log("toggle组件切换");
      // console.log(value)
    },
    async handleOnClick(item) {
      // console.log("查看学生详情", item);
      let param = {
        outid: item.outid,
        schedulerId: this.schedulerId,
        type: 1,
        date: dayjs().format("YYYYMMDD"),
      };
      const [err, res] = await this.$http.getStudentInfo(param);
      if (err) return;
      // console.log(res);
      this.childDetail = res.data;
      this.show = true;
    },
  },
  watch: {
    schedulerId() {
      this._indexOnRecord();
    },
  },
};
</script>
<style lang="less" scoped >
.get-in {
  padding-top: 0.36rem;
  .inofo-popup {
    background-color: #ffffff;
    width: 6.22rem;
    padding: 0.4rem;
    box-sizing: border-box;
    border-radius: 0.32rem;
    .title {
      color: #222222;
      font-size: 0.36rem;
      font-weight: 800;
      text-align: center;
      margin-bottom: 0.4rem;
    }
    .info {
      width: 100%;
      background-color: #f7f7f7;
      border-radius: 0.16rem;
      padding: 0.2rem 0.24rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      position: relative;
      margin-bottom: 0.24rem;
      .avatar {
        width: 0.8rem;
        height: 0.8rem;
        margin-right: 0.26rem;
        border-radius: 50%;
        // background-color: #999;
      }
      .info-name {
        color: #222222;
        font-size: 0.32rem;
      }
      .info-sub {
        color: #999;
        font-size: 0.22rem;
      }

      .flot-button {
        width: 0.9rem;
        height: 0.36rem;
        border-radius: 0.08rem;
        position: absolute;
        right: 0.24rem;
        top: 50%;
        transform: translateY(-50%);
        color: #ffffff;
        font-size: 0.22rem;
        text-align: center;
        line-height: 0.36rem;
        background: linear-gradient(90deg, #3377ff 0%, #4c97ff 100%);
        &.not-car {
          background: linear-gradient(90deg, #ff9d3e 0%, #ffb958 100%);
        }
      }
    }

    & > .list {
      padding-top: 0.2rem;
      // margin-bottom: 0.2rem;
      .list-label {
        color: #999999;
        font-size: 0.26rem;
        display: flex;
        align-items: center;
        margin-bottom: 0.2rem;
        .icon {
          width: 0.32rem;
          height: 0.32rem;
          margin-right: 0.12rem;
        }
      }
      .list-value {
        color: #222;
        font-size: 0.3rem;
        padding-left: 0.44rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.2rem;
        .icon-phone {
          width: 0.48rem;
          height: 0.48rem;
        }
      }
    }
  }
}
</style>