import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../layouts/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: []
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
