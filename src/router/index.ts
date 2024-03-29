import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutUsPage from "../pages/AboutUsPage.vue";
import ProductPage from "../pages/ProductPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: '/',
            name: '',
            component: HomePage
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