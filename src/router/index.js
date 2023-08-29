import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "@/layouts/default.vue";
import ServersViewVue from "@/views/ServersView.vue";
import ListagemSolicitacoes from "@/views/solicitacoes/ListagemSolicitacoesView.vue";
import Login from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "servers",
    component: LayoutDefault,
    children: [
      {
        path: "servers",
        component: ServersViewVue,
      },
      {
        path: "solicitacoes",
        component: ListagemSolicitacoes,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
