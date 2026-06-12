import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Traduce una ruta local al idioma indicado: localizePath('/proyectos', 'en') → '/en/projects' */
export function localizePath(path: string, lang: Lang): string {
  const routes: Record<string, Record<Lang, string>> = {
    '/': { es: '/', en: '/en/' },
    '/proyectos': { es: '/proyectos', en: '/en/projects' },
  };
  const clean = path.replace(/\/$/, '') || '/';
  return routes[clean]?.[lang] ?? (lang === 'en' ? `/en${clean}` : clean);
}

/** Devuelve la ruta equivalente de la página actual en el otro idioma (para el selector de idioma y hreflang) */
export function getAlternatePath(pathname: string, target: Lang): string {
  const pairs: Array<[string, string]> = [
    ['/', '/en/'],
    ['/proyectos', '/en/projects'],
  ];
  const clean = pathname.replace(/\/$/, '') || '/';
  for (const [es, en] of pairs) {
    const enClean = en.replace(/\/$/, '') || '/';
    if (clean === es) return target === 'en' ? en : es;
    if (clean === enClean) return target === 'es' ? es : en;
  }
  // Fallback: prefijar o quitar /en
  if (target === 'en') return clean.startsWith('/en') ? clean : `/en${clean}`;
  return clean.replace(/^\/en/, '') || '/';
}
