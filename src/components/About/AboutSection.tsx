"use client";

import Image from "next/image";
import { motion } from "motion/react";
import styles from "./AboutSection.module.css";

const STACK = ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Firebase", "CSS"];

export function AboutSection() {
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
            Sobre mim
          </div>
          <h2 className={styles.title}>Quem eu sou e como eu trabalho</h2>
          <p className={styles.subtitle}>
            Uma visão rápida do meu perfil como desenvolvedor, meu foco técnico e o tipo de produto que eu gosto de construir.
          </p>
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
                <p className={styles.role}>Desenvolvedor Full-Stack</p>
              </div>

              <a className={styles.contactBtn} href="#contact">
                Entrar em contato
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
              <p className={styles.paragraph}>
                Eu desenvolvo aplicações com foco em <strong>experiência do usuário</strong>,{" "}
                <strong>performance</strong> e <strong>código sustentável</strong>. Gosto de pegar um problema real
                e transformar em um produto com interface moderna e backend robusto.
              </p>

              <p className={styles.paragraph}>
                Atuo do <strong>front ao back</strong>: construindo telas, organizando componentes, integrando APIs,
                modelando banco e garantindo entregas bem definidas.
              </p>

              <div className={styles.highlights}>
                <div className={styles.highlight}>
                  <p className={styles.highlightTitle}>O que eu entrego</p>
                  <p className={styles.highlightText}>Interfaces responsivas, integrações sólidas e dashboards claros.</p>
                </div>

                <div className={styles.highlight}>
                  <p className={styles.highlightTitle}>Como eu trabalho</p>
                  <p className={styles.highlightText}>Organização, versionamento, comunicação e foco em resultado.</p>
                </div>

                <div className={styles.highlight}>
                  <p className={styles.highlightTitle}>O que eu busco</p>
                  <p className={styles.highlightText}>Projetos reais, produto bem pensado e impacto mensurável.</p>
                </div>
              </div>
            </div>

            <div className={styles.stackBlock}>
              <p className={styles.stackTitle}>Stack principal</p>
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
