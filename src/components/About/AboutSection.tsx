"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  IconCode,
  IconDownload,
  IconMapPin,
  IconRocket,
  IconTargetArrow,
} from "@tabler/icons-react";
import styles from "./AboutSection.module.css";
import { useLanguage } from "@/src/contexts/LanguageContext";

const STACK = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "CSS",
];

const highlights = [
  { key: "deliver", Icon: IconRocket },
  { key: "work", Icon: IconCode },
  { key: "seek", Icon: IconTargetArrow },
];

const cvFiles = {
  pt: {
    href: "/CV_Gervasio_pt.pdf",
    download: "Curriculo_Gervasio_Cardoso_pt.pdf",
  },
  en: {
    href: "/CV_Gervasio_EN.pdf",
    download: "Resume_Gervasio_Cardoso_EN.pdf",
  },
  es: {
    href: "/CV_Gervasio_ES.pdf",
    download: "Curriculum_Gervasio_Cardoso_ES.pdf",
  },
};

export function AboutSection() {
  const { language, t } = useLanguage();
  const currentCv = cvFiles[language];

  return (
    <section className={styles.section} id="about">
      <div className={styles.bgGrid} />

      <div className={styles.container}>
        {/* Cabeçalho da seção */}
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
          {/* Card lateral com foto, currículo e dados rápidos */}
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.profileCard}
          >
            {/* Foto de perfil */}
            <div className={styles.photoWrap}>
              <Image
                src="/avatar.png"
                alt={t("About.photo_alt")}
                fill
                sizes="(max-width: 768px) 100vw, 390px"
                className={styles.photo}
                priority={false}
              />
              <div className={styles.photoShade} />
            </div>

            {/* Informações principais do perfil */}
            <div className={styles.profileBody}>
              <div className={styles.profileHead}>
                <div>
                  <p className={styles.name}>{t("About.name")}</p>
                  <p className={styles.role}>{t("About.role")}</p>
                </div>

                {/* Baixar cv */}
                <a
                  className={styles.contactBtn}
                  href={currentCv.href}
                  download={currentCv.download}
                  aria-label={t("About.cv")}
                >
                  <IconDownload size={18} />
                </a>
              </div>

              {/* Base e disponibilidade */}
              <div className={styles.profileMeta}>
                <div>
                  <span>{t("About.profile.location_label")}</span>
                  <strong>
                    <IconMapPin size={15} />
                    {t("About.profile.location")}
                  </strong>
                </div>
                <div>
                  <span>{t("About.profile.availability_label")}</span>
                  <strong>{t("About.profile.availability")}</strong>
                </div>
              </div>

              {/* Métricas rápidas do perfil */}
              <div className={styles.profileStats}>
                <div>
                  <strong>{t("About.profile.experience_value")}</strong>
                  <span>{t("About.profile.experience_label")}</span>
                </div>
                <div>
                  <strong>{t("About.profile.delivery_value")}</strong>
                  <span>{t("About.profile.delivery_label")}</span>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Conteúdo principal sobre experiência, forma de trabalho e stack */}
          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={styles.content}
          >
            {/* Texto de apresentação */}
            <div className={styles.storyCard}>
              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: t("About.p1") }}
              />

              <p
                className={styles.paragraph}
                dangerouslySetInnerHTML={{ __html: t("About.p2") }}
              />
            </div>

            {/* Destaques profissionais */}
            <div className={styles.highlights}>
              {highlights.map(({ key, Icon }, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className={styles.highlight}
                >
                  <span className={styles.highlightIcon}>
                    <Icon size={18} />
                  </span>
                  <p className={styles.highlightTitle}>
                    {t(`About.highlights.${key}.title`)}
                  </p>
                  <p className={styles.highlightText}>
                    {t(`About.highlights.${key}.text`)}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stack principal */}
            <div className={styles.stackBlock}>
              <p className={styles.stackTitle}>{t("About.stack_title")}</p>
              <div className={styles.stack}>
                {STACK.map((tech) => (
                  <span key={tech} className={styles.chip}>
                    {tech}
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
