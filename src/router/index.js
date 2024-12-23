import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/user/Login.vue";
import List from "../pages/product/List.vue";
import ProductDetail from "../pages/product/ProductDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/product/list", component: List },
    { path: "/product/:id", component: ProductDetail },
    { path: "/user/login", component: Login },
  ],
});
export default router;
