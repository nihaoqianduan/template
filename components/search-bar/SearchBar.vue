<template>
    <div :class="b({light})">
        <div :class="b('wrap')">
            <oreo-icon name="search"></oreo-icon>
            <div :class="b('input')">
                <input type="search" v-model="text" :placeholder="placeholder || t('oreo.searchBar.placeholder')" v-on="listeners">
                <oreo-icon name="close-circle" @click="handleClear" v-show="showClearIcon"></oreo-icon>
            </div>
        </div>
        <div :class="b('action')" @click="handleAction" v-if="showAction">
            <slot name="action">
                {{ t('oreo.searchBar.actionText')}}
            </slot>
        </div>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import OreoIcon from 'oreo-ui/components/icon'
export default createBasic({
    name: 'search-bar',
    inheritAttrs: false,
    components: {
        OreoIcon
    },
    data() {
        return {
            text: this.value,
            showClearIcon: false,
            aaa: this.$listeners
        }
    },
    props: {
        value: String,
        placeholder: String,
        showAction: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: this.handleInput,
                keypress: this.handleKeypress
            }
        }
    },
    mounted() {
    },
    methods: {
        handleKeypress(event) {
            if (event.keyCode === 13) {
                event.preventDefault()
                this.$emit('search', this.value)
            }
            this.$emit('keypress', event)
        },
        handleInput(event) {
            this.showClearIcon = true

            this.$emit('input', event.target.value)
        },
        handleClear() {
            this.text = ''
            this.showClearIcon = false
        },
        handleAction(e) {
            this.$emit('action', e)
        }
    }
})
</script>
