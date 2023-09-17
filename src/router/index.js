import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import sotreAuth from '../store/authStore';

const routes =  [
  {
    path: '/',
    name: 'home',
    meta:{
      isGest:false
    },
    component: HomeView
  },
  {
    path: '/listas',
    name: 'listas',
    component: () => import('../views/ListasView.vue'),
    meta:{
      isGest:false
    },
    children: [
      
    ]
  },
  {
    path: '/lista/:id',
    name: 'lista',
    component: () => import('../views/EditListaView.vue'),
    meta:{
      isGest:false
    },
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    meta: {
      isGest:false
    },
    component: () => import('../views/Error/NotFoundView.vue')
  },
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/login',
    meta:{
      isGest:true
    },
    component: () => import('../views/AuthView.vue'),
    children: [
      {
        path: '/auth/login',
        name: 'login',
        meta: {
          isGest:true
        },
        component: () => import('../views/LoginView.vue')
      },
      {
        path: '/register',
        name: 'register',
        meta:{
          isGest:true
        },
        component: () => import('../views/RegisterView.vue')
      }
    ]
  },
  {
    path:'/perfil',
    name:'perfil',
    meta:{
      isGest:false
    },
    component:() => import('../views/PerfilView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  
  if (to.meta.isGest) {
    if (sotreAuth.state.user.token) {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    if (sotreAuth.state.user.token) {
      next();
    } else {
      next({ name: 'login' });
    }
  }
});

export default router;
