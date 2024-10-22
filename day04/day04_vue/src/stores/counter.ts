import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 通过 defineStore 定义一个 数据仓库，返回获取仓库函数
export const useCounterStore = defineStore(
  "counter",
  () => {
    const totalCount = ref(0);

    const doubleCount = computed(() => totalCount.value * 2);

    const addCount = () => {
      totalCount.value++;
    };
    return { totalCount, addCount, doubleCount };
  },
  { persist: true }
);
