"use client";

import { useEffect, useState } from "react";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/src/components/ui/resizable-navbar";
import styles from "./Header.module.css";
import { Briefcase, Home, MessageSquare, UserCircle, } from "lucide-react";
import { LanguageSelector } from "../LanguageSelector/LanguageSelector";
import { useLanguage } from "@/src/contexts/LanguageContext"; // 1. Importação necessária

export function Header() {
    const { t } = useLanguage(); // 2. Hook de tradução
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Configuração do WhatsApp 
    const phoneNumber = "5573981542775";
    // 3. Mensagem traduzida automaticamente via JSON
    const message = t("Header.whatsapp_message"); 
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 4. Nomes dos itens usando a função t()
    const navItems = [
        { name: t("Header.nav.home"), link: "#hero", icon: <Home className="h-4 w-4" /> },
        { name: t("Header.nav.about"), link: "#about", icon: <UserCircle className="h-4 w-4" /> },
        { name: t("Header.nav.projects"), link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
        { name: t("Header.nav.contact"), link: "#contact", icon: <MessageSquare className="h-4 w-4" /> },
    ];

    return (
        <header className={`${styles.headerContainer} ${scrolled ? styles.scrolled : ""}`}>
            
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody className={styles.navbar } >
                    <div className={styles.logoWrapper}>
                        <NavbarLogo />
                    </div>

                    <div className={styles.desktopMenu}>
                        <NavItems items={navItems} />
                    </div>

                    <div className="flex items-center gap-4">
                        {/* Botão de Telefone - Link via Propriedade href */}
                        <NavbarButton
                            variant="secondary"
                            href={`tel:${phoneNumber}`}
                            style={{ marginLeft: '' }}
                            className={`flex items-center gap-2 ${styles.phoneButton}`}
                        >
                           <LanguageSelector />
                        </NavbarButton>

                        {/* Botão de Orçamento - Link via Propriedade href */}
                        <NavbarButton
                            variant="primary"
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                            {/* 5. Texto traduzido */}
                            {t("Header.buttons.contact_me")}
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        className={styles.Menuitem}
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}

                    >
                        <div className={styles.mobileLinks}>
                              <div style={{marginLeft:"10px"}}><LanguageSelector/></div>
                            {navItems.map((item, idx) => (
                                <a
                                    key={`mobile-link-${idx}`}
                                    href={item.link}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={styles.navLink}
                                >
                                    <span className={styles.navIcon}>{item.icon}</span>
                                    <span className={styles.navText}>{item.name}</span>
                                </a>
                            ))}
                        </div>
                        <div className="flex w-full flex-col gap-4 p-4">
                            <NavbarButton
                                variant="primary"
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.orçamento} w-full`}
                            >
                                {/* 6. Texto traduzido */}
                                {t("Header.buttons.talk_to_me")}
                            </NavbarButton>
                        </div>
                       
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    );
}
