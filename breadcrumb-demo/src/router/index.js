import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import GroupPage from '@/pages/GroupPage'
import MemberPage from '@/pages/MemberPage'
import LoginPage from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
      meta: {
        auth: undefined,
      },
      children:[
        {
          path: 'group/:id',
          name: 'GroupPage',
          component: GroupPage,
        },
        {
          path: 'member/:id',
          name: 'MemberPage',
          component: MemberPage,
        },
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage,
      meta: {
        auth: false,
      }
    }
  ]
})
