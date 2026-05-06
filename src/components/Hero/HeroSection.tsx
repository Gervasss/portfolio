"use client";

import { motion } from "motion/react";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import styles from "./HeroSection.module.css";
import { useLanguage } from "@/src/contexts/LanguageContext";

// Chaves das metricas exibidas na hero
const statKeys = ["experience", "projects", "focus", "systems"];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.hero} id="hero">
      {/* Camadas visuais de fundo */}
      <div className={styles.bgBase} />
      <div className={styles.bgGrid} />
      <div className={styles.bgGlow} />
      <div className={styles.bgNoise} />

      <div className={styles.container}>
        {/* Conteudo principal da hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={styles.content}
        >
          {/* Badge de apresentacao */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className={styles.badge}
          >
            <span className={styles.badgeDot} />
            {t("Hero.badge")}
          </motion.div>

          {/* Headline principal */}
          <h1 className={styles.title}>
            <span>{t("Hero.headline.line1")}</span>
            <strong>{t("Hero.headline.highlight")}</strong>
          </h1>

          <p className={styles.description}>{t("Hero.description")}</p>

          {/* Acoes principais */}
          <div className={styles.actions}>
            <a
              href="https://wa.me/5573981542775"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
            >
              {t("Hero.buttons.whatsapp")}
              <IconBrandWhatsapp size={18} />
            </a>

            <a href="#projects" className={styles.secondaryBtn}>
              {t("Hero.buttons.projects")}
              <IconArrowRight size={18} />
            </a>

            <a
              href="https://github.com/Gervasss"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubBtn}
              aria-label={t("Hero.buttons.github")}
            >
              <IconBrandGithub size={20} />
            </a>
          </div>

          <div className={styles.divider} />

          {/* Metricas de destaque */}
          <div className={styles.stats}>
            {statKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 18, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.48,
                  ease: "easeOut",
                  delay: 0.42 + index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className={styles.stat}
              >
                <strong>{t(`Hero.stats.${key}.value`)}</strong>
                <span>{t(`Hero.stats.${key}.label`)}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Visual tecnico lateral */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className={styles.visual}
          aria-hidden="true"
        >
          {/* Elemento grafico de fundo */}
          <div className={styles.orbit}>
            <span />
            <span />
            <span />
          </div>

          {/* Card tecnico com stack e foco */}
          <div className={styles.terminal}>
            <span className={styles.terminalLabel}>
              {t("Hero.terminal.file")}
            </span>
            <div className={styles.terminalLine}>
              <span>{t("Hero.terminal.stack_label")}</span>
              <strong>{t("Hero.terminal.stack_value")}</strong>
            </div>
            <div className={styles.terminalLine}>
              <span>{t("Hero.terminal.focus_label")}</span>
              <strong>{t("Hero.terminal.focus_value")}</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
