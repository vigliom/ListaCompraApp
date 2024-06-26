import { createStore } from "vuex";
import axiosClient from '../compostable/axios.js';
import router from "../router/index.js";
const sotreAuth = createStore({
    state: {
        user: {
            id : sessionStorage.getItem('id'),
            name: '',
            token: sessionStorage.getItem('token'),
            email: ''
        }
    },
    actions: {
        login: (state, usuario) => {
            //console.log(usuario);
            axiosClient.post('auth/login', { email: usuario.email, password: usuario.password }).then((response) => {
                state.commit('login', response);
            }).catch((error) => {
                throw error;
            });
        },
        logout: () => {
            sotreAuth.commit('logout');
        }

    },
    mutations: {
        login: (state, response) => {
            state.user.token = response.token;
            state.user.id = response.id;
            sessionStorage.setItem('token', response.token);
            sessionStorage.setItem('id', response.id);
            router.go({name:"login"});
        },
        logout: (state) => {
            state.user.name = '';
            state.user.token = '';
            state.user.email = '';
            sessionStorage.setItem('token', '');
        }
    },
});

export default sotreAuth;