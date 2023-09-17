<template>
    <PrecioFlotante></PrecioFlotante>
    <div class="d-flex justify-content-center">
        <div class="m-3 p-3">
            <h3 class="display-3 text-center">{{ lista.listName }}</h3>
            <h5 class="display-5 text-center">{{ lista.descripcion }}</h5>
            <div class="d-flex justify-content-center flex-column">
                <ItemComponent v-for="item in lista.items" :key="lista.id" :id="item.id" :name="item.name"
                    :comprado="item.comprado" :cantidad="item.cantidad" />
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
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

lista.value = entityStore.getters.getListaById(Number.parseInt(props.id));
</script>