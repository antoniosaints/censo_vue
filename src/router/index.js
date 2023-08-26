import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "@/layouts/default.vue";
import ServersViewVue from "@/views/ServersView.vue";

const routes = [
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
