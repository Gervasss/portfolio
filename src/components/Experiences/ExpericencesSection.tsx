"use client";

import { motion } from "motion/react";
import {
  IconBriefcase,
  IconCircleCheck,
  IconMapPin,
  IconPointFilled,
} from "@tabler/icons-react";
import styles from "./ExperiencesSection.module.css";
import { EducationSection } from "../Education/educationSection";
import { useLanguage } from "@/src/contexts/LanguageContext";

export function ExperiencesSection() {
  const { t, tArray } = useLanguage();

  // Dados exibidos na timeline profissional
  const EXPERIENCES = [
    {
      range: t("Experience.items.Grupo Fellow.range"),
      role: t("Experience.items.Grupo Fellow.role"),
      company: "Grupo Fellow",
      location: t("Experience.items.Grupo Fellow.location"),
      isCurrent: true,
      highlights: tArray("Experience.items.Grupo Fellow.highlights"),
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Firebase",
        "CSS Modules",
        "Styled Components",
      ],
    },
    {
      range: t("Experience.items.Freelance.range"),
      role: t("Experience.items.Freelance.role"),
      company: "Freelancer",
      location: t("Experience.items.Freelance.location"),
      isCurrent: true,
      highlights: tArray("Experience.items.Freelance.highlights"),
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Firebase",
        "CSS Modules",
        "Styled Components",
      ],
    },
    {
      range: t("Experience.items.Mercadótica.range"),
      role: t("Experience.items.Mercadótica.role"),
      company: "Mercadótica",
      location: t("Experience.items.Mercadótica.location"),
      highlights: tArray("Experience.items.Mercadótica.highlights"),
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "CSS Modules",
        "Styled Components",
        "Websockets",
        "Postman",
        "Node.js",
        "Firebase",
        "Prisma ORM",
        "PostgreSQL",
      ],
    },
  ];

  return (
    <section className={styles.section} id="experience">
      {/* Secao de formacao academica exibida antes da experiencia */}
      <EducationSection />

      <div className={styles.container}>
        {/* Cabecalho da secao */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t("Experience.badge")}
          </div>
          <h2 className={styles.title}>{t("Experience.title")}</h2>
          <p className={styles.subtitle}>{t("Experience.subtitle")}</p>
        </motion.div>

        {/* Timeline profissional */}
        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          {EXPERIENCES.map((exp, idx) => (
            <motion.article
              key={`${exp.company}-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: idx * 0.04,
              }}
              className={styles.item}
            >
              {/* Marcador da timeline */}
              <div className={styles.markerWrap}>
                <span
                  className={`${styles.marker} ${
                    exp.isCurrent ? styles.markerCurrent : ""
                  }`}
                  aria-hidden="true"
                >
                  <IconBriefcase size={17} />
                </span>
                {exp.isCurrent && (
                  <span className={styles.pulse} aria-hidden="true" />
                )}
              </div>

              {/* Card da experiencia */}
              <div className={styles.card}>
                {/* Cargo, empresa, periodo e localizacao */}
                <div className={styles.cardHeader}>
                  <div className={styles.heading}>
                    <div className={styles.topRow}>
                      <span
                        className={`${styles.range} ${
                          exp.isCurrent ? styles.rangeCurrent : ""
                        }`}
                      >
                        {exp.range}
                      </span>
                      {exp.location && (
                        <span className={styles.location}>
                          <IconMapPin size={15} />
                          {exp.location}
                        </span>
                      )}
                    </div>

                    <h3 className={styles.role}>
                      {exp.role}
                      <span className={styles.company}>{exp.company}</span>
                    </h3>
                  </div>
                </div>

                {/* Principais entregas */}
                <ul className={styles.list}>
                  {Array.isArray(exp.highlights) &&
                    exp.highlights.map((highlight, index) => (
                      <li key={index} className={styles.li}>
                        <IconCircleCheck size={17} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                </ul>

                {/* Tecnologias utilizadas */}
                {exp.stack?.length ? (
                  <div className={styles.stack}>
                    {exp.stack.map((tech) => (
                      <span key={tech} className={styles.chip}>
                        <IconPointFilled size={12} />
                        {tech}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
