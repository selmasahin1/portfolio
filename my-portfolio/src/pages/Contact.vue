<template>
    <div class="page-root">
        <NavMenu />
        <div class="background-layer"></div>
        <h1 class="mobile-page-title">{{ t('contact.title') }}</h1>

        <div class="contact-content">
            <div class="left">
                <p>Let's get in touch</p>
                <a href="#content" class="arrow-link" @click="focusNameInput">
                    <img src="../assets/arrow_right.svg" alt="right arrow" />
                </a>
            </div>

            <div class="right">
                <form @submit.prevent="submitForm" class="contact-form">

                    <AnimatedInput ref="nameInput" v-model="formData.name" :label="t('contact.name')"
                        :required="true" />

                    <AnimatedInput v-model="formData.email" :label="t('contact.email')" type="email" :required="true" />

                    <AnimatedTextarea v-model="formData.message" :label="t('contact.message')" :rows="5"
                        :required="true" />

                    <input v-model="hp" class="hp-field" tabindex="-1" autocomplete="off" />

                    <button type="submit" class="submit-btn" :disabled="sending">
                        {{ sending ? "Senden..." : t('contact.send') }}
                    </button>

                    <p class="status">{{ status }}</p>
                </form>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>


<script setup lang="ts">
import NavMenu from '@/components/NavMenu.vue'
import AnimatedInput from '@/components/AnimatedInput.vue'
import AnimatedTextarea from '@/components/AnimatedTextarea.vue'
import Footer from '@/components/Footer.vue'
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n();

const formData = ref({
    name: '',
    email: '',
    message: ''
})

const nameInput = ref<InstanceType<typeof AnimatedInput> | null>(null)
const focusNameInput = () => nameInput.value?.focus()

const hp = ref("")
const loadTime = ref(0)

const sending = ref(false)
const status = ref("")
const contactEndpoint = "https://selmasahin.ch/sendmail.php"

onMounted(() => {
    loadTime.value = Date.now()
})

async function submitForm() {
    sending.value = true
    status.value = ""

    const spent = Date.now() - loadTime.value
    try {
        const form = new FormData()
        form.append("name", formData.value.name)
        form.append("email", formData.value.email)
        form.append("message", formData.value.message)
        form.append("hp", hp.value)
        form.append("loadTime", spent.toString())

        const res = await fetch(contactEndpoint, {
            method: "POST",
            body: form
        })

        const result = (await res.text()).trim()

        if (res.ok && result === "OK") {
            status.value = "Nachricht erfolgreich gesendet!"
            formData.value = { name: "", email: "", message: "" }
            hp.value = ""
            loadTime.value = Date.now()
        } else {
            status.value = `Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.`
        }
    } catch {
        status.value = `Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.`
    } finally {
        sending.value = false
    }
}
</script>


<style scoped>
.background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('../assets/Contact.webp');
    background-repeat: no-repeat;
    background-position: center top;
    background-size: 100% auto;
    opacity: 0.9;
    pointer-events: none;
    z-index: 1;
}

.contact-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    z-index: 2;
    position: relative;
    background-color: transparent;
    gap: 15vw;
}

.contact-form {
    padding: 20px 30px;
    border-radius: 8px;
    width: 30vw;
}

.submit-btn {
    background-color: var(--Blue);
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 50px;
    transition: background-color 0.3s ease;
    font-family: "Noto Sans Display", sans-serif;
    color: var(--Black);
    font-size: 22px;
    font-weight: 400;
    width: 160px;
    height: 50px;
    z-index: 50;
    opacity: 1;
}

.left {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    color: var(--Beige);
    font-family: 'Caveat', cursive;
    font-weight: 600;
    z-index: 999;
    animation: bounce 2s ease-in-out infinite;
    background-color: transparent !important;
    justify-self: center;
    text-align: left;
}

.right {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
}

.left p,
.left a,
.left img {
    background-color: transparent !important;
    cursor: pointer;

}

.left:hover p {
    animation-play-state: paused;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateX(0);
    }

    50% {
        transform: translateX(15px);
    }
}

.hp-field {
    display: none !important;
    visibility: hidden !important;
}

.status {
    margin-top: 15px;
    font-size: 1rem;
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
        background-position: right top;
        margin-top: 20px;
        background-image: url('../assets/ContactMobile.webp');
    }

    .left {
        display: none;
    }

    .right {
        width: 90vw;
    }

    .contact-form {
        width: 100%;
        padding: 20px;
    }
}
</style>