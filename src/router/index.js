import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "@/layouts/default.vue";
import ServersViewVue from "@/views/ServersView.vue";
import ListagemSolicitacoes from "@/views/solicitacoes/ListagemSolicitacoesView.vue";

const routes = [
  {
    path: "/",
    name: "servers",
    component: LayoutDefault,
    children: [
      {
        path: "whatsapp",
        component: ServersViewVue,
      },
      {
        path: "solicitacoes",
        component: ListagemSolicitacoes,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
