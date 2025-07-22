<template>
    <button class="btn" @click="onClick">{{text}}</button>
</template>

<script lang="ts">
export default {
    data(){
        return {
            text: '按钮',
            onClick:()=>{}
        }
    }
}
</script>