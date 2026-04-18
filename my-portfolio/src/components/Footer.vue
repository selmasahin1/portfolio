<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const nextLang = computed(() => (locale.value === 'DE' ? 'EN' : 'DE'));

const toggleLanguage = () => {
    locale.value = nextLang.value;
};
</script>

<template>
    <div class="footer">
        <div class="footer-links">
            <router-link to="/Datenschutz">{{ t('footer.privacy') }}</router-link>
            <span class="separator">|</span>
            <router-link to="/Impressum">{{ t('footer.imprint') }}</router-link>
            <span class="separator">|</span>
            <span @click="toggleLanguage" class="language-switcher">{{ nextLang }}</span>
        </div>
        <div class="copyright">
            © Selma Sahin
        </div>
    </div>
</template>

<style scoped>
.footer {
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px 20px;
    font-family: "Noto Sans Display", sans-serif;
    font-size: 14px;
}

.footer-links {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.footer-links a,
.language-switcher {
    color: var(--Black);
    text-decoration: none;
    transition: color 0.3s ease;
    cursor: pointer;
}

.footer-links a:hover,
.language-switcher:hover {
    text-decoration: underline;
}

.separator {
    margin: 0 10px;
    color: var(--Black);
}
</style>
