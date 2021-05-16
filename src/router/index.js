import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tutorial from '../views/Tutorial.vue'
import Curriculum from '../views/CurriculumVitae.vue'
import IgniteTalk from  '../views/IgniteTalk.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/tutorial',
    name: 'Tutorial',
    component: Tutorial
  },
  {
    path: '/curriculum',
    name: 'Curriculum',
    component: Curriculum
  },
  {
    path: '/igniteTalk',
    name: 'IgniteTalk',
    component: IgniteTalk
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
