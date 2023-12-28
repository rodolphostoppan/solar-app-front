import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientView from '../views/ClientView.vue'
import BillView from '@/views/BillView.vue'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'client', path: '/client', component: ClientView },
  { name: 'bill', path: '/bill', component: BillView }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})
