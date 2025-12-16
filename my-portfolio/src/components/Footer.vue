<template>
    <div class="footer">
        <div class="footer-links">
            <router-link to="/Datenschutz">Datenschutz</router-link>
            <span class="separator">|</span>
            <router-link to="/Impressum">Impressum</router-link>
        </div>
        <div class="copyright">
            © Selma Sahin
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
    position: relative;
    z-index: 100;
}

.footer-links {
    text-align: center;
    padding: 10px 0;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 14px;
}

.footer-links a {
    color: var(--Black);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-links a:hover {
    text-decoration: underline;
}

.footer-links .separator {
    margin: 0 10px;
    color: var(--Black);
}
</style>
