<script setup lang="ts">
import MyDialog from './components/MyDialog.vue'
</script>

<template>
  <MyDialog>
    <template #title>
      <h3 style="margin: 0;">危险提示</h3>
    </template>
    <template #content>
      <div>你确认要删除么</div>
    </template>
    <template #left>注册</template>
    <template #right>登录</template>
  </MyDialog>
  <MyDialog></MyDialog>
</template>

<style scoped></style>