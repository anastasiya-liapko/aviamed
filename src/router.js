import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/новости',
      name: 'news',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/about/News.vue')
    },
    {
      path: '/менеджмент',
      name: 'management',
      component: () => import('./views/about/Management.vue')
    },
    {
      path: '/лицензия',
      name: 'license',
      component: () => import('./views/about/License.vue')
    },
    {
      path: '/наши-партнеры',
      name: 'partners',
      component: () => import('./views/about/Partners.vue')
    },
    {
      path: '/контакты',
      name: 'contacts',
      component: () => import('./views/about/Contacts.vue')
    },
    {
      path: '/запись-на-прием',
      name: 'appointment',
      component: () => import('./views/Appointment.vue')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
