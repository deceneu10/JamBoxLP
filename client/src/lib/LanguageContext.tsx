import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getTranslation } from './translations';

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
};

const defaultLanguage = 'ro'; // Romanian as default

const LanguageContext = createContext<LanguageContextType>({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // Initialize language from localStorage or default
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('jambox-language') || defaultLanguage;
    }
    return defaultLanguage;
  });

  // Update localStorage whenever language changes
  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('jambox-language', lang);
    }
  };

  const t = (key: string) => getTranslation(key, language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);