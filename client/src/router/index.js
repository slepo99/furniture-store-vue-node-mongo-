import { createRouter, createWebHistory } from 'vue-router'
import MainComponent from '@/components/pages/MainComponent'
const Store = () => import('@/components/pages/Store')
const Product = () => import('@/components/pages/ProductPage')
const Cart = () => import ('@/components/pages/Cart')
const Auth = () => import('@/components/pages/Auth')
const routes = [
  {
    path: '/',
    component: MainComponent

  },
  {
    path: '/store',
    component: Store,
    name: 'store',
    
  },
  {
    path: '/cart',
    component: Cart,
    name: 'cart'
  },
  {
    path: '/product/:id',
    component: Product,
    name: 'product'
    
  },
  {
    path: '/auth',
    component: Auth,
    name: 'auth'

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
