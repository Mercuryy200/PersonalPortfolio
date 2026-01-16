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
        "Welcome! I build seamless digital experiences specializing in web and mobile development. Explore my projects to see how I combine technical logic with creative design.",
      ctaProjects: "View Projects",
      ctaResume: "Download Resume",
      scroll: "Scroll",
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
          title: "Personal Portfolio",
          description:
            "My personal portfolio, built with Next.js and Tailwind CSS, showcases my web development skills. It features my projects, skills, and experiences, offering a modern and responsive user interface. Explore it to learn more about my journey as a developer.",
          features: [
            "Built with Next.js for optimal performance.",
            "Responsive design using Tailwind CSS.",
            "Showcases projects and skills.",
            "Framer Motion integration for smooth animations.",
            "Vector icons with FontAwesome.",
            "Easy deployment via Vercel.",
          ],
          technologies:
            "Next.js, Tailwind CSS, Framer Motion, FontAwesome, Vercel, Nodemailer",
          github: "https://github.com/Mercuryy200/PersonalPortfolio",
          url: "https://rimanafougui.vercel.app",
        },
        project2: {
          title: "Smart Closet Manager",
          description:
            "A full-stack wardrobe management application built with Next.js and Supabase. It allows users to digitally organize their clothing items, track purchases, and plan outfits. Features secure authentication, image storage, and a responsive interface for managing your entire wardrobe in one place.",
          features: [
            "Secure user authentication with NextAuth.js (GitHub & Credentials).",
            "Full CRUD operations for clothing items with real-time updates.",
            "Multi-select categorization (colors, occasions, seasons).",
            "Image URL support for visual wardrobe representation.",
            "Price tracking and purchase history.",
            "Responsive card-based layout with Hero UI components.",
            "PostgreSQL database with Supabase",
            "Protected routes with middleware authentication with NextAuth.js.",
          ],
          technologies:
            "Next.js 15, TypeScript, Prisma ORM, PostgreSQL, NextAuth.js, Hero UI, Tailwind CSS, bcrypt",
          github: "https://github.com/Mercuryy200/ClosetOrganizer",
          url: "https://closet-organizer-rima-nafougui.vercel.app",
        },
        project3: {
          title: "Fruit Basket Game",
          description:
            "An interactive Unity game where players catch falling food items in a pot while avoiding bombs. Built with C# and Unity Asset Store assets, the game features progressive difficulty scaling, smooth animations, and polished UI/UX. Implements comprehensive testing practices including unit tests, play mode tests, and configuration tests to ensure code quality and reliability.",
          features: [
            "Dynamic spawning system with falling food items and bombs.",
            "Progressive difficulty that increases as the timer counts down.",
            "Score tracking system with real-time UI updates.",
            "Game state management with start, play, and restart functionality.",
            "Collision detection using Rigidbody physics.",
            "Coroutines for timed events and asynchronous operations.",
            "Comprehensive testing suite (Unit Tests, Play Mode Tests, Configuration Tests).",
            "Polished UI with TextMesh Pro, sound effects, and VFX.",
            "Custom gravity manipulation for realistic falling mechanics.",
            "Prefab-based architecture for efficient object instantiation.",
          ],
          technologies:
            "Unity, C#, Unity Asset Store, TextMesh Pro, Rigidbody Physics, Coroutines, Unity Test Framework",
          github: "https://github.com/Mercuryy200/FruitBasket",
          url: null,
        },
        project4: {
          title: "Hangman Game iOS",
          description:
            "An iOS Hangman game featuring two game modes: guess movie titles fetched from the OMDB API or random dictionary words. Built with Swift and UIKit, the app follows the MVC architecture pattern and includes tab-based navigation for seamless switching between game modes with a responsive design supporting both iPhone and iPad devices.",
          features: [
            "Two game modes: Movie titles (OMDB API) and Dictionary words (Random Word API).",
            "Tab-based navigation for easy mode switching.",
            "Visual hangman progression with 7-stage drawing sequence.",
            "Interactive letter keyboard with used letters tracking.",
            "Automatic win/loss detection.",
            "Restart game functionality for continuous play.",
            "Responsive design with Auto Layout constraints for iPhone and iPad.",
            "Landscape mode support on iPhone 14 Pro Max.",
            "MVC architecture pattern for clean code organization.",
          ],
          technologies:
            "Swift 5, UIKit, URLSession, Storyboard, Tab Bar Controller, OMDB API, Random Word API, Auto Layout",
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
      viewMore: "Downlaod Resume",
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
          title: "Diploma in IT Programs",
          institution: "Collège Ahuntsic",
          description:
            "Culmination of intensive training in full-stack web development, mobile applications (Swift/Kotlin), and systems analysis. Built strong foundations in programming logic and database management.",
        },
        {
          status: "active",
          date: "MARCH – AUGUST 2026",
          title: "Seeking Internship",
          institution: "Web / Mobile / Tools Programming",
          description:
            "Available for a 6-month internship to apply skills in a professional setting. Eager to contribute to dynamic teams, particularly in roles involving React, Unity, or iOS development.",
        },
        {
          status: "future",
          date: "FALL 2026",
          title: "BEng in Software Engineering",
          institution: "Concordia University",
          description:
            "Beginning advanced studies to deepen theoretical knowledge in software architecture, algorithms, and large-scale system design, building upon the practical skills gained at Ahuntsic.",
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
        "Bienvenue! Je crée des expériences numériques fluides spécialisées dans le développement web et mobile. Explorez mes projets pour voir comment je combine logique technique et design créatif.",
      ctaProjects: "Voir mes projets",
      ctaResume: "Télécharger le CV",
      scroll: "Défiler",
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
          title: "Portfolio Personnel",
          description:
            "Mon portfolio personnel, construit avec Next.js et Tailwind CSS, met en avant mes compétences en développement web. Il présente mes projets, compétences et expériences, offrant une interface utilisateur moderne et réactive. Explorez-le pour découvrir mon parcours en tant que développeur.",
          features: [
            "Développement avec Next.js pour des performances optimales.",
            "Design réactif utilisant Tailwind CSS.",
            "Présentation de projets et compétences.",
            "Intégration de Framer Motion pour des animations fluides.",
            "Icônes vectorielles avec FontAwesome.",
            "Déploiement facile via Vercel.",
          ],
          technologies:
            "Next.js, Tailwind CSS, Framer Motion, FontAwesome, Vercel, Nodemailer",
          github: "https://github.com/Mercuryy200/PersonalPortfolio",
          url: "https://rimanafougui.vercel.app",
        },
        project2: {
          title: "Gestionnaire de Garde-robe Intelligent",
          description:
            "Une application full-stack de gestion de garde-robe construite avec Next.js et Prisma. Elle permet aux utilisateurs d'organiser numériquement leurs vêtements, de suivre leurs achats et de planifier leurs tenues. Comprend une authentification sécurisée, le stockage d'images et une interface responsive pour gérer toute votre garde-robe en un seul endroit.",
          features: [
            "Authentification sécurisée avec NextAuth.js (GitHub et identifiants).",
            "Opérations CRUD complètes pour les vêtements avec mises à jour en temps réel.",
            "Catégorisation à sélection multiple (couleurs, occasions, saisons).",
            "Support d'URL d'images pour une représentation visuelle de la garde-robe.",
            "Suivi des prix et historique des achats.",
            "Interface responsive basée sur des cartes avec les composants Hero UI.",
            "Base de données PostgreSQL avec Prisma ORM pour la persistance des données.",
            "Routes protégées avec middleware d'authentification.",
          ],
          technologies:
            "Next.js 15, TypeScript, Prisma ORM, PostgreSQL, NextAuth.js, Hero UI, Tailwind CSS, bcrypt",
          github: "https://github.com/Mercuryy200/ClosetOrganizer",
          url: "https://closet-organizer-rima-nafougui.vercel.app",
        },
        project3: {
          title: "Jeu Panier de Fruits",
          description:
            "Un jeu Unity interactif où les joueurs attrapent des aliments qui tombent dans un pot tout en évitant les bombes. Construit avec C# et des assets du Unity Asset Store, le jeu propose une difficulté progressive, des animations fluides et une interface utilisateur soignée. Implémente des pratiques de tests complètes incluant des tests unitaires, des tests en mode lecture et des tests de configuration pour assurer la qualité et la fiabilité du code.",
          features: [
            "Système de génération dynamique avec aliments tombants et bombes.",
            "Difficulté progressive qui augmente à mesure que le minuteur diminue.",
            "Système de suivi des points avec mises à jour UI en temps réel.",
            "Gestion de l'état du jeu avec fonctionnalités de démarrage et redémarrage.",
            "Détection de collision utilisant la physique Rigidbody.",
            "Coroutines pour les événements temporisés et opérations asynchrones.",
            "Suite de tests complète (Tests Unitaires, Tests en Mode Lecture, Tests de Configuration).",
            "Interface utilisateur soignée avec TextMesh Pro, effets sonores et VFX.",
            "Manipulation personnalisée de la gravité pour des mécaniques de chute réalistes.",
            "Architecture basée sur des prefabs pour une instantiation d'objets efficace.",
          ],
          technologies:
            "Unity, C#, Unity Asset Store, TextMesh Pro, Physique Rigidbody, Coroutines, Unity Test Framework",
          github: "https://github.com/Mercuryy200/FruitBasket",
          url: null,
        },
        project4: {
          title: "Jeu du Pendu iOS",
          description:
            "Un jeu du pendu iOS proposant deux modes de jeu : deviner des titres de films récupérés via l'API OMDB ou des mots aléatoires du dictionnaire. Développé avec Swift et UIKit, l'application suit le modèle d'architecture MVC et intègre une navigation par onglets pour basculer facilement entre les modes de jeu, avec un design adaptatif compatible iPhone et iPad.",
          features: [
            "Deux modes de jeu : Titres de films (API OMDB) et Mots du dictionnaire (Random Word API).",
            "Navigation par onglets pour changer facilement de mode.",
            "Progression visuelle du pendu avec séquence de dessin en 7 étapes.",
            "Clavier de lettres interactif avec suivi des lettres utilisées.",
            "Détection automatique de victoire/défaite.",
            "Fonctionnalité de redémarrage pour jouer en continu.",
            "Design adaptatif avec contraintes Auto Layout pour iPhone et iPad.",
            "Support du mode paysage sur iPhone 14 Pro Max.",
            "Architecture MVC pour une organisation de code claire.",
          ],
          technologies:
            "Swift 5, UIKit, URLSession, Storyboard, Tab Bar Controller, API OMDB, Random Word API, Auto Layout",
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
          title: "Diplôme d'études collégiales (DEC)",
          institution: "Collège Ahuntsic",
          description:
            "Achèvement d'une formation technique intensive spécialisée en programmation web full-stack, applications mobiles (Swift/Kotlin) et analyse de systèmes. Consolidation des bases en logique algorithmique et gestion de bases de données.",
        },
        {
          status: "active",
          date: "MARS – AOÛT 2026",
          title: "Recherche de Stage",
          institution: "Dév. Web / Mobile / Outils",
          description:
            "Disponibilité immédiate pour un stage de 4 à 6 mois. Objectif : appliquer mes compétences en React, Unity et Swift au sein d'une équipe de développement dynamique tout en contribuant à des projets d'envergure.",
        },
        {
          status: "future",
          date: "AUTOMNE 2026",
          title: "Baccalauréat en Génie Logiciel",
          institution: "Université Concordia",
          description:
            "Début des études supérieures pour approfondir les connaissances théoriques en architecture logicielle, algorithmes complexes et conception de systèmes à grande échelle, en s'appuyant sur les compétences pratiques acquises à Ahuntsic.",
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
