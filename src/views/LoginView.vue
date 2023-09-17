<template>
    <div class="w-50">
        <h1 class="display-1">Login</h1>
        <form @submit="login">
            <div class="form-group">
                <label for="email">Correo electronico</label>
                <input type="email" class="form-control" id="email" v-model="user.email" aria-describedby="emailHelp" placeholder="Introduce tu email">
                <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie</small>
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control" v-model="user.password" id="password" placeholder="Contraseña">
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>
<script setup>
import router from '../router';
import sotreAuth from '../store/authStore'; '../store/authStore.js'
import { ref } from 'vue';


const user =ref({});
async function login(ev){
    ev.preventDefault();
    
    await sotreAuth.dispatch('login', user.value).then(()=>{
        console.log('login');
        router.push({name: 'home'})
    });
}
</script>