<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()
const back = () => {
    router.push('/')
}

</script>

<template>
    <div class="detail">
        <h1>文章详情页</h1>
        <p>文章详情的id: {{ $route.params.id }}</p>
        <button @click="back">返回首页</button>
    </div>
</template>

<style scoped>
.detail {
    width: 100%;
    height: 200;
    position: absolute;
    background-color: pink;

}
</style>