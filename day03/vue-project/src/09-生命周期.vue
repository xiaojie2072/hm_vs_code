<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';

interface NewsItem {
    id: number
    title: string
    source: string
    cmtcount: number
    img: string
    time: string
}
const newsList = ref<NewsItem[]>([])
// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
const getData = async () => {
    const res = await axios.get('http://hmajax.itheima.net/api/news')
    newsList.value = res.data.data
}

onMounted(() => {
    getData()
})
</script>
<template>
    <div id="app">
        <ul>
            <li class="news" v-for="item in newsList">
                <div class="left">
                    <div class="title">{{ item.title }}</div>
                    <div class="info">
                        <span>{{ item.source }}</span>
                        <span>{{ item.time }}</span>
                    </div>
                </div>
                <div class="right">
                    <img :src="item.img" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<style>
* {
    margin: 0;
    padding: 0;
    list-style: none;
}

.news {
    display: flex;
    height: 120px;
    width: 600px;
    margin: 0 auto;
    padding: 20px 0;
    cursor: pointer;
}

.news .left {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 10px;
}

.news .left .title {
    font-size: 20px;
}

.news .left .info {
    color: #999999;
}

.news .left .info span {
    margin-right: 20px;
}

.news .right {
    width: 160px;
    height: 120px;
}

.news .right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>