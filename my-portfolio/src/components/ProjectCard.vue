<template>
    <div class="project-card" @click="$emit('click')">
        <img :src="image" alt="Project Image" class="project-image" />
        <div class="project-info">
            <h3 class="project-title">{{ title }}</h3>
            <p class="project-description">{{ description }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
    image: String,
    title: String,
    description: String,
});
</script>

<style scoped>
.project-card {
    display: flex;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.2s, box-shadow 0.2s;
    width: 500px;
    opacity: 0.6;
    color: rgba(230, 220, 210, 0.6);
}

.project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.project-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
}

.project-info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-title {
    color: var(--Black);
    font-family: "Noto Sans Display";
    font-size: 24px;
    font-weight: 300;
}

.project-description {
    margin-top: 5px;
    color: var(--Black);
    font-family: "Noto Sans Display";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}
</style>