"use client";

import { createContext, useContext, useEffect, useState } from "react";
// Importe seus arquivos de tradução aqui
import pt from "@/src/messages/pt.json";
import en from "@/src/messages/en.json";
import es from "@/src/messages/es.json";

export type LanguageCode = "pt" | "en" | "es";
type MessageNode = string | MessageNode[] | { [key: string]: MessageNode };

const messages: Record<LanguageCode, MessageNode> = { pt, en, es };

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (path: string) => string; // Adicionamos o tipo da função t
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") return "pt";
    return (localStorage.getItem("language") as LanguageCode | null) ?? "pt";
  });

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

 
  const t = (path: string): string => {
    const keys = path.split(".");
    let result: MessageNode | undefined = messages[language];

    for (const key of keys) {
      if (result && !Array.isArray(result) && typeof result === "object" && key in result) {
        result = result[key];
      } else {
        return path; // Retorna a própria chave se não encontrar a tradução
      }
    }
    return typeof result === "string" ? result : path;
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
