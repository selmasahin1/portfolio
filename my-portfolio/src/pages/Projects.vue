<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
        <h1 class="mobile-page-title">{{ t('nav.projects') }}</h1>
        <div class="projects-grid">
            <ProjectCard v-for="(project, index) in projects" :key="index" :image="project.images && project.images[0]"
                :title="t(`projects.${project.key}.title`)" :description="t(`projects.${project.key}.description`)"
                @click="openOverlay(project)" class="project-card-item" />
        </div>
        <div v-if="overlayVisible && selectedProject" class="overlay" @click="closeOverlay">
            <div class="overlay-content" @click.stop>
                <button class="close-btn" @click="closeOverlay">×</button>
                <div class="overlay-body">
                    <div class="overlay-text">
                        <h2>{{ selectedProject.description }} ({{ selectedProject.year }})</h2>
                        <br />
                        <p><strong>{{ t('projects.overlay.description') }}</strong> {{ selectedProject.detail }}</p>
                        <br />
                        <p><strong>{{ t('projects.overlay.technologies') }}</strong> {{ selectedProject.technologies }}</p>
                        <br />
                        <p><strong>{{ t('projects.overlay.roles') }}</strong> {{ selectedProject.roles }}</p>
                        <br />
                        <p v-if="selectedProject.link">
                            <strong>{{ t('projects.overlay.projectLink') }}</strong> <a :href="selectedProject.link"
                                target="_blank">{{
                                    selectedProject.link }}</a><br><br>
                        </p>
                        <p v-if="selectedProject.digezzLink">
                            <strong>{{ t('projects.overlay.digezzLink') }}</strong> <a :href="selectedProject.digezzLink"
                                target="_blank">{{
                                    selectedProject.digezzLink }}</a>
                        </p>
                        <iframe v-if="selectedProject.video"
                            :src="`https://www.youtube-nocookie.com/embed/${selectedProject.video}`" class="overlay-video"
                            frameborder="0" allowfullscreen>
                        </iframe>
                    </div>
                    <div v-if="!selectedProject.video && selectedProject.images && selectedProject.images.length > 1"
                        class="overlay-images">
                        <img v-for="(image, index) in selectedProject.images.slice(1)" :key="index" :src="image"
                            alt="Project Media" class="overlay-image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue';
import { useI18n } from 'vue-i18n';
import NavMenu from '@/components/NavMenu.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import Footer from '@/components/Footer.vue';
import fangisImg from '../assets/fangis.webp'
import worldexplorerImg from '../assets/worldexplorer.svg'
import psImg from '../assets/ps.webp'
import mh9Img from '../assets/mh9.webp'
import appIconImg from '../assets/appicon.webp'
import swipeKeepImg from '../assets/swipekeep.gif'
import swipeDeleteImg from '../assets/swipedelete.gif'
import syncImg from '../assets/Logo_Dark.svg'
import fangisScreens from '../assets/fangisScreens.png'
import worldexplorerScreens from '../assets/worldexplorerScreens.png'
import syncScreens from '../assets/syncScreens.png'

const { t } = useI18n();

interface Project {
    key: string;
    images: string[];
    year: string;
    technologies: string;
    link?: string;
    video?: string;
    digezzLink?: string;
}

interface SelectedProject extends Project {
    title: string;
    description: string;
    detail: string;
    roles: string;
}

const projects = ref<Project[]>([
    {
        key: 'fangis',
        images: [fangisImg, fangisScreens],
        year: '2025',
        technologies: 'Vue/Nuxt, Supabase, Vercel',
        link: 'https://fangis.app',
    },
    {
        key: 'sync',
        images: [syncImg, syncScreens],
        year: '2026',
        technologies: 'Vue/Nuxt, Neon, Vercel',
        link: 'https://sync-silk-delta.vercel.app/',
    },
    {
        key: 'psbackup',
        images: [psImg],
        year: '2023',
        technologies: 'Angular',
        link: 'https://psbackup.ch/home',
        digezzLink: 'https://www.digezz.ch/angular-fuer-anfaenger/'
    },
    {
        key: 'mh9',
        images: [mh9Img],
        year: '2024',
        technologies: 'Premiere Pro',
        video: 'hV32e24igqA',
    },
    {
        key: 'photoswiper',
        images: [appIconImg, swipeKeepImg, swipeDeleteImg],
        year: '2025',
        technologies: 'xCode, Swift',
        digezzLink: 'https://www.digezz.ch/photoswiper-aufraeumen-mit-einem-wisch/'
    },
    {
        key: 'worldexplorer',
        images: [worldexplorerImg, worldexplorerScreens],
        year: '2025',
        technologies: 'Flutter, Dart',
        link: 'https://worldexplorer.selmasahin.ch',
        digezzLink: 'https://www.digezz.ch/worldexplorer/'
    }
]);

const overlayVisible = ref(false);
const selectedProject = ref<SelectedProject | null>(null);

const openOverlay = (project: Project) => {
    selectedProject.value = {
        ...project,
        title: t(`projects.${project.key}.title`),
        description: t(`projects.${project.key}.description`),
        detail: t(`projects.${project.key}.detail`),
        roles: t(`projects.${project.key}.roles`),
    };
    overlayVisible.value = true;
};

const closeOverlay = () => {
    overlayVisible.value = false;
    selectedProject.value = null;
};

onMounted(() => {
    nextTick(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const elements = document.querySelectorAll('.project-card-item');
        elements.forEach((el) => observer.observe(el));
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


.project-card-item {
    opacity: 0;
    transform: translateY(50px);
    animation: none;
}

.project-card-item.visible {
    opacity: 1;
    transform: translateY(0);
    animation: fadeInUp 0.8s ease-in-out forwards;
}

.project-card-item.visible:hover {
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
    max-width: 1100px;
    position: relative;
}

.overlay-body {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 20px;
    align-items: center;
}

.overlay-text {
    flex: 1 1 50%;
    min-width: 0;
}

.close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 32px;
    font-weight: bold;
    color: var(--Black);
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    padding: 0;
    line-height: 1;
}

.close-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.overlay-video {
    width: 100%;
    height: 50vh;
    max-width: 95vw;
    border: none;
    border-radius: 8px;
}

.overlay-images {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex: 1 1 50%;
    min-width: 0;
}

.overlay-images img {
    max-width: 100%;
    max-height: 40vh;
    object-fit: contain;
    border-radius: 8px;
}

.overlay-image {
    width: auto;
    max-width: 450px;
    border-radius: 8px;
    object-fit: contain;
}

.mobile-page-title {
    display: none;
}

@media (max-width: 924px) {

    .mobile-page-title {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 2;
        padding: 0 20px;
        color: var(--Black);
        font-family: 'Caveat', cursive;
        font-size: 48px;
        text-align: center;
    }

    .background-layer {
        background-size: cover;
        background-position: right bottom;
        background-image: url('../assets/ProjectsMobile.webp');

    }

    .project-card {
        width: 90%;
    }

    .projects-grid {
        gap: 20px;
        padding-bottom: 20px;
    }

    .overlay-body {
        flex-direction: column;
    }

    .overlay-text,
    .overlay-images {
        flex: 1 1 auto;
        width: 100%;
    }

    .overlay-image {
        flex: 1 1 140px;
        max-width: 45%;
        max-height: 30vh;
    }
}
</style>