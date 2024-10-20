<script setup lang="ts">
import MyDialog from './components/MyDialog.vue'
</script>

<template>
  <MyDialog>
    <template v-slot:title>
      <h3 style="margin: 0;">危险提示</h3>
    </template>
    <template v-slot:content>
      <div>你确认要删除么</div>
    </template>
    <template v-slot:footer>
      <button>注册</button>
      <button>登录</button>
    </template>
  </MyDialog>
  <MyDialog></MyDialog>
</template>

<style scoped></style>