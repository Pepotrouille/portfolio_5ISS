/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import Personal from '@/components/Personal.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/personal', component: Personal },
  { path: '/education', component: Education },
  { path: '/experience', component: Experience },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
