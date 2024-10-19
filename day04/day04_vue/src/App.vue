<script setup lang="ts">
import Son from './components/Son.vue'
</script>

<template>
  <h1 class="Fh1">我是父组件</h1>
  <Son :name="'张三'" :age="18"></Son>
  <Son :name="'李四'" :age="18"></Son>
  <Son :name="'王五'" :age="18"></Son>
  <HmButton></HmButton>
  <HmButton :text="'我是按钮'"></HmButton>
</template>
<style scoped>
.Fh1 {
  color: red;
}
</style>