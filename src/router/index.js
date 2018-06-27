import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Hello from '@/components/Hello'
import ToDo from '@/components/ToDo'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Login from '@/components/Authenticate/Login'
import Signup from '@/components/Authenticate/Signup'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDo,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/login',
      name: 'Login',
      meta: { layout: 'no-nav'},
      component: Login
    },
    {
      path: '/signup',
      name: 'Signup',
      meta: { layout: 'no-nav'},
      component: Signup
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    let currentUser = firebase.auth().currentUser;
    let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

    if (currentUser && requiresAuth) {
      next()
    } else {
      next({name: 'Login'})
    }
  }
  next()
});

export default router;
