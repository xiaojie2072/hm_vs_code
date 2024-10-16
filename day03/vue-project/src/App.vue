// setup 是Vue3组合式API的语法
// lang="ts" 支持TS语法
<script setup lang="ts">
console.log('根组件被加载')
const msg = 'hello world'
const name = '张三'
const age = 18
const clickButton = () => {
  alert('点击了按钮')
}
const onMouseenter = () => {
  console.log('鼠标进入')
}
const onMouseleave = () => {
  console.log('鼠标离开')
}
</script>


<template>
  <h1 class="title">你好，hello world</h1>
  <p>{{ msg }}</p>
  <p>{{ name.charAt(0) }}</p>
  <p>{{ age >= 18 ? '已成年' : '未成年' }}</p>
  <button @click="clickButton()">点我</button>
  <div class="box" @mouseenter="onMouseenter()" @mouseleave="onMouseleave()"></div>

</template>
// scoped 样式只在当前组件有效
<style scoped>
.title {
  color: #ff4400;
}

.box {
  width: 200px;
  height: 200px;
  background-color: pink;
}
</style>
