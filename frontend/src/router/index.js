import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CreateView from '../views/CreateView.vue';
import EmployeeView from '../views/EmployeeView.vue';
import UploadView from '../views/UploadView'

const routes = [
    {
        path: '/',
        name: 'upload',
        component: UploadView,
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/create',
        name: 'create',
        component: CreateView,
    },
    {
        path:'/employeeView/:id',
        name:'employeeView',
        component: EmployeeView
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
