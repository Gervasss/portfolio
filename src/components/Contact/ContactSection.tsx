"use client";

import React from 'react';
import styles from './ContactSection.module.css';
import { Mail, Phone, MapPin, Github, Instagram, Send, Linkedin } from 'lucide-react';
import { useLanguage } from "@/src/contexts/LanguageContext";

type FormState = {
    name: string;
    email: string;
    message: string;
    errors: Record<string, string>;
    submitting: boolean;
    submitted: boolean;
};

const WHATSAPP_NUMBER_E164 = '5573981542775';
const CITY_QUERY = 'Vitória da Conquista - Bahia';

export default function ContactSection() {
    const { t } = useLanguage();
    const [state, setState] = React.useState<FormState>({
        name: '',
        email: '',
        message: '',
        errors: {},
        submitting: false,
        submitted: false,
    });

    const handleChange =
        (key: keyof Pick<FormState, 'name' | 'email' | 'message'>) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                const value = e.target.value;
                setState((prev) => ({
                    ...prev,
                    [key]: value,
                    errors: { ...prev.errors, [key]: '' },
                    submitted: false,
                }));
            };

    const validate = () => {
        const errors: Record<string, string> = {};
        if (!state.name.trim()) errors.name = t("Contact.errors.name");
        if (!state.email.trim()) errors.email = t("Contact.errors.email");
        if (!state.message.trim()) errors.message = t("Contact.errors.message_empty");
        if (state.message.trim().length < 10) {
            errors.message = t("Contact.errors.message_short");
        }
        return errors;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const errors = validate();
        if (Object.keys(errors).length) {
            setState((prev) => ({ ...prev, errors }));
            return;
        }

        setState((prev) => ({ ...prev, submitting: true }));

        // Template traduzido do WhatsApp
        const whatsappMessage = t("Contact.whatsapp_template")
            .replace("{name}", state.name)
            .replace("{email}", state.email)
            .replace("{message}", state.message)
            .trim();

        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, '_blank');

        setState({
            name: '',
            email: '',
            message: '',
            errors: {},
            submitting: false,
            submitted: true,
        });
    };

    const whatsappDirect = `https://wa.me/${WHATSAPP_NUMBER_E164}`;
    const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CITY_QUERY)}`;

    return (
        <section className={styles.section} id="contact">
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot} />
                        {t("Contact.badge")}
                    </div>
                    <h2 className={styles.title}>{t("Contact.title")}</h2>
                    <p className={styles.subtitle}>{t("Contact.subtitle")}</p>
                </div>

                <div className={styles.grid}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.label}>{t("Contact.form.name")}</label>
                            <input
                                className={styles.input}
                                placeholder={t("Contact.form.name_placeholder")}
                                value={state.name}
                                onChange={handleChange('name')}
                            />
                            {!!state.errors?.name && (
                                <p className={styles.error}>{state.errors.name}</p>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>{t("Contact.form.email")}</label>
                            <input
                                className={styles.input}
                                placeholder={t("Contact.form.email_placeholder")}
                                value={state.email}
                                onChange={handleChange('email')}
                            />
                            {!!state.errors?.email && (
                                <p className={styles.error}>{state.errors.email}</p>
                            )}
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>{t("Contact.form.message")}</label>
                            <textarea
                                className={styles.textarea}
                                placeholder={t("Contact.form.message_placeholder")}
                                value={state.message}
                                onChange={handleChange('message')}
                            />
                            {!!state.errors?.message && (
                                <p className={styles.error}>{state.errors.message}</p>
                            )}
                        </div>

                        <button
                            className={styles.button}
                            type="submit"
                            disabled={state.submitting}
                        >
                            <span>{state.submitting ? t("Contact.form.button_submitting") : t("Contact.form.button")}</span>
                            <Send className={styles.sendIcon} />
                        </button>

                        {state.submitted && (
                            <p className={styles.success}>{t("Contact.form.success")}</p>
                        )}
                    </form>

                    <div className={styles.side}>
                        <h3 className={styles.sideTitle}>{t("Contact.side.title")}</h3>

                        <div className={styles.infoRow}>
                            <a className={styles.iconBubble} href={whatsappDirect} target="_blank" rel="noreferrer">
                                <Phone className={styles.icon} />
                            </a>
                            <div className={styles.infoText}>
                                <p>WhatsApp</p>
                                <p className={styles.infoStrong}>(73) 98154-2775</p>
                            </div>
                        </div>

                        <div className={styles.infoRow}>
                            <a className={styles.iconBubble} href="mailto:gervasiocardoso10@gmail.com">
                                <Mail className={styles.icon} />
                            </a>
                            <div className={styles.infoText}>
                                <p>Email</p>
                                <p className={styles.infoStrong}>gervasiocardoso10@gmail.com</p>
                            </div>
                        </div>

                        <div className={styles.infoRow}>
                            <a className={styles.iconBubble} href={mapsHref} target="_blank" rel="noreferrer">
                                <MapPin className={styles.icon} />
                            </a>
                            <div className={styles.infoText}>
                                <p>{t("Contact.side.location")}</p>
                                <p className={styles.infoStrong}>Vitória da Conquista - Bahia</p>
                            </div>
                        </div>

                        <div className={styles.socialRow}>
                            <a className={styles.social} href="https://www.linkedin.com/in/gerv%C3%A1sio-cardoso/" target="_blank" rel="noreferrer">
                                <Linkedin className={styles.icon} />
                            </a>
                            <a className={styles.social} href="https://www.instagram.com/gervascard/" target="_blank" rel="noreferrer">
                                <Instagram className={styles.icon} />
                            </a>
                            <a className={styles.social} href="https://github.com/Gervasss" target="_blank" rel="noreferrer">
                                <Github className={styles.icon} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}