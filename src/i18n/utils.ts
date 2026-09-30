import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLocalizedPath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

export function getAlternatePath(currentLang: Lang, targetLang: Lang, pathname: string): string {
  let path = pathname;
  if (currentLang !== defaultLang) {
    path = path.replace(new RegExp(`^/${currentLang}`), '') || '/';
  }
  return getLocalizedPath(targetLang, path);
}
