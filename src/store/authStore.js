import {createStore} from "vuex";
import router from "../router";

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
        localStorage.setItem('token', user.email)
        router.go('/home')
    },
    logout:()=>{
        localStorage.setItem('token', '');
        router.go('/login')
        console.log('Aqui');
    }

   }
});

export default sotreAuth;