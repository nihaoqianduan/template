<template>
  <flexview>
    <scrollview title="RandomCode " sub-title="随机码输入框">
        <div class="demo-body demo-wrap" >
            <oreo-random-code v-model="isSend" :timer="5" @done="handleRandomCode" @send="handleReSendCode"></oreo-random-code>
        </div>
    </scrollview>
  </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'random-code',
    data() {
        return {
            random: '',
            isSend: false
        }
    },
    components: {
        flexview,
        scrollview
    },
    computed: {
    },
    mounted() {
        this.sendRandomCode()
    },
    methods: {
        sendRandomCode() {
            setTimeout(() => {
                this.isSend = true
            }, 1 * 1000)
        },
        handleRandomCode(v) {
            this.$toast(`验证码：${v}`)
        },
        handleReSendCode() {
            this.sendRandomCode()
        }
    }
}
</script>
<style lang="less" >
.demo-body .oreo-random-code__wrap {
  background-color: transparent;
}
</style>