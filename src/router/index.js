import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import('../pages/HomeView.vue'),
        },
        {
            path: "/about",
            name: "About",
            component: () => import('../pages/AboutView.vue'),
        },
        {
            path: "/contact/",
            name: "Contact",
            component: () => import('../pages/ContactView.vue'),
        },
    ]
})
  
export default router