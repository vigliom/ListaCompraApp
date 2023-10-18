<template>
    <div @click="menuClick" class="floating_menu" id="float_menu">
        <div class="menu">
            <i class="bi bi-exposure"></i>
                </div>
        <div class="sub_menu">
            <i :style="'--i:'+ opcion.pos" v-for="opcion in opciones"  :class="opcion.icon"></i>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
    Options: Array,
    idArticu: Number
})

const opciones = ref(props.Options);

function menuClick(e){
    console.log(e.target.parentElement.classList);
    e.target.parentElement.parentElement.classList.toggle("active");
}
</script>
<style scoped>
.floating_menu {
    z-index: 100;
    width: 44px;
    height: 44px;
    background-color: rgb(17, 16, 16);
    border-radius: 50%;
    position: relative;
    font-size: 1.5rem;
    color: white;
}

.menu {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgb(35, 35, 35);
    display: grid;
    place-items: center;
    cursor: pointer;
    box-shadow: -0px 5px 10px #000000c3;
}

menu i{
    /* color: rgb(255, 255, 255); */
    display: flex;
    justify-content: center;
    align-items: center;
}

.floating_menu.active .menu i{
    transition: all .8s ease-in-out;
    transform: scale(1.2);
}

.floating_menu .sub_menu i{
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    padding: 20px;
    background: #1f1f1f;
    border-radius: 50%;
    z-index: -10;
    transition: .8s;
    transition-delay: calc(40ms * var(--i));
    box-shadow: -2px 5px 10px #282828c8;
    display: flex;
    justify-content: center;
    align-items: center;
}

.floating_menu.active .sub_menu i:nth-child(1){
    left: -5px;
    top: -25px;
}

.floating_menu.active .sub_menu i:nth-child(2){
    left: -30px;
}

.floating_menu.active .sub_menu i:nth-child(3){
    left: -5px;
    top: 60px;
}
.floating_menu.active .sub_menu i:nth-child(4){
    top: 60px;
    left: 45px;
}
.floating_menu.active .sub_menu i:nth-child(5){
    left: 65px;
}
.floating_menu.active .sub_menu i:nth-child(6){
    top: -25px;
    left: 45px;
}



</style>