<template>
	<PrecioFlotante :precios="precio"></PrecioFlotante>
	<div v-if="lista" class="d-flex flex-column gap-3 align-items-center">
		<h3 class="display-3 text-center">{{ lista.nombre }}</h3>
		<div>
			<h5 class="display-5 text-center">{{ lista.descripcion }}</h5>
		</div>
		<div class="w-100 cards_group p-4">
			<ItemComponent v-for="item in articulo" :key="item.id" :articulo="item" />
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watchEffect } from 'vue'
import ItemComponent from './itemComponent.vue';
import PrecioFlotante from './PrecioFlotante.vue';
import listaStoreClient from '../store/ListaStore';
const props = defineProps(
	{
		id: {
			required: true
		}
	}
);
const lista = ref({});
const articulo = ref([]);
const precio = ref(0);
onMounted(async () => {
    try {
        const response = await listaStoreClient.dispatch('getLista', props.id);
        lista.value = response;
		lista.value = ref(listaStoreClient.getters.getListaStore).value; 
		articulo.value = lista.value.compraArticuloLista;
		articulo.value.forEach(articulo => {
    	precio.value += articulo.precio;
    });
  } catch (error) {
    console.error(error);
  }
});


	//Sumo todos los precios de la lista:
	// (lista.value.articulos).foreach(articulo => {
	// precio.value += articulo.precio;	
	// });

</script>
<style scoped>
.cards_group{
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 20px;
}
</style>