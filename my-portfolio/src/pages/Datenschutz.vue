<template>
    <div class="page-root">
        <NavMenu />
        <div class="legal-content">
            <h1>Datenschutzerklärung</h1>

            <h2>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</h2>
            <p>
                Selma Sahin<br>
                Zürich, Schweiz<br>
                E-Mail: selma.sahin.zh@gmail.com
            </p>

            <h2>Erhebung und Verarbeitung personenbezogener Daten</h2>
            <p>
                Wenn du mich über das Kontaktformular kontaktierst, werden die von dir eingegebenen Daten (Name,
                E-Mail-Adresse und
                Nachricht) zur Bearbeitung deiner Anfrage verarbeitet.
            </p>

            <h2>Zweck der Verarbeitung</h2>
            <p>Die Daten werden ausschliesslich zur Beantwortung deiner Anfrage verwendet.</p>

            <h2>Speicherung und Weitergabe</h2>
            <p>
                Deine Daten werden nicht an Dritte weitergegeben und nur so lange gespeichert, wie es für die
                Bearbeitung deiner
                Anfrage notwendig ist.
            </p>
            <h2>Einbindung von YouTube</h2>
            <p>
                Auf dieser Website sind Videos von YouTube eingebunden. Es wird der erweiterte Datenschutzmodus verwendet
                („youtube-nocookie.com“). Dadurch werden laut YouTube keine Cookies gesetzt, solange das Video nicht aktiv
                abgespielt wird. Beim Abspielen des Videos kann eine Datenübertragung an Google erfolgen.
            </p>

            <h2>Deine Rechte</h2>
            <p>
                Du hast das Recht auf Auskunft über die von dir gespeicherten personenbezogenen Daten sowie auf Löschung
                dieser
                Daten. Entsprechende Anfragen kannst du per E-Mail an die oben genannte Adresse richten.
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

.legal-content h2 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 25px;
    margin-bottom: 15px;
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

    .legal-content h2 {
        font-size: 18px;
    }
}
</style>