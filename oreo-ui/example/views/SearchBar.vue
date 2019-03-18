
<template>
    <flexview>
        <scrollview title="SearchBar 搜索框" sub-title="">
            <div class="demo-body " >

                <h2>基础用法</h2>
               
                <oreo-search-bar v-model="text"
                            @search="handleSearch"
                            @input="handleInput"
                            @action="handleAction">
                </oreo-search-bar>

                <h2>监听对应事件</h2>
               
                <oreo-search-bar v-model="text" 
                            @focus="handle" 
                            @blur="handle" 

                            @search="handleSearch"
                            @keypress="handleKeypress"
                            @input="handleInput"
                            @action="handleAction">
                </oreo-search-bar>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'search',
    data() {
        return {
            text: ''
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        handle() {
            console.log('..')
        },
        handleSearch(v) {
            console.log('handleSearch', v)
        },
        handleKeypress(e) {
            console.log('handleKeypress', e)
        },
        handleInput(v) {
            console.log('handleInput', v)
        },
        handleAction(e) {
            console.log('handleAction', e)
        }

    }
}
</script>
<style lang="less" scopd>
.demo-body {
  .oreo-button {
    margin: 1em 0;
  }
}
</style>
