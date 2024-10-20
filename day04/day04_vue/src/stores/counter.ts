import { defineStore } from "pinia";
import { ref } from "vue";

// 通过 defineStore 定义一个 数据仓库，返回获取仓库函数
export const useCounterStore = defineStore("counter", () => {
  const totalCount = ref(0);
  return { totalCount };
});
