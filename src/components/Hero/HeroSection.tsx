"use client";

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
        <div className={styles.content}>
          {/* Badge de apresentacao */}
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t("Hero.badge")}
          </div>

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
              <div
                key={key}
                className={styles.stat}
                style={{ animationDelay: `${0.18 + index * 0.06}s` }}
              >
                <strong>{t(`Hero.stats.${key}.value`)}</strong>
                <span>{t(`Hero.stats.${key}.label`)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual tecnico lateral */}
        <div className={styles.visual} aria-hidden="true">
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
        </div>
      </div>
    </section>
  );
}
