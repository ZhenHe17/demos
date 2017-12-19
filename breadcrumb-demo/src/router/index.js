import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '@/pages/Home'
import GroupPage from '@/pages/GroupPage'
import MemberPage from '@/pages/MemberPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/home/' + Date.now()
    },
    {
      path: '/home',
      name: 'index',
      redirect: '/home/' + Date.now()
    },
    {
      path: '/home/:date',
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
    }
  ]
})
