<template>
  <div class="container-card slow-Open">
    <div class="d-flex justify-content-between mb-2">
      <svg width="80px" height="80px" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <image class="rounded" v-if="articulo.idArticuloNavigation.Foto" xlink:href="https://placehold.co/400" x="10"
          y="10" width="100px" height="100px" />
        <image class="rounded" v-else xlink:href="https://placehold.co/400" x="10" y="10" width="100px" height="100px" />
      </svg>
      <div class="form-check form-switch ">
        <label class="card-description" :for="'btn-check-' + articulo.idArticuloNavigation.nombre">{{ ConfirmacionPagado
        }}</label>
        <input @change="PagadoOnChange" type="checkbox" role="switch" :text="ConfirmacionPagado" class=" form-check-input"
          :id="'btn-check-' + articulo.idArticuloNavigation.nombre" v-model="articulo.isPagado" autocomplete="off">
      </div>
      <BotonMenu :Options="opciones"></BotonMenu>
    </div>
    <div v-if="!ModoEditar.endsWith(0)" class="d-flex justify-content-between mb-2">
      <p class="card-title">{{ articulo.idArticuloNavigation.nombre }}</p>
      <p class="card-description">{{ articulo.idArticuloNavigation.descripcion }}</p>
    </div>
    <div v-else class="d-flex justify-content-between mb-2">
      <div class="d-flex justify-content-between input-group">
        <label :for="'inNombre' + articulo.idArticulo" class="input-group__label">Nombre:</label>
        <input class="input-group__input" :id="'inNombre' + articulo.idArticulo" type="text"
          v-model="articulo.idArticuloNavigation.nombre">
      </div>
      <div class="d-flex justify-content-between input-group">
        <label class="input-group__label">Descripcion:</label>
        <input class="input-group__input w-100" type="text" v-model="articulo.idArticuloNavigation.descripcion">
      </div>
    </div>
    <div v-if="!ModoEditar.endsWith(0)" class="d-flex justify-content-between mb-2">
      <p v-if="articulo.isPagado" class="card-description">Precio: {{ articulo.precio }} <i
          class="bi bi-currency-euro"></i> </p>
      <p v-else class="card-description">
        Sin Comprar
        <br>
        <i class="bi bi-info-circle"></i> |
        <span>
          {{ articulo.idArticuloNavigation.precioUltimaCompra }}
          <i class="bi bi-currency-euro"></i>
        </span>
      </p>
      <p class="card-description">{{ articulo.cantidad }} </p>
    </div>
    <div v-else class="d-flex justify-content-between mb-2">
      <div class="d-flex justify-content-between input-group">
        <div v-if="!articulo.isPagado">
          <p class="card-description">Sin Comprar
            <br>
            <i class="bi bi-info-circle"></i>
            |
            <span>
              {{ articulo.idArticuloNavigation.precioUltimaCompra }}
              <i class="bi bi-currency-euro"></i>
            </span>
          </p>
        </div>
        <div v-else>
          <label class="input-group__label">Precio:</label>
          <input class="input-group__input" v-model="articulo.precio" type="number">
        </div>
      </div>
      <div class="d-flex  input-group justify-content-between ">
        <label class="input-group__label">Cantidad:</label>
        <input class="input-group__input" v-model="articulo.cantidad" type="number">
      </div>
    </div>
    <div v-if="!ModoEditar.endsWith(1)" class="form-check  form-switch align-content-end input-group ">
      <button @click="EditarAriculo(articulo)" type="button" class=" input-group__input">
        <p class="input-group__label">Guardar</p>
      </button>
    </div>

    <transition name="fade">
      <ObservacionesModal @guardaObservaciones="EditarAriculo(articulo)" @updateObservaciones="updateObservaciones"
        :observaciones="articulo.observaciones" v-show="VerObservaciones.endsWith(0)"></ObservacionesModal>
    </transition>


  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import BotonMenu from './BotonMenu.vue';
import ListaStore from '../store/ListaStore';
import authStore from '../store/authStore';
import ObservacionesModal from './ObservacionesModal.vue';

const props = defineProps(
  {
    articulo: {
      type: Object,
      required: true
    }
  }
);

const ModoEditar = ref("EditaArticu" + props.articulo.idArticulo + "1");
const VerObservaciones = ref("observaciones" + props.articulo.idArticulo + "1");
async function EditarAriculo(articulo) {
  let dtoArticuloLista = {
    "idLista": articulo.idLista,
    "idUsuario": (authStore.state.user.id),
    "idArticulo": articulo.idArticulo,
    "precio": articulo.precio,
    "cantidad": articulo.cantidad,
    "observaciones": articulo.observaciones,
    "idArticuloNavigation": {
      "nombre": articulo.idArticuloNavigation.nombre,
      "descripcion": articulo.idArticuloNavigation.descripcion,
      "foto": ""
    }
  }

  console.log(articulo.observaciones);
  var response = await ListaStore.dispatch('guardarLista', dtoArticuloLista);
  ModoEditar.value = "EditaArticu" + props.articulo.idArticulo + "1"
  VerObservaciones.value = "observaciones" + props.articulo.idArticulo + "1";

}

function MostrarObservaciones() {
  if (VerObservaciones.value.endsWith(0))
    VerObservaciones.value = "EditaArticu" + props.articulo.idArticulo + "1"
  else
    VerObservaciones.value = "EditaArticu" + props.articulo.idArticulo + "0"
}
function updateObservaciones(nuevasObservaciones) {
  props.articulo.observaciones = nuevasObservaciones;
}
function toggleEditar() {
  console.log('activado');
  if (ModoEditar.value.endsWith(0))
    ModoEditar.value = "EditaArticu" + props.articulo.idArticulo + "1"
  else
    ModoEditar.value = "EditaArticu" + props.articulo.idArticulo + "0"

  console.log(ModoEditar.value);
}

props.articulo.isPagado = (props.articulo.isPagado == 1);

const ConfirmacionPagado = computed(() => {
  return props.articulo.isPagado ? "Pagado" : "Pagar";
});

const PagadoOnChange = async (e) => {
  if (!e.target.checked) {
    const confirmar = window.confirm('¿Estás seguro de que quieres desmarcar este artículo como pagado?');
    if (!confirmar) {
      // Si el usuario cancela, volvemos a marcar el checkbox
      props.articulo.isPagado = true;
    } else {
      //Hacemos el unset de pagado
      try {
        const listaArticulo = {
          idLista: props.articulo.idLista,
          idArticulo: props.articulo.idArticulo,
          precio: (-1)
        }
        await ListaStore.dispatch('unSetPagado', listaArticulo)

      }
      catch (error) {
        console.error(error);
      }

    }
  } else {
    console.log('Mostrar formulario de pago');
    try {
      const listaArticulo = {
        idLista: props.articulo.idLista,
        idArticulo: props.articulo.idArticulo,
        precio: (2.21)
      }
      props.articulo.precio = listaArticulo.precio;
      await ListaStore.dispatch('setPagado', listaArticulo)
    }
    catch (error) {
      console.error(error);
    }
  }
};

const opciones = ref([
  {
    icon: 'bi bi-pencil-square',
    pos: 1,
    text: 'Editar',
    action: toggleEditar
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
    text: 'Observaciones',
    action: () => {
      MostrarObservaciones();
      console.log('observaciones');
    }
  },
  {
    icon: 'bi bi-plus-lg',
    pos: 5,
    text: 'Sumar Cantidad',
    action: async () => {
      try {
        var listaArticulo = {
          idLista: props.articulo.idLista, idArticulo: props.articulo.idArticulo, cantidad: 1
        }

        props.articulo.cantidad += 1;
        await ListaStore.dispatch('sumaCantidad', listaArticulo);

      }
      catch (error) {
        console.error(error);
      }

    }
  },
  {
    icon: 'bi bi-dash-lg',
    pos: 6,
    text: 'Restar Cantidad',
    action: async () => {
      try {
        var listaArticulo = {
          idLista: props.articulo.idLista, idArticulo: props.articulo.idArticulo, cantidad: -1
        }

        props.articulo.cantidad -= 1;
        var a = ref(await ListaStore.dispatch('sumaCantidad', listaArticulo));

      }
      catch (error) {
        console.error(error);
      }
    }
  }
]);
</script>

<style>
input {
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: all 1.5s ease-in-out;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  scale: 0;
}
.slow-Open{
  transition: all 0.9 ease-in-out;
}
.input-group {
  display: flex;
  flex-direction: column;

  .input-group__label {
    padding: 0 0.5em;
    margin-bottom: 0.3em;
    text-transform: uppercase;
    font-size: 0.875em;
    letter-spacing: 0.1em;
    color: #ccd;
    color: rgba(255, 220, 255, 0.6);
    cursor: pointer;
  }

  .input-group__input {
    color: #fff;
    font-size: 1.25rem;
    line-height: 0.3;
    border-style: none;
    outline: none;
    width: 100%;
    height: 0.5em;
    padding: 0.8em 0.8em;
    border: 0.1em solid transparent;
    background-image: linear-gradient(#000, #000),
      linear-gradient(120deg, rgb(27, 161, 87) 0%, #0ff 50%, #9f0 100%);
    background-origin: border-box;
    background-clip: padding-box, border-box;
    border-radius: 1.8em;
    background-size: 200% 100%;
  }
}

.container-card {
  width: auto;
  border: 2px solid transparent;
  background: linear-gradient(71deg, #080509, #1a171c, #1c7295);
  background-clip: padding-box;
  border-radius: 45px;
  padding: 15px;

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
}
</style>