import { createRouter, createWebHistory } from "vue-router";
import LayoutDefault from "@/layouts/default.vue";
import ServersViewVue from "@/views/ServersView.vue";
import ListagemSolicitacoes from "@/views/solicitacoes/ListagemSolicitacoesView.vue";
import Login from "@/views/LoginView.vue";
import Usuarios from "@/views/adm/UsuariosView.vue";

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
      {
        path: "usuarios",
        component: Usuarios,
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
