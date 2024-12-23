import { defineStore } from "pinia";
import axios from "axios";

export const useProductStore = defineStore("product", {
  state: () => ({
    products: [],
    product: {
      id: 0,
      name: "",
      price: 0,
      originalPrice: 0,
      description: "",
      seller: "",
    },
  }),
  actions: {
    async getProductList() {
      const response = await axios.get(
        "https://c228aa9c-c71d-4ea9-ab6c-f8fffbbfe51a.mock.pstmn.io/product/list"
      );
      this.products = response.data;
    },
    async getProductDetail(id) {
      const response = await axios.get(
        `https://c228aa9c-c71d-4ea9-ab6c-f8fffbbfe51a.mock.pstmn.io/product/${id}`
      );
      this.product = response.data;
    },
  },
});
