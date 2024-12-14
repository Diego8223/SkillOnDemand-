import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import Tasks from '../pages/Tasks.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
  { path: '/tasks', component: Tasks },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
