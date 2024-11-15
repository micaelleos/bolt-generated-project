import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Chat from '../views/Chat.vue'
import Calendar from '../views/Calendar.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/calendar',
      name: 'Calendar',
      component: Calendar
    }
  ]
})

export default router
