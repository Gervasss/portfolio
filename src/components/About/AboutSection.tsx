"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./AboutSection.module.css";
import { useLanguage } from "@/src/contexts/LanguageContext"; // Importação necessária

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Firebase", "CSS"];

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={styles.header}
        >
           <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t("About.badge")}
          </div>
          <h2 className={styles.title}>{t("About.title")}</h2>
          <p className={styles.subtitle}>{t("About.subtitle")}</p>
        </motion.div>

        <div className={styles.grid}>
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.photoCard}
          >
            <div className={styles.photoWrap}>
              <img
                src="https://i.imgur.com/9ZIIxPJ.jpeg" 
                alt="Foto de Gervásio Cardoso"
                className={styles.photo}
              />
            </div>

            <div className={styles.photoMeta}>
              <div>
                <p className={styles.name}>Gervásio Cardoso</p>
                <p className={styles.role}>{t("About.role")}</p>
              </div>

              <a className={styles.contactBtn} href="https://wa.me/5573981542775">
                {t("About.contact")}
              </a>
            </div>
          </motion.div>

          {/* Texto + Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.content}
          >
            <div className={styles.card}>
              <p 
                className={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: t("About.p1") }}
              />

              <p 
                className={styles.paragraph} 
                dangerouslySetInnerHTML={{ __html: t("About.p2") }}
              />

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <p className={styles.highlightTitle}>{t("About.highlights.deliver.title")}</p>
                  <p className={styles.highlightText}>{t("About.highlights.deliver.text")}</p>
                </div>

                <div className={styles.highlight}>
                  <p className={styles.highlightTitle}>{t("About.highlights.work.title")}</p>
                  <p className={styles.highlightText}>{t("About.highlights.work.text")}</p>
                </div>

                <div className={styles.highlight}>
                  <p className={styles.highlightTitle}>{t("About.highlights.seek.title")}</p>
                  <p className={styles.highlightText}>{t("About.highlights.seek.text")}</p>
                </div>
              </div>
            </div>

            <div className={styles.stackBlock}>
              <p className={styles.stackTitle}>{t("About.stack_title")}</p>
              <div className={styles.stack}>
                {STACK.map((t) => (
                  <span key={t} className={styles.chip}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}