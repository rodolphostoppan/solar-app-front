import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../modules/home/HomeView.vue'
import ClientView from '../modules/client/ClientView.vue'
import BillView from '../modules/bill/BillView.vue'
import ProjectView from '../modules/project/ProjectView.vue'
import SizingView from '../modules/sizing/SizingView.vue'
import TableProjectsView from '@/modules/home/TableProjectsView.vue'

const routes = [
  { name: 'home', path: '/', component: HomeView },
  { name: 'client', path: '/client', component: ClientView },
  { name: 'bill', path: '/bill', component: BillView },
  { name: 'project', path: '/project', component: ProjectView },
  { name: 'sizing', path: '/sizing', component: SizingView },
  { name: 'table-projects', path: '/table-projects', component: TableProjectsView }
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...routes]
})
