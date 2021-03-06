import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/animalCreate',
    name: 'animalCreate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AnimalCreate.vue'),
  },

  {
    path: '/branchView',
    name: 'branchView',
    component: () => import('../views/BranchView.vue'),
  },

  {
    path: '/updateAnimal/:idAnimal',
    name: 'updateAnimal',
    props: true,
    component: () => import('../views/UpdateAnimal.vue'),
  },

  {
    path: '/branchUpdate',
    name: 'branchUpdate',
    component: () => import('../views/UpdateBranch.vue'),
  },


  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
