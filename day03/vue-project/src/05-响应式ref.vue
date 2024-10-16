<script setup lang="ts">
import { ref } from 'vue'
const count = ref(100)
const add = () => {
    count.value++
}
const sub = () => {
    count.value--
}
</script>

<template>
    <button @click="sub()">-</button>
    <span>{{ count }}</span>
    <button @click="add()">+</button>
</template>

<style scoped>
button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin: 5px;
}
</style>
