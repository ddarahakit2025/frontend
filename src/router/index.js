import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/user/Login.vue";
import List from "../pages/product/List.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/product/list", component: List },
    { path: "/user/login", component: Login },
  ],
});
export default router;
