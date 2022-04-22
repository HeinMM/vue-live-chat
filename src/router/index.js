import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/WelcomeView.vue'
import Chatroom from '../views/ChatroomView.vue'
import {auth} from '../firebase/config'
import { async } from '@firebase/util'
const routes = [
  {
    path:"/",
    name:"welcome",
    component:Welcome
  },
  {
    path:"/chatroom",
    name:"chatroom",
    component:Chatroom,
    beforeEnter:  (to, from, next) => {
        let user = auth.currentUser;
        if (user) {
            next();
        }else{
            next({name:"welcome"});
        }
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
