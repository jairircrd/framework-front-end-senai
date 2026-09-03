import { createRouter, createWebHistory } from 'vue-router'

// Páginas públicas
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

// Layout do painel e páginas internas
import AppLayout from '../layouts/AppLayout.vue'
import UploadView from '../views/UploadView.vue'
import RelatoriosView from '../views/RelatoriosView.vue'
import GraficosView from '../views/GraficosView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/app',
    component: AppLayout,
    redirect: '/app/upload',
    children: [
      {
        path: 'upload',
        name: 'Upload',
        component: UploadView
      },
      {
        path: 'relatorios',
        name: 'Relatorios',
        component: RelatoriosView
      },
      {
        path: 'graficos',
        name: 'Graficos',
        component: GraficosView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router