<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter()

const keyword = ref('')

const search = () => {

    // 简单写法
    //router.push(`/search/${keyword.value}`)
    // 完整写法
    //router.push({ path: `/search/${keyword.value}` })

    router.push({ name: 'SearchView', params: { keyword: keyword.value } })
}
</script>

<template>
    <div class="home">
        <div class="logo-box"></div>
        <div class="search-box">
            <input type="text" v-model="keyword">
            <button @click="search">搜索一下</button>
        </div>
        <div class="hot-link">
            热门搜索：
            <!-- <router-link to="/search?keyword=黑马程序员">黑马程序员</router-link>
            <router-link to="/search?keyword=前端培训">前端培训</router-link>
            <router-link to="/search?keyword=如何成为前端大牛">如何成为前端大牛</router-link><br> -->
            <router-link to="/search/黑马程序员">黑马程序员</router-link>
            <router-link to="/search/前端培训">前端培训</router-link>
            <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
        </div>
    </div>
</template>

<style scoped>
.logo-box {
    height: 150px;
    background: url('@/assets/logo.jpeg') no-repeat center;
}

.search-box {
    display: flex;
    justify-content: center;
}

.search-box input {
    width: 400px;
    height: 30px;
    line-height: 30px;
    border: 2px solid #c4c7ce;
    border-radius: 4px 0 0 4px;
    outline: none;
}

.search-box input:focus {
    border: 2px solid #ad2a26;
}

.search-box button {
    width: 100px;
    height: 36px;
    border: none;
    background-color: #ad2a26;
    color: #fff;
    position: relative;
    left: -2px;
    border-radius: 0 4px 4px 0;
}

.hot-link {
    width: 508px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto;
}

.hot-link a {
    margin: 0 5px;
}
</style>