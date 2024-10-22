<script setup lang="ts">
import axios from 'axios';
import { ref, watch } from 'vue';
import { type ArticleItem, type ArticleResData, type AxiosResData } from '../types/index';
import router from '@/router';

const props = defineProps<{ channeId: number }>();

const articles = ref<ArticleItem[]>([]);

watch(
    () => props.channeId,
    async () => {
        const res = await axios.get<AxiosResData<ArticleResData>>(
            `http://geek.itheima.net/v1_0/articles`,
            {
                params: {
                    channel_id: props.channeId,
                    timestamp: Date.now(),
                },
            },
        );
        articles.value = res.data.data.results;
    },
    { immediate: true }// 初始化加载数据
);
const onClick = (id: string) => {
    router.push(`/detail/${id}`)
};
</script>

<template>
    <div class="article-list">
        <div class="article-item" @click="onClick(item.art_id)" v-for="item in articles" :key="item.art_id">
            <p class="title">{{ item.title }}</p>
            <img v-for="(url, i) in item.cover?.images" :key="i" class="img" :src="url" alt="" />
            <div class="info">
                <span>{{ item.aut_name }}</span>
                <span>{{ item.comm_count }}评论</span>
                <span>{{ item.pubdate }}</span>
            </div>
        </div>
    </div>
</template>