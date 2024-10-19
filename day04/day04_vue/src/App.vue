<script setup lang="ts">
import Son from './components/Son.vue'
import HmButton from './components/HmButton.vue'

const changeAge = (age: number) => {
  console.log(age)
}
</script>

<template>
  <h1 class="Fh1">我是父组件</h1>
  <!-- 父传子 -->
  <Son :name="'张三'" :age="18" @change="changeAge"></Son>
  <Son :name="'李四'" :age="18"></Son>
  <Son :name="'王五'" :age="18"></Son>
  <!-- 父传子 设置默认参数 -->
  <HmButton></HmButton>
  <HmButton :text="'登录'"></HmButton>
</template>
<style scoped>
.Fh1 {
  color: red;
}
</style>