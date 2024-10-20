<script setup lang="ts">
import { useRoute } from 'vue-router';


// 获取路由信息
const route = useRoute()
</script>

<template>
    <div class="search">
        <p>搜索关键字: {{ route.params.keyword }}</p>
        <p>搜索结果: </p>
        <ul>
            {{ route.params }}
            <li>.............</li>
            <li>.............</li>
            <li>.............</li>
            <li>.............</li>
        </ul>
    </div>
</template>

<style>
.search {
    width: 400px;
    height: 240px;
    padding: 0 20px;
    margin: 0 auto;
    border: 2px solid #c4c7ce;
    border-radius: 5px;
}
</style>