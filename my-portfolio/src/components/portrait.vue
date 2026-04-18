<template>
    <router-link v-if="route" :to="route" class="portrait">
        <div v-if="showClickMe" class="click-me">Click me</div>
        <img :src="image" :alt="text" class="portrait-image" />
        <p class="portrait-text">{{ text }}</p>
    </router-link>
    <div v-else class="portrait">
        <div v-if="showClickMe" class="click-me">Click me</div>
        <img :src="image" :alt="text" class="portrait-image" />
        <p class="portrait-text">{{ text }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    image: string
    text: string
    route?: string,
    showClickMe?: boolean
}>()
</script>

<style scoped>
.portrait {
    position: relative;
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

.click-me {
    position: absolute;
    top: -20px;
    left: -20px;
    background-color: var(--Beige);
    color: var(--Black);
    border-radius: 50%;
    width: 80px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Caveat', cursive;
    font-size: 20px;
    font-weight: 700;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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