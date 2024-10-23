import { defineStore } from "pinia";
import { ref } from "vue";

export const useChannelStore = defineStore("channel", () => {
  const channeId = ref(0);
  const changeChannel = (id: number) => {
    channeId.value = id;
  };

  return { changeChannel, channeId };
});
