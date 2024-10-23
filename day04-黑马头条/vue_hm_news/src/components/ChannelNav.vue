<script setup lang="ts">
import { useChannelStore } from '@/stores/channel';
import type { AxiosResData, ChannelItem, ChannelResData } from '@/types';
import axios from 'axios';
import { onMounted, ref } from 'vue';
const store = useChannelStore()
const list = ref<ChannelItem[]>([])
const getData = async () => {
    const res = await axios.get<AxiosResData<ChannelResData>>('http://geek.itheima.net/v1_0/channels')
    list.value = res.data.data.channels
}
onMounted(() => {
    getData()
})

</script>


<template>
    <div class="channel-nav">
        <nav class="list">
            <a class="item" :class="{ active: store.channeId === item.id }" href="javascript:;"
                v-for="(item, i) in list" :key="item.id" @click="store.changeChannel(item.id)">
                {{ item.name }}
            </a>
        </nav>
    </div>
</template>