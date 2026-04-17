"use client";

import { motion } from "motion/react";
import styles from "./ExperiencesSection.module.css";
import { EducationSection } from "../Education/educationSection";
import { useLanguage } from "@/src/contexts/LanguageContext";

export function ExperiencesSection() {
    const { t } = useLanguage();

    const EXPERIENCES = [
         {
            range: t("Experience.items.Grupo Fellow.range"),
            role: t("Experience.items.Grupo Fellow.role"),
            company: "Fellow",
            location: t("Experience.items.Grupo Fellow.location"),
            isCurrent: true,
            highlights: t("Experience.items.Grupo Fellow.highlights") as unknown as string[],
            stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "CSS Modules", "Styled Components"],
        },
        {
            range: t("Experience.items.Freelance.range"),
            role: t("Experience.items.Freelance.role"),
            company: "Freelancer",
            location: t("Experience.items.Freelance.location"),
            isCurrent: true,
            highlights: t("Experience.items.Freelance.highlights") as unknown as string[],
            stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "CSS Modules", "Styled Components"],
        },
        {
            range: t("Experience.items.Mercadótica.range"),
            role: t("Experience.items.Mercadótica.role"),
            company: "Mercadótica",
            location: t("Experience.items.Mercadótica.location"),
            highlights: t("Experience.items.Mercadótica.highlights") as unknown as string[],
            stack: ["React", "TypeScript", "Vite", "CSS Modules", "Styled Components", "Websockets", "Postman", "Nodejs", "Firebase", "Prisma ORM", "PostgrSQL"],
        },
    ];

    return (
        <section className={styles.section} id="experience">
            <EducationSection />
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
                        {t("Experience.badge")}
                    </div>
                    <h2 className={styles.title}>{t("Experience.title")}</h2>
                    <p className={styles.subtitle}>
                        {t("Experience.subtitle")}
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    <div className={styles.line} aria-hidden="true" />

                    {EXPERIENCES.map((exp, idx) => (
                        <motion.article
                            key={`${exp.company}-${idx}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.04 }}
                            className={styles.item}
                        >
                            <div className={styles.markerWrap}>
                                <span
                                    className={`${styles.marker} ${exp.isCurrent ? styles.markerCurrent : ""}`}
                                    aria-hidden="true"
                                />
                                {exp.isCurrent && <span className={styles.pulse} aria-hidden="true" />}
                            </div>

                            <div className={styles.card}>
                                <div className={styles.topRow}>
                                    <span className={`${styles.range} ${exp.isCurrent ? styles.rangeCurrent : ""}`}>
                                        {exp.range}
                                    </span>
                                    {exp.location && <span className={styles.location}>{exp.location}</span>}
                                </div>

                                <h3 className={styles.role}>
                                    {exp.role} <span className={styles.at}>@</span>{" "}
                                    <span className={styles.company}>{exp.company}</span>
                                </h3>

                                <ul className={styles.list}>
                                    {Array.isArray(exp.highlights) && exp.highlights.map((h, i) => (
                                        <li key={i} className={styles.li}>
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                {exp.stack?.length ? (
                                    <div className={styles.stack}>
                                        {exp.stack.map((t) => (
                                            <span key={t} className={styles.chip}>
                                                {t}
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