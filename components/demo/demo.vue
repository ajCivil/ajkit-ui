<template>
    <div class="m-card" :style="{width: `${width}px`}">
        <div class="m-card-img" :style="{height: `${imgHeight}px`}">
            <img :src="imgSrc">
        </div>
        <div class="m-card-summary">
            <slot>{{ summary }}</slot>
        </div>
        <div class="footer">
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'aj-demo',
    props: {
        width: {
            type: Number,
            default: ()=> 0
        },
        imgWidth: {
            type: Number,
            default: ()=> 300
        },
        imgHeight: {
            type: Number,
            default: ()=> 0
        },
        imgSrc: {
            type: String
        },
        summary: {
            type: String
        }
    }
}
</script>

<style scoped>

</style>