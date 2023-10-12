import { createRouter, createWebHistory } from 'vue-router';
import Form from '../components/form/Form.vue';
import Details from '../components/details/Details.vue';
import Auth from '../components/login/Auth.vue';
import Hidden from '../components/hidden/Hidden.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/ticket",
      name: "ticket-form",
      component: Form,
    },
    {
      path: "/details",
      name: "ticket-details",
      component: Details,
    },
    {
      path: "/login",
      component: Auth
    },
    {
      path: "/secret",
      name: "secret",
      component: Hidden
    }
  ]
});

export default router;