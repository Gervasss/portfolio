"use client";

import { motion } from "motion/react";
import styles from "./EducationSection.module.css";

type EducationItem = {
    period: string;
    degree: string;
    institution: string;
    description?: string;
    location?:string;
    status?: string;
};

const EDUCATION: EducationItem[] = [

    {
        period: "2019 — Atual",
        degree: "Bacharelado em Ciência da Computação",
        institution: "Universidade Estadual do Sudoeste da Bahia (UESB)",
        status: "Em andamento",
        location: "Vitória da Conquista • Bahia",
        description:
            "Ênfase em desenvolvimento de software, estruturas de dados, bancos de dados e arquitetura de sistemas.",
       

    },
];

export function EducationSection() {
    return (
        <section className={styles.section} id="education">
            <div className={styles.container}>
                <motion.header
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    className={styles.header}
                >
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        Formação
                    </div>
                    <h2 className={styles.title}>Formação acadêmica</h2>
                    <p className={styles.subtitle}>
                        Minha base acadêmica e técnica que sustenta minha atuação como desenvolvedor.
                    </p>
                </motion.header>

                <div className={styles.timeline}>
                    <div className={styles.line} />

                    {EDUCATION.map((edu, index) => (
                        <motion.article
                            key={edu.degree}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
                            className={styles.item}
                        >
                            <div className={styles.markerWrap}>
                                <span className={styles.marker} />
                            </div>

                            <div className={styles.card}>
                                <div className={styles.top}>
                                    <span className={styles.period}>{edu.period}</span>
                                    {edu.status && <span className={styles.status}>{edu.status}</span>}
                                    {edu.location && <span className={styles.location}>{edu.location}</span>}
                                </div>

                                <h3 className={styles.degree}>{edu.degree}</h3>
                                <p className={styles.institution}>{edu.institution}</p>

                                {edu.description && (
                                    <p className={styles.description}>{edu.description}</p>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
