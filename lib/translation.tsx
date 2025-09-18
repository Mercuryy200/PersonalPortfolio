export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      intro: "Hi, I am",
      description:
        "  Welcome! I have been building this website in order to showcase my abilities as a software developer. Feel free to explore and learn more about me.",
    },
    about: {
      title: "About Me",
      accordion1: {
        title: "BackGround & Education",
        content:
          " Hi, I'm a passionate software development student currently enrolledin the technical program at Ahuntsic College in Montreal. I'm on track to pursue Software Engineering starting Fall 2026, combining my love for technology with formal education to build a strong foundation in development.",
      },
      accordion2: {
        title: "Journey",
        content:
          'My journey into tech began in 2020 when I built my first PC. What started as a hands-on project quickly evolved into an insatiable curiosity about how technology works under the hood. I found myself diving deep into understanding the mechanisms behind the tools and systems we use every day, always asking "but how does it actually work?"',
      },
      accordion3: {
        title: "Passion",
        content:
          "Software development has become the perfect intersection of my interests—allowing me to blend my creative side through frontend development with my analytical and logical nature in backend work. There's something deeply satisfying about crafting an intuitive user interface while simultaneously architecting the robust systems that power it.",
      },
      accordion4: {
        title: "What Drives Me",
        content:
          "When I'm not coding, you'll find me at the gym or challenging myself to learn new languages—I believe in constantly expanding my skillset both in and out of the tech world. What drives me most as a developer is the incremental nature of building software. I'm fascinated not just by the final product, but by the entire journey—each commit, each breakthrough, and each lesson learned along the way. Seeing how far I've come from that first PC build to developing full-stack applications reminds me why I fell in love with technology in the first place. Currently, I'm always eager to take on new challenges and collaborate on projects that push me to grow as a developer.",
      },
    },
    skills: {
      title: "Tech Stack",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
    },
    projects: {
      title: "Projects",
      viewAll: "View All",
      github: "GitHub",
      demo: "Demo",
    },
    footer: {
      rights: "All rights reserved",
    },

    // ... more sections
  },
  fr: {
    nav: {
      about: "À Propos",
      skills: "Technologies",
      experience: "Expérience",
      projects: "Projets",
      contact: "Contact",
    },
    about: {
      title: "À Propos de Moi",
      accordion1: {
        title: "Parcours & Éducation",
        content:
          " Salut, je suis un étudiant passionné en développement logiciel actuellement inscrit au programme technique à Ahuntsic College à Montréal. Je prévois de poursuivre un diplôme en génie logiciel à partir de l'automne 2026, combinant mon amour pour la technologie avec une éducation formelle pour construire une base solide en développement.",
      },
      accordion2: {
        title: "Parcours",
        content:
          "Mon parcours dans la technologie a commencé en 2020 lorsque j'ai construit mon premier PC. Ce qui a commencé comme un projet pratique s'est rapidement transformé en une curiosité insatiable sur le fonctionnement de la technologie sous le capot. Je me suis retrouvé à plonger profondément dans la compréhension des mécanismes derrière les outils et systèmes que nous utilisons chaque jour, me demandant toujours \"mais comment ça marche vraiment?\"",
      },
      accordion3: {
        title: "Passion",
        content:
          "Le développement logiciel est devenu l'intersection parfaite de mes intérêts - me permettant de mélanger mon côté créatif à travers le développement frontend avec ma nature analytique et logique dans le backend. Il y a quelque chose de profondément satisfaisant à créer une interface utilisateur intuitive tout en architecturant simultanément les systèmes robustes qui l'alimentent.",
      },
      accordion4: {
        title: "Ce qui me motive",
        content:
          "Quand je ne code pas, vous me trouverez à la salle de sport ou en train de me lancer le défi d'apprendre de nouvelles langues - je crois en l'expansion constante de mes compétences tant dans le monde de la technologie qu'en dehors. Ce qui me motive le plus en tant que développeur, c'est la nature incrémentale de la construction de logiciels. Je suis fasciné non seulement par le produit final, mais par tout le parcours - chaque commit, chaque percée et chaque leçon apprise en cours de route. Voir jusqu'où je suis allé depuis cette première construction de PC jusqu'au développement d'applications full-stack me rappelle pourquoi je suis tombé amoureux de la technologie en premier lieu. Actuellement, je suis toujours désireux de relever de nouveaux défis et de collaborer sur des projets qui me poussent à grandir en tant que développeur.",
      },
    },
    hero: {
      intro: "Hi, I am",
      description:
        "  Welcome! I have been building this website in order to showcase my abilities as a software developer. Feel free to explore and learn more about me.",
    },
    skills: {
      title: "Tech Stack",
      languages: "Languages",
      frontend: "Frontend",
      backend: "Backend",
    },
    projects: {
      title: "Projets",
      viewAll: "Voir Tout",
      github: "GitHub",
      demo: "Démo",
    },
    footer: {
      rights: "Tous droits réservés",
    },
    // ... more sections
  },
};

export type Language = "en" | "fr";
export type TranslationKey = keyof typeof translations.en;
