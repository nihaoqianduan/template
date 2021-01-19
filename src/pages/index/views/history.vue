<template>
  <h-container class="history">
    <div class="title">{{ $t("title2") }}</div>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <div class="zdy-steps">
        <div class="zdy-steps-item" v-for="(item, index) in list" :key="index">
          <div class="zdy-steps-header">
            <div class="left">
              <img
                v-if="active == index"
                :src="date"
                slot="active-icon"
                class="icon-date"
                alt=""
              />
              <div v-else class="icon-default"></div>
            </div>
            <div class="step-title">{{ item.date }} {{ item.week }}</div>
          </div>
          <div class="zdy-steps-main">
            <div
              class="step-card"
              v-for="(opt, idx) in item.schedulerList"
              :key="idx"
              @click="handleOnClick(opt)"
            >
              <img :src="opt.status == 0 ? bg : bg2" class="card-bg" alt="" />
              <div class="step-card-box">
                <div class="left">
                  <div class="step-date">
                    <div class="step-date-tag">{{ opt.schedulerName }}</div>
                    <span>{{ opt.startTime }} 发车</span>
                  </div>
                  <div class="step-teacher">
                    <img :src="teacher" class="icon-teacher" alt="" />
                    <span>{{ $t("label3") }}：</span>
                    <span class="step-value">{{ opt.teacherName }}</span>
                  </div>
                  <div class="step-siji">
                    <img :src="siji" class="icon-siji" alt="" />
                    <span>{{ $t("label4") }}：</span>
                    <span class="step-value">{{ opt.driverName }}</span>
                  </div>
                </div>
                <div class="right">
                  <img
                    :src="opt.status == 0 ? error : success"
                    class="icon-card"
                    alt=""
                  />
                  <div>{{ opt.status | formatStatus }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </van-list>
  </h-container>
</template>
<script>
import { Step, Steps, List } from "vant";
export default {
  name: "History",
  components: { [Step.name]: Step, [Steps.name]: Steps, [List.name]: List },
  data() {
    return {
      date: require("@/assets/images/date.png"),
      bg: require("@/assets/images/bg2.png"),
      bg2: require("@/assets/images/bg3.png"),
      success: require("@/assets/images/success.png"),
      error: require("@/assets/images/error.png"),
      teacher: require("@/assets/images/teacher.png"),
      siji: require("@/assets/images/siji.png"),
      active: 0,
      list: [],
      loading: false,
      finished: false,
      page: 0,
    };
  },
  methods: {
    async onLoad() {
      this.page += 1;
      const list = await this._historyList();
      if (this.list.length === 0) {
        this.list = list;
      } else if (list.length > 0) {
        const item = list[0];
        for (let i = 0; i < this.list.length; i++) {
          const opt = JSON.parse(JSON.stringify(this.list[i]));
          if (opt.date === item.date) {
            opt.schedulerList = opt.schedulerList.concat(item.schedulerList);
            this.$set(this.list, i, opt);
            list.splice(0, 1);
          }
        }
        setTimeout(() => {
          this.list = this.list.concat(list);
        }, 300);
      }
    },
    async _historyList() {
      const [err, res] = await this.$http.historyList({
        page: this.page,
        pageSize: 7,
      });
      if (err) return;
      setTimeout(() => {
        this.loading = false;
        this.finished = res.data.length === 0;
      }, 300);
      return res.data;
    },
    handleOnClick(item) {
      this.$router.push({
        path: "/historyDetails",
        query: {
          schedulerId: item.schedulerId,
          schedulerType: item.schedulerType,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.history {
  padding: 0.26rem 0.4rem;
  background-color: #fff;
  min-height: 100vh;
  .title {
    color: #222;
    font-size: 0.48rem;
    font-weight: 800;
    margin-bottom: 0.6rem;
  }

  .zdy-steps {
    .zdy-steps-item {
      .zdy-steps-header {
        display: flex;
        align-items: center;

        .left {
          width: 0.32rem;
          margin-right: 0.18rem;
          text-align: center;
        }

        .icon-date {
          width: 0.32rem;
          height: 0.32rem;
        }

        .icon-default {
          width: 0.16rem;
          height: 0.16rem;
          background-color: #ddd;
          border-radius: 50%;
          margin: 0 auto;
        }

        .step-title {
          font-size: 0.28rem;
          color: #666;
          font-weight: 800;
        }
      }
      .zdy-steps-main {
        padding-left: 0.5rem;
        width: 100%;
        position: relative;
        margin: 0.22rem 0;
        &::before {
          content: "";
          width: 1px;
          height: 100%;
          border-left: 1px dotted #dddddd;
          position: absolute;
          left: 0.16rem;
          top: 0;
        }

        .step-card {
          width: 6.22rem;
          height: 2.4rem;
          box-shadow: 0px 3px 9px 0px rgba(51, 119, 255, 0.15);
          margin-bottom: 0.3rem;
          text-align: right;
          position: relative;
          .card-bg {
            width: 2.8rem;
            height: 2.4rem;
          }

          .step-card-box {
            width: 100%;
            height: 100%;
            padding: 0.3rem 0.32rem;
            box-sizing: border-box;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .left {
            flex: 1;
            color: #333;
            .step-date {
              display: flex;
              align-items: center;
              color: #222222;
              font-size: 0.32rem;
              font-weight: 800;
              .step-date-tag {
                width: 1.2rem;
                height: 0.48rem;
                background: linear-gradient(90deg, #3377ff 0%, #4c97ff 100%);
                box-shadow: 0px 3px 6px 0px rgba(51, 119, 255, 0.2);
                border-radius: 3px;
                color: #fff;
                font-size: 0.24rem;
                text-align: center;
                line-height: 0.48rem;
                margin-right: 0.18rem;
              }
            }
            .step-teacher,
            .step-siji {
              margin-top: 0.3rem;
              display: flex;
              color: #999;
              font-size: 0.24rem;
              .icon-teacher,
              .icon-siji {
                width: 0.32rem;
                height: 0.32rem;
                margin-right: 0.18rem;
              }
              .step-value {
                color: #222222;
              }
            }
          }

          .right {
            color: #fff;
            font-size: 0.28rem;
            text-align: center;
            .icon-card {
              width: 0.6rem;
              height: 0.6rem;
              margin-bottom: 0.2rem;
            }
          }
        }
      }
    }
  }
}
</style>