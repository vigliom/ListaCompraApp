<template>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Header del modal -->
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
  
          <!-- Contenido del modal -->
          <div class="modal-body">
            Hola
          </div>
  
          <!-- Footer del modal (si es necesario) -->
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { onMounted, onUnmounted } from 'vue';
  
  const mostrarFormulario = ref(false);
  
  onUnmounted(() => {
    console.log('cerrando');
  });
  onMounted(() => {
    console.log('Montado');
  });
  </script>
  
  <style scoped>
  /* Estilos del modal (puedes personalizarlos según tus necesidades) */
  </style>
  