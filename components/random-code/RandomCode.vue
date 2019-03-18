<template>
     <div :class="b()">
        <label  :for="id">
            <!-- class="oreo-random-code__wrap" @touchstart.stop="handleFocus" -->
            <ul :class="b('wrap')"> 
                <!-- :class="['oreo-random-code__item',value.length===index && focus ?'oreo-random-code__item_focus':'']" -->
                <li v-for="(item,index) in points" :key="index"
                     :class="b('item',{'focus': text.length===index && focus,'active':item})" >
                    <i>{{item}}</i>
                </li>
            </ul>
        </label>
        <input type="number"  :value="text" :id="id" @focus="handleInputFocus" @blur="handleInputBlur" @input="handleInput" ref="input">
       
         <slot>
            <div :class="b('tip',{'disabled':s > 0})" @click.stop="handleReSend">
                {{finalText}}
            </div>
        </slot>
    </div>    
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import { uid } from 'oreo-ui/components/utils/index'
import { t } from 'oreo-ui/components/locale/index'
export default createBasic({
    name: 'random-code',
    data() {
        return {
            id: '',
            focus: false,
            text: '',
            s: 0
        }
    },
    props: {
        length: {
            type: Number,
            default: 6
        },
        timer: {
            type: Number,
            default: 60
        },
        // 是否倒计时
        value: {
            type: Boolean,
            default: false,
            require: true
        },
        resendText: {
            type: String,
            default: t('oreo.randomCode.reSendText')
        }
    },
    computed: {
        points() {
            const arr = []
            for (let i = 0; i < this.length; i++) {
                arr[i] = this.text[i]
            }
            return arr
        },
        finalText() {
            return this.s <= 0 ? this.resendText : `${this.resendText}(${this.s}S)`
        }
    },
    watch: {
        text() {
            if (this.text.length === this.length) {
                this.done()
            }
        },
        value(val) {
            this.getStatus()
        }
    },
    mounted() {
        this.id = uid()
    },
    methods: {
        handleFocus() {
        },
        handleInputFocus() {
            this.focus = true
        },
        handleInputBlur() {
            this.focus = false
        },
        handleInput(e) {
            let v = e.target.value
            if (v.length > this.length) {
                v = v.substring(0, this.length)
            }
            this.text = v

            this.$nextTick(() => {
                this.$refs.input.value = this.text
            })
        },
        handleReSend() {
            if (this.s > 0) return
            this.$emit('send')
        },
        done() {
            this.$emit('done', this.text)
            this.clear()
        },
        clear() {
            this.text = ''
            this.$nextTick(() => {
                this.$refs.input.value = this.text
            })
        },
        // 倒计时
        countdown() {
            this._timer = setTimeout(() => {
                this.decreaseTime()
            }, 1 * 1000)
        },
        // 递减时间
        decreaseTime() {
            if (this.s > 0) {
                this.s--
                this.countdown()
            } else {
                this.$emit('input', false)
            }
        },
        getStatus() {
            if (this.value) {
                this.s = this.timer
                this.countdown()
            } else {
                clearTimeout(this._timer)
            }
        }

    }
})
</script>
