import { createI18n, type I18n } from 'vue-i18n';

const messages = {
  DE: {
    nav: {
      about: 'Über mich',
      projects: 'Projekte',
      contact: 'Kontakt',
    },
    footer: {
      privacy: 'Datenschutz',
      imprint: 'Impressum',
    },
    about: {
      title: 'That\'s me',
      text: 'Ich bin Creative Developerin und verbinde mit meinem Background als Informatikerin und dem MMP-Studium "The Best of Both Worlds"',
      mmpTitle: 'MMP-Things',
      mmpText: 'In meinem Multimedia-Production-Studium habe ich verschiedenste Programme und Skills gelernt. Unter anderem:',
      mmpSkills: ['Premiere Pro', 'InDesign', 'Photoshop', 'Illustrator', 'Figma', 'Blender', 'TouchDesigner'],
      devTitle: 'Programmierstuff',
      devText: 'In meiner Lehre sowie im Studium konnte ich mir einige Frameworks sowie Programmiersprachen aneignen.',
      devSkills: ['Vue/Nuxt', 'React', 'Angular', 'Flutter', 'Java', 'Kotlin', 'PHP'],
      portrait: {
        p1: 'Selma Sahin',
        p2: 'MMP-Studentin',
        p3: 'Entwicklerin'
      }
    },
    projects: {
      fangis: {
        title: 'Webapp',
        description: 'fangis',
        detail: 'Unser Spiel bringt die Dynamik von „Fangen“ in die digitale Welt – über eine App, die die reale Stadt zur interaktiven Spielfläche macht. Spieler:innen bewegen sich in Echtzeit auf einer Karte, nehmen Rollen ein (Runner vs. Catcher), absolvieren Challenges per Kamera und GPS und sammeln Punkte. Über eine moderne PWA mit Live-Standort entsteht ein bewegungsintensives, soziales und wettbewerbsorientiertes Spielerlebnis – schweizweit, sofort spielbar, komplett per Smartphone.',
        roles: 'Lead Developer - Teamarbeit',
      },
      sync: {
        title: 'Webapp',
        description: 'Sync',
        detail: 'Sync enstand im Rahmen meiner Bachelorarbeit. Es ist eine Webapp, wo man bekannte Filmclips mit Freunden nachsynchronisieren kann. Mit der eigenen Stimme im Karaoke Style. Die App ist nicht öffentlich zugänglich.',
        roles: 'Design, Entwicklerin - Einzelarbeit',
      },
      psbackup: {
        title: 'Website',
        description: 'Physio & Sport BackUp',
        detail: 'Entwicklung und Gestaltung der Website für Physio & Sport BackUp',
        roles: 'Design, Entwicklerin - Einzelarbeit',
      },
      mh9: {
        title: 'Film',
        description: 'Ein Tag in der Markthalle 9',
        detail: 'Im Rahmen des Moduls Audiovisuelles Erzählen haben wir in Berlin einen Kurzfilm gedreht, der das tägliche Leben in der Markthalle 9 dokumentiert.',
        roles: 'Schnitt, Voice-over, Kamera',
      },
      photoswiper: {
        title: 'IOS App',
        description: 'Photoswiper',
        detail: 'Dieses Projekt habe ich erstellt um meine Fähigkeiten in der iOS-Entwicklung zu verbessern. Die App ermöglicht es Benutzern, durch ihre Fotos zu swipen und sie zu organisieren indem sie sie entweder behalten oder löschen. Es ist eine einfache, aber effektive Lösung, um die Fotoverwaltung auf iOS-Geräten zu erleichtern.',
        roles: 'Design, Entwicklerin - Einzelarbeit',
      },
      worldexplorer: {
        title: 'Game',
        description: 'Worldexplorer',
        detail: 'Für dieses Studienprojekt habe ich eine Website entwickelt, wo man die Weltkarte entdecken kann. Es ist ein interaktives Spiel, das mit Flutter und Dart erstellt wurde.',
        roles: 'Design, Entwicklerin - Einzelarbeit',
      },
      overlay: {
        description: 'Beschreibung:',
        technologies: 'Gebrauchte Technologien:',
        roles: 'Meine Rollen:',
        projectLink: 'Projektlink:',
        digezzLink: 'Digezz Link:',
      }
    },
    contact: {
        title: 'Kontakt',
        name: 'Name',
        email: 'Email',
        message: 'Nachricht',
        send: 'Senden'
    }
  },
  EN: {
    nav: {
      about: 'About me',
      projects: 'Projects',
      contact: 'Contact',
    },
    footer: {
      privacy: 'Privacy',
      imprint: 'Legal Notice',
    },
    about: {
      title: 'That\'s me',
      text: 'I am a creative developer and with my background as a computer scientist and my MMP studies I combine "The Best of Both Worlds"',
      mmpTitle: 'MMP-Things',
      mmpText: 'During my bachelor in multimedia production, I learned a wide variety of programs and skills. Among others:',
      mmpSkills: ['Premiere Pro', 'InDesign', 'Photoshop', 'Illustrator', 'Figma', 'Blender', 'TouchDesigner'],
      devTitle: 'Programming',
      devText: 'During my apprenticeship and my studies, I was able to learn several frameworks and programming languages.',
      devSkills: ['Vue/Nuxt', 'React', 'Angular', 'Flutter', 'Java', 'Kotlin', 'PHP'],
      portrait: {
        p1: 'Selma Sahin',
        p2: 'MMP-Student',
        p3: 'Developer'
      }
    },
    projects: {
      fangis: {
        title: 'Webapp',
        description: 'fangis',
        detail: 'Our game brings the dynamics of "catch" into the digital world - via an app that turns the real city into an interactive playing field. Players move around a map in real time, take on roles (runner vs. catcher), complete challenges via camera and GPS and collect points. A modern PWA with live location creates a movement-intensive, social and competitive gaming experience - throughout Switzerland, immediately playable, completely via smartphone.',
        roles: 'Lead Developer - Teamwork',
      },
      sync: {
        title: 'Webapp',
        description: 'Sync',
        detail: 'Sync was created as part of my bachelor thesis. It is a web app where you can dub known movie clips with friends. With your own voice in karaoke style. The app is not publicly accessible.',
        roles: 'Design, Developer - Individual work',
      },
      psbackup: {
        title: 'Website',
        description: 'Physio & Sport BackUp',
        detail: 'Development and design of the website for Physio & Sport BackUp',
        roles: 'Developer - Individual work',
      },
      mh9: {
        title: 'Film',
        description: 'A day in Markthalle 9',
        detail: 'As part of the audiovisual storytelling module, we shot a short film in Berlin documenting daily life in Markthalle 9.',
        roles: 'Editing, voice-over, camera',
      },
      photoswiper: {
        title: 'IOS App',
        description: 'Photoswiper',
        detail: 'I created this project to improve my iOS development skills. The app allows users to swipe through their photos and organize them by either keeping or deleting them. It is a simple but effective solution to facilitate photo management on iOS devices.',
        roles: 'Developer - Individual work',
      },
      worldexplorer: {
        title: 'Game',
        description: 'Worldexplorer',
        detail: 'For this university project, I developed a website where you can discover the world map. It is an interactive game created with Flutter and Dart.',
        roles: 'Developer - Individual work',
      },
      overlay: {
        description: 'Description:',
        technologies: 'Used technologies:',
        roles: 'My roles:',
        projectLink: 'Project link:',
        digezzLink: 'Digezz Link:',
      }
    },
    contact: {
        title: 'Contact',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send'
    }
  },
};

const i18n = createI18n({
  legacy: false,
  locale: 'DE', // set locale
  fallbackLocale: 'EN', // set fallback locale
  messages, // set locale messages
});

export default i18n;
