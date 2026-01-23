import React from "react";
import styles from "./ProjectsSection.module.css";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

type Project = {
  title: string;
  description: string;
  cover: string; // URL ou /public
  href: string; // página do projeto / demo
  github?: string; // repo
  tags?: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Pousada Itu Admin",
    description:
      "Painel para gestão de reservas, consumo e inventário. Foco em UX, performance e fluxo operacional.",
    cover: "/pousada.png",
    href: "https://admin.pousadaituadmin.com.br/",
    github: "https://github.com/Gervasss/Gerencia-pousada-case-study",
    tags: ["React", "TypeScript", "API", "Dashboard"],
  },
  {
    title: "Admin JG",
    description:
      "Painel de Gestão de Clientes, fornecedores, vendas, gastos, documentos , estoque . Foco em UX, performance e fluxo operacional.",
    cover: "/adminJG.png",
    href: "https://admin-jg.vercel.app/",
    github: "https://github.com/Gervasss/Gerencia-JG-case-study",
    tags: ["Next.js", "UI", "Docs", "Automação"],
  },
  {
    title: "Intranet Mercadótica",
    description:
      "A plataforma tem como intuito ser uma rede para que os colaboradores recebam arquivos da empresa, notícias sobre campanhas e resolução de dúvidas, contando com um chat para contato direto com o suporte daempresa.",
    cover: "/intranet.png",
    href: "https://intranetv2.mercadotica.com/",
    github: "https://github.com/Gervasss/intranet-mercadotica-case-study",
    tags: ["React", "Docs", "Chat"],
  },
  {
    title: "My best Vision",
    description:
      "O My Best Vision é uma plataforma web desenvolvida para auxiliar clientes na escolha da lente oftálmica mais adequada às suas necessidades visuais específicas.A solução combina a prescrição médica com as respostas fornecidas pelo usuário em questionários estruturados sobre hábitos visuais, rotina diária e exposição a telas. Ao final, o sistema direciona o cliente para a lente que melhor atende ao seu perfil, tornando o processo de decisão assertivo e personalizado.",
    cover: "/mbv.png",
    href: "https://mbv.mercadotica.com/",
    github: "https://github.com/Gervasss/my-best-vision-case-study",
    tags: ["React", "Docs", "UI", "Automação"],
  },
    {
    title: "Blog Mercadótica",
    description:
      "objetivo do blog é divulgar notícias sobre a empresa, como anúncios de novos franqueados, promoções e campanhas publicitárias.",
    cover: "/blog.png",
    href: "https://blog.mercadotica.com/",
    github: "",
    tags: ["React", "Docs", "UI", "Automação"],
  },
      {
    title: "Cristiane Psicóloga",
    description:
      "Apresenta de forma clara todas as informações relevantes sobre as competências da profissional, permitindo que o cliente compreenda facilmente seus serviços, formações e áreas de atuação. ",
    cover: "/cris.png",
    href: "https://www.cristianepsi.com.br/",
    github: "",
    tags: ["Next", "SEO", "UI", "Profissional", "IA otimizada"],
  },
     {
    title: "Movies DB",
    description:
      "O MovieDB é uma aplicação web desenvolvida com Next.js que permite ao usuário explorar um catálogo de filmes de forma intuitiva e visualmente atrativa. A plataforma consome dados de uma API pública de filmes para exibir informações como títulos, avaliações, gêneros e imagens promocionais,. ",
    cover: "/movie.png",
    href: "https://moviedb-sable.vercel.app/",
    github: "https://github.com/Gervasss/moviedb",
    tags: ["Next", "SEO", "UI", "Profissional", "IA otimizada", "Server Components",],
  },
  
];

export default function ProjectsSection() {
  return (
    <section className={styles.section} id="projects" aria-label="Projetos">
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Projetos
          </div>

          <h2 className={styles.title}>Projetos em destaque</h2>
          <p className={styles.subtitle}>
            Uma seleção do que venho construindo — foco em produto, performance e experiência do usuário.
          </p>
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
                    Ver site funcionando
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
                      GitHub
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
