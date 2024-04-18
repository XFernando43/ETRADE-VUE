import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/HomePage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import LandingPage from "../pages/LandingPage.vue";
import HomePage from "../pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            // path: '/Etrade',
            path: '/Etrade',
            name: '',
            component: LandingPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUsPage
        },
        {
            path: '/home',
            name: 'home',
            component: HomePage
        },
    ]
})

export default router;