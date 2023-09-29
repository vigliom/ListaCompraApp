<template>
    <div class="w-50">
        <h1 class="display-1">Login</h1>
        <form @submit="login">
            <div v-if="error" class="alert-warning "></div>
            <div class="form-group">
                <label for="email">Correo electronico</label>
                <input type="email" class="form-control" id="email" v-model="user.email" aria-describedby="emailHelp" placeholder="Introduce tu email">
                <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie</small>
            </div>
            <div class="form-group">
                <label for="password">Contraseña</label>
                <input type="password" class="form-control" v-model="user.password" id="password" placeholder="Contraseña">
            </div>
            <button :to="{name:'home'}" type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </div>
</template>
<script setup>
import sotreAuth from '../store/authStore';
import { ref } from 'vue';

const error = ref(null);
const user =ref({
    email: '',
    password: ''
});
const login = (ev)=>{
    ev.preventDefault();
    console.log(user.value); // Agrega esta línea para verificar el contenido de user
    sotreAuth.dispatch('login', (user.value)).then((res)=>{
        console.log(res);
        router.go({name:'home'});
    }).catch((e)=>{
        error.value = e.message;
    });
}

</script>