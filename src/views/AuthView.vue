<template>
    <div class=" d-flex mt-5 w-100 gap-3 flex-wrap justify-content-center container">
        <div class="my-auto">
        <img :width="600" src="../assets/fondo-pantalla-abstracto-nebulosa-ultra-detallado-4.jpg" alt="logo"
                class="rounded-3 end-0 img-fluid"/>
        </div>
        <RouterView v-slot="{ Component }" class="my-auto">
            <transition name="slideRight" mode="out-in">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>
<script setup>

</script>

<style scoped>
.slideRight-enter-active {
    animation: slideRight 0.5s ease-out forwards;
}

.slideRight-leave-active {
    animation: slideRight 0.5s ease-out reverse forwards;
}

@keyframes slideRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        transform: translateX(0%);
    }
}
</style>