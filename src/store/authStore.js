import {createStore} from "vuex";

const sotreAuth= createStore({
   state:{
    user:{
        name: '',        
        token:localStorage.getItem('token'),
        email:''
    }
   },
   actions:{
    login:(user)=>{
        sotreAuth.commit('login', user);
    },
    logout: ()=>{
        sotreAuth.commit('logout');
    }

   },
   mutations:{
    login:(state, user)=>{
        state.user.name = user.name;
        state.user.token = user.email+'Token';
        state.user.email = user.email;
        localStorage.setItem('token', user.email+'Token');
    },
    logout: (state)=>{
        state.user.name = '';
        state.user.token = '';
        state.user.email = '';
        localStorage.setItem('token', '');
    }
   },
});

export default sotreAuth;