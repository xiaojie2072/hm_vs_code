<script setup lang="ts">
import { ref } from 'vue';
import MyTable from './components/MyTable.vue'

export interface Person {
  id: number
  name: string
  age: number
}


const list = ref<Person[]>([
  { id: 1, name: '张小花', age: 18 },
  { id: 2, name: '孙大明', age: 19 },
  { id: 3, name: '刘德忠', age: 17 },
])

const list2 = ref<Person[]>([
  { id: 1, name: '赵小云', age: 18 },
  { id: 2, name: '刘蓓蓓', age: 19 },
  { id: 3, name: '姜肖泰', age: 17 },
])
const del = (id: number) => {
  list.value = list.value.filter(item => item.id !== id)
}

// 结构赋值语法
const { name } = Object({ name: '张小花', age: 18 })
console.log(name)


</script>

<template>
  <MyTable :data="list">
    <template #defaul="{ id }">
      <button @click="del(id)">删除</button>
    </template>
  </MyTable>
  <MyTable :data="list2"></MyTable>
</template>

<style scoped>
body {
  background-color: #b3b3b3;
}

button {
  width: 65px;
  height: 35px;
  font-size: 18px;
  border: 1px solid #ccc;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  background-color: #ffffff;
  margin-left: 5px;
}
</style>