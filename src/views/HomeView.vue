<template>
  <main>
    <div class="d-flex d-grid align-content-center justify-content-center">
      <transition-group appear @before-enter="onBeforeEnter" @enter="enterTransition" @after-leave="afterLeave" tag="div"
        name="oneByOne" class=" m-5 d-flex flex-wrap justify-content-center">
        <div v-for="item in Opciones" :key="item.id" :data-index="item.id" >
          <router-link  to="" class=" d-block m-auto p-2 ">
            <img width="300" height="400" src="../assets/lista-de-la-compra.png" alt="logo"
              class="img hover-style img-fluid" />
          </router-link>
        </div>
      </transition-group>
    </div>
  </main>
</template>
<script setup>
import gsap from 'gsap';
import { ref } from 'vue';
import entityStore from '../store/entityStore';

const Opciones = ref([
  {
    id: 1,
    name: 'Añadir Lista de la compra',
  },
  {
    id: 2,
    name: 'Borrar Lista de la compra',
  },
  {
    id: 3,
    name: 'Modificar Lista de la compra',
  }
]);


function onBeforeEnter(el) {
  el.style.opacity = 0;
  el.style.transform = 'translateY(100%)';
}
function enterTransition(e, done) {
  gsap.to(e, {
    opacity: 1,
    y: 0,
    delay: e.dataset.index * (0.3),
    onComplete: done
  })
}
function afterLeave(el) {
  el.style.opacity = 0;
}
</script>
<style>
.hover-style:hover {
  transform: scale(1.1);
  transition: all 0.5s ease;
}


</style>
