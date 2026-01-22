import { useEffect, useMemo, useRef, useState } from "react";
import { IconBrandWhatsapp, IconSend, IconX } from "@tabler/icons-react";
import { motion, } from "framer-motion";
import styles from "./WhatsappFloat.module.css";

type Props = {
  phone: string;                 // "5599999999999"
  name?: string;                 // "Gervásio"
  avatarUrl?: string;            // "/avatar.jpg"
  initialTypingMs?: number;      // tempo do (...) antes da msg aparecer
  welcomeMessage?: string;       // msg após typing
  messagePrefix?: string;        // texto que vai antes do texto digitado
  placeholder?: string;          // placeholder do input
};

export function WhatsAppFloat({
  phone,
  name = "Gervásio",
  initialTypingMs = 1200,
  welcomeMessage = "Olá! Me manda uma mensagem por aqui que eu te respondo no WhatsApp 🙂",
  messagePrefix = "Olá! Vi seu portfólio e ",
  placeholder = "Digite sua mensagem…"
}: Props) {
  const [open, setOpen] = useState(false);
  const [phase, setPhase] = useState<"typing" | "message">("typing");
  const [text, setText] = useState("");
  const panelRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const base = useMemo(() => `https://wa.me/${phone}?text=`, [phone]);

  // Ao abrir: typing -> msg, e foca input
  useEffect(() => {
    if (!open) return;

    setPhase("typing");
    const t = window.setTimeout(() => {
      setPhase("message");
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }, initialTypingMs);

    return () => window.clearTimeout(t);
  }, [open, initialTypingMs]);

  // Fecha ao clicar fora
  useEffect(() => {
    function onMouseDown(e: MouseEvent) {
      if (!open) return;
      const el = panelRef.current;
      if (el && !el.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Fecha no ESC
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

    const finalMessage = `${messagePrefix}${userText}`;
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
          aria-label="Chat do WhatsApp (simulação)"
        >
          <div className={styles.header}>
            <div className={styles.profile}>
              <img src="https://i.imgur.com/9ZIIxPJ.jpeg" alt={`Foto de ${name}`} className={styles.avatar} />
              <div className={styles.meta}>
                <div className={styles.name}>{name}</div>
                <div className={styles.status}>
                  {phase === "typing" ? "digitando..." : "online"}
                </div>
              </div>
            </div>

            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Fechar"
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
                {welcomeMessage}
                <div className={styles.time}>agora</div>
              </div>
            )}
          </div>

          <form className={styles.inputBar} onSubmit={onSubmit}>
            <input
              ref={inputRef}
              className={styles.input}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={placeholder}
              aria-label="Mensagem"
            />

            <button
              type="submit"
              className={styles.send}
              aria-label="Enviar no WhatsApp"
              disabled={!text.trim()}
              title={!text.trim() ? "Digite uma mensagem" : "Enviar"}
            >
              <IconSend size={18} />
            </button>
          </form>

          <div className={styles.footerHint}>
            Ao enviar, abrimos o WhatsApp com sua mensagem pronta.
          </div>
        </div>
      )}

      <button
        type="button"
        className={`${styles.fab} ${open ? styles.fabActive : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fechar chat" : "Abrir chat"}
      >
        <span className={styles.pulse} aria-hidden="true" />
        {/* Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={styles.floatBadge}
        >
          !
        </motion.div>
        <IconBrandWhatsapp size={38} />
      </button>
    </div>
  );
}
