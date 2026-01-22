"use client";

import { motion } from "motion/react";
import styles from "./ExperiencesSection.module.css";
import { EducationSection } from "../Education/educationSection";

type ExperienceItem = {
    range: string;
    role: string;
    company: string;
    location?: string;
    highlights: string[];
    stack?: string[];
    isCurrent?: boolean;
};

const EXPERIENCES: ExperienceItem[] = [
    {
        range: "2025 — Atual",
        role: "Desenvolvedor Full-Stack",
        company: "Freelancer",
        location: "Remoto • Brasil",
        isCurrent: true,
        highlights: [
            "Desenvolvimento de ERPs e sistemas Stand-alone personalizados para empresas.",
            "Criação de soluções de gestão empresarial com integração de banco de dados e dashboards interativos.",
            "Implementação de dashboards e fluxos críticos com foco em UX e métricas.",
            "Otimização de sistemas para garantir melhor desempenho e usabilidade.",
            "Criação de sites e landing pages para empresas e profissionais, com foco em responsividade e nas melhores práticas de SEO.",
        ],
        stack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Firebase", "CSS Modules", "Styled Components"],
    },
    {
        range: "2023 — 2024",
        role: " Estagiário - Desenvolvedor Full-Stack",
        company: "Mercadótica",
        location: "Remoto • Brasil",
        highlights: [
            "Desenvolvi e mantive aplicações web responsivas utilizando React.js, Next.js e TypeScript, garantindo maior escalabilidade.",
            "Trabalhei no backend com Node.js, Prisma e Postman para integração de APIs.",
            "Implementei um chat em tempo real via WebSocket com suporte a envio de imagens e arquivos.",
            "Otimizei a performance do sistema, reduzindo redundâncias com componentes reutilizáveis.",
            "Implementação de dashboards e fluxos críticos com foco em UX e métricas.",

        ],
        stack: ["React", "TypeScript", "Vite", "CSS Modules", "Styled Components", "Websockets", "Postman", "Nodejs", "Firebase", "Prisma ORM", "PostgrSQL"],
    },
];

export function ExperiencesSection() {
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
                        Experiência
                    </div>
                    <h2 className={styles.title}>Experiência profissional</h2>
                    <p className={styles.subtitle}>
                        Um resumo do que eu já construí e como eu atuo no dia a dia, do produto à entrega.
                    </p>
                </motion.div>

                <div className={styles.timeline}>
                    {/* linha vertical */}
                    <div className={styles.line} aria-hidden="true" />

                    {EXPERIENCES.map((exp, idx) => (
                        <motion.article
                            key={`${exp.company}-${exp.range}`}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.55, ease: "easeOut", delay: idx * 0.04 }}
                            className={styles.item}
                        >
                            {/* marcador */}
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
                                    {exp.highlights.map((h, i) => (
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
