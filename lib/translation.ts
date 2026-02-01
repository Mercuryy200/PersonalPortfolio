export const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      contact: "Contact",
      roadmap: "Roadmap",
    },
    hero: {
      badge: "Available for Internships: March – Aug 2026",
      intro: "Hi, I am",
      description:
        "Welcome! I am a full-stack developer with a passion for Data Engineering and AI. I build scalable web applications and automated data pipelines, combining technical logic with modern system architecture.",
      ctaProjects: "View Projects",
      ctaResume: "Download Resume",
      scroll: "Scroll",
    },
    about: {
      title: "About Me",
      accordion1: {
        title: "Background & Education",
        content:
          "Hi, I'm a software development student graduating from Collège Ahuntsic in May 2026. I am also an incoming Software Engineering student at Concordia University (Fall 2026). I combine formal technical training with self-driven learning in AI and Data Engineering.",
      },
      accordion2: {
        title: "Journey",
        content:
          "My journey began in 2020 by building my first PC, which sparked a curiosity about how systems work under the hood. This evolved from hardware to software, leading me to explore full-stack development and, more recently, the complexities of data pipelines and machine learning architectures.",
      },
      accordion3: {
        title: "Passion",
        content:
          "I sit at the intersection of creative frontend work and analytical backend logic. I enjoy crafting intuitive user interfaces with Next.js while simultaneously architecting robust data systems using Python, SQL, and Vector Databases.",
      },
      accordion4: {
        title: "What Drives Me",
        content:
          "Beyond coding, I'm constantly learning—whether it's new spoken languages or new tech stacks like RAG (Retrieval-Augmented Generation). I am driven by the engineering challenge of optimizing performance, automating workflows, and building software that solves real-world problems.",
      },
    },
    skills: {
      title: "Skills",
      languages: "Languages",
      others: "Others",
      framework: "Frameworks",
      ides: "IDEs",
      cloud: "Cloud & DevOps",
      databases: "Databases",
      versionControl: "Version Control",
    },
    projects: {
      title: "Projects",
      items: {
        project1: {
          title: "ArXiv RAG Research Assistant",
          description:
            "An automated AI pipeline that scrapes research papers and allows users to 'chat' with them. It uses a Retrieval-Augmented Generation (RAG) architecture to provide accurate, cited answers from technical documents.",
          features: [
            "Automated ETL pipeline via GitHub Actions (Weekly scraping).",
            "Vector Embeddings generation using 'sentence-transformers'.",
            "Semantic Search utilizing Supabase and pgvector.",
            "Generative AI integration with Google Gemini Pro LLM.",
            "Streamlit frontend with sub-second response caching.",
            "Self-healing architecture handling unstructured PDF data.",
          ],
          technologies:
            "Python, Supabase (pgvector), Google Gemini API, GitHub Actions, Streamlit, Pandas",
          github: "https://github.com/Mercuryy200/arxiv-search-engine",
          url: "https://arxiv-search-app.streamlit.app",
        },
        project2: {
          title: "RCapsule - Smart Closet Manager",
          description:
            "A full-stack wardrobe management app featuring AI-powered outfit recommendations. It combines secure authentication, real-time database interactions, and weather-based logic to help users organize their closet efficiently.",
          features: [
            "AI Outfit Recommendations using OpenAI API & OpenWeatherMap.",
            "Secure authentication with NextAuth.js (GitHub & Credentials).",
            "Real-time database operations via Supabase (PostgreSQL).",
            "Responsive card-based layout with image storage.",
            "Price tracking and purchase history analytics.",
            "Optimized performance with protected middleware routes.",
          ],
          technologies:
            "Next.js, TypeScript, PostgreSQL, Supabase, OpenAI API, NextAuth.js, Tailwind CSS",
          github: "https://github.com/Mercuryy200/ClosetOrganizer",
          url: "https://rcapsule.com",
        },
        project3: {
          title: "Fruit Basket Game",
          description:
            "An interactive Unity game where players catch falling food items in a pot while avoiding bombs. Built with C# and Unity, features progressive difficulty scaling, physics-based interactions, and a polished UI.",
          features: [
            "Dynamic spawning system with falling food items and bombs.",
            "Progressive difficulty that increases as the timer counts down.",
            "Score tracking system with real-time UI updates.",
            "Game state management with start, play, and restart functionality.",
            "Collision detection using Rigidbody physics.",
            "Coroutines for timed events and asynchronous operations.",
            "Comprehensive testing suite (Unit, Play Mode, Configuration).",
            "Polished UI with TextMesh Pro, sound effects, and VFX.",
          ],
          technologies:
            "Unity, C#, Unity Asset Store, TextMesh Pro, Rigidbody Physics, Coroutines, Unity Test Framework",
          github: "https://github.com/Mercuryy200/FruitBasket",
          url: null,
        },
        project4: {
          title: "Hangman Game iOS",
          description:
            "An iOS Hangman game featuring two game modes: guess movie titles fetched from the OMDB API or random dictionary words. Built with Swift and UIKit following the MVC architecture pattern.",
          features: [
            "Two game modes: Movie titles (OMDB API) and Dictionary words.",
            "Tab-based navigation for easy mode switching.",
            "Visual hangman progression with 7-stage drawing sequence.",
            "Interactive letter keyboard with tracking.",
            "Responsive design with Auto Layout for iPhone and iPad.",
            "MVC architecture pattern for clean code organization.",
          ],
          technologies: "Swift 5, UIKit, URLSession, OMDB API, Auto Layout",
          github: "https://github.com/Mercuryy200/HangmanSwfitGame",
          url: null,
        },
      },
    },
    footer: {
      rights: "All rights reserved",
      badge: "Available for Internships: March – Aug 2026",
    },
    experience: {
      title: "Experience",
      viewMore: "Download Resume",
      fileName: "NafouguiRima_EN.pdf",
      items: [
        {
          position: "Tutor in Software Development",
          company: "Cegep Ahuntsic/Freelance",
          duration: "May 2025 - Present",
          description:
            "Assist college and university students in programming concepts in SQL, Java, Python, JavaScript, Kotlin, Swift and more. \nProvide guidance on code debugging and algorithm problem-solving. \nCreate additional learning materials to enhance student understanding",
          reference: "Professional Reference Available",
        },
        {
          position: "Tutor in Mathematics",
          company: "Cegep Ahuntsic/Freelance",
          duration: "August 2024 - Present",
          description:
            "Assist 5 college students in mathematics for computer science courses, including linear algebra and discrete mathematics. \nProvide guidance on solving computer-related problems (e.g., ray tracing calculations). \nCreate additional learning materials to enhance student understanding",
          reference: "Professional Reference Available",
        },
      ],
    },
    contact: {
      title: "Contact Me",
      name: {
        errorMessage: "Please enter a valid name",
        label: "Full Name:",
        placeholder: "Enter your full name",
      },
      email: {
        errorMessage: "Please enter a valid email",
        label: "Email:",
        placeholder: "Enter your email",
      },
      message: {
        errorMessage: "Please enter a message",
        label: "Message: ",
        placeholder: "Your message...",
      },
      submit: "Submit",
      reset: "Reset",
    },
    roadmap: {
      title: "Technical Journey",
      milestones: [
        {
          status: "completed",
          date: "MAY 2026",
          title: "Diploma in Web & Apps",
          institution: "Collège Ahuntsic",
          description:
            "Graduating from intensive training in full-stack web development, mobile applications, and systems analysis. Built strong foundations in OOP, algorithms, and database management.",
        },
        {
          status: "active",
          date: "MARCH – AUGUST 2026",
          title: "Seeking Internship",
          institution: "Software / Data Engineering",
          description:
            "Immediate availability for a 6-month internship. Eager to contribute to dynamic teams using Next.js, Python, or Cloud technologies to build scalable solutions.",
        },
        {
          status: "future",
          date: "FALL 2026",
          title: "BEng in Software Engineering",
          institution: "Concordia University",
          description:
            "Incoming Engineering Student. Preparing to deepen theoretical knowledge in software architecture and large-scale system design while continuing to build practical projects.",
        },
      ],
    },
  },
  fr: {
    nav: {
      about: "À Propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      contact: "Contactez-moi",
      roadmap: "Parcours",
    },
    hero: {
      badge: "Disponible pour stages : Mars – Août 2026",
      intro: "Bonjour, je suis",
      description:
        "Bienvenue! Je suis une développeuse full-stack passionnée par l'ingénierie des données et l'IA. Je conçois des applications web évolutives et des pipelines de données automatisés, alliant logique technique et architecture moderne.",
      ctaProjects: "Voir mes projets",
      ctaResume: "Télécharger le CV",
      scroll: "Défiler",
    },
    about: {
      title: "À Propos de Moi",
      accordion1: {
        title: "Parcours & Éducation",
        content:
          "Salut, je suis une étudiante en développement logiciel finissant au Collège Ahuntsic en mai 2026. Je suis également future étudiante en génie logiciel à l'Université Concordia (Automne 2026). Je combine une formation technique formelle avec un apprentissage autodidacte en IA et en ingénierie des données.",
      },
      accordion2: {
        title: "Parcours",
        content:
          "Mon parcours a commencé en 2020 par la construction de mon premier PC, éveillant une curiosité sur le fonctionnement des systèmes. Cela a évolué du matériel vers le logiciel, me menant au développement full-stack et, plus récemment, à la complexité des pipelines de données et des architectures d'apprentissage automatique.",
      },
      accordion3: {
        title: "Passion",
        content:
          "Je me situe à l'intersection du travail créatif frontend et de la logique backend analytique. J'aime concevoir des interfaces intuitives avec Next.js tout en architecturant simultanément des systèmes de données robustes utilisant Python, SQL et des bases de données vectorielles.",
      },
      accordion4: {
        title: "Ce qui me motive",
        content:
          "Au-delà du code, j'apprends constamment—que ce soit de nouvelles langues parlées ou des technologies comme le RAG (Génération Augmentée par Récupération). Je suis motivée par le défi d'ingénierie consistant à optimiser les performances, automatiser les flux de travail et créer des logiciels qui résolvent des problèmes réels.",
      },
    },
    skills: {
      title: "Compétences",
      languages: "Languages",
      others: "Autres",
      framework: "Frameworks",
      ides: "IDEs",
      cloud: "Cloud & DevOps",
      databases: "Bases de données",
      versionControl: "Contrôle de version",
    },
    projects: {
      title: "Projets",
      items: {
        project1: {
          title: "Assistant de Recherche ArXiv RAG",
          description:
            "Un pipeline IA automatisé qui extrait des articles de recherche et permet aux utilisateurs de 'discuter' avec eux. Utilise une architecture RAG (Génération Augmentée par Récupération) pour fournir des réponses précises et citées.",
          features: [
            "Pipeline ETL automatisé via GitHub Actions (Scraping hebdomadaire).",
            "Génération d'embeddings vectoriels avec 'sentence-transformers'.",
            "Recherche sémantique utilisant Supabase et pgvector.",
            "Intégration d'IA générative avec Google Gemini Pro LLM.",
            "Frontend Streamlit avec mise en cache ultra-rapide.",
            "Architecture auto-réparatrice gérant les données PDF non structurées.",
          ],
          technologies:
            "Python, Supabase (pgvector), Google Gemini API, GitHub Actions, Streamlit, Pandas",
          github: "https://github.com/Mercuryy200/arxiv-search-engine",
          url: "https://arxiv-search-app.streamlit.app",
        },
        project2: {
          title: "RCapsule - Gestionnaire de Garde-robe Intelligent",
          description:
            "Une application full-stack de gestion de garde-robe intégrant des recommandations IA. Elle combine une authentification sécurisée, des interactions en temps réel et une logique basée sur la météo pour organiser efficacement la garde-robe.",
          features: [
            "Recommandations de tenues IA via OpenAI API et OpenWeatherMap.",
            "Authentification sécurisée avec NextAuth.js.",
            "Opérations en temps réel via Supabase (PostgreSQL).",
            "Interface responsive avec stockage d'images.",
            "Suivi des prix et historique des achats.",
            "Performance optimisée avec middleware protégé.",
          ],
          technologies:
            "Next.js, TypeScript, PostgreSQL, Supabase, OpenAI API, NextAuth.js, Tailwind CSS",
          github: "https://github.com/Mercuryy200/ClosetOrganizer",
          url: "https://rcapsule.com",
        },
        project3: {
          title: "Jeu Panier de Fruits",
          description:
            "Un jeu Unity interactif où les joueurs attrapent des aliments qui tombent dans un pot tout en évitant les bombes. Construit avec C# et des assets Unity, il propose une difficulté progressive et des interactions basées sur la physique.",
          features: [
            "Système de génération dynamique avec aliments tombants et bombes.",
            "Difficulté progressive qui augmente avec le temps.",
            "Système de suivi des points et mises à jour UI en temps réel.",
            "Gestion complète de l'état du jeu (start, play, restart).",
            "Détection de collision via physique Rigidbody.",
            "Utilisation de Coroutines pour les événements asynchrones.",
            "Suite de tests complète (Unitaires, Mode Lecture).",
            "Interface soignée avec TextMesh Pro et VFX.",
          ],
          technologies:
            "Unity, C#, Unity Asset Store, TextMesh Pro, Physique Rigidbody, Coroutines, Unity Test Framework",
          github: "https://github.com/Mercuryy200/FruitBasket",
          url: null,
        },
        project4: {
          title: "Jeu du Pendu iOS",
          description:
            "Un jeu du pendu iOS proposant deux modes de jeu : deviner des titres de films (API OMDB) ou des mots aléatoires. Développé avec Swift et UIKit suivant l'architecture MVC.",
          features: [
            "Deux modes de jeu : Titres de films (API OMDB) et Mots du dictionnaire.",
            "Navigation par onglets fluide.",
            "Progression visuelle du pendu avec séquences.",
            "Clavier interactif avec suivi.",
            "Design adaptatif pour iPhone et iPad.",
            "Architecture MVC pour un code structuré.",
          ],
          technologies: "Swift 5, UIKit, URLSession, API OMDB, Auto Layout",
          github: "https://github.com/Mercuryy200/HangmanSwfitGame",
          url: null,
        },
      },
    },
    footer: {
      rights: "Tous droits réservés",
      badge: "Disponible pour stages : Mars – Août 2026",
    },
    experience: {
      title: "Expériences",
      viewMore: "Télécharger le CV",
      fileName: "NafouguiRima_FR.pdf",
      items: [
        {
          position: "Tutrice en développement logiciel",
          company: "Collège Ahuntsic / Travail Autonome",
          duration: "Mai 2025 - Présent",
          description:
            "Assister les étudiants collégiaux et universitaires dans les concepts de programmation en SQL, Java, Python, JavaScript, Kotlin, Swift et plus encore. \nFournir des conseils sur le débogage de code et la résolution de problèmes algorithmiques. \nCréer du matériel d'apprentissage supplémentaire pour améliorer la compréhension des étudiants.",
          reference: "Référence professionelle disponible",
        },
        {
          position: "Tuteur en mathématiques",
          company: "Collège Ahuntsic / Travail Autonome",
          duration: "Août 2024 - Présent",
          description:
            "Assister 5 étudiants collégiaux en mathématiques dans les cours destinés aux étudiants en informatique, incluant l'algèbre linéaire et les mathématiques discrètes. \nFournir des conseils sur la résolution de problèmes liés à l'informatique (par exemple, calculs de ray tracing). \nCréer du matériel d'apprentissage supplémentaire pour améliorer la compréhension des étudiants.",
          reference: "Référence professionelle disponible",
        },
      ],
    },
    contact: {
      title: "Contactez Moi",
      name: {
        errorMessage: "Veuillez entrer un nom valide ",
        label: "Nom Complet: ",
        placeholder: "Entez votre nom complet",
      },
      email: {
        errorMessage: "Veuillez entrer une adresse courriel valide",
        label: "Adresse courriel: ",
        placeholder: "Entrez votre addresse courriel",
      },
      message: {
        errorMessage: "Veuillez enter un message",
        label: "Message: ",
        placeholder: "Votre message...",
      },
      submit: "Soumettre",
      reset: "Refaire",
    },
    roadmap: {
      title: "Parcours Technique",
      milestones: [
        {
          status: "completed",
          date: "MAI 2026",
          title: "Technique Informatique (DEC)",
          institution: "Collège Ahuntsic",
          description:
            "Finissant d'une formation intensive en développement web full-stack, applications mobiles et analyse de systèmes. Bases solides en POO, algorithmes et gestion de bases de données.",
        },
        {
          status: "active",
          date: "MARS – AOÛT 2026",
          title: "Recherche de Stage",
          institution: "Génie Logiciel / Données",
          description:
            "Disponibilité immédiate pour un stage de 6 mois. Désireuse de contribuer à des équipes dynamiques utilisant Next.js, Python ou le Cloud pour bâtir des solutions évolutives.",
        },
        {
          status: "future",
          date: "AUTOMNE 2026",
          title: "Baccalauréat en Génie Logiciel",
          institution: "Université Concordia",
          description:
            "Future étudiante en génie. Prête à approfondir les connaissances théoriques en architecture logicielle et conception de systèmes à grande échelle tout en continuant les projets pratiques.",
        },
      ],
    },
  },
};

export type Language = "en" | "fr";
export type TranslationKey = keyof typeof translations.en;
export type Translation = typeof translations.en;
export type Project = {
  title: string;
  description: string;
  features: string[];
  technologies: string;
  github: string;
};
