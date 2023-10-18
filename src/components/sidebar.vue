<template>
    <nav class="navbar navbar-collapse bg-dark d-flex justify-content-between align-content-center p-3">
        <div  v-if="isAuth" class="d-flex">
            <router-link :to="{name: 'home'}" class="nav-link text-light btn">Inicio</router-link>
            <router-link :to="{name: 'listas'}" class="nav-link text-light btn">Lista</router-link>
        </div>
        <div class=" d-flex">

            <router-link v-if="isAuth" :to="{name:'perfil'}" class="nav-link text-light btn">Perfil</router-link>
            <div v-else class="nav-link text-light btn d-flex">
                <router-link :to="{name: 'register'}" class="nav-link text-light btn">Registro</router-link>
                <router-link :to="{name: 'login'}" class="nav-link text-light btn">Iniciar Sesion</router-link>
            </div>
           
        </div>
    </nav>
</template>

<script setup>
const isAuth = (sessionStorage.getItem('token') && sessionStorage.getItem('token')!= '')
</script>

<style scoped>
</style>