import { createContext, useContext, useMemo, useState, ReactNode, useEffect } from 'react';
import { translations, Lang } from './translations';

interface I18nContextValue {
  lang: Lang;
  setLanguage: (l: Lang) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Resolve a dot-notation key from the translations dictionary
 * Returns the value if found, otherwise returns the key as fallback
 */
function resolveKey(dict: Record<string, any>, key: string): any {
  const parts = key.split('.');
  let cur: any = dict;
  for (const p of parts) {
    if (cur && typeof cur === 'object' && p in cur) {
      cur = cur[p];
    } else {
      return key;
    }
  }
  return cur;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('id');

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null;
    if (stored === 'id' || stored === 'en') {
      setLang(stored);
    } else {
      setLang('id');
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('lang', 'id');
      }
    }
  }, []);

  const setLanguage = (l: Lang) => {
    setLang(l);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', l);
    }
  };

  // Translation function for strings
  const t = useMemo(() => {
    const dict = translations[lang];
    return (key: string): string => {
      const value = resolveKey(dict, key);
      return typeof value === 'string' ? value : key;
    };
  }, [lang]);

  // Translation function for arrays (like features list)
  const tArray = useMemo(() => {
    const dict = translations[lang];
    return (key: string): string[] => {
      const value = resolveKey(dict, key);
      return Array.isArray(value) ? value : [];
    };
  }, [lang]);

  const value: I18nContextValue = {
    lang,
    setLanguage,
    t,
    tArray,
  };

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('I18nProvider missing');
  return ctx;
}
