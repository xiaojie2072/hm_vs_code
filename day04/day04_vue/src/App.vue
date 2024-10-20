<script setup lang="ts">
import { useCounterStore } from './stores/counter';

const store = useCounterStore()
</script>

<template>
  <h2>{{ store }}</h2>

</template>

<style scoped></style>