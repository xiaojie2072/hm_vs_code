<script setup>
import { ref, watch } from "vue";
const count = ref(0);
const msg = ref("hello");
// 1. 监听一个响应式数据
// watch(数据, 改变后回调函数)
// watch(count, (newValue, oldValue) => {
//     console.log(newValue, oldValue);
// });

// 2. 监听多个响应式数据
watch([count, msg], (newValue, oldValue) => {
    console.log(newValue, oldValue);
});

</script>

<template>
    <p>计数器：{{ count }}</p>
    <button @click="count++">+1</button>
    <button @click="msg += '!'">神经</button>
</template>