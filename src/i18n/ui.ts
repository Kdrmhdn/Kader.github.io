export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    'meta.title': 'Kader — AI Engineer',
    'meta.description':
      "Portfolio de Kader, AI Engineer basé à Alger — pipelines IA, RAG et systèmes multi-agents, façonnés comme des pièces d'atelier.",

    'nav.about': 'Atelier',
    'nav.work': 'Ouvrages',
    'nav.security': 'Sécurité',
    'nav.stack': 'Établi',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.backHome': "Retour à l'atelier",

    'hero.kicker': 'AI Engineer — Alger, Algérie',
    'hero.title.line1': 'Je fabrique',
    'hero.title.line2': 'des systèmes',
    'hero.title.line3': 'qui pensent.',
    'hero.subtitle':
      "Ingénieur IA d'un an d'expérience, je conçois des pipelines de récupération, des agents et des interfaces — pièce par pièce, comme on monte un ouvrage à l'établi.",
    'hero.cta': 'Ouvrir le tiroir',
    'hero.scroll': 'Défiler',

    'about.kicker': "L'atelier",
    'about.title': 'Construire, comprendre, recommencer.',
    'about.p1':
      "Je m'appelle Kader, j'ai 22 ans et je vis à Alger. Depuis un peu plus d'un an, je conçois des produits IA en startup — d'un prototype de pipeline à une interface que de vraies personnes utilisent. En parallèle, je conçois et fabrique des sites web haut de gamme — ce site en est un exemple.",
    'about.p2':
      "Ce que j'aime, ce n'est pas l'IA comme mot-clé : c'est la mécanique — comment un système de récupération choisit ses documents, comment plusieurs agents se répartissent une tâche, comment une bonne architecture rend un produit fiable plutôt que juste impressionnant en démo.",
    'about.p3':
      "En dehors du code, je m'intéresse à la sécurité des systèmes que je construis — parce qu'un pipeline IA mal exposé est une surface d'attaque comme une autre.",
    'about.label.based': 'Basé à',
    'about.value.based': 'Alger, Algérie',
    'about.label.role': 'Rôle actuel',
    'about.value.role': 'AI Engineer @ AI Univers',
    'about.label.focus': 'Terrain de jeu',
    'about.value.focus': 'RAG · Agents multi-rôles · Sites web haut de gamme',
    'about.stat1.value': '+1 an',
    'about.stat1.label': "d'expérience produit IA",
    'about.stat2.value': '3',
    'about.stat2.label': 'pièces en vitrine',
    'about.stat3.value': 'FR · EN · AR',
    'about.stat3.label': 'langues de travail',

    'timeline.kicker': 'Parcours',
    'timeline.title': 'Le registre.',
    'timeline.intro': "Ce qui m'a amené ici, dans l'ordre — pas un CV en prose.",

    'work.kicker': 'Ouvrages',
    'work.title': 'Trois pièces, tirées du tiroir.',
    'work.intro':
      "Chaque projet est une fiche — glissez pour parcourir, retournez-la pour lire l'étude de cas.",
    'work.card.open': "Voir l'étude de cas",
    'work.card.close': 'Retourner la fiche',
    'work.card.dossier': 'Lire le dossier complet',
    'work.field.problem': 'Problème',
    'work.field.contribution': 'Ma contribution',
    'work.field.stack': 'Stack',
    'work.field.result': 'Résultat',
    'work.field.highlights': 'Points clés',
    'work.field.domain': 'Domaine',
    'work.prev': 'Fiche précédente',
    'work.next': 'Fiche suivante',
    'work.badge.client': 'Projet client — détails sous NDA',
    'work.badge.personal': 'Projet personnel',

    'security.kicker': 'Côté sécurité',
    'security.title': "Un œil sur l'autre côté du système.",
    'security.intro':
      "L'IA reste mon terrain principal, mais je garde une curiosité pour la sécurité applicative — quelques CTF à l'occasion, surtout pour mieux comprendre ce que j'expose quand je construis un pipeline.",

    'stack.kicker': "L'établi",
    'stack.title': 'Comment je travaille.',
    'stack.intro':
      "Pas une grille de logos. Les outils que j'utilise vraiment, et pourquoi.",
    'stack.process.title': "De l'idée à la pièce finie",

    'now.kicker': 'En veille',
    'now.title': "Ce que j'explore en ce moment.",
    'now.intro': 'Mis à jour régulièrement — pas une liste figée.',

    'contact.kicker': 'Contact',
    'contact.title': 'Un projet, une question, une fiche à ajouter ?',
    'contact.subtitle': "Le tiroir est ouvert — écrivez-moi.",
    'contact.cta.email': "Écrire un e-mail",
    'contact.cta.linkedin': 'LinkedIn',
    'contact.cta.github': 'GitHub',
    'contact.cta.cv': 'Télécharger le CV',
    'contact.availability': 'Basé à Alger · disponible en remote · FR / EN / AR',

    'footer.rights': 'Conçu et construit par Kader.',
    'footer.back': 'Haut de page',

    'project.back': "Retour aux ouvrages",
    'project.next': 'Pièce suivante',
    'project.links.demo': 'Voir la démo',
    'project.links.repo': 'Code source',
  },
  en: {
    'meta.title': 'Kader — AI Engineer',
    'meta.description':
      'Portfolio of Kader, an AI Engineer based in Algiers — RAG pipelines and multi-agent systems, built like workshop pieces.',

    'nav.about': 'Workshop',
    'nav.work': 'Pieces',
    'nav.security': 'Security',
    'nav.stack': 'Bench',
    'nav.contact': 'Contact',
    'nav.cv': 'Résumé',
    'nav.backHome': 'Back to the workshop',

    'hero.kicker': 'AI Engineer — Algiers, Algeria',
    'hero.title.line1': 'I build',
    'hero.title.line2': 'systems that',
    'hero.title.line3': 'think.',
    'hero.subtitle':
      "A year into AI engineering, I design retrieval pipelines, agents, and interfaces — piece by piece, the way you build something at a workbench.",
    'hero.cta': 'Open the drawer',
    'hero.scroll': 'Scroll',

    'about.kicker': 'The workshop',
    'about.title': 'Build, understand, redo.',
    'about.p1':
      "I'm Kader, 22, based in Algiers. For a bit over a year I've been building AI products at a startup — from pipeline prototypes to interfaces real people use. Alongside that, I design and build high-end websites — this one included.",
    'about.p2':
      "What I care about isn't AI as a buzzword — it's the mechanics: how a retrieval system chooses its documents, how several agents split a task, how good architecture makes a product reliable instead of just impressive in a demo.",
    'about.p3':
      "Outside of that, I care about the security of the systems I build — a badly exposed AI pipeline is an attack surface like any other.",
    'about.label.based': 'Based in',
    'about.value.based': 'Algiers, Algeria',
    'about.label.role': 'Current role',
    'about.value.role': 'AI Engineer @ AI Univers',
    'about.label.focus': 'Playground',
    'about.value.focus': 'RAG · Multi-agent systems · High-end web builds',
    'about.stat1.value': '+1 yr',
    'about.stat1.label': 'of AI product experience',
    'about.stat2.value': '3',
    'about.stat2.label': 'pieces on display',
    'about.stat3.value': 'FR · EN · AR',
    'about.stat3.label': 'working languages',

    'timeline.kicker': 'Path',
    'timeline.title': 'The ledger.',
    'timeline.intro': "What got me here, in order — not a CV in prose.",

    'work.kicker': 'Pieces',
    'work.title': 'Three cards, pulled from the drawer.',
    'work.intro':
      'Each project is a card — drag to browse, flip to read the case study.',
    'work.card.open': 'Read the case study',
    'work.card.close': 'Flip back',
    'work.card.dossier': 'Read the full dossier',
    'work.field.problem': 'Problem',
    'work.field.contribution': 'My contribution',
    'work.field.stack': 'Stack',
    'work.field.result': 'Result',
    'work.field.highlights': 'Key points',
    'work.field.domain': 'Domain',
    'work.prev': 'Previous card',
    'work.next': 'Next card',
    'work.badge.client': 'Client project — details under NDA',
    'work.badge.personal': 'Personal project',

    'security.kicker': 'On security',
    'security.title': 'A passing eye on the other side of the system.',
    'security.intro':
      "AI is still my main lane, but I keep a casual interest in application security — the occasional CTF, mostly to better understand what I'm exposing when I ship a pipeline.",

    'stack.kicker': 'The bench',
    'stack.title': 'How I work.',
    'stack.intro': "Not a logo grid. The tools I actually use, and why.",
    'stack.process.title': 'From idea to finished piece',

    'now.kicker': 'Currently',
    'now.title': "What I'm exploring right now.",
    'now.intro': 'Updated regularly — not a frozen list.',

    'contact.kicker': 'Contact',
    'contact.title': 'A project, a question, a card to add?',
    'contact.subtitle': 'The drawer is open — write to me.',
    'contact.cta.email': 'Send an email',
    'contact.cta.linkedin': 'LinkedIn',
    'contact.cta.github': 'GitHub',
    'contact.cta.cv': 'Download résumé',
    'contact.availability': 'Based in Algiers · available remote · FR / EN / AR',

    'footer.rights': 'Designed and built by Kader.',
    'footer.back': 'Back to top',

    'project.back': 'Back to pieces',
    'project.next': 'Next piece',
    'project.links.demo': 'View demo',
    'project.links.repo': 'Source code',
  },
} as const;
