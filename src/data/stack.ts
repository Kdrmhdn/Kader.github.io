// Deliberately not a logo grid or "Python 90%" progress bar. Each entry is
// a tool bench entry: what it's for, and the one real reason it earns its
// place — editable without touching the Stack component.

export type StackEntry = {
  name: string;
  category: { fr: string; en: string };
  note: { fr: string; en: string };
};

export const stack: StackEntry[] = [
  {
    name: 'Python',
    category: { fr: 'Langage principal', en: 'Primary language' },
    note: {
      fr: "Pour tout ce qui touche aux pipelines de données et aux modèles — l'écosystème IA y vit encore majoritairement.",
      en: "For everything data-pipeline and model related — the AI ecosystem still mostly lives here.",
    },
  },
  {
    name: 'TypeScript',
    category: { fr: 'Langage produit', en: 'Product language' },
    note: {
      fr: "Dès qu'un pipeline doit devenir une interface que quelqu'un utilise réellement, je passe ici — le typage évite les surprises en prod.",
      en: 'Once a pipeline has to become an interface someone actually uses, I switch here — typing kills production surprises.',
    },
  },
  {
    name: 'React / Next.js',
    category: { fr: 'Frontend', en: 'Frontend' },
    note: {
      fr: "React pour les interfaces produit, Next.js dès que le rendu serveur ou le SEO comptent — c'est ce qui fait tenir les sites que je livre.",
      en: 'React for product interfaces, Next.js once server rendering or SEO matter — what makes the sites I ship actually hold up.',
    },
  },
  {
    name: 'Nest.js',
    category: { fr: 'Backend', en: 'Backend' },
    note: {
      fr: "Quand l'équipe est déjà côté TypeScript — une API structurée, testable, qui ne diverge pas du frontend.",
      en: "When the team is already in TypeScript — a structured, testable API that doesn't drift from the frontend.",
    },
  },
  {
    name: 'LangChain / LangGraph',
    category: { fr: 'Orchestration IA', en: 'AI orchestration' },
    note: {
      fr: "Pas pour la magie, mais pour structurer explicitement le flux entre récupération, raisonnement et outils — je préfère comprendre chaque étape.",
      en: 'Not for the magic, but to make the flow between retrieval, reasoning and tools explicit — I want every step legible.',
    },
  },
  {
    name: 'pgvector',
    category: { fr: 'Recherche vectorielle', en: 'Vector search' },
    note: {
      fr: "Rester sur Postgres plutôt qu'ajouter une base vectorielle dédiée tant que le volume ne l'exige pas vraiment.",
      en: "Staying on Postgres instead of bolting on a dedicated vector store until volume actually demands it.",
    },
  },
  {
    name: 'FastAPI',
    category: { fr: 'Backend', en: 'Backend' },
    note: {
      fr: "Quand le service sert directement un pipeline Python — pas de couche de traduction entre le modèle et l'API.",
      en: 'When the service fronts a Python pipeline directly — no translation layer between the model and the API.',
    },
  },
  {
    name: 'Docker',
    category: { fr: 'Environnement', en: 'Environment' },
    note: {
      fr: "Un pipeline qui marche sur ma machine et pas ailleurs n'est pas fini — je containerise avant de considérer une tâche livrée.",
      en: "A pipeline that works on my machine and nowhere else isn't finished — I containerize before calling a task shipped.",
    },
  },
  {
    name: 'Burp Suite / Kali',
    category: { fr: 'Sécurité applicative', en: 'Application security' },
    note: {
      fr: "Pratiquer l'attaque (CTF, tests d'intrusion basiques) m'a appris à exposer mes propres API IA avec plus de méfiance.",
      en: 'Practicing offense (CTFs, basic pentesting) taught me to expose my own AI APIs with a lot more suspicion.',
    },
  },
  {
    name: 'Git',
    category: { fr: 'Méthode', en: 'Method' },
    note: {
      fr: "Des commits qui racontent une décision, pas juste un diff — utile quand on revient sur un pipeline trois mois plus tard.",
      en: 'Commits that narrate a decision, not just a diff — useful when you revisit a pipeline three months later.',
    },
  },
];
