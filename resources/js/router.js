import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import ContactPage from './pages/ContactPage.vue';
import HomePage from './pages/HomePage.vue';
import AboutUsPage from './pages/AboutUsPage.vue';
import BlogPage from './pages/BlogPage.vue';
import ContentPost from './pages/ContentPost.vue';

const router =  new  VueRouter({
    mode: "history",
    routes:[
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/about-us',
            name: 'about-us',
            component: AboutUsPage
        },
        {
            path: '/blog',
            name: 'blog',
            component: BlogPage
        },
        {
            path: '/blog/:slug',
            name: 'content-post',
            component: ContentPost
        }
 ]});

 export default router;