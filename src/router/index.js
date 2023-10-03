import { createRouter, createWebHistory } from "vue-router";
import ServersViewVue from "@/views/servers/ServersView.vue";
import ListagemSolicitacoes from "@/views/solicitacoes/ListagemSolicitacoesView.vue";
import Login from "@/views/LoginView.vue";
import Usuarios from "@/views/adm/UsuariosView.vue";

const routes = [
  {
    path: "/",
    name: "servers",
    component: () => import("@/layouts/LayoutMain.vue"),
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
      {
        path: "pokedex",
        component: () => import("@/views/pokemons/PokedexView.vue"),
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
