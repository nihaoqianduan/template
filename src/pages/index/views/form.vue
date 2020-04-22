<template>
  <h-form :model="model" :rules="rules" ref="myForm">
    <!-- <oreo-cell-group>
      <oreo-input label="用户名" placeholder="真实姓名" v-model="model.name"></oreo-input>
      <oreo-input label="年龄" placeholder="真实年龄" v-model="model.age"></oreo-input>
      <oreo-input label="性别" placeholder="真实性别" v-model="model.sex"></oreo-input>
      <oreo-input label="手机号" placeholder="真实手机号" v-model="model.mobile"></oreo-input>
      <oreo-input label="邮箱" placeholder="真实邮箱" v-model="model.email"></oreo-input>
      <oreo-button @click="handleOnSubmit">提交</oreo-button>
    </oreo-cell-group> -->
    <field label="用户名" placeholder="真实姓名" v-model="model.name"></field>
    <field label="年龄" placeholder="真实年龄" v-model="model.age"></field>
    <field label="性别" placeholder="真实性别" v-model="model.sex"></field>
    <field
      label="手机号"
      placeholder="真实手机号"
      v-model="model.mobile"
    ></field>
    <field label="邮箱" placeholder="真实邮箱" v-model="model.email"></field>
    <van-button size="large" @click="handleOnSubmit" type="info"
      >提交</van-button
    >
  </h-form>
</template>
<script>
import { Field, Button } from "vant";
export default {
  name: "e-form",
  components: { Field, VanButton: Button },
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
      this.$refs.myForm.validate(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less"></style>
