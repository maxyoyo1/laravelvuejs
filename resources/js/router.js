import {createWebHistory, createRouter} from "vue-router";
import home from './components/Home.vue'
import contact from './components/Contact.vue'

export const routes = [
    {
        name: 'home',
        path: '/',
        component: home
    },
    {
        name: 'contact',
        path: '/contact',
        component: contact
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
export default router;