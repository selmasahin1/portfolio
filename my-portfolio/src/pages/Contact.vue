<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
    </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
</script>

<style scoped>
.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/Contact.png');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    opacity: 0.9;
    pointer-events: none;
    z-index: 1;
}

.page-root {
    position: relative;
    margin: 80px 120px;
    min-height: 100vh;
    width: calc(100% - 240px);
}

</style>