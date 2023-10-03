import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import axios from "./services/axios";
import VueSweetalert2 from "vue-sweetalert2";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import "sweetalert2/dist/sweetalert2.min.css";
import "./assets/css/main.css";

const app = createApp(App); // createApp(App) Cria a aplicação
const pinia = createPinia();
app.use(router); // use(router) configura a aplicação para roteamento
app.use(pinia); // use(pinia) configura a aplicação para pinia
app.use(VueSweetalert2);
app.use(autoAnimatePlugin);
app.config.globalProperties.$axios = axios; // configura a aplicação para axios

app.mount("#app"); // mount("#app") monta a aplicação
