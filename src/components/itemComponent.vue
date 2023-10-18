<template>
  <div class="d-flex">
    <div class="card">
      <div class="container-card bg-green-box">
        <div class="d-flex justify-content-between ">
          <svg width="80" height="80" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <image class="rounded" v-if="articulo.idArticuloNavigation.Foto" xlink:href="https://placehold.co/400" x="10"
              y="10" width="100" height="100" />
            <image class="rounded" v-else xlink:href="https://placehold.co/400" x="10" y="10" width="100" height="100" />
          </svg>
          <div class="form-check w-50 form-switch align-content-end ">
            <!-- <label class="btn text-light" for="chComprado">Comprado</label> -->
            <!-- <input @change="PagadoOnChange" class="btn btn-outline-primary" type="checkbox" id="chComprado" v-model="articulo.isPagado"> -->
            <input @change="PagadoOnChange" type="checkbox" class="btn-check" :id="'btn-check-'+articulo.idArticuloNavigation.nombre" v-model="articulo.isPagado" autocomplete="off">
            <label class="btn btn-outline-success" :for="'btn-check-'+articulo.idArticuloNavigation.nombre">{{ConfirmacionPagado}}</label>
          </div>
          <BotonMenu :Options="opciones"></BotonMenu>
        </div>
        <div class="d-flex justify-content-between ">
          <p class="card-title">{{ articulo.idArticuloNavigation.nombre }}</p>
          <p class="card-description">{{ articulo.idArticuloNavigation.descripcion }}</p>
        </div>
        <div class="d-flex justify-content-between ">
          <p v-if="articulo.isPagado" class="card-description">Precio: {{ articulo.precio }} <i
              class="bi bi-currency-euro"></i> </p>
          <p v-else class="card-description">Sin Comprar </p>
          <p class="card-description">{{ articulo.cantidad }} </p>    
        </div>
      </div>
    </div>
  </div>
  <ModalFormulario v-if="mostrarFormulario" @cerrar="mostrarFormulario = false" />

</template>

<script setup>
import { ref, computed } from 'vue';
import BotonMenu from './BotonMenu.vue';
import ListaStore from '../store/ListaStore';
import ModalFormulario from './ModalPagaArticulo.vue';

const props = defineProps(
  {
    articulo: {
      type: Object,
      required: true
    }
  }
);
console.log(props.articulo);
const mostrarFormulario = ref(false);
props.articulo.isPagado = (props.articulo.isPagado == 1);

const ConfirmacionPagado = computed(() => {
  return props.articulo.isPagado ? "Pagado" : "Pagar";
});
const PagadoOnChange = (e) => {
  if (!e.target.checked) {
    const confirmar = window.confirm('¿Estás seguro de que quieres desmarcar este artículo como pagado?');
    if (!confirmar) {
      // Si el usuario cancela, volvemos a marcar el checkbox
      props.articulo.isPagado = true;
    } else {
      mostrarFormulario.value = false; // Paso 2: Mostrar el formulario si el usuario confirma
    }
  } else {
    mostrarFormulario.value = true; // Paso 3: Ocultar el formulario si el checkbox está marcado
  }
};

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

<style scoped>
input {
  cursor: pointer;
}

.card {
  /* max-width: 550px; */
  border: 0;
  width: 50vw;
  margin-inline: auto;
}

.container-card {
  position: relative;
  border: 2px solid transparent;
  background: linear-gradient(71deg, #080509, #1a171c, #080509);
  background-clip: padding-box;
  border-radius: 45px;
  padding: 40px;

  img {
    margin-bottom: 32px;
  }
}

.bg-green-box,
.bg-white-box,
.bg-yellow-box,
.bg-blue-box {
  position: relative;
}

.bg-green-box::after {
  position: absolute;
  top: -1px;
  bottom: -1px;
  left: -1px;
  right: -1px;
  content: "";
  z-index: -1;
  border-radius: 45px;
}

.bg-green-box::after {
  background: linear-gradient(71deg, #0d1212, #3da077, #0d1212);
}

.card-title {
  font-weight: 600;
  color: white;
  letter-spacing: -0.02em;
  line-height: 40px;
  font-style: normal;
  font-size: 28px;
  padding-bottom: 8px;
}

.card-description {
  font-weight: 600;
  line-height: 32px;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 16px;
  max-width: 470px;
}
</style>