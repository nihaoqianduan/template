<template>
    <flexview>
        <scrollview title="Form 表格" sub-title="基本实例">
            <div class="demo-body">
                <div class="demo-item">

                    <oreo-cell-group header="输入框">
                          <oreo-input label="用户名" placeholder="真实姓名"></oreo-input>
                        <oreo-input label="用户名" v-model="value"></oreo-input>
                        <oreo-input label="用户名" v-model="value" disabled></oreo-input>
                    </oreo-cell-group>

                    <oreo-cell-group header="文本右对齐">
                        <oreo-input label="用户名" rightAlign placeholder="真实姓名"></oreo-input>
                        <oreo-input label="用户名" v-model="value" rightAlign></oreo-input>
                        <oreo-input label="密码" type="password" v-model="value" rightAlign></oreo-input>
                        <oreo-input label="用户名" v-model="value" disabled rightAlign></oreo-input>
                    </oreo-cell-group>

                    <oreo-cell-group header="不带Label">
                        <oreo-input   placeholder="用户名"></oreo-input>
                        <oreo-input   placeholder="密码" type="password"  ></oreo-input>
                    </oreo-cell-group>

                     <oreo-cell-group header="Switch">
                         <oreo-cell title="状态" >
                             <oreo-switch v-model="active" slot="extra"></oreo-switch>
                         </oreo-cell>
                         <oreo-cell title="状态" >
                             <oreo-switch v-model="active" disabled slot="extra"></oreo-switch>
                         </oreo-cell>
                    </oreo-cell-group>

                    <oreo-cell-group header="Textarea" footer="">
                         <oreo-textarea placeholder="请输入个人介绍" v-model="data" @input="handleTextareaValue"></oreo-textarea>
                    </oreo-cell-group>
                    <oreo-cell-group header="">
                        <oreo-textarea placeholder="请输入个人介绍" v-model="data1" :max="40" readonly @focus="handleTextareaFocus" @blur="handleTextareaBlur"></oreo-textarea>
                    </oreo-cell-group>
                  
                </div>
             
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview.vue'
import scrollview from './scrollview.vue'
export default {
    name: 'form',
    data() {
        return {
            value: 'vue-oreo',
            name: 'Vue-oreo',
            text: 'Vue-oreo',
            active: true,
            toggleState: null,
            data: '',
            data1: '庭树不知人去尽，秋春还放旧时华。 多情唯有池中鲤，犹为离人护落花'
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        handleTextareaValue(v) {
            debugger
            console.log(v)
        },
        handleTextareaFocus(e){
            console.log('handleTextareaFocus',e)
        },
        handleTextareaBlur(e){
            console.log('handleTextareaBlur',e)
        }

    }
}
</script>
<style lang="less">

</style>
