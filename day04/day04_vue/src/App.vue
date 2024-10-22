<script setup lang="ts">
import { useCounterStore } from './stores/counter';

const store = useCounterStore()
</script>

<template>
  <h2>{{ store }}</h2>

  <button @click="store.addCount">修改数据</button>
  <h2>{{ store.doubleCount }}</h2>

</template>

<style scoped></style>