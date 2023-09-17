<template>
 <div class="w-50">
     <h1 class="display-1">Register</h1>
     <form @submit.prevent="handleSubmit">
         <div class="form-group">
             <label for="email">Correo electronico</label>
             <input v-model="user.email" type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Introduce tu email">
             <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu email con nadie</small>
         </div>
         <div class="form-group">
             <label for="password">Contraseña</label>
             <input v-model="user.password" type="password" class="form-control" id="password" placeholder="Contraseña">
         </div>
         <div class="form-group">
             <label for="password">Confirme Contraseña</label>
             <input v-model="user.password" type="password" class="form-control" id="passwordconfirm" placeholder="Contraseña">
         </div>
         <button type="submit" class="btn btn-primary">Enviar</button>
     </form>
 </div>
 </template>

<script setup>
import { ref } from 'vue';
const user = ref({
    email: '',
    password: ''
});


</script>