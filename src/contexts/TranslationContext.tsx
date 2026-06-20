import React, { createContext, useContext, useState } from 'react';
import en from '../locales/en.json';
import es from '../locales/es.json';

type Language = 'pt' | 'en' | 'es';

interface TranslationContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations: Record<Exclude<Language, 'pt'>, Record<string, string>> = {
  en: en as Record<string, string>,
  es: es as Record<string, string>,
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('lang');
    return (saved === 'en' || saved === 'es' || saved === 'pt') ? saved : 'pt';
  });

  const changeLanguage = (lang: Language) => {
    localStorage.setItem('lang', lang);
    setLanguage(lang);
  };

  const t = (key: string): string => {
    if (language === 'pt') return key;
    const dict = translations[language];
    return dict?.[key] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
