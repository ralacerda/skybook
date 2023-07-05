import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../views/ContactList.vue";
import ContactDetails from "../views/ContactDetails.vue";
import AboutPage from "../views/AboutPage.vue";
import EditContact from "../views/EditContact.vue";

const routes = [
  {
    name: "home",
    path: "/",
    component: ContactList,
    meta: {
      depth: 0,
    },
  },
  {
    name: "details",
    path: "/detalhes/:id",
    component: ContactDetails,
    meta: {
      depth: 1,
    },
  },
  {
    name: "edit",
    path: "/editar/:id",
    component: EditContact,
    meta: {
      depth: 2,
    },
  },
  {
    name: "about",
    path: "/sobre",
    component: AboutPage,
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
