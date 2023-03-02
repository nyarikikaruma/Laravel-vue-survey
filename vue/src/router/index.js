import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


const routes = [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
    
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router