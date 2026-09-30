// TODO(Kader): dates for the license and internship are estimated
// (3-year bachelor ending ~2024, internship same year) — correct them if
// off. Keep entries in reverse-chronological order (most recent first).

export type TimelineEntry = {
  date: { fr: string; en: string };
  title: { fr: string; en: string };
  body: { fr: string; en: string };
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: { fr: '2025 — aujourd’hui', en: '2025 — today' },
    current: true,
    title: { fr: 'AI Engineer @ AI Univers', en: 'AI Engineer @ AI Univers' },
    body: {
      fr: "Le stage débouche sur une offre — poste à temps plein, conception de pipelines RAG, de systèmes multi-agents et des interfaces qui vont avec, pour des clients réels.",
      en: 'The internship turns into an offer — full-time role designing RAG pipelines, multi-agent systems and the interfaces around them, for real clients.',
    },
  },
  {
    date: { fr: '2024', en: '2024' },
    title: { fr: 'Stage @ AI Univers', en: 'Internship @ AI Univers' },
    body: {
      fr: "Premier pied dans le monde de l'IA appliquée — assez concluant pour qu'on me propose de rester.",
      en: 'First real foothold in applied AI — solid enough that they asked me to stay on.',
    },
  },
  {
    date: { fr: '2021 — 2024', en: '2021 — 2024' },
    title: { fr: 'Licence @ Numidia Institute of Technology', en: "Bachelor's @ Numidia Institute of Technology" },
    body: {
      fr: "Formation initiale en informatique à NIT — la base sur laquelle le reste s'est construit.",
      en: 'Initial computer science training at NIT — the base everything else was built on.',
    },
  },
];
