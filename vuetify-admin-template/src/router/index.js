import { createRouter, createWebHistory } from 'vue-router';
import home from '../views/HomeView.vue';
import GridSystem from '../views/GridSystem.vue';
import Dashboard from '../views/Dashboard.vue';

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: home,
  // },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
