<template>
    <button class="aj-inner-button" @click="onClick">{{text}}</button>
</template>

<script>
export default {
    name: 'ajButton',
    data(){
        return {
            text: '第一个组件-button组件'
        }
    },

    methods: {
        onClick(){
            console.log('点击了按钮')
        }
    }
}
</script>