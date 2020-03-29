const routes = [{
  path: '/',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    name: 'index',
    component: () => import('pages/index.vue'),
    meta: {
      requiresAuth: false
    }
  }]
},
{
  path: '/auth',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    name: 'auth',
    component: () => import('pages/Auth.vue'),
    meta: {
      requiresAuth: false
    }
  }]
},
{
  path: '/profile',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    name: 'profile',
    path: '',
    component: () => import('pages/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  }]
},
{
  path: '/todo',
  component: () => import('layouts/MyLayout.vue'),
  children: [{
    path: '',
    name: 'todo',
    component: () => import('pages/Todo.vue'),
    meta: {
      requiresAuth: true
    }
  }]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
