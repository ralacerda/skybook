import { createPinia } from "pinia";
import { createApp } from "vue";
import { plugin as formkit, defaultConfig } from "@formkit/vue";
import { pt } from "@formkit/i18n";
import router from "../src/router";
import App from "./App.vue";
import "./styles/index.scss";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(formkit, defaultConfig({ locale: "pt", locales: { pt } }));
app.mount("#app");
