import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";

const router = createRouter({
  //history: createWebHashHistory(), // 哈希路由模式
  history: createWebHistory(), // 历史路由模式
  routes: [
    { path: "/", redirect: "/home" }, // 重定向到首页
    { path: "/find", component: () => import("@/view/Find.vue") },
    { path: "/my", component: () => import("@/view/My.vue") },
    { path: "/friend", component: () => import("@/view/Friend.vue") },
    { path: "/home", component: () => import("@/view/HomeView.vue") },
    {
      path: "/search/:keyword?",
      name: "SearchView",
      component: () => import("@/view/SearchView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/view/NotFoundView.vue"),
    },
  ],
});

export default router;
