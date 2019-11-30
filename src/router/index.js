import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Perfil from '../views/Perfil.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/encuesta',
    name: 'encuesta',
    component: About
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  }
]

const router = new VueRouter({
  routes
})

export default router
