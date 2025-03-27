import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    { path: '/', component: () => import('../views/WelcomeView.vue') },
    { path: '/home', component: () => import('../views/DesktopView.vue') },
    { path: '/login', component: () => import('../views/LoginView.vue') },
    { path: '/myHSHL', component: () => import('../views/MyHSHLView.vue') },
    { path: '/lernplattform', component: () => import('../views/LernplattformView.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router