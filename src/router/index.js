import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LayoutDefault from "@/layouts/default.vue";
import ServersViewVue from "@/views/ServersView.vue";

const routes = [
  {
    path: "/dash",
    name: "home",
    component: HomeView,
  },
  {
    path: "/",
    name: "servers",
    component: LayoutDefault,
    children: [
      {
        path: "",
        component: ServersViewVue,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
