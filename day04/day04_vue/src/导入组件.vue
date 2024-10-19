<script setup lang="ts">
import HmTest from './components/HmTest.vue'
</script>

<template>
  <header class="app-header">
    <HmTest></HmTest>
    <HmButton></HmButton>
  </header>
  <main class="app-main">
    <HmTest></HmTest>
    <HmButton></HmButton>
  </main>
  <footer class="app-footer">
    <HmTest></HmTest>
    <HmButton></HmButton>
  </footer>
</template>

<style scoped>
.app-header {
  width: 100%;
  height: 100px;
  background-color: wheat;
}

.app-main {
  width: 100%;
  height: calc(100vh - 200px);
  background-color: pink;
}

.app-footer {
  width: 100%;
  height: 100px;
  background-color: gold;
}
</style>
