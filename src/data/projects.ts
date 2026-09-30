// TODO(Kader): replace placeholder copy, metrics and links with the real
// details for each project. Every field is bilingual (fr/en) — keep both
// in sync. `seal` drives the abstract card mark (personal projects) /
// `diagram` drives the abstract architecture diagram (client projects) —
// both are 1..4, no image asset needed.
//
// `visibility`:
//  - 'client'   → confidential work. NO client name, no real screenshot,
//                 no absolute/identifying numbers in `result` — keep it
//                 relative ("significant reduction", not "-42%"). Card and
//                 detail page show an "NDA" badge and no demo/repo links.
//  - 'personal' → public project. Fill `links.repo` / `links.demo`, real
//                 metrics are fine.
//
// `highlights` are 3 short bullets shown on the card back AND the full
// project page — concrete decisions, not marketing fluff.

export type Project = {
  slug: string;
  year: string;
  visibility: 'client' | 'personal';
  seal: number; // 1..4 — abstract card mark for personal projects
  diagram: number; // 1..3 — abstract architecture diagram for client projects
  domain: { fr: string; en: string }; // sector, not the client's name
  tag: { fr: string; en: string };
  title: { fr: string; en: string };
  oneLiner: { fr: string; en: string };
  problem: { fr: string; en: string };
  contribution: { fr: string; en: string };
  highlights: { fr: string; en: string }[];
  stack: string[];
  result: { fr: string; en: string };
  links: { demo?: string; repo?: string };
};

export const projects: Project[] = [
  {
    slug: 'assistant-juridique-ia',
    year: '2025',
    visibility: 'client',
    seal: 1,
    diagram: 1,
    domain: { fr: 'LegalTech', en: 'LegalTech' },
    tag: { fr: 'SaaS juridique · RAG', en: 'Legal SaaS · RAG' },
    title: { fr: 'Assistant juridique IA', en: 'AI legal assistant' },
    oneLiner: {
      fr: "Un assistant juridique IA pour le droit algérien, construit sur un pipeline de récupération sur-mesure.",
      en: 'An AI legal assistant for Algerian law, built on a custom retrieval pipeline.',
    },
    problem: {
      fr: "Le corpus juridique algérien est fragmenté, peu numérisé et rarement structuré pour la recherche — les praticiens perdent un temps disproportionné à retrouver le bon texte plutôt qu'à l'interpréter.",
      en: 'Algerian legal texts are fragmented, poorly digitized and rarely structured for search — practitioners lose disproportionate time finding the right text instead of interpreting it.',
    },
    contribution: {
      fr: "Conception du pipeline de récupération (ingestion, chunking sensible à la structure juridique, embeddings, re-ranking) et de l'orchestration du LLM pour des réponses citées et vérifiables.",
      en: 'Designed the retrieval pipeline (ingestion, structure-aware chunking, embeddings, re-ranking) and the LLM orchestration for cited, verifiable answers.',
    },
    highlights: [
      {
        fr: 'Chunking sensible à la structure juridique (articles, alinéas) plutôt que découpage par taille fixe.',
        en: 'Structure-aware chunking (articles, clauses) instead of fixed-size splitting.',
      },
      {
        fr: 'Re-ranking dédié pour privilégier la précision de citation sur le rappel brut.',
        en: 'Dedicated re-ranking that favors citation accuracy over raw recall.',
      },
      {
        fr: 'Chaque réponse est reliée au texte source exact — pas de citation inventée.',
        en: 'Every answer links back to the exact source text — no invented citations.',
      },
    ],
    stack: ['Python', 'LangChain', 'pgvector', 'FastAPI', 'Next.js'],
    result: {
      fr: 'Réduction significative du temps de recherche juridique et forte amélioration de la précision de citation — chiffres exacts sous NDA.',
      en: 'Significant reduction in legal research time and a strong improvement in citation accuracy — exact figures under NDA.',
    },
    links: {},
  },
  {
    slug: 'agent-analyse-marketing',
    year: '2025',
    visibility: 'client',
    seal: 2,
    diagram: 2,
    domain: { fr: 'MarTech', en: 'MarTech' },
    tag: { fr: 'Système multi-agents · Marketing', en: 'Multi-agent system · Marketing' },
    title: { fr: "Agent d'analyse marketing", en: 'Marketing analytics agent' },
    oneLiner: {
      fr: "Un agent spécialisé dans l'analyse de performance, intégré à un système multi-agents marketing.",
      en: 'A performance-analysis specialist agent inside a multi-agent marketing system.',
    },
    problem: {
      fr: "Les équipes marketing croulent sous des tableaux de bord qu'elles n'ont pas le temps d'interroger — les décisions se prennent souvent sur intuition plutôt que sur signal.",
      en: "Marketing teams drown in dashboards they don't have time to query — decisions often ride on intuition rather than signal.",
    },
    contribution: {
      fr: "Développement de l'agent Analytics : interprétation de requêtes en langage naturel, orchestration d'appels aux sources de données, et coordination avec les autres agents du système (contenu, ciblage).",
      en: 'Built the Analytics agent: natural-language query interpretation, data-source call orchestration, and coordination with the system’s other agents (content, targeting).',
    },
    highlights: [
      {
        fr: "Interprétation de requêtes en langage naturel vers des appels structurés aux sources de données.",
        en: 'Natural-language query interpretation mapped to structured data-source calls.',
      },
      {
        fr: "Protocole de coordination explicite avec les agents contenu et ciblage — pas de chaîne de prompts opaque.",
        en: 'Explicit coordination protocol with the content and targeting agents — no opaque prompt chain.',
      },
      {
        fr: 'Mise en cache des requêtes fréquentes pour limiter le coût et la latence.',
        en: 'Caching of frequent queries to control cost and latency.',
      },
    ],
    stack: ['Python', 'LangGraph', 'OpenAI API', 'Redis', 'Docker'],
    result: {
      fr: "Temps de réponse aux requêtes analytiques nettement réduit et charge de reporting manuel allégée pour l'équipe — chiffres exacts sous NDA.",
      en: "Analytics query turnaround cut noticeably and manual reporting load reduced for the team — exact figures under NDA.",
    },
    links: {},
  },
  {
    slug: 'generateur-presentations-ia',
    year: '2024',
    visibility: 'client',
    seal: 3,
    diagram: 3,
    domain: { fr: 'Productivité', en: 'Productivity' },
    tag: { fr: 'Génération IA · Présentations', en: 'AI generation · Presentations' },
    title: { fr: 'Générateur de présentations IA', en: 'AI presentation generator' },
    oneLiner: {
      fr: "Une plateforme qui génère des présentations structurées et éditables à partir d'un simple brief.",
      en: 'A platform that generates structured, editable presentations from a simple brief.',
    },
    problem: {
      fr: "Construire une présentation correcte prend des heures — la plupart des générateurs IA existants produisent des slides jolies mais incohérentes sur le fond.",
      en: "Building a decent presentation takes hours — most existing AI generators produce slides that look nice but fall apart on substance.",
    },
    contribution: {
      fr: "Conception du moteur de génération (structuration du contenu avant mise en forme) et de l'éditeur permettant de corriger chaque section sans tout régénérer.",
      en: 'Designed the generation engine (content structuring before layout) and the editor that lets you fix one section without regenerating everything.',
    },
    highlights: [
      {
        fr: 'Génération en deux passes : structure du contenu d\'abord, mise en forme ensuite — jamais mélangées.',
        en: 'Two-pass generation: content structure first, layout second — never mixed.',
      },
      {
        fr: 'Édition granulaire par section, sans régénérer le reste du deck.',
        en: 'Granular per-section editing, without regenerating the rest of the deck.',
      },
      {
        fr: "Export propre vers des formats éditables plutôt qu'une image figée.",
        en: 'Clean export to editable formats rather than a frozen image.',
      },
    ],
    stack: ['TypeScript', 'Next.js', 'OpenAI API', 'Nest.js'],
    result: {
      fr: 'Temps moyen de création de présentation fortement réduit et bon taux de complétion utilisateur — chiffres exacts sous NDA.',
      en: 'Average presentation creation time strongly reduced with a good user completion rate — exact figures under NDA.',
    },
    links: {},
  },

  // TODO(Kader): add your public personal projects here (CTF toolkit, side
  // project, open-source contribution…) using this shape — uncomment and
  // fill in. Unlike client entries, `result` can carry real numbers and
  // `links.repo` / `links.demo` should point to the real GitHub repo / demo.
  //
  // {
  //   slug: 'my-project-slug',
  //   year: '2025',
  //   visibility: 'personal',
  //   seal: 4, // 1..4
  //   diagram: 1, // unused for personal projects, any value works
  //   domain: { fr: '...', en: '...' },
  //   tag: { fr: '...', en: '...' },
  //   title: { fr: '...', en: '...' },
  //   oneLiner: { fr: '...', en: '...' },
  //   problem: { fr: '...', en: '...' },
  //   contribution: { fr: '...', en: '...' },
  //   highlights: [{ fr: '...', en: '...' }, { fr: '...', en: '...' }, { fr: '...', en: '...' }],
  //   stack: ['...'],
  //   result: { fr: '...', en: '...' },
  //   links: { repo: 'https://github.com/...', demo: 'https://...' },
  // },
];
