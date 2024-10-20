<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';


const totalCount = inject<Ref<number>>('totalCount', ref(0))

const updateCount = inject('updateCount', (count: number) => { });
</script>

<template>
    <h1>我是SonSon</h1>
    <div class="son-son">
        <p>{{ totalCount }}</p>
        <button @click="totalCount++">+</button>
        <button @click="updateCount(20)">传值</button>
    </div>
</template>

<style scoped>
.son-son {
    background: #ccc;
}
</style>