export type SecurityArea = {
  name: string;
  note: { fr: string; en: string };
};

export const securityAreas: SecurityArea[] = [
  {
    name: 'Web exploitation',
    note: {
      fr: 'XSS, SSRF, désérialisation — comprendre la chaîne complète, pas juste reconnaître un payload.',
      en: 'XSS, SSRF, deserialization — understanding the full chain, not just recognizing a payload.',
    },
  },
  {
    name: 'OSINT & forensics',
    note: {
      fr: 'Reconnaissance et analyse de métadonnées (Exiftool) — ce que les fichiers révèlent malgré eux.',
      en: 'Reconnaissance and metadata analysis (Exiftool) — what files reveal despite themselves.',
    },
  },
  {
    name: 'Accès & brute force',
    note: {
      fr: "Hydra et compagnie — utile pour tester la robustesse de mes propres mécanismes d'authentification.",
      en: 'Hydra and friends — useful for stress-testing my own authentication mechanisms.',
    },
  },
  {
    name: 'Méthodologie',
    note: {
      fr: 'OWASP Top 10 comme grille de lecture par défaut, Burp Suite et Kali Linux comme environnement de travail.',
      en: 'OWASP Top 10 as a default reading grid, Burp Suite and Kali Linux as the working environment.',
    },
  },
];
