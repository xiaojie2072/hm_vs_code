<script setup lang="ts">
import ChannelNav from './components/ChannelNav.vue';
import ArticleList from './components/ArticleList.vue'
import { ref } from 'vue';

const channeId = ref(0)
const changeChannel = (id: number) => {
  channeId.value = id
}
</script>

<template>
  <ChannelNav :channeId="channeId" @changeChannel="changeChannel"></ChannelNav>
  <ArticleList :channeId="channeId"></ArticleList>
</template>