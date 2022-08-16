import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Bookings from '../views/Bookings.vue';
import CreateBooking from "../views/CreateBooking.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/bookings',
      name: 'bookings',
      component: Bookings
    },
    {
      path: '/bookings/create',
      name: 'Book Now',
      component: CreateBooking
    }
  ]
})

export default router
