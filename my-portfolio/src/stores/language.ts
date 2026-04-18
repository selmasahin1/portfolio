import { ref } from 'vue';

export const language = ref<'DE' | 'EN'>('DE');

export function setLanguage(lang: 'DE' | 'EN') {
    language.value = lang;
}
