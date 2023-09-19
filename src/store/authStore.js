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
                console.log(response.data);
                state.commit('login', response.data);
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
        login: (state, user) => {

            state.user.name = user.name;
            state.user.token = user.email + 'Token';
            state.user.email = user.email;
            sessionStorage.setItem('token', user.email + 'Token');
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