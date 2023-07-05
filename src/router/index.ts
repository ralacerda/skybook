import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import About from "../views/About.vue";
import Edit from "../views/Edit.vue";
import New from "../views/New.vue";

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
    name: "new",
    path: "/criar",
    component: New,
    meta: {
      depth: 3,
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

router.afterEach((to, from) => {
  const toDepth = to.meta.depth;
  const fromDepth = from.meta.depth;
  to.meta.transition = toDepth > fromDepth ? "push-in" : "pop-out";
});

export default router;
