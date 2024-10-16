<script setup lang="ts">
// 1. 导入函数
import { reactive } from "vue";
// 2. 创建响应式数据对象
const state = reactive({ name: 'tom', age: 18 })
</script>

<template>
    <div>
        <p>姓名：{{ state.name }}</p>
        <p>年龄：{{ state.age }} <button @click="state.age++">一年又一年</button></p>
    </div>
</template>

