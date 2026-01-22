

import { AboutSection } from "@/src/components/About/AboutSection";
import { ExperiencesSection } from "@/src/components/Experiences/ExpericencesSection";
import { Header } from "@/src/components/Header/Header";
import { HeroSection } from "@/src/components/Hero/HeroSection";
import { WhatsAppFloat } from "@/src/components/WhatsappFloat/WhatsappFloat";
import Head from "next/head";
import Script from "next/script";




function HomePage() {




    return (
        <>
            <Head>
                {/* Título otimizado para SEO – Nome + Cargo + Stack */}
                <title>Gervásio Cardoso | Desenvolvedor Full-Stack</title>

                {/* Meta description – foco em autoridade técnica e portfólio */}
                <meta
                    name="description"
                    content="Portfólio de Gervásio Cardoso, desenvolvedor full-stack especializado em React, TypeScript, Node.js e soluções web modernas. Projetos reais, código limpo e foco em performance."
                />

                {/* Palavras-chave – usadas por recrutadores e clientes */}
                <meta
                    name="keywords"
                    content="Desenvolvedor Full Stack, Desenvolvedor Front-end, Desenvolvedor Back-end, React, TypeScript, Node.js, JavaScript, Vite, Next.js, API REST, Portfólio Desenvolvedor, Programador Web"
                />

                {/* Autor */}
                <meta name="author" content="Gervásio Cardoso" />
                <meta name="robots" content="index, follow" />

                {/* Canonical – ajuste quando publicar */}
                <link rel="canonical" href="https://www.gervasiocardoso.dev" />

                {/* Open Graph – LinkedIn, WhatsApp, Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.gervasiocardoso.dev" />
                <meta property="og:title" content="Gervásio Cardoso | Desenvolvedor Full-Stack" />
                <meta
                    property="og:description"
                    content="Conheça meus projetos e soluções como desenvolvedor full-stack. Especialista em aplicações modernas com React, TypeScript e Node.js."
                />
                <meta
                    property="og:image"
                    content="https://www.gervasiocardoso.dev/og-image.png"
                />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta
                    property="og:image:alt"
                    content="Portfólio de Gervásio Cardoso - Desenvolvedor Full-Stack"
                />
                <meta property="og:locale" content="pt_BR" />
                <meta property="og:site_name" content="Gervásio Cardoso" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gervásio Cardoso | Desenvolvedor Full-Stack" />
                <meta
                    name="twitter:description"
                    content="Portfólio profissional com projetos em React, TypeScript e Node.js."
                />
                <meta
                    name="twitter:image"
                    content="https://www.gervasiocardoso.dev/og-image.png"
                />

                {/* Favicon */}
                <link rel="icon" type="image/png" href="/favicon.png" />

                {/* Viewport */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            {/* Structured Data para SEO */}
            <Script
                id="schema-org-lawyer-service"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "EnergyService",
                        "name": "Gervásio Cardoso | Desenvolvedor Full-Stack",
                        "image": "",
                        "@id": "",
                        "url": "",
                        "telephone": "73981542775",
                        "priceRange": "R$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Vitória da Conquista",
                            "addressLocality": "Vitória da Conquista",
                            "addressRegion": "BA",
                            "addressCountry": "BR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "-14.86611°",
                            "longitude": " -40.83944°"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "08:00",
                            "closes": "18:00"
                        },
                        "sameAs": [
                            "https://www.instagram.com/gervascard/",

                        ]
                    })
                }}
            />

            <Script
                id="schema-org-local-business"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Gervásio Cardoso | Desenvolvedor Full-Stack",
                        "description": "Desenvolvedor Web",
                        "url": "",
                        "telephone": "73981542775",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Vitória da Conquista",
                            "addressLocality": "Vitória da Conquista",
                            "addressRegion": "BA",
                            "addressCountry": "BR"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "-14.86611°",
                            "longitude": " -40.83944°"
                        },
                        "openingHours": "Mo-Fr 08:00-18:00",
                        "priceRange": "R$"
                    })
                }}
            />

            <Script
                id="schema-org-person"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Gervásio Cardoso",
                        "jobTitle": "Desenvolvedor Web",
                        "url": "",
                        "image": "https://i.imgur.com/fWVL0DH.png",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Vitória da Conquista",
                            "addressRegion": "BA",
                            "addressCountry": "BR"
                        },
                        "hasCredential": {
                            "@type": "EducationalOccupationalCredential",
                            "credentialCategory": "Licença Profissional",
                            "recognizedBy": {
                                "@type": "Organization",
                                "name": ""
                            },

                        },
                        "knowsAbout": [
                            "Desenvolvimento Full-Stack",
                            "Desenvolvimento Front-End",
                            "Desenvolvimento Back-End",
                            "React",
                            "TypeScript",
                            "JavaScript",
                            "Node.js",
                            "APIs REST",
                            "Banco de Dados",
                            "Arquitetura de Software",
                            "Clean Code",
                            "Performance Web",
                            "Sistemas Web Escaláveis"
                        ],
                        "telephone": "+55773981542775",
                        "email": "gervasiocardoso10@gmail.com",
                        "sameAs": [
                            "https://www.instagram.com/gervascard/",

                        ]
                    })
                }}
            />

            {/* Google Analytics Script */}
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
                }}
            />

            {/* Conteúdo da página inicial */}
            <Header />
            <HeroSection />
            <AboutSection/>
            <ExperiencesSection/>
             
           


            <WhatsAppFloat
                phone="5573981542775"
                name="Gervásio Cardoso"
                avatarUrl="/avatar.jpg"
                messagePrefix="Olá! Vi seu portfólio e "
                welcomeMessage="Olá! Me diz o que você precisa e eu te respondo no WhatsApp 🙂"
            />




        </>
    )
}

export default HomePage;