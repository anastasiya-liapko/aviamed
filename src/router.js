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
            path: '/новости/:id',
            name: 'newsItem',
            component: () => import('./views/about/NewsItem.vue')
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
            path: '/клиники',
            name: 'clinics',
            component: () => import('./views/Clinics.vue')
        },
        {
            path: '/клиники/:id',
            name: 'clinic',
            component: () => import('./views/Clinic.vue')
        },
        {
            path: '/услуги-и-акции',
            name: 'services',
            component: () => import('./views/Services.vue')
        },
        {
            path: '/услуги-и-акции/:id',
            name: 'service',
            component: () => import('./views/Service.vue')
        },
        {
            path: '/врачи',
            name: 'doctors',
            component: () => import('./views/Doctor.vue')
        },
        {
            path: '/врачи/:id',
            name: 'doctor',
            component: () => import('./views/Doctors.vue')
        },
        {
            path: '/пациентам',
            name: 'toPatients',
            component: () => import('./views/toPatients/ToPatients.vue')
        },
        {
            path: '/публикации',
            name: 'publications',
            component: () => import('./views/Publications.vue')
        },
        {
            path: '/публикации/:id',
            name: 'publication',
            component: () => import('./views/Publication.vue')
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
