import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/MainLayout.vue'),
    children: [{ 
      path: '', 
      component: () => import('pages/IndexPage.vue') },{ 
      path: 'ToDo', 
      component: () => import('pages/IndexPage.vue') },
  ]
  },{
    // /auth/login
    path: '/auth',
    // use own blank layout around login
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/BlankLayout.vue'),
    children: [{       
      path: 'login', 
      component: () => import('pages/LoginPage.vue') },
  ]
  },{
    // /auth/login
    path: '/create',
    // use own blank layout around login
    // component: () => import('layouts/MainLayout.vue'),
    component: () => import('layouts/BlankLayout.vue'),
    children: [{       
      path: 'todo', 
      component: () => import('pages/CreateTodoForm.vue') },
  ]
  },


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
