"use client";

import { createContext, useContext, useEffect, useState } from "react";
import pt from "@/src/messages/pt.json";
import en from "@/src/messages/en.json";
import es from "@/src/messages/es.json";

export type LanguageCode = "pt" | "en" | "es";

const messages: Record<LanguageCode, unknown> = { pt, en, es };

type LanguageContextType = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (path: string) => string;
  tArray: (path: string) => string[];
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function isLanguageCode(value: string | null): value is LanguageCode {
  return value === "pt" || value === "en" || value === "es";
}

function getMessageValue(language: LanguageCode, path: string): unknown {
  const keys = path.split(".");
  let result = messages[language];

  for (const key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = (result as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }

  return result;
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") return "pt";

    const saved = window.localStorage.getItem("language");
    return isLanguageCode(saved) ? saved : "pt";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: LanguageCode) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;
  };

  const t = (path: string): string => {
    const result = getMessageValue(language, path) ?? getMessageValue("pt", path);
    return typeof result === "string" ? result : path;
  };

  const tArray = (path: string): string[] => {
    const result = getMessageValue(language, path) ?? getMessageValue("pt", path);
    return Array.isArray(result)
      ? result.filter((item): item is string => typeof item === "string")
      : [];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, tArray }}>
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
