"use client";

import React from "react";
import styles from "./ProjectsSection.module.css";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useLanguage } from "@/src/contexts/LanguageContext";

export default function ProjectsSection() {
  const { t } = useLanguage();

  const PROJECTS = [
    {
      title: "Pousada Itu Admin",
      description: t("Projects.items.pousada"),
      cover: "/pousada.png",
      href: "https://admin.pousadaituadmin.com.br/",
      github: "https://github.com/Gervasss/Gerencia-pousada-case-study",
      tags: ["React", "TypeScript", "API", "Dashboard","MySQL", "Automação"],
    },
    {
      title: "Admin JG",
      description: t("Projects.items.admin_jg"),
      cover: "/adminJG.png",
      href: "https://admin-jg.vercel.app/",
      github: "https://github.com/Gervasss/Gerencia-JG-case-study",
      tags: ["React", "UI", "Docs", "Automação", "typescript"],
    },
    {
      title: "Intranet Mercadótica",
      description: t("Projects.items.intranet"),
      cover: "/intranet.png",
      href: "https://intranetv2.mercadotica.com/",
      github: "https://github.com/Gervasss/intranet-mercadotica-case-study",
      tags: ["React", "Docs", "typescript", "API","Node", "Socket.io","PostgreQSL"],
    },
    {
      title: "My best Vision",
      description: t("Projects.items.mbv"),
      cover: "/mbv.png",
      href: "https://mbv.mercadotica.com/",
      github: "https://github.com/Gervasss/my-best-vision-case-study",
      tags: ["React", "Docs", "UI", "Automação","Firebase"],
    },
    {
      title: "Blog Mercadótica",
      description: t("Projects.items.blog"),
      cover: "/blog.png",
      href: "https://blog.mercadotica.com/",
      github: "",
      tags: ["React", "Docs", "UI", "Automação","Firebase"],
    },
    {
      title: "Cristiane Psicóloga",
      description: t("Projects.items.psicologa"),
      cover: "/cris.png",
      href: "https://www.cristianepsi.com.br/",
      github: "https://github.com/Gervasss/crispsi-presentation",
      tags: ["Next", "SEO", "UI", "Profissional", "IA otimizada"],
    },
    {
      title: "Movies DB",
      description: t("Projects.items.movies"),
      cover: "/movie.png",
      href: "https://moviedb-sable.vercel.app/",
      github: "https://github.com/Gervasss/moviedb",
      tags: ["Next", "SEO", "UI", "Profissional", "IA otimizada", "Server Components"],
    },
    {
      title: "Links Rápidos Lane Castro store",
      description: t("Projects.items.links"),
      cover: "/links.png",
      href: "https://links.lanecastrostore.com.br/",
      github: "https://github.com/Gervasss/lane-store-presentation",
      tags: ["Next", "SEO", "UI", "Profissional", "IA otimizada", "Server Components"],
    },

  ];

  return (
    <section className={styles.section} id="projects" aria-label="Projetos">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {t("Projects.badge")}
          </div>

          <h2 className={styles.title}>{t("Projects.title")}</h2>
          <p className={styles.subtitle}>{t("Projects.subtitle")}</p>
        </header>

        <div className={styles.grid}>
          {PROJECTS.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.coverWrap}>
                <img
                  src={p.cover}
                  alt={`Capa do projeto ${p.title}`}
                  className={styles.cover}
                  loading="lazy"
                  decoding="async"
                />
                <div className={styles.coverOverlay} />
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.githubBtn}
                    aria-label={`Abrir GitHub do projeto ${p.title}`}
                    title="Ver repositório no GitHub"
                  >
                    <IconBrandGithub size={18} />
                  </a>
                ) : null}
              </div>

              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardDesc}>{p.description}</p>

                {p.tags?.length ? (
                  <div className={styles.tags} aria-label="Tecnologias do projeto">
                    {p.tags.slice(0, 6).map((t) => (
                      <span key={t} className={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}

                <div className={styles.actions}>
                  <a
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={styles.primaryBtn}
                  >
                    {t("Projects.buttons.view_live")}
                    <span className={styles.btnIcon}>
                      <IconExternalLink size={16} />
                    </span>
                  </a>

                  {p.github ? (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.secondaryBtn}
                    >
                      {t("Projects.buttons.github")}
                      <span className={styles.btnIcon}>
                        <IconBrandGithub size={16} />
                      </span>
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}