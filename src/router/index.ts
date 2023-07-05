import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../views/ContactList.vue";
import ContactDetails from "../views/ContactDetails.vue";

const routes = [
  {
    path: "/",
    component: ContactList,
    meta: {
      depth: 0,
    },
  },
  {
    path: "/details/:id",
    component: ContactDetails,
    meta: {
      depth: 1,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
