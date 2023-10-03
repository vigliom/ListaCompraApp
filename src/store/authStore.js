import { createStore } from "vuex";
import axiosClient from '../compostable/axios.js';
const sotreAuth = createStore({
    state: {
        user: {
            name: '',
            token: sessionStorage.getItem('token'),
            email: ''
        }
    },
    actions: {
        login: (state, usuario) => {
            console.log(usuario);
            axiosClient.post('auth/login', { email: usuario.email, password: usuario.password }).then((response) => {
                console.log(response);
                state.commit('login', response);
            }).catch((error) => {
                console.log(error.response);
                throw error;
            });
        },
        logout: () => {
            sotreAuth.commit('logout');
        }

    },
    mutations: {
        login: (state, token) => {
            console.log(token);
            state.user.token = token;
            sessionStorage.setItem('token', token);
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