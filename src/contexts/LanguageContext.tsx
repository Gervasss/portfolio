"use client";

import { createContext, useContext, useEffect, useState } from "react";
// Importe seus arquivos de tradução aqui
import pt from "@/src/messages/pt.json";
import en from "@/src/messages/en.json";
import es from "@/src/messages/es.json";

const messages: Record<LanguageCode, any> = { pt, en, es };

export type LanguageCode = "pt" | "en" | "es";

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (path: string) => string; // Adicionamos o tipo da função t
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("pt");

  useEffect(() => {
    const saved = localStorage.getItem("language") as LanguageCode | null;
    if (saved) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

 
  const t = (path: string): string => {
    const keys = path.split(".");
    let result = messages[language];

    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        return path; // Retorna a própria chave se não encontrar a tradução
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}