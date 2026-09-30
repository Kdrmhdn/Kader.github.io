// TODO(Kader): keep this list current — it's meant to move. Three to four
// short items, updated every month or two.

export type NowItem = {
  label: { fr: string; en: string };
};

export const now: NowItem[] = [
  {
    label: {
      fr: "Sécurisation des pipelines RAG contre l'injection de prompt",
      en: 'Securing RAG pipelines against prompt injection',
    },
  },
  {
    label: {
      fr: 'Fine-tuning léger de modèles open-source pour des tâches de niche',
      en: 'Light fine-tuning of open-source models for niche tasks',
    },
  },
  {
    label: {
      fr: "Architectures d'agents multi-rôles plus prévisibles (moins de magie, plus de contrôle)",
      en: 'More predictable multi-role agent architectures (less magic, more control)',
    },
  },
  {
    label: {
      fr: 'TODO(Kader) — dossiers de candidature master IA / cybersécurité',
      en: 'TODO(Kader) — AI / cybersecurity master’s applications',
    },
  },
];
