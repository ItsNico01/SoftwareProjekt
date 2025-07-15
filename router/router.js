import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    { path: '/', component: () => import('../views/WelcomeView.vue') },
    { path: '/home', component: () => import('../views/DesktopView.vue') },
    { path: '/login', component: () => import('../views/LoginView.vue') },
    { path: '/badges', component: () => import('../views/BadgesView.vue') },
    { path: '/myHSHL', component: () => import('../views/MyHSHLView.vue') },
    { path: '/campusOfficeLogin', component: () => import('../views/CampusOfficeLoginView.vue') },
    { path: '/campusOffice', component: () => import('../views/CampusOfficeView.vue') },
    { path: '/lernplattform', component: () => import('../views/LernplattformView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router