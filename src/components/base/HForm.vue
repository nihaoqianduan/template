<template>
  <div class="h-form">
    <slot></slot>
  </div>
</template>
<script>
import { isEmpty, verifySpace } from '@/utils';
export default {
  name: 'h-form',
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
    async validate (callback) {
      if (!this.model || isEmpty(this.model)) {
        console.warn('model不能传递空');
        return;
      }
      if (!this.rules || isEmpty(this.rules)) {
        console.warn('rules不能传递空');
        return;
      }
      let valida = true;
      for (const key in this.rules) {
        if (this.rules.hasOwnProperty(key)) {
          const element = this.rules[key];
          let res = await this._valid(key, element);
          valida = res;
          if (!res) break;
        }
      }
      callback(valida)
    },
    _valid (key, val) {
      return new Promise(async (resovle, reject) => {
        let valida = true;
        for (let index = 0; index < val.length; index++) {
          const v = val[index];
          if (!!v.required) {
            valida = await this._required(key, v);
            if (!valida) break;
          }
          if (!!v.regExg) {
            valida = await this._regExg(key, v);
            if (!valida) break;
          }
        }
        resovle(valida)
      })
    },
    async _required (key, v) {
      if (!verifySpace(this.model[key])) {
        this.$toast(v.message)
        return false;
      }
      return true;
    },
    async _regExg (key, v) {
      if (this.model[key] === null || this.model[key] === void (0)) return true;
      if (verifySpace(this.model[key]) && !v.regExg.test(this.model[key].toString().trim())) {
        this.$toast(v.message);
        return false;
      }
      return true;
    }
  }
}
</script>
