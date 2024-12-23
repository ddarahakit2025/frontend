import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loding", {
  state: () => ({ isLoding: false }),

  actions: {
    startLoading() {
      this.isLoding = true;
    },
    stopLoading() {
      this.isLoding = false;
    },
  },
});
