import Vue from 'vue'
import VueRouter from 'vue-router'
import Rhymesaurus from '@/views/Rhymesaurus'
import Adjective from '@/components/Adjective'
// TODO: Import new component

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Rhymesaurus',
    component: Rhymesaurus
  },
  {
    path: '/',
    name: 'Adjective',
    component: Adjective
  }
  // TODO: Add new route definition here
]

const router = new VueRouter({
  routes
})

export default router
