<script setup lang="ts">
import Son from './components/Son.vue'
import HmButton from './components/HmButton.vue'
import { provide, ref } from 'vue';
import SonSon from './components/SonSon.vue';

const changeAge = (age: number) => {
  console.log(age)
}
const getName = (name: string) => {
  console.log(name)
}
const totalCount = ref(100)
provide('totalCount', totalCount)
const updateCount = (count: number) => {
  totalCount.value = count
}

provide('updateCount', updateCount);
</script>

<template>
  <h1 class="Fh1">我是父组件</h1>
  <button @click="totalCount++">totalCount++</button>
  <!-- 父传子 -->
  <Son :name="'张三'" :age="18" @change="changeAge" @get-name="getName"></Son>
  <SonSon></SonSon>

  <!-- 父传子 设置默认参数 -->
  <HmButton></HmButton>
  <HmButton :text="'登录'"></HmButton>
</template>
<style scoped>
.Fh1 {
  color: red;
}
</style>