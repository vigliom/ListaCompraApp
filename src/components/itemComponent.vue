<template>
  <div class="card mb-4">
    <div class="d-flex flex-column">
      <div class="card-header d-flex justify-content-between">
        <div>
          <h4>{{ articulo.idArticuloNavigation.nombre }}</h4>
        </div>
        <BotonMenu :Options="opciones"></BotonMenu>
      </div>
      <div class=" card-body ">
        <p class="mb-2">{{ articulo.idArticuloNavigation.descripcion }}</p>
        <hr>
      </div>
      <div class="card-footer d-flex justify-content-between ">
        <p>cantidad: {{ articulo.cantidad }}</p>
        <p class="mb-2">Ultimo Precio: {{ articulo.precio }}€</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BotonMenu from './BotonMenu.vue';
import ListaStore from '../store/ListaStore';

const props = defineProps(
  {
    articulo: {
      type: Object,
      required: true
    }
  }
);

const opciones = ref([
  {
    icon: 'bi bi-pencil-square',
    pos: 1,
    text: 'Editar',
    action: () => {
      console.log('Editar');
    }
  },
  {
    icon: 'bi bi-check-circle',
    pos: 2,
    text: 'Editar',
    action: () => {
      console.log('Editar');
    }
  },
  {
    icon: 'bi bi-x-octagon',
    pos: 3,
    text: 'Editar',
    action: () => {
      console.log('Editar');
    }
  },
  {
    icon: 'bi bi-wallet2',
    pos: 4,
    text: 'Editar',
    action: () => {
      console.log('Editar');
    }
  },
  {
    icon: 'bi bi-plus-lg',
    pos: 5,
    text: 'Eliminar',
    action: () => {
    ListaStore.getters.SumaCantidad(articulo.idArticuloNavigation.idArticulo);
    }
  },
  {
    icon: 'bi bi-dash-lg',
    pos: 6,
    text: 'Eliminar',
    action: () => {
      console.log('Eliminar');
    }
  }
]);


</script>
<style scoped></style>