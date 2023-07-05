import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import About from "../views/About.vue";
import Edit from "../views/Edit.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
    meta: {
      depth: 0,
    },
  },
  {
    name: "details",
    path: "/detalhes/:id",
    component: Details,
    meta: {
      depth: 1,
    },
  },
  {
    name: "edit",
    path: "/editar/:id",
    component: Edit,
    meta: {
      depth: 2,
    },
  },
  {
    name: "about",
    path: "/sobre",
    component: About,
    meta: {
      depth: -1,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
