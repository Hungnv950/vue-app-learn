import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import ToDo from '@/components/ToDo'
import About from '@/components/About'
import Contact from '@/components/Contact'
import Login from '@/components/Authenticate/Login'
import Signup from '@/components/Authenticate/Signup'

Vue.use(Router)

export default new Router({
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
      component: ToDo
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
})
