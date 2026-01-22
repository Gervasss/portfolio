'use client';

import styles from './FooterSection.module.css';

export default function FooterSection() {
    return (
        <section className={styles.section}>
            <footer className={styles.footer}>
                <div className={styles.glowWrap} aria-hidden="true">
                    <div className={styles.glowA} />
                    <div className={styles.glowB} />
                </div>

                <div className={styles.card}>
                    <div className={styles.brandCol}>
                        <a href="#" className={styles.brand}>
                           
                            <span className={styles.brandName}>Gervásio Cardoso</span>
                        </a>

                        <p className={styles.desc}>
                            Acadêmico de Ciência da Computação na UESB, com experiência no mercado de TI. Atuo no Desenvolvimento Web, contribuindo para projetos em produção ,tanto no front-end quanto no Back-end .
                        </p>

                        <div className={styles.social}>
                            <div className={styles.social}>
                                <a
                                    href="https://www.instagram.com/gervascard/"
                                    aria-label="Instagram"
                                    className={styles.socialLink}
                                    style={{marginTop:"-5px"}}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <svg
                                        className={styles.socialIcon}
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M7.75 2h8.5C19.44 2 22 4.56 22 7.75v8.5C22 19.44 19.44 22 16.25 22h-8.5C4.56 22 2 19.44 2 16.25v-8.5C2 4.56 4.56 2 7.75 2zm0 1.5C5.4 3.5 3.5 5.4 3.5 7.75v8.5c0 2.35 1.9 4.25 4.25 4.25h8.5c2.35 0 4.25-1.9 4.25-4.25v-8.5c0-2.35-1.9-4.25-4.25-4.25h-8.5z" />
                                        <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" />
                                        <circle cx="17.5" cy="6.5" r="1.25" />
                                    </svg>
                                </a>
                            </div>


                            <a href="https://github.com/Gervasss" aria-label="GitHub" className={styles.socialLink}>
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .29a12 12 0 00-3.797 23.401c.6.11.82-.26.82-.577v-2.17c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.332-1.756-1.332-1.756-1.09-.744.084-.729.084-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.809 1.306 3.495.999.106-.775.418-1.307.76-1.608-2.665-.301-5.466-1.332-5.466-5.933 0-1.31.469-2.381 1.236-3.222-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.301 1.23a11.502 11.502 0 016.002 0c2.292-1.552 3.297-1.23 3.297-1.23.654 1.653.242 2.873.119 3.176.77.841 1.235 1.912 1.235 3.222 0 4.61-2.805 5.629-5.476 5.925.429.369.813 1.096.813 2.211v3.285c0 .32.217.694.825.576A12 12 0 0012 .29" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/gerv%C3%A1sio-cardoso/ " aria-label="LinkedIn" className={styles.socialLink}>
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5v-14a5 5 0 00-5-5zm-11 19h-3v-9h3zm-1.5-10.268a1.752 1.752 0 110-3.505 1.752 1.752 0 010 3.505zm15.5 10.268h-3v-4.5c0-1.07-.02-2.45-1.492-2.45-1.495 0-1.725 1.166-1.725 2.372v4.578h-3v-9h2.88v1.23h.04a3.157 3.157 0 012.847-1.568c3.042 0 3.605 2.003 3.605 4.612v4.726z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <nav className={styles.nav}>
                        <div className={styles.navCol}>
                            <div className={styles.navTitle}>Links Rápidos</div>
                            <ul className={styles.navList}>
                                <li><a href="#" className={styles.navLink}>Início</a></li>
                                <li><a href="#" className={styles.navLink}>Formação</a></li>
                                <li><a href="#" className={styles.navLink}>Experiência </a></li>
                                <li><a href="#" className={styles.navLink}>Projetos</a></li>
                                <li><a href="#" className={styles.navLink}>Stacks</a></li>
                                <li><a href="#" className={styles.navLink}>Contato</a></li>
                            </ul>
                        </div>

                        <div className={styles.navCol}>
                            <div className={styles.navTitle}>Serviços</div>
                            <ul className={styles.navList}>
                                <li><a href="#" className={styles.navLink}>Landing Pages</a></li>
                                <li><a href="#" className={styles.navLink}>Sites</a></li>
                                <li><a href="#" className={styles.navLink}>ERP´s</a></li>
                            </ul>
                        </div>

                        <div className={styles.navCol}>
                            <div className={styles.navTitle}>Atuação</div>
                            <ul className={styles.navList}>
                                <li><a href="#" className={styles.navLink}>Front-End</a></li>
                                <li><a href="#" className={styles.navLink}>Back-end</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div className={styles.copy}>
                    <span>&copy; 2025 @Gervasio Cardoso. Todos os direitos reservados.</span>
                </div>
            </footer>
        </section>
    );
}
