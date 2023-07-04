import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "../src/router";
import App from "./App.vue";
import "./styles/index.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.mount("#app");
