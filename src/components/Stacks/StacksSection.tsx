"use client";

import React from "react";
import styles from "./StacksSection.module.css";
import { IconCloud } from "../ui/icon-cloud";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function StacksSection() {
    const { t } = useLanguage();

    // Tecnologias exibidas na nuvem e na grade
    const stacks = [
        { name: "React", iconUrl: "https://cdn.simpleicons.org/react/61DAFB" },
        { name: "Next.js", iconUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF" },
        { name: "TypeScript", iconUrl: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "JavaScript", iconUrl: "https://cdn.simpleicons.org/javascript/F7DF1E" },
        { name: "HTML5", iconUrl: "https://cdn.simpleicons.org/html5/E34F26" },
        { name: "CSS", iconUrl: "/CSS.svg" },
        { name: "Tailwind", iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
        { name: "Node.js", iconUrl: "https://cdn.simpleicons.org/nodedotjs/339933" },
        { name: "Express", iconUrl: "https://cdn.simpleicons.org/express/FFFFFF" },
        { name: "PostgreSQL", iconUrl: "https://cdn.simpleicons.org/postgresql/4169E1" },
        { name: "MongoDB", iconUrl: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Firebase", iconUrl: "https://cdn.simpleicons.org/firebase/FFCA28" },
        { name: "Docker", iconUrl: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Git", iconUrl: "https://cdn.simpleicons.org/git/F05032", subtitle: t("Stacks.subtitles.versioning") },
        { name: "GitHub", iconUrl: "https://cdn.simpleicons.org/github/FFFFFF" },
        { name: "Figma", iconUrl: "https://cdn.simpleicons.org/figma/F24E1E" },
        { name: "Coolify", iconUrl: "https://cdn.simpleicons.org/coolify/22C55E", subtitle: t("Stacks.subtitles.deploy") },
        { name: "Hetzner", iconUrl: "https://cdn.simpleicons.org/hetzner/D50C2D", subtitle: t("Stacks.subtitles.cloud") },
        { name: "Vercel", iconUrl: "https://cdn.simpleicons.org/vercel/FFFFFF", subtitle: t("Stacks.subtitles.deploy") },
        { name: "Prisma", iconUrl: "https://cdn.simpleicons.org/prisma/2D3748" },
    ];

    return (
        <section className={styles.section} id="stacks" aria-label="Stacks">
            <div className={styles.container}>
                {/* Cabecalho da secao */}
                <header className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        {t("Stacks.badge")}
                    </div>

                    <h2 className={styles.title}>{t("Stacks.title")}</h2>
                    <p className={styles.subtitle}>
                        {t("Stacks.subtitle")}
                    </p>
                </header>

                {/* Nuvem visual de tecnologias */}
                <div className={styles.cloud}>
                    <IconCloud images={stacks.map((s) => s.iconUrl)} />
                </div>

                {/* Grade com stacks principais */}
                <div className={styles.stacksGrid} role="list">
                    {stacks.map((s) => (
                        <div key={s.name} className={styles.stackCard} role="listitem">
                            <div className={styles.stackTop}>
                                <span className={styles.dot} aria-hidden="true" />
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={s.iconUrl}
                                    alt={s.name}
                                    className={styles.icon}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>

                            <div className={styles.stackText}>
                                <span className={styles.name}>{s.name}</span>
                                {s.subtitle ? <span className={styles.sub}>{s.subtitle}</span> : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
