<template>
  <div class="h-form">
    <slot></slot>
  </div>
</template>
<script>
import { isEmpty } from '@/utils';
export default {
  name: 'h-form',
  props: {
    model: {
      type: Object
    },
    rules: {
      Object
    }
  },
  methods: {
    async validate(callback) {
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
    _valid(key, val) {
      return new Promise((resovle, reject) => {
        let valida = false;
        for (let index = 0; index < val.length; index++) {
          const v = val[index];
          if (!!v.required && (this.model[key] === '' || this.model[key] === void (0))) {
            this.$toast(v.message)
            valida = false;
            break;
          } else if (!!v.regExg && this.model[key] !== '' && !v.regExg.test(this.model[key])) {
            this.$toast(v.message);
            valida = false;
            break;
          } else {
            valida = true;
          }
        }
        resovle(valida)
      })
    }
  }
}
</script>
