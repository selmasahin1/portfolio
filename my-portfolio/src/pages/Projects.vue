<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
        <div class="projects-grid">
            <ProjectCard v-for="(project, index) in projects" :key="index" :image="project.image" :title="project.title"
                :description="project.description" @click="openOverlay(project)" />
        </div>
        <div v-if="overlayVisible" class="overlay" @click="closeOverlay">
            <div class="overlay-content" @click.stop>
                <h2>{{ selectedProject.title }}</h2>
                <p>{{ selectedProject.description }}</p>
                <img :src="selectedProject.image" alt="Project Image" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import { ref } from 'vue';

const projects = ref([
    {
        image: '../assets/project1.png',
        title: 'Webapp',
        description: 'fangis - das Live-Action Spiel in der ganzen Schweiz',
    },
    {
        image: '../assets/project2.png',
        title: 'Film',
        description: 'Ein Tag in der Markthalle 9 - Ein Film in Berlin',
    },
    {
        image: '../assets/project3.png',
        title: 'Website',
        description: 'Website für Physio & Sport BackUp ',
    },
    {
        image: '../assets/project4.png',
        title: 'Fotografie',
        description: 'Analog Fotografie - Wie entwickelt man einen Film selbst?',
    },
]);

const overlayVisible = ref(false);
const selectedProject = ref({ title: '', description: '', image: '' });

const openOverlay = (project: { title: string; description: string; image: string }) => {
    selectedProject.value = project;
    overlayVisible.value = true;
};

const closeOverlay = () => {
    overlayVisible.value = false;
    selectedProject.value = { title: '', description: '', image: '' };
};
</script>

<style scoped>
.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/Projects.png');
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

.projects-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    z-index: 2;
    position: relative;
    background-color: transparent !important;
    padding-top: 300px;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.overlay-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 500px;
    text-align: center;
}

.overlay-content img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 10px;
}
</style>