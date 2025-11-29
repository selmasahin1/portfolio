<template>
    <nav class="nav-menu">
        <div class="burger-menu" @click="toggleMenu">
            <img src="../assets/Hamburger.svg" alt="Menu" />
        </div>
        <div class="menu-links" :class="{ 'open': isMenuOpen }">
            <router-link to="/" class="nav-link" @click="closeMenu">Home</router-link>
            <router-link to="/AboutMe" class="nav-link" @click="closeMenu">Me</router-link>
            <router-link to="/Projects" class="nav-link" @click="closeMenu">Projects</router-link>
            <router-link to="/Contact" class="nav-link" @click="closeMenu">Contact</router-link>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};
</script>

<style scoped>
.nav-menu {
    position: fixed;
    top: 40px;
    right: 120px;
    display: flex;
    gap: 60px;
    z-index: 998;
    background-color: transparent;
}

.burger-menu {
    display: none;
    cursor: pointer;
    background: var(--Beige);
    border-radius: 50%;
    padding: 15px;
}

.burger-menu img {
    width: 30px;
    height: 30px;
}

.menu-links {
    display: flex;
    gap: 60px;
    background-color: transparent;
}

.menu-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50px;
    right: 0;
    background: rgba(255, 255, 255, 0.9);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    gap: 15px;
    z-index: 99999;
}

.nav-link {
    color: var(--Black);
    font-family: 'Caveat', cursive;
    font-size: 32px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;
    background-color: transparent;
}

.nav-link:hover {
    transform: translateY(-2px);
    color: var(--Blue);
}

.nav-link.router-link-active {
    text-decoration: underline;
    text-underline-offset: 4px;
    color: var(--Blue);
}

@media (max-width: 768px) {
    .burger-menu {
        display: block;
    }

    .menu-links {
        display: none;
        right: 20px;
    }

    .nav-menu {
        right: 20px;
        background-color: transparent;
    }
}
</style>
