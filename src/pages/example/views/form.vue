<template>
  <h-form :model="model" :rules="rules" ref="myForm">
    <van-cell-group>
      <van-field
        label="用户名"
        placeholder="真实姓名"
        v-model="model.name"
      ></van-field>
      <van-field
        label="年龄"
        placeholder="真实年龄"
        v-model="model.age"
      ></van-field>
      <van-field
        label="性别"
        placeholder="真实性别"
        v-model="model.sex"
      ></van-field>
      <van-field
        label="手机号"
        placeholder="真实手机号"
        v-model="model.mobile"
      ></van-field>
      <van-field
        label="邮箱"
        placeholder="真实邮箱"
        v-model="model.email"
      ></van-field>
      <van-button @click="handleOnSubmit" block type="info">提交</van-button>
    </van-cell-group>
  </h-form>
</template>
<script>
export default {
  name: "e-form",
  data() {
    return {
      model: {
        name: "",
        age: "",
        sex: "",
        mobile: "",
        email: ""
      },
      rules: {
        name: [{ required: true, message: "请填写姓名" }],
        age: [{ required: true, message: "请填写年龄" }],
        sex: [{ required: true, message: "请选择性别" }],
        mobile: [
          { required: true, message: "请填写手机号码" },
          { regExg: /^1[34578]\d{9}$/, message: "请填写正确格式的手机号码" }
        ],
        email: [
          { required: true, message: "请填写邮箱" },
          {
            regExg: /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/,
            message: "请填写正确格式的邮箱地址"
          }
        ]
      }
    };
  },
  methods: {
    handleOnSubmit() {
      this.$refs.myForm.validate();
      // console.log(this.$refs.myForm);
    }
  }
};
</script>
<style lang="less"></style>
