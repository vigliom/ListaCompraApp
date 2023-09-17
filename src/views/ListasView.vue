<template>
  <div v-for="lista in listas" :key="lista.id" class="card my-2 mx-auto w-50">
    <div class="card-header">
      <h5 class="card-title">{{lista.listName}}</h5>
    </div>
    <div class="card-body">
      <p class="card-text">{{lista.descripcion}}</p>
      <router-link :to="{name:'lista', params:{  id:lista.id}}" class="btn btn-primary">Go somewhere</router-link>
    </div>
  </div>
  
</template>

<style>
</style>
<script setup>
import { ref } from 'vue';
import entityStore from '../store/entityStore';
const listas = ref([]);

listas.value = entityStore.getters.getAllListas;

</script>

