import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import sotreAuth from '../store/authStore';
import ListasView from '../views/ListasView.vue';
import EditListaView from '../views/EditListaView.vue';
import NotFoundView from '../views/Error/NotFoundView.vue';
import AuthView from '../views/AuthView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import PerfilView from '../views/PerfilView.vue';

const base = '/ListaCompraApp';
const routes =  [
  {
    path: base + '/',
    name: 'home',
    meta:{
      isGest:false
    },
    component: HomeView
  },
  {
    path: base + '/listas',
    name: 'listas',
    component: ListasView,
    meta:{
      isGest:false
    },
    children: [
      
    ]
  },
  {
    path: base + '/lista/:id',
    name: 'lista',
    component: EditListaView,
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
    component: NotFoundView
  },
  {
    path: base + '/auth',
    name: 'auth',
    redirect: base + '/auth/login',
    meta:{
      isGest:true
    },
    component: AuthView,
    children: [
      {
        path: 'login',
        name: 'login',
        meta: {
          isGest:true
        },
        component: LoginView
      },
      {
        path:'register',
        name: 'register',
        meta:{
          isGest:true
        },
        component: RegisterView
      }
    ]
  },
  {
    path: base + '/perfil',
    name:'perfil',
    meta:{
      isGest:false
    },
    component:PerfilView
  }
]

const router = createRouter({
  history:createWebHistory(),
  routes  
})

router.beforeEach((to, from, next) => {
  
  if (to.meta.isGest) {
    if (sotreAuth.state.user.token) {
      next({name:'home'});
    } else {
      next();
    }
  } else {
    if (sotreAuth.state.user.token) {
      next();
    } else {
      next({name:'login'});
    }
  }
});

export default router;
