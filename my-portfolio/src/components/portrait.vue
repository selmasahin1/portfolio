<template>
    <router-link v-if="route" :to="route" class="portrait">
        <img :src="image" :alt="text" class="portrait-image" />
        <p class="portrait-text">{{ text }}</p>
    </router-link>
    <div v-else class="portrait">
        <img :src="image" :alt="text" class="portrait-image" />
        <p class="portrait-text">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string
    text: string
    route?: string
}>()
</script>

<style scoped>
.portrait {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    width: 280px;
    flex-shrink: 0;
    z-index: 5;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease;
    background-color: var(--Beige);
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.portrait:hover {
    transform: translateY(-5px);
}

.portrait-image {
    width: 225px;
    height: 345px;
    object-fit: cover;
    border-radius: 8px;
}

.portrait-text {
    margin-top: 12px;
    text-align: center;
    color: var(--Black);
    font-family: 'Caveat', cursive;
    font-size: 32px;
    font-weight: 700;
}
</style>