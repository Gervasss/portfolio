"use client";

import { useState, useRef, useEffect } from "react";
import { IoLanguage } from "react-icons/io5";
import styles from "./LanguageSelector.module.css";
import { useLanguage } from "@/src/contexts/LanguageContext";

const LANGUAGES = [
  { code: "pt", label: "Português", short: "PT" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
] as const;

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find((l) => l.code === language)!;

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className={styles.wrapper} ref={ref}>
      <button
        className={styles.trigger}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <IoLanguage size={18} />
        <span>{current.short}</span>
      </button>

      {open && (
        <div className={styles.dropdown} role="listbox">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              className={`${styles.option} ${
                lang.code === language ? styles.active : ""
              }`}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              role="option"
              aria-selected={lang.code === language}
            >
              <span className={styles.langShort}>{lang.short}</span>
              <span className={styles.langLabel}>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
