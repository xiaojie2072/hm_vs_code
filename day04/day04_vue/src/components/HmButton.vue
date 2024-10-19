<script setup lang="ts">
// 获取父组件传过来的参数
const { text = '按钮' } = defineProps<{
    text: string
}>()
</script>

<template>
    <button class="HmButton">{{ text }}</button>
</template>

<style scoped>
.HmButton {
    background-color: #538672;
    color: white;
    padding: 10px;
    border-radius: 5px;
}
</style>