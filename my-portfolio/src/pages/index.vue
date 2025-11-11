<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
        <div class="intro-text">
            <p>Get to know me</p>
            <a href="#content" class="arrow-link">
                <img src="../assets/arrows.svg" alt="down arrow" />
            </a>
        </div>
        <div class="spacer"></div>

        <div id="content" class="content" ref="contentRef">
            <portrait :image="aboutMeImg" text="About Me" route="/AboutMe" class="portrait-item" />
            <portrait :image="projectsImg" text="Projects" route="/Projects" class="portrait-item" />
            <portrait :image="contactImg" text="Contact" route="/Contact" class="portrait-item" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Portrait from '@/components/portrait.vue'
import NavMenu from '@/components/NavMenu.vue'
import aboutMeImg from '../assets/AboutMe.jpg'
import projectsImg from '../assets/projects.jpg'
import contactImg from '../assets/contact.jpg'

const contentRef = ref<HTMLElement | null>(null)

onMounted(() => {
    const portraits = document.querySelectorAll('.portrait-item')

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = Array.from(portraits).indexOf(entry.target as Element)
                    const delay = index * 200

                    setTimeout(() => {
                        entry.target.classList.add('visible')
                    }, delay)
                }
            })
        },
        {
            threshold: 0.2
        }
    )

    // Observe all portrait items
    portraits.forEach((portrait) => {
        observer.observe(portrait)
    })
})
</script>

<style scoped>
.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/SelmaSahin.png');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    opacity: 0.9;
    pointer-events: none;
    z-index: 1;
}

.intro-text {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 450px;
    font-size: 48px;
    color: var(--Black);
    font-family: 'Caveat', cursive;
    font-weight: 600;
    z-index: 500;
    animation: bounce 2s ease-in-out infinite;
    background-color: transparent !important;
}

.intro-text p,
.intro-text a,
.intro-text img {
    background-color: transparent !important;
    cursor: pointer;

}

.intro-text:hover p {
    animation-play-state: paused;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(15px);
    }
}

.content {
    position: relative;
    width: 100%;
    padding: 100px;
    display: flex;
    flex-wrap: wrap;
    gap: 100px;
    justify-content: center;
    z-index: 999;
    background-color: transparent !important;
}

.portrait-item {
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.8s ease-in-out, transform 0.8s ease-in-out;
}

.portrait-item.visible {
    opacity: 1;
    transform: translateY(0);
}

.portrait-item.visible:hover {
    transform: translateY(-10px);
}

.spacer {
    height: 50vh;
}

@media (max-width: 768px) {

    .background-layer {
        background-size: cover;
        background-position: left top;
    }

    .intro-text {
        margin-bottom: 20px;
        padding-top: 250px;
    }

    .content {
        padding: 50px;
        gap: 20px;
        padding-top: 20px;
    }

    .portrait-item {
        width: 100%;
        max-width: 300px;
        font-size: 16px;
    }

    .spacer {
        height: 10vh;
    }

    .intro-text img {
        width: 80px;
        height: 80px;
    }
}
</style>