<template>
	<PrecioFlotante :precios="precio"></PrecioFlotante>
	<div v-if="lista" class="d-flex justify-content-center">
		<div class="m-3 p-3">
			<h3 class="display-3 text-center">{{ lista.nombre }}</h3>
			<h5 class="display-5 text-center">{{ lista.descripcion }}</h5>
			<div class="d-flex justify-content-center flex-column">
				<ItemComponent v-for="item in lista.articulos" :key="item.id" :articulo="item" />
			</div>
		</div>
	</div>
</template>
<script setup>
import { ref, onMounted, watch } from 'vue'
import ItemComponent from './itemComponent.vue';
import entityStore from '../store/entityStore';
import PrecioFlotante from './PrecioFlotante.vue';
const props = defineProps(
	{
		id: {
			type: String,
			required: true
		}
	}
);
const lista = ref({});
const Articulos = ref([]);
//lista.value = entityStore.getters.getListaById(Number.parseInt(props.id));
const precio = ref(0);
onMounted(async () => {
	watch(() => {
		return entityStore.getters.getListaById(Number.parseInt(props.id));
	}, (newVal, oldVal) => {
		lista.value = newVal;
		Articulos.value = lista.value.articulos;
		Articulos.value.forEach(articulo => {
			precio.value += articulo.precioUltimaCompra;
			console.log(precio.value);
		});
	});
	entityStore.dispatch('LoadListas');
	lista.value = await entityStore.getters.getListaById(Number.parseInt(props.id));
	
});

	//Sumo todos los precios de la lista:
	// (lista.value.articulos).foreach(articulo => {
	// precio.value += articulo.precio;	
	// });

</script>