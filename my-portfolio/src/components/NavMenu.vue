<template>
    <nav class="nav-menu">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/AboutMe" class="nav-link">Me</router-link>
        <router-link to="/Projects" class="nav-link">Projects</router-link>
        <router-link to="/Contact" class="nav-link">Contact</router-link>
    </nav>
</template>

<script setup lang="ts"></script>

<style scoped>
.nav-menu {
    position: fixed;
    top: 40px;
    right: 120px;
    display: flex;
    gap: 60px;
    z-index: 1000;
    background-color: transparent;
}

.nav-link {
    color: var(--Black, #312F27);
    font-family: 'Caveat', cursive;
    font-size: 32px;
    font-weight: 600;
    text-decoration: none;
    transition: transform 0.2s ease, color 0.2s ease;
    background-color: transparent;
}

.nav-link:hover {
    transform: translateY(-2px);
    color: var(--Blue, #4C7FB3);
}

.nav-link.router-link-active {
    text-decoration: underline;
    text-underline-offset: 4px;
    color: var(--Blue, #4C7FB3);

}
</style>
