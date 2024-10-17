<script setup lang="ts">
import { computed, ref } from 'vue'

const list = ref([
    { id: 1, name: '篮球', num: 1 },
    { id: 2, name: '玩具', num: 2 },
    { id: 3, name: '铅笔', num: 5 },
])
const totalCount = computed(() => {
    return list.value.reduce((sum, item) => sum + item.num, 0)
})
</script>


<template>
    <div id="app">
        <h3>小黑的礼物清单</h3>
        <table>
            <tr>
                <th>名字</th>
                <th>数量</th>
            </tr>
            <tr v-for="(item) in list" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.num }}个</td>
            </tr>
        </table>

        <!-- 目标：统计求和，求得礼物总数 -->
        <p>礼物总数：{{ totalCount }} 个</p>
    </div>
</template>

<style>
table {
    border: 1px solid #000;
    text-align: center;
    width: 240px;
}

th,
td {
    border: 1px solid #000;
}

h3 {
    position: relative;
}
</style>
