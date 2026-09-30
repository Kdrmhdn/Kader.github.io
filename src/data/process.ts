export type ProcessStep = {
  n: string;
  title: { fr: string; en: string };
  body: { fr: string; en: string };
};

export const processSteps: ProcessStep[] = [
  {
    n: '01',
    title: { fr: 'Comprendre', en: 'Understand' },
    body: {
      fr: "Le vrai problème avant le modèle — quelles données, quelles contraintes, qui utilise le résultat.",
      en: 'The real problem before the model — what data, what constraints, who uses the output.',
    },
  },
  {
    n: '02',
    title: { fr: 'Prototyper', en: 'Prototype' },
    body: {
      fr: "Un pipeline minimal, bout en bout, avant d'optimiser quoi que ce soit.",
      en: 'A minimal, end-to-end pipeline before optimizing anything.',
    },
  },
  {
    n: '03',
    title: { fr: 'Construire', en: 'Build' },
    body: {
      fr: "Architecture propre, tests, containerisation — la partie qui ne se voit pas mais qui tient en prod.",
      en: 'Clean architecture, tests, containerization — the part nobody sees but that holds in production.',
    },
  },
  {
    n: '04',
    title: { fr: 'Mesurer', en: 'Measure' },
    body: {
      fr: "Un résultat chiffré ou ça ne compte pas — sinon je ne sais pas si j'ai amélioré quelque chose.",
      en: "A measured result or it doesn't count — otherwise I can't tell if I improved anything.",
    },
  },
];
