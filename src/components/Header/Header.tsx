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
import { IoMdMailUnread } from "react-icons/io";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Configuração do WhatsApp para RB Engenharia
    const phoneNumber = "5577981337664";
    const message = "Olá! Gostaria de solicitar um orçamento gratuito para energia solar com a RB Engenharia.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Início", link: "#inicio", icon: <Home className="h-4 w-4" /> },
        { name: "Sobre", link: "#about", icon: <UserCircle className="h-4 w-4" /> },
        { name: "Projetos", link: "#projects", icon: <Briefcase className="h-4 w-4" /> },
        { name: "Contato", link: "#contact", icon: <MessageSquare className="h-4 w-4" /> },
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
                            <IoMdMailUnread size={20} />
                            <span>gervasiocardoso10@gmail.com</span>
                        </NavbarButton>

                        {/* Botão de Orçamento - Link via Propriedade href */}
                        <NavbarButton
                            variant="primary"
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaButton}
                        >
                           Contate me
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
                               Fale comigo
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </header>
    );
}