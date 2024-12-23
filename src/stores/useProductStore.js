import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
  }),
  actions: {
    async getProductList() {
      const response = await axios.get(
        "https://c228aa9c-c71d-4ea9-ab6c-f8fffbbfe51a.mock.pstmn.io/product/list"
      );
      this.products = response.data;
    },
  },
});
