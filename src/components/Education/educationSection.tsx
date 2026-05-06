"use client";

import { motion } from "motion/react";
import {
  IconBook2,
  IconMapPin,
  IconSchool,
  IconTimelineEvent,
} from "@tabler/icons-react";
import styles from "./EducationSection.module.css";
import { useLanguage } from "@/src/contexts/LanguageContext";

export function EducationSection() {
  const { t } = useLanguage();

  const EDUCATION = [
    {
      period: t("Education.items.uesb.period"),
      degree: t("Education.items.uesb.degree"),
      institution: t("Education.items.uesb.institution"),
      status: t("Education.items.uesb.status"),
      location: t("Education.items.uesb.location"),
      description: t("Education.items.uesb.description"),
    },
  ];

  return (
    <section className={styles.section} id="education">
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        {/* Cabeçalho da seção */}
        <motion.header
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className={styles.header}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t("Education.badge")}
          </div>
          <h2 className={styles.title}>{t("Education.title")}</h2>
          <p className={styles.subtitle}>{t("Education.subtitle")}</p>
        </motion.header>

        {/* Linha do tempo acadêmica */}
        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden="true" />

          {EDUCATION.map((edu, index) => (
            <motion.article
              key={edu.degree}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className={styles.item}
            >
              <div className={styles.markerWrap}>
                <span className={styles.marker}>
                  <IconSchool size={17} />
                </span>
              </div>

              <div className={styles.card}>
                <div className={styles.top}>
                  <span className={styles.period}>
                    <IconTimelineEvent size={15} />
                    {edu.period}
                  </span>
                  {edu.status && (
                    <span className={styles.status}>{edu.status}</span>
                  )}
                </div>

                <div className={styles.body}>
                  <span className={styles.iconBox}>
                    <IconBook2 size={22} />
                  </span>

                  <div>
                    <h3 className={styles.degree}>{edu.degree}</h3>
                    <p className={styles.institution}>{edu.institution}</p>

                    {edu.location && (
                      <p className={styles.location}>
                        <IconMapPin size={15} />
                        {edu.location}
                      </p>
                    )}

                    {edu.description && (
                      <p className={styles.description}>{edu.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
