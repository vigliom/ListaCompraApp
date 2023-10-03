<template>
  <div v-if="listas">
    <div v-for="lista in listas" :key="lista.id" class="card my-2 mx-auto w-50">
      <div class="card-header">
        <h5 class="card-title">{{ lista.nombre }}</h5>
      </div>
      <div class="card-body">
        <p class="card-text">{{ lista.descripcion }}</p>
        <router-link :to="{ name: 'lista', params: { id: lista.id } }" class="btn btn-primary">Ir a la lista</router-link>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>No hay listas</h1>
  </div>
</template>

<style></style>
<script setup>
import { ref, onMounted, watch } from 'vue';
//import entityStore from '../store/entityStore.js';
import { mapGetters, useStore } from 'vuex';
const listas = ref([]);
const store = useStore();
onMounted(async () => {
  watch(() => {
    return store.getters.getAllListas;
  }, (newVal, oldVal) => {
    listas.value = newVal;
    console.log(listas.value);
  });
  store.dispatch('LoadListas');
  listas.value = await store.getters.getAllListas;
  console.log(listas.value);
});
</script>

