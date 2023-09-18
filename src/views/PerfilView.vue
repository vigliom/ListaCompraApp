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

            <router-link :to="{name:'login'}" class="btn btn-outline-danger" @click="logout">Cerrar Sesion</router-link>

        </div>
        
    </div>
</div>
</template>
<script setup>
import router from '../router';
import sotreAuth from '../store/authStore.js'
async function logout(){
    await sotreAuth.dispatch('logout').then(()=>{
        router.go({name:'login'});
        console.log('logout');
    });
}
</script>

<style>
</style>