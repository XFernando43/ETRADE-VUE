import { createRouter, createWebHistory } from "vue-router";
// import HomePage from "../pages/HomePage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import LandingPage from "../pages/LandingPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: '',
            component: LandingPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutUsPage
        },
        {
            path: '/product',
            name: 'product',
            component: ProductPage
        },
    ]
})

export default router;