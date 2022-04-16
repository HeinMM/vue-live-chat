import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomeView.vue'
const routes = [
  {
    path:"/",
    name:"welcome",
    component:Welcome
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
