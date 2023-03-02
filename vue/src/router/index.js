import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import AuthLayout from '../components/AuthLayout.vue'
import Surveys from '../views/Surveys.vue'
import store from "../store";


const routes = [
    {
      path: '/',
      redirect: '/dashboard',
      meta: {requireAuth: true},  
      component: DefaultLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: Dashboard
        },
        {
          path: '/surveys',
          name: 'surveys',
          component: Surveys
        }
      ]
    },
    {
      path: '/auth',
      redirect: '/login',
      name: 'Auth',
      meta: {isGuest: true},
      component: AuthLayout,
      children: [
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

      ]
    }
  ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.requireAuth && !store.state.user.token){
    next({name: 'Login'})
  }
  else if(store.state.user.token && (to.meta.isGuest)){
    next({name: 'Dashboard'});
  }else{
    next();
  }
})

export default router