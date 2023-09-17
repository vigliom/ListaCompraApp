import {createStore} from "vuex";
import router from "../router/index.js";

const sotreAuth= createStore({
   state:{
    user:{
        name: '',        
        token:sessionStorage.getItem('token'),
        email:''
    }
   },
   actions:{
    login:(user)=>{
        router.go({name:'home'});
        sessionStorage.setItem('token', user.email+'Token');
    },
    logout: ()=>{
        router.go({name:'login'});
        sessionStorage.setItem('token', '');
        
    }

   }
});

export default sotreAuth;