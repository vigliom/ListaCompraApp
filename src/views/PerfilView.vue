<template>
<div class="d-flex m-auto">
    <div class="d-flex mt-3 justify-content-center gap-3 flex-wrap">
        <div class="w-50 d-flex ">
            <img class="img-fluid" src="../assets/lista-de-la-compra.png"/>
        </div>
        <div class="d-flex flex-column gap-3">
            <div class="form-control">
                <input class="input-control" type="text" id="inNombre"/>
                <label class="input-control" for="inNombre">Nombre </label>
            </div>
            <div class="form-control">
                <input class="input-control" type="text" id="inNombre"/>
                <label class="input-control" for="apellido">Nombre</label>
            </div>
            <div class="form-control">
                <input class="input-control" type="text" id="inNombre"/>
                <label class="input-control" for="inNombre">Nombre</label>
            </div>
            <div class="form-control">
                <input class="input-control" type="text" id="inNombre"/>
                <label class="input-control" for="inNombre">Nombre</label>
            </div>

            <button class="btn btn-outline-danger" @click="logout">Cerrar Sesion</button>

        </div>
        
    </div>
</div>
</template>
<script setup>
import sotreAuth from '../store/authStore.js'
import router from '../router';
function logout(){
    sotreAuth.dispatch('logout').then(()=>{
        router.push({name: 'login'})

    });
}
</script>

<style>
</style>