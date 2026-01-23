"use client";

import { motion } from "motion/react";
import { IconBrandGithub, IconBrandWhatsapp } from "@tabler/icons-react";
import styles from "./HeroSection.module.css";
import { TypingTitle } from "../TypingTitle/TypingTitle";
import { AboutSection } from "../About/AboutSection";

export function HeroSection() {
  return (
    <section className={styles.hero} id="hero">
      {/* Background layers */}
      <div className={styles.bgBase} />
      <div className={styles.bgRadialTop} />
      <div className={styles.bgRadialSide} />

      <div className={styles.container}>
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={styles.left}
        >
          {/* Badge */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Full-Stack Developer
          </div>

          {/* Fake HTML */}
          <div className={styles.tagLine}>
            <span className={styles.tagMuted}>&lt;section</span>{" "}
            <span className={styles.tagAttr}>id</span>
            <span className={styles.tagMuted}>=</span>
            <span className={styles.tagValue}>"hero"</span>
            <span className={styles.tagMuted}>&gt;</span>
          </div>

          <div className={styles.block}>
            <div className={styles.tagLine}>
              <span className={styles.tagMuted}>&lt;h1&gt;</span>
            </div>
            <TypingTitle text="Gervásio Cardoso" />
            <div className={styles.tagLine}>
              <span className={styles.tagMuted}>&lt;/h1&gt;</span>
            </div>

            <div className={styles.tagLine}>
              <span className={styles.tagMuted}>&lt;p&gt;</span>
            </div>

            <p className={styles.description}>
              Eu construo interfaces modernas e Aplicações robustas com foco em
              performance, DX e experiência do usuário. Projetos reais, código
              limpo e entrega rápida.
            </p>

            <div className={styles.tagLine}>
              <span className={styles.tagMuted}>&lt;/p&gt;</span>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.tagLine}>
            <span className={styles.tagMuted}>&lt;div</span>{" "}
            <span className={styles.tagAttr}>class</span>
            <span className={styles.tagMuted}>=</span>
            <span className={styles.tagValue}>"actions"</span>
            <span className={styles.tagMuted}>&gt;</span>
          </div>

          <div className={styles.actions}>
            <a
              href="https://github.com/Gervasss"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
            >
              <IconBrandGithub size={18} />
              Ver GitHub
            </a>

            <a
              href="https://wa.me/5573981542775"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              <IconBrandWhatsapp size={18} />
              Falar no WhatsApp
            </a>

            <a href="#projects" className={styles.secondaryBtn}>
              Ver projetos <span className={styles.arrow}>→</span>
            </a>
          </div>

          <div className={styles.tagLine}>
            <span className={styles.tagMuted}>&lt;/div&gt;</span>
          </div>

          <div className={styles.tagLine}>
            <span className={styles.tagMuted}>&lt;/section&gt;</span>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className={styles.right}
        >
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <div className={styles.windowDots}>
                <span className={styles.dotRed} />
                <span className={styles.dotYellow} />
                <span className={styles.dotGreen} />
              </div>
              <span className={styles.fileName}>portfolio.tsx</span>
            </div>

            <pre className={styles.codeBlock}>
              {`export const profile = {
  name: "Gervásio Cardoso",
  role: "Full-Stack Developer",
  stack: ["React", "TypeScript", "Node.js"],
  focus: ["UI/UX", "Performance", "APIs"],
  availability: "Open to work",
};`}
            </pre>

            <div className={styles.stack}>
              {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL"].map(
                (t) => (
                  <span key={t} className={styles.stackItem}>
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    
    </section>

  );
}
