<template>
    <div class="m-2 p-3 form-control">
        <textarea class="forma" :value="observaciones" placeholder="Introduzca aqui las observaciones"
            @input="$emit('updateObservaciones', $event.target.value)">
        </textarea>
        <button class="btn btn-outline-success " @click="$emit('guardaObservaciones', $event.target.value)">
            <i class="bi bi-check"></i>
            Confirmar
        </button>
    </div>
</template>
<script setup>

const props = defineProps(
    {
        observaciones: {
            required: true
        }
    }
);


</script>

<style scoped>
div {
    background: #154f66;
    border-radius: 15px;
    border-color: #007bff;
    box-sizing: border-box;
    position: relative; /* Asegura que el borde pseudo-elemento esté posicionado correctamente */
}
div:focus {
    border-color: #9fcdff;
    /* Cambia el color del borde al azul cuando se selecciona */
    outline: none;
    /* Quita el contorno predeterminado en algunos navegadores */
}
.forma {
    color: white;
    width: 100%;
    background: #154f66;
    padding: 10px;
    border-radius: 15px;
    font-size: 16px;
    border: none;
    resize: vertical;
    transition: all 0.5s ease-in-out;
}
.transicion-observaciones-modal {
  transition: opacity 0.5s, transform 0.5s;
}
/* Pseudo-clase :focus para resaltar cuando el textarea está seleccionado */
.forma:focus {
    background-color: #2a5e95b1;
    /* Cambia el color del borde al azul cuando se selecciona */
    outline: none;
    /* Quita el contorno predeterminado en algunos navegadores */
}</style>