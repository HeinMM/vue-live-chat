import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomeView.vue'
import Chatroom from '../views/ChatroomView.vue'
const routes = [
  {
    path:"/",
    name:"welcome",
    component:Welcome
  },
  {
    path:"/chatroom",
    name:"chatroom",
    component:Chatroom
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
