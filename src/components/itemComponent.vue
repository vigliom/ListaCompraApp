<template>
  <div class="card mb-4">
    <div class="d-flex flex-column">
      <div class="card-header ">
        <h4>{{ articulo.nombre }}</h4>
      </div>
      <div class=" card-body ">
        <p class="mb-2">{{ articulo.descripcion }}</p>

        <hr>
        
      </div>
      <div class="card-footer d-flex justify-content-between ">
        <p>cantidad: {{ articulo.cantidad }}</p>
        <p class="mb-2">Ultimo Precio: {{ articulo.precioUltimaCompra }}€</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const descipcion = ref('Descricción no trabajada aún');
const props = defineProps(
  {
    articulo: {
      type: Object,
      required: true
    }
  }
);

console.log(props.articulo);

</script>
<style scoped></style>