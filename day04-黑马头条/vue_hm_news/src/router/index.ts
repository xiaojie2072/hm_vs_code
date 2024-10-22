import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/detail/:id",
      component: () => import("@/views/ArticleDetailview.vue"),
    },
  ],
});

export default router;
