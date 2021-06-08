import { createRouter, createWebHistory } from "vue-router";
import dashboard from "../pages/dashboard.vue";
import ecommerce from "../pages/ecommerce.vue";

const routes = [
  { path: "/", component: dashboard },
  { path: "/ecommerce", component: ecommerce },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
