<template>
    <router-link :to="route" class="portrait">
        <img :src="image" :alt="text" class="portrait-image" />
        <p class="portrait-text">{{ text }}</p>
    </router-link>
</template>

<script setup lang="ts">
defineProps<{
    image: string
    text: string
    route: string
}>()
</script>

<style scoped>
.portrait {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    width: 230px;
    flex-shrink: 0;
    z-index: 5;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.portrait:hover {
    transform: translateY(-5px);
}

.portrait-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.portrait-text {
    margin-top: 12px;
    text-align: center;
    color: var(--Black, #312F27);
    font-family: 'Caveat', cursive;
    font-size: 32px;
    font-weight: 700;
}
</style>