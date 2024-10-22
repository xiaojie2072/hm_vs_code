<script setup lang="ts">
import type { AxiosResData, ChannelItem, ChannelResData } from '@/types';
import axios from 'axios';
import { onMounted, ref } from 'vue';

const list = ref<ChannelItem[]>([])
const getData = async () => {
    const res = await axios.get<AxiosResData<ChannelResData>>('http://geek.itheima.net/v1_0/channels')
    list.value = res.data.data.channels
}
onMounted(() => {
    getData()
})

defineProps<{ channeId: number }>()

const emit = defineEmits<{ 'changeChannel': [id: number] }>()
</script>


<template>
    <div class="channel-nav">
        <nav class="list">
            <a class="item" :class="{ active: channeId === item.id }" href="javascript:;" v-for="(item, i) in list"
                :key="item.id" @click="emit('changeChannel', item.id)">
                {{ item.name }}
            </a>
        </nav>
    </div>
</template>