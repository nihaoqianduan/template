<template>
  <div class="h-form">
    <slot></slot>
  </div>
</template>
<script>
import { isEmptyObj, verifySpace } from "@/utils";
export default {
  name: "h-form",
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      Object,
      required: true
    }
  },
  methods: {
    async validate(callback) {
      if (!this.model || isEmptyObj(this.model)) {
        console.warn("model不能传递空");
        return;
      }
      if (!this.rules || isEmptyObj(this.rules)) {
        console.warn("rules不能传递空");
        return;
      }
      let valida = false;
      const rulesList = Object.keys(this.rules);
      try {
        for (let i = 0; i < rulesList.length; i++) {
          const key = rulesList[i];
          const result = this._valid(key, this.rules[key]);
          if (!result) throw new Error(false);
          valida = result;
        }
      } catch (error) {
        valida = error;
      }
      callback && callback(valida);
    },
    _valid(key, val) {
      let valida = true;
      for (let index = 0; index < val.length; index++) {
        const v = val[index];
        if (v.required) {
          valida = this._required(key, v);
          if (!valida) break;
        }
        if (v.regExg) {
          valida = this._regExg(key, v);
          if (!valida) break;
        }
      }
      return valida;
    },
    _required(key, v) {
      if (!verifySpace(this.model[key])) {
        this.$toast(v.message);
        return false;
      }
      return true;
    },
    _regExg(key, v) {
      if (this.model[key] === null || this.model[key] === void 0) return true;
      if (
        verifySpace(this.model[key]) &&
        !v.regExg.test(this.model[key].toString().trim())
      ) {
        this.$toast(v.message);
        return false;
      }
      return true;
    }
  }
};
</script>
