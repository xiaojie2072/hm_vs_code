<script setup lang="ts">
</script>

<template>
    <div class="not-found-container">
        <h1 class="not-found-title">404 Not Found</h1>
        <p class="not-found-message">你似乎迷路了</p>
        <router-link to="/home" class="not-found-link">返回首页</router-link>
    </div>
</template>



<style scoped>
.not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

.not-found-title {
    font-size: 3rem;
    color: #333;
    margin-bottom: 20px;
}

.not-found-message {
    font-size: 1.5rem;
    color: #666;
    margin-bottom: 30px;
}

.not-found-link {
    font-size: 1.2rem;
    color: #007bff;
    text-decoration: none;
    padding: 10px 20px;
    border: 2px solid #007bff;
    border-radius: 5px;
    transition: background-color 0.3s, color 0.3s;
}

.not-found-link:hover {
    background-color: #007bff;
    color: #fff;
}
</style>