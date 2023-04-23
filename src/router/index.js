import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      redirect: '/sys',
      children: [
        { path: 'sys', component: () => import('../views/sys/SysView.vue'), name: 'index' },
        { path: 'read', component: () => import('../views/sys/ReadView.vue'), name: 'read' },
        { path: 'judge', component: () => import('../views/sys/JudgeView.vue'), name: 'jduge' },
      ]
    },
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/sys/WatchPage.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
