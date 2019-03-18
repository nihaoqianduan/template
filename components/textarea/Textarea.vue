<template>
    <div :class="b()">
        <div :class="b('control')">
            <textarea  :placeholder="placeholder" 
                       :rows="rows" 
                       :disabled="disabled" 
                       :maxlength="max"
                       v-model="textValue"
                       v-bind="$attrs"
                       v-on="listeners"
                       ></textarea>
        </div>
        <span :class="b('count')" v-if="max!==Infinity && max > 0">
            <span>{{use}}</span>/{{max}}
        </span>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'textarea',
    inheritAttrs: false,
    data() {
        return {
            textValue: this.value,
            aaa: this.$attrs,
            bbb: this.$listeners
        }
    },
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: String,
        disabled: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: Infinity
        },
        rows: {
            type: [Number, String],
            default: 3
        }
    },
    computed: {
        use() {
            return this.value.length
        },
        listeners() {
            return {
                ...this.$listeners,
                input: this.handleInput
            }
        }
    },
    watch: {
        value(newValue) {
            this.textValue = newValue
        },
        textValue(newValue) {
            this.$emit('input', newValue)
        }
    },
    mounted() {
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        }
    }
})
</script>
