import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "./api/axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import "./assets/css/main.css";

const app = createApp(App); // createApp(App) Cria a aplicação
app.use(router); // use(router) configura a aplicação para roteamento
app.use(store); // use(store) configura a aplicação para armazenamento
app.use(VueSweetalert2);
app.config.globalProperties.$axios = axios; // configura a aplicação para axios

app.mount("#app"); // mount("#app") monta a aplicação
