import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../views/ContactList.vue";

const routes = [
  {
    path: "/",
    component: ContactList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
