<template>
    <div class="page-root">
        <NavMenu />
        <div class="legal-content">
            <h1>Impressum</h1>
            <p>
                Selma Sahin<br>
                Zürich, Schweiz<br>
                E-Mail: selma.sahin.zh@gmail.com
            </p>
        </div>
    </div>
    <Footer></Footer>

</template>

<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.page-root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--Beige);
}

.legal-content {
    flex: 1;
    max-width: 800px;
    margin: 100px auto 20px;
    padding: 40px;
    font-family: "Noto Sans Display", sans-serif;
    color: var(--Black);
}

.legal-content h1 {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
    color: var(--Black);
}

.legal-content p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 15px;
}

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

@media (max-width: 768px) {
    .legal-content {
        margin: 80px 20px 20px;
        padding: 20px;
    }

    .legal-content h1 {
        font-size: 24px;
    }
}
</style>