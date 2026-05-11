"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { IconBrandWhatsapp, IconSend, IconX } from "@tabler/icons-react";
import styles from "./WhatsappFloat.module.css";
import { useLanguage } from "@/src/contexts/LanguageContext";
import Image from "next/image";

type Props = {
  phone: string;
  name?: string;
  avatarUrl?: string;
  initialTypingMs?: number;
};

export function WhatsAppFloat({
  phone,
  name = "Gervásio",
  initialTypingMs = 1200,
}: Props) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"typing" | "message">("typing");
  const [text, setText] = useState("");
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const base = useMemo(() => `https://wa.me/${phone}?text=`, [phone]);

  useEffect(() => {
    if (!open) return;

    const tTimer = window.setTimeout(() => {
      setPhase("message");
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }, initialTypingMs);

    return () => window.clearTimeout(tTimer);
  }, [open, initialTypingMs]);

  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const el = panelRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function sendToWhatsApp(customText?: string) {
    const userText = (customText ?? text).trim();
    if (!userText) return;

    const finalMessage = `${t("WhatsAppFloat.message_prefix")}${userText}`;
    const link = base + encodeURIComponent(finalMessage);

    window.open(link, "_blank", "noopener,noreferrer");
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendToWhatsApp();
  }

  return (
    <div className={styles.root}>
      {open && (
        <div
          className={styles.panel}
          ref={panelRef}
          role="dialog"
          aria-label="Chat do WhatsApp"
        >
          <div className={styles.header}>
            <div className={styles.profile}>
              <Image
                src="/avatar.png"
                alt={`Foto de ${name}`}
                className={styles.avatar}
                width={36}
                height={36}
              />
              <div className={styles.meta}>
                <div className={styles.name}>{name}</div>
                <div className={styles.status}>
                  {phase === "typing" ? t("WhatsAppFloat.status_typing") : t("WhatsAppFloat.status_online")}
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label={t("WhatsAppFloat.aria_label_close")}
            >
              <IconX size={18} />
            </button>
          </div>

          <div className={styles.chatArea}>
            {phase === "typing" && (
              <div className={`${styles.bubble} ${styles.incoming}`}>
                <div className={styles.typing}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}

            {phase === "message" && (
              <div className={`${styles.bubble} ${styles.incoming}`}>
                {t("WhatsAppFloat.welcome_message")}
                <div className={styles.time}>{t("WhatsAppFloat.time_now")}</div>
              </div>
            )}
          </div>

          <form className={styles.inputBar} onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className={styles.input}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={t("WhatsAppFloat.placeholder")}
              aria-label="Mensagem"
            />

            <button
              type="submit"
              className={styles.send}
              aria-label={t("WhatsAppFloat.aria_label_send")}
              disabled={!text.trim()}
              title={!text.trim() ? t("WhatsAppFloat.title_disabled") : t("WhatsAppFloat.title_send")}
            >
              <IconSend size={18} />
            </button>
          </form>

          <div className={styles.footerHint}>
            {t("WhatsAppFloat.footer_hint")}
          </div>
        </div>
      )}

      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabActive : ""}`}
        onClick={() => {
          if (!open) setPhase("typing");
          setOpen((v) => !v);
        }}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        <span className={styles.pulse} aria-hidden="true" />
        <div className={styles.floatBadge}>
          !
        </div>
        <IconBrandWhatsapp size={38} />
      </button>
    </div>
  );
}
