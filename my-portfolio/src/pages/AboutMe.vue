<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
        <div class="about-me">
            <div class="portrait-container" @click="flipPortrait">
                <Portrait :image="currentPortrait?.image || aboutMeImg" :text="currentPortrait?.text || 'Selma Sahin'"
                    class="portrait-item" :style="{ transform: `rotateY(${rotationDegrees}deg)` }" />
            </div>

            <div v-if="currentPortraitIndex === 0" class="content-section">
                <h2>That's me</h2>
                <p>Ich bin Multimedia-Production-Studentin mit Fokus auf Media Applications. Ich arbeite gerne an
                    digitalen Produkten und lerne regelmässig neue Frameworks und Tools.</p>
                <p>Mein Linkedin:</p>
                <div class="linkedin">
                    <a :href="linkedInUrl" target="_blank" rel="noopener noreferrer">
                        <img src="../assets/linkedin.png" alt="Link to Linkedin" class="linkedin-img" />
                    </a>
                </div>
            </div>
            <div v-if="currentPortraitIndex === 1" class="content-section">
                <h2>MMP-Stuff</h2>
                <p>In meinem Multimedia-Production-Studium habe ich verschiedenste Programme und Skills gelernt.
                    Unter anderem:</p>
                <ul>
                    <li>Premiere Pro</li>
                    <li>InDesign</li>
                    <li>Illustrator</li>
                    <li>Figma</li>
                    <li>Blender</li>
                    <li>TouchDesigner</li>
                </ul>
            </div>

            <div v-if="currentPortraitIndex === 2" class="content-section">
                <h2>Programmierstuff</h2>
                <p>In meiner Lehre sowie im Studium konnte ich mir einige Frameworks sowie Programmiersprachen
                    aneignen.</p>
                <ul>
                    <li>Vue/Nuxt</li>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Flutter</li>
                    <li>Java</li>
                    <li>Kotlin</li>
                    <li>PHP</li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            © Selma Sahin
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import NavMenu from '@/components/NavMenu.vue'
import Portrait from '@/components/portrait.vue'
import aboutMeImg from '../assets/aboutMe1.webp'
import aboutMeImg3 from '../assets/aboutMe3.webp'
import ImBild from '../assets/IM.webp'

const portraits = [
    { image: aboutMeImg, text: 'Selma Sahin' },
    { image: aboutMeImg3, text: 'MMP-Studentin' },
    { image: ImBild, text: 'Entwicklerin' }

]

const currentPortraitIndex = ref(0)
const currentPortrait = ref(portraits[0])
const isFlipping = ref(false)
const rotationDegrees = ref(0)
const linkedInUrl = 'https://www.linkedin.com/in/selma-sahin-9bb1a3292/'

const flipPortrait = () => {
    if (isFlipping.value) return

    isFlipping.value = true

    // Add 360 degrees rotation (full spin to the right)
    rotationDegrees.value += 360

    // After half the animation (180 degrees), switch to next portrait
    setTimeout(() => {
        currentPortraitIndex.value = (currentPortraitIndex.value + 1) % portraits.length
        currentPortrait.value = portraits[currentPortraitIndex.value]
    }, 400)

    // Reset animation flag after animation
    setTimeout(() => {
        isFlipping.value = false
    }, 800)
}

onMounted(() => {
    setTimeout(() => {
        rotationDegrees.value = 30
        setTimeout(() => {
            rotationDegrees.value = -30
            setTimeout(() => {
                rotationDegrees.value = 0
            }, 200)
        }, 200)
    }, 1000)
})
</script>

<style scoped>
.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/AboutMeBackground.webp');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    opacity: 0.9;
    pointer-events: none;
    z-index: 1;
}

.page-root {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.about-me {
    position: relative;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 80px;
    z-index: 60;
    background-color: transparent !important;
}

.portrait-content {
    max-width: 800px;
}

.content-section {
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 0.5s ease-in-out;
    font-family: "Noto Sans Display", sans-serif;
    height: 430px;
    width: 280px;
}

.content-section h2 {
    color: var(--Black);
    font-family: "Noto Sans Display", sans-serif;
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 12px;
}

.content-section p {
    color: var(--Black);
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 16px;
}

.content-section ul {
    list-style-type: disc;
    padding-left: 20px;
    color: var(--Black);
}

.content-section li {
    margin-bottom: 8px;
    font-size: 14px;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.portrait-container {
    cursor: pointer;
    background: none;
}

.portrait-item {
    transition: transform 0.4s ease-in-out;
    transform-style: preserve-3d;
    height: 430px;
}

@keyframes flipAnimation {
    from {
        transform: rotateY(0deg);
    }

    to {
        transform: rotateY(180deg);
    }
}

@media (max-width: 768px) {

    .background-layer {
        background-size: cover;
        background-position: left top;
    }

    .about-me {
        padding-top: 300px;
        flex-direction: column;
    }

}

.linkedin-img {
    width: 60px;
    border-radius: 8px;
    cursor: pointer;
}
</style>