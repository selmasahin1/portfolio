<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
        <div class="projects-grid">
            <ProjectCard v-for="(project, index) in projects" :key="index" :image="project.images && project.images[0]"
                :title="project.title" :description="project.description" @click="openOverlay(project)" />
        </div>
        <div v-if="overlayVisible" class="overlay" @click="closeOverlay">
            <div class="overlay-content" @click.stop>
                <h2>{{ selectedProject.description }} ({{ selectedProject.year }})</h2>
                <br />
                <p><strong>Beschreibung:</strong> {{ selectedProject.detail }}</p>
                <br />
                <p><strong>Gebrauchte Technologien:</strong> {{ selectedProject.technologies }}</p>
                <br />
                <p><strong>Meine Rollen:</strong> {{ selectedProject.roles }}</p>
                <br />
                <p v-if="selectedProject.link">
                    <strong>Projektlink:</strong> <a :href="selectedProject.link" target="_blank">{{
                        selectedProject.link }}</a>
                </p>
                <iframe v-if="selectedProject.video" 
                    :src="`https://www.youtube.com/embed/${selectedProject.video}`" 
                    class="overlay-video"
                    frameborder="0" 
                    allowfullscreen>
                </iframe>
                <div v-else-if="selectedProject.images && selectedProject.images.length > 1" class="overlay-images">
                    <img v-for="(image, index) in selectedProject.images.slice(1)" :key="index" :src="image"
                        alt="Project Media" class="overlay-image" />
                </div>
            </div>
        </div>
        <div class="copyright">
            © Selma Sahin
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import NavMenu from '@/components/NavMenu.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import fangisImg from '../assets/fangis.webp'
import psImg from '../assets/ps.webp'
import mh9Img from '../assets/mh9.webp'
import appIconImg from '../assets/appicon.webp'
import swipeKeepImg from '../assets/swipekeep.gif'
import swipeDeleteImg from '../assets/swipedelete.gif'
import buttonKeepImg from '../assets/buttonkeep.gif'

interface Project {
    images: string[];
    title: string;
    year: string;
    description: string;
    detail: string;
    technologies: string;
    roles: string;
    link?: string;
    video?: string;
}

const projects = ref<Project[]>([
    {
        images: [fangisImg],
        title: 'Webapp',
        year: '2025',
        description: 'fangis',
        detail: 'Unser Spiel bringt die Dynamik von „Fangen“ in die digitale Welt – über eine App, die die reale Stadt zur interaktiven Spielfläche macht. Spieler:innen bewegen sich in Echtzeit auf einer Karte, nehmen Rollen ein (Runner vs. Catcher), absolvieren Challenges per Kamera und GPS und sammeln Punkte. Über eine moderne PWA mit Live-Standort entsteht ein bewegungsintensives, soziales und wettbewerbsorientiertes Spielerlebnis – schweizweit, sofort spielbar, komplett per Smartphone.',
        technologies: 'Vue.js, Node.js',
        roles: 'Lead Developer - Teamarbeit',
        link: 'https://fangis.app',
    },
    {
        images: [psImg],
        title: 'Website',
        year: '2023',
        description: 'Physio & Sport BackUp',
        detail: 'Entwicklung und Gestaltung der Website für Physio & Sport BackUp',
        technologies: 'Angular',
        roles: 'Entwicklerin - Einzelarbeit',
        link: 'https://psbackup.ch/home',
    },
    {
        images: [mh9Img],
        title: 'Film',
        year: '2024',
        description: 'Ein Tag in der Markthalle 9',
        detail: 'Im Rahmen des Moduls Audiovisuelles Erzählen haben wir in Berlin einen Kurzfilm gedreht, der das tägliche Leben in der Markthalle 9 dokumentiert.',
        technologies: 'Premiere Pro',
        roles: 'Schnitt, Voice-over, Kamera',
        video: 'hV32e24igqA', // Replace with your actual YouTube video ID
    },
    {
        images: [appIconImg, swipeKeepImg, swipeDeleteImg],
        title: 'IOS App',
        year: '2025',
        description: 'Photoswiper',
        detail: 'Dieses digezz Projekt habe ich erstellt um meine Fähigkeiten in der iOS-Entwicklung zu verbessern. Die App ermöglicht es Benutzern, durch ihre Fotos zu swipen und sie zu organisieren.',
        technologies: 'xCode, Swift',
        roles: 'Entwicklerin - Einzelarbeit',
    },
    {
        images: [],
        title: 'Game',
        year: '2025',
        description: 'Worldexplorer',
        detail: 'Für dieses Studienprojekt habe ich eine Website entwickelt, wo man die Weltkarte entdecken kann.',
        technologies: 'Flutter, Dart',
        roles: 'Entwicklerin - Einzelarbeit',
        link: 'https://worldexplorer.selmasahin.ch',
    }
]);

const overlayVisible = ref(false);
const selectedProject = ref<Project>({
    title: '',
    year: '',
    description: '',
    detail: '',
    technologies: '',
    roles: '',
    link: '',
    video: '',
    images: [] as string[],
});

const openOverlay = (project: Project) => {
    selectedProject.value = { ...project, images: project.images || [] };
    overlayVisible.value = true;
};

const closeOverlay = () => {
    overlayVisible.value = false;
    selectedProject.value = {
        title: '',
        year: '',
        description: '',
        detail: '',
        technologies: '',
        roles: '',
        link: '',
        video: '',
        images: [],
    };
};

onMounted(() => {
    // Use nextTick to ensure DOM is fully rendered
    nextTick(() => {
        const projectCards = document.querySelectorAll('.projects-grid > div');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Array.from(projectCards).indexOf(entry.target as Element);
                        const delay = index * 200;

                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        // Observe all project cards
        projectCards.forEach((card) => {
            observer.observe(card);
        });
    });
});
</script>

<style scoped>
.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/Projects.webp');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    opacity: 0.9;
    pointer-events: none;
    z-index: 1;
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
    padding-top: 200px;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.projects-grid>div {
    opacity: 0;
    transform: translateY(50px);
    animation: none;
}

.projects-grid>div.visible {
    opacity: 1;
    transform: translateY(0);
    animation: fadeInUp 0.8s ease-in-out forwards;
}

.projects-grid>div.visible:hover {
    transform: translateY(-10px);
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
    font-family: "Noto Sans Display";
    color: var(--Black);
    z-index: 999;
}

.overlay-content {
    background: var(--Beige);
    padding: 20px;
    border-radius: 8px;
    max-width: 800px;
}

.overlay-content img {
    max-width: 200px;
    border-radius: 8px;
    margin-top: 10px;
}

.overlay-video {
    width: 100%;
    height: 400px;
    max-width: 95vw;
    border: none;
    border-radius: 8px;
}

.overlay-images {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
}

.overlay-image {
    max-height: 30vh;
    border-radius: 8px;
    object-fit: cover;
}

@media (max-width: 768px) {

    .background-layer {
        background-size: cover;
        background-position: left top;
    }

    .project-card {
        width: 90%;
    }

    .projects-grid {
        gap: 20px;
        padding-bottom: 20px;
    }
}
</style>