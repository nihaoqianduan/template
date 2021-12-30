<template>
  <div class="test-popup">
    <h3>{{ title }}</h3>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </div>
</template>
<script>
export default {
  name: "TestPopup",
  props: {
    title: String,
  },
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      this.$emit("ok", values);
      // 组件内部关闭popup弹窗
      // 调用this.$emit("close", values);
    },
  },
};
</script>
<style lang="less" scoped>
.test-popup {
  width: 6rem;
  padding: 0.3rem;
}
</style>
