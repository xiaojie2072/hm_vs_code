<script setup lang="ts">
import { reactive, ref } from 'vue'

const list = ref([
    { id: 1, name: '《红楼梦》', author: '曹雪芹' },
    { id: 2, name: '《西游记》', author: '吴承恩' },
    { id: 3, name: '《水浒传》', author: '施耐庵' },
    { id: 4, name: '《三国演义》', author: '罗贯中' }
])
const del = (id: number) => {
    list.value = list.value.filter(item => item.id !== id)
}
const bookInfo = reactive({
    id: 0,
    name: '',
    author: ''
})
const add = () => {
    if (!bookInfo.name || !bookInfo.author) return
    bookInfo.id = new Date().getTime()


    // list.value.push({ ...bookInfo })

    // 用于将一个或多个源对象的属性复制到目标对象中，并返回目标对象。
    list.value.push(Object.assign({}, bookInfo))
    bookInfo.name = ''
    bookInfo.author = ''

}
</script>

<template>
    <div id="app">
        <h3>小黑的书架</h3>
        <div class="form-container">
            <label for="name">书名：</label>
            <input type="text" v-model="bookInfo.name" id="name" />
            <label for="author">作者：</label>
            <input type="text" v-model="bookInfo.author" id="author" />
            <button @click="add()">添加</button>
        </div>
        <ul class="book-list">
            <li class="header">
                <span>&nbsp;&nbsp;&nbsp;书名</span>
                <span>作者</span>
                <span>操作&nbsp;&nbsp;&nbsp;</span>
            </li>
            <li v-for="item in list" :key="item.id" class="book-item">
                <span>{{ item.name }}</span>
                <span>{{ item.author }}</span>
                <button @click="del(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
#app {
    font-family: Arial, sans-serif;
    text-align: center;
    margin-top: 50px;
    max-width: 800px;
    margin: 0 auto;
}

h3 {
    color: #333;
    margin-bottom: 20px;
}

.form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

label {
    font-weight: bold;
}

input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 200px;
}

button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #0056b3;
}

.book-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f4f4f4;
    padding: 10px;
    border-radius: 5px;
    font-weight: bold;
    margin-bottom: 10px;
}

.book-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px;
}

.book-item span {
    flex: 1;
    text-align: left;
}

.book-item button {
    background-color: #ff4d4d;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.book-item button:hover {
    background-color: #ff1a1a;
}
</style>