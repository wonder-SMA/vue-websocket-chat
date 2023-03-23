import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/Login.vue';
import Main from '../pages/Main.vue';
import Topics from '../pages/Topics.vue';
import Topic from '../pages/Topic.vue';

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/topics',
    component: Topics
  },
  {
    path: '/topics/:id',
    component: Topic
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory()
});
