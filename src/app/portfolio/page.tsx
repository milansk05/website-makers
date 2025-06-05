// src/app/portfolio/page.tsx - Verbeterde Portfolio pagina
'use client';

import React, { useState } from 'react';
import { ExternalLink, Eye, Code, Calendar, Tag, ArrowRight, Star, TrendingUp, Award } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sectie } from '../../components/ui/Sectie';
import { Kaart } from '../../components/ui/Kaart';
import { Knop } from '../../components/ui/Knop';

interface PortfolioProject {
    id: string;
    titel: string;
    korteDescriptie: string;
    uitgebreideDescriptie: string;
    afbeeldingUrl: string;
    websiteUrl?: string;
    technologieen: string[];
    categorie: 'website' | 'webshop' | 'applicatie' | 'redesign';
    datum: string;
    klant: string;
    resultaten: string[];
    uitgelicht: boolean;
    kleurGradient: string;
}

const portfolioProjecten: PortfolioProject[] = [
    {
        id: 'bloemenwinkel-de-tulp',
        titel: 'Bloemenwinkel De Tulp',
        korteDescriptie: 'Moderne webshop voor lokale bloemenwinkel met online bestelsysteem',
        uitgebreideDescriptie: 'Een complete webshop ontwikkeling voor Bloemenwinkel De Tulp, inclusief online bestelsysteem, bezorggebieden en integratie met hun voorraadsysteem. De website heeft een warme, natuurlijke uitstraling die perfect past bij het merk.',
        afbeeldingUrl: '/placeholder-project-1.jpg',
        websiteUrl: 'https://bloemenwinkeldetulp.nl',
        technologieen: ['Next.js', 'WordPress', 'WooCommerce', 'Stripe'],
        categorie: 'webshop',
        datum: '2024-03',
        klant: 'Bloemenwinkel De Tulp',
        resultaten: [
            '60% toename in online bestellingen',
            '40% meer nieuwe klanten',
            'Gemiddelde besteltijd verdubbeld'
        ],
        uitgelicht: true,
        kleurGradient: 'from-pink-500 to-rose-500'
    },
    {
        id: 'jansen-consultancy',
        titel: 'Jansen Consultancy',
        korteDescriptie: 'Professionele bedrijfswebsite voor management consultancy',
        uitgebreideDescriptie: 'Een strakke, professionele website voor Jansen Consultancy die vertrouwen uitstraalt en potentiële klanten overtuigt. Met focus op diensten, expertise en resultaten.',
        afbeeldingUrl: '/placeholder-project-2.jpg',
        websiteUrl: 'https://jansenconsultancy.nl',
        technologieen: ['React', 'Next.js', 'Tailwind CSS', 'Sanity CMS'],
        categorie: 'website',
        datum: '2024-01',
        klant: 'Jansen Consultancy',
        resultaten: [
            '150% meer contactaanvragen',
            'Gemiddelde sessieduur verdubbeld',
            'Professionele uitstraling verbeterd'
        ],
        uitgelicht: true,
        kleurGradient: 'from-blue-500 to-indigo-500'
    },
    {
        id: 'gezondheidscentrum-vitaal',
        titel: 'Gezondheidscentrum Vitaal',
        korteDescriptie: 'Website met online afspraaksysteem voor gezondheidscentrum',
        uitgebreideDescriptie: 'Een gebruiksvriendelijke website voor Gezondheidscentrum Vitaal met een geïntegreerd online afspraaksysteem. Patiënten kunnen nu eenvoudig afspraken inplannen en informatie vinden over diensten.',
        afbeeldingUrl: '/placeholder-project-3.jpg',
        websiteUrl: 'https://gezondheidscentrumvitaal.nl',
        technologieen: ['WordPress', 'Custom Plugin', 'PHP', 'MySQL'],
        categorie: 'website',
        datum: '2024-02',
        klant: 'Gezondheidscentrum Vitaal',
        resultaten: [
            '70% minder telefonische afspraken',
            '50% tijdsbesparing voor personeel',
            'Betere patiëntervaring'
        ],
        uitgelicht: false,
        kleurGradient: 'from-green-500 to-emerald-500'
    },
    {
        id: 'restaurant-de-smaak',
        titel: 'Restaurant De Smaak',
        korteDescriptie: 'Moderne website met online reserveringssysteem en menukaart',
        uitgebreideDescriptie: 'Een smaakvolle website voor Restaurant De Smaak met online reserveringssysteem, digitale menukaart en integratie met sociale media. Perfect voor het aantrekken van nieuwe gasten.',
        afbeeldingUrl: '/placeholder-project-4.jpg',
        websiteUrl: 'https://restaurantdesmaak.nl',
        technologieen: ['Next.js', 'Strapi', 'React', 'OpenTable API'],
        categorie: 'website',
        datum: '2023-12',
        klant: 'Restaurant De Smaak',
        resultaten: [
            '80% meer online reserveringen',
            '25% toename in nieuwe gasten',
            'Verbeterde online aanwezigheid'
        ],
        uitgelicht: false,
        kleurGradient: 'from-orange-500 to-amber-500'
    },
    {
        id: 'webshop-gadgets-plus',
        titel: 'Gadgets Plus Webshop',
        korteDescriptie: 'Complete e-commerce oplossing voor tech gadgets',
        uitgebreideDescriptie: 'Een complete webshop voor Gadgets Plus met uitgebreide productfilters, vergelijkingsfunctie en integratie met multiple payment providers. Focus op gebruiksvriendelijkheid en conversie.',
        afbeeldingUrl: '/placeholder-project-5.jpg',
        websiteUrl: 'https://gadgetsplus.nl',
        technologieen: ['Shopify', 'Liquid', 'JavaScript', 'Klaviyo'],
        categorie: 'webshop',
        datum: '2024-04',
        klant: 'Gadgets Plus',
        resultaten: [
            '120% toename in online verkoop',
            '35% hogere conversie rate',
            '90% minder winkelwagen verlating'
        ],
        uitgelicht: true,
        kleurGradient: 'from-purple-500 to-violet-500'
    },
    {
        id: 'fitness-studio-max',
        titel: 'Fitness Studio Max',
        korteDescriptie: 'Redesign van bestaande website met ledenbeheer systeem',
        uitgebreideDescriptie: 'Complete redesign van de website voor Fitness Studio Max, inclusief een nieuw ledenbeheer systeem waar leden hun abonnementen kunnen beheren en lessen kunnen boeken.',
        afbeeldingUrl: '/placeholder-project-6.jpg',
        websiteUrl: 'https://fitnessstudiomax.nl',
        technologieen: ['WordPress', 'Custom Theme', 'WooCommerce', 'Member Plugin'],
        categorie: 'redesign',
        datum: '2024-01',
        klant: 'Fitness Studio Max',
        resultaten: [
            '45% meer online inschrijvingen',
            '60% minder administratie',
            'Moderne, professionele uitstraling'
        ],
        uitgelicht: false,
        kleurGradient: 'from-red-500 to-rose-500'
    }
];

const categorieën = [
    { waarde: 'alle', label: 'Alle Projecten', icoon: Star },
    { waarde: 'website', label: 'Websites', icoon: Code },
    { waarde: 'webshop', label: 'Webshops', icoon: TrendingUp },
    { waarde: 'applicatie', label: 'Applicaties', icoon: Award },
    { waarde: 'redesign', label: 'Redesigns', icoon: ArrowRight }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
    exit: {
        opacity: 0,
        y: -50,
        scale: 0.9,
        transition: {
            duration: 0.3,
        },
    },
};

export default function PortfolioPagina() {
    const [geselecteerdeCategorie, setGeselecteerdeCategorie] = useState('alle');
    const [geselecteerdProject, setGeselecteerdProject] = useState<PortfolioProject | null>(null);

    const gefilterdeProjecten = geselecteerdeCategorie === 'alle'
        ? portfolioProjecten
        : portfolioProjecten.filter(project => project.categorie === geselecteerdeCategorie);

    const uitgelichtProjecten = portfolioProjecten.filter(project => project.uitgelicht);

    return (
        <>
            {/* Hero Sectie met animaties */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="relative overflow-hidden">
                    {/* Achtergrond animaties */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                        <motion.div
                            className="absolute bottom-10 right-10 w-80 h-80 bg-primair-300 rounded-full opacity-20 blur-3xl"
                            animate={{
                                x: [0, -80, 0],
                                y: [0, 60, 0],
                            }}
                            transition={{
                                duration: 25,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </div>

                    <motion.div
                        className="text-center space-y-8 text-white relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4">
                            <motion.h1
                                className="text-4xl lg:text-6xl font-bold"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Ons Portfolio
                            </motion.h1>
                            <motion.p
                                className="text-xl text-primair-100 max-w-3xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Ontdek hoe wij andere ondernemers hebben geholpen met professionele
                                websites die écht resultaat opleveren. Van startups tot gevestigde bedrijven.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="secundair" grootte="groot">
                                    Start Jouw Project
                                </Knop>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                    Gratis Strategiegesprek
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Knop>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>

            {/* Uitgelichte Projecten */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Uitgelichte Projecten
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Deze projecten tonen onze expertise en de resultaten die wij voor onze klanten behalen.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {uitgelichtProjecten.slice(0, 2).map((project) => (
                        <motion.div
                            key={project.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Kaart hoverEffect padding="groot" className="h-full relative overflow-hidden">
                                {/* Gradient overlay */}
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.kleurGradient} opacity-10 rounded-bl-full`} />

                                <div className="space-y-6 relative z-10">
                                    {/* Project Afbeelding */}
                                    <motion.div
                                        className={`relative bg-gradient-to-br ${project.kleurGradient} rounded-lg h-48 flex items-center justify-center overflow-hidden`}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="text-white font-medium text-center px-4">
                                            {project.titel}
                                        </div>
                                        <motion.div
                                            className="absolute top-3 right-3"
                                            initial={{ rotate: 0 }}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                                                <Star className="w-3 h-3 mr-1" />
                                                Uitgelicht
                                            </span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Project Info */}
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl font-bold text-secundair-900">
                                                {project.titel}
                                            </h3>
                                            <motion.span
                                                className={`bg-gradient-to-r ${project.kleurGradient} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {project.categorie}
                                            </motion.span>
                                        </div>

                                        <p className="text-secundair-600 leading-relaxed">
                                            {project.korteDescriptie}
                                        </p>

                                        {/* Resultaten */}
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-secundair-900 flex items-center">
                                                <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                                                Resultaten:
                                            </h4>
                                            <ul className="space-y-1">
                                                {project.resultaten.slice(0, 2).map((resultaat, resultaatIndex) => (
                                                    <motion.li
                                                        key={resultaatIndex}
                                                        className="flex items-center text-sm text-secundair-700"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: resultaatIndex * 0.1 }}
                                                    >
                                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                        {resultaat}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Technologieën */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologieen.slice(0, 3).map((tech, techIndex) => (
                                                <motion.span
                                                    key={techIndex}
                                                    className="bg-secundair-100 text-secundair-700 px-2 py-1 rounded text-xs"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: techIndex * 0.05 }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                            {project.technologieen.length > 3 && (
                                                <span className="bg-secundair-100 text-secundair-700 px-2 py-1 rounded text-xs">
                                                    +{project.technologieen.length - 3} meer
                                                </span>
                                            )}
                                        </div>

                                        {/* Acties */}
                                        <div className="flex gap-3 pt-2">
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Knop
                                                    variant="primair"
                                                    klikHandler={() => setGeselecteerdProject(project)}
                                                >
                                                    <Eye className="w-4 h-4 mr-2" />
                                                    Bekijk Details
                                                </Knop>
                                            </motion.div>
                                            {project.websiteUrl && (
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Knop variant="outline">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Live Site
                                                    </Knop>
                                                </motion.div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Kaart>
                        </motion.div>
                    ))}
                </motion.div>
            </Sectie>

            {/* Alle Projecten */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Alle Projecten
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Bekijk onze complete portfolio en filter op projecttype.
                    </p>
                </motion.div>

                {/* Verbeterde Filter Knoppen */}
                <motion.div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {categorieën.map((categorie, index) => {
                        const IconComponent = categorie.icoon;
                        const isActive = geselecteerdeCategorie === categorie.waarde;

                        return (
                            <motion.button
                                key={categorie.waarde}
                                onClick={() => setGeselecteerdeCategorie(categorie.waarde)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${isActive
                                        ? 'bg-gradient-to-r from-primair-600 to-primair-700 text-white shadow-lg'
                                        : 'bg-secundair-100 text-secundair-700 hover:bg-secundair-200'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <IconComponent className="w-4 h-4" />
                                <span>{categorie.label}</span>
                                {isActive && (
                                    <motion.div
                                        className="w-2 h-2 bg-white rounded-full"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Projecten Grid met AnimatePresence */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={geselecteerdeCategorie}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {gefilterdeProjecten.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                                layout
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.2 },
                                }}
                            >
                                <Kaart hoverEffect padding="groot" className="h-full relative overflow-hidden group">
                                    {/* Gradient corner */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${project.kleurGradient} opacity-10 rounded-bl-full transition-all duration-300 group-hover:opacity-20`} />

                                    <div className="space-y-4 relative z-10">
                                        {/* Project Afbeelding */}
                                        <motion.div
                                            className={`relative bg-gradient-to-br ${project.kleurGradient} rounded-lg h-40 flex items-center justify-center overflow-hidden`}
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className="text-white font-medium text-center px-4">
                                                {project.titel}
                                            </div>
                                            {project.uitgelicht && (
                                                <motion.div
                                                    className="absolute top-2 right-2"
                                                    animate={{
                                                        rotate: [0, 10, -10, 0],
                                                    }}
                                                    transition={{
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut',
                                                    }}
                                                >
                                                    <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-medium">
                                                        ⭐
                                                    </span>
                                                </motion.div>
                                            )}
                                        </motion.div>

                                        {/* Project Info */}
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-bold text-secundair-900 group-hover:text-primair-600 transition-colors">
                                                    {project.titel}
                                                </h3>
                                                <motion.span
                                                    className={`bg-gradient-to-r ${project.kleurGradient} text-white px-2 py-1 rounded text-xs font-medium capitalize`}
                                                    whileHover={{ scale: 1.1 }}
                                                >
                                                    {project.categorie}
                                                </motion.span>
                                            </div>

                                            <p className="text-secundair-600 text-sm leading-relaxed">
                                                {project.korteDescriptie}
                                            </p>

                                            <div className="flex items-center text-xs text-secundair-500">
                                                <Calendar className="w-3 h-3 mr-1" />
                                                {new Date(project.datum).toLocaleDateString('nl-NL', {
                                                    year: 'numeric',
                                                    month: 'long'
                                                })}
                                            </div>

                                            {/* Technologieën */}
                                            <div className="flex flex-wrap gap-1">
                                                {project.technologieen.slice(0, 2).map((tech, techIndex) => (
                                                    <motion.span
                                                        key={techIndex}
                                                        className="bg-secundair-100 text-secundair-600 px-2 py-1 rounded text-xs"
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                                {project.technologieen.length > 2 && (
                                                    <span className="bg-secundair-100 text-secundair-600 px-2 py-1 rounded text-xs">
                                                        +{project.technologieen.length - 2}
                                                    </span>
                                                )}
                                            </div>

                                            {/* Acties */}
                                            <div className="flex gap-2 pt-2">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Knop
                                                        variant="primair"
                                                        grootte="klein"
                                                        klikHandler={() => setGeselecteerdProject(project)}
                                                    >
                                                        <Eye className="w-3 h-3 mr-1" />
                                                        Details
                                                    </Knop>
                                                </motion.div>
                                                {project.websiteUrl && (
                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Knop variant="outline" grootte="klein">
                                                            <ExternalLink className="w-3 h-3 mr-1" />
                                                            Live
                                                        </Knop>
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </Kaart>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </Sectie>

            {/* Verbeterde Project Detail Modal */}
            <AnimatePresence>
                {geselecteerdProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setGeselecteerdProject(null)}
                    >
                        <motion.div
                            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-8">
                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h2 className="text-3xl font-bold text-secundair-900 mb-2">
                                            {geselecteerdProject.titel}
                                        </h2>
                                        <p className="text-secundair-600 flex items-center">
                                            <Tag className="w-4 h-4 mr-2" />
                                            {geselecteerdProject.klant}
                                        </p>
                                    </div>
                                    <motion.button
                                        onClick={() => setGeselecteerdProject(null)}
                                        className="text-secundair-400 hover:text-secundair-600 text-3xl font-light w-10 h-10 flex items-center justify-center rounded-full hover:bg-secundair-100 transition-colors"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        ×
                                    </motion.button>
                                </div>

                                <div className="space-y-8">
                                    {/* Project Afbeelding */}
                                    <motion.div
                                        className={`bg-gradient-to-br ${geselecteerdProject.kleurGradient} rounded-xl h-64 flex items-center justify-center text-white font-medium text-xl shadow-lg`}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        Preview van {geselecteerdProject.titel}
                                    </motion.div>

                                    {/* Beschrijving */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <h3 className="text-xl font-semibold text-secundair-900 mb-4 flex items-center">
                                            <Code className="w-5 h-5 mr-2 text-primair-600" />
                                            Projectbeschrijving
                                        </h3>
                                        <p className="text-secundair-600 leading-relaxed">
                                            {geselecteerdProject.uitgebreideDescriptie}
                                        </p>
                                    </motion.div>

                                    {/* Resultaten */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-xl font-semibold text-secundair-900 mb-4 flex items-center">
                                            <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                                            Behaalde Resultaten
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {geselecteerdProject.resultaten.map((resultaat, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="bg-green-50 border border-green-200 rounded-lg p-4 text-center"
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + index * 0.1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    <div className="text-green-700 font-medium text-sm">
                                                        {resultaat}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Technologieën */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <h3 className="text-xl font-semibold text-secundair-900 mb-4 flex items-center">
                                            <Code className="w-5 h-5 mr-2 text-primair-600" />
                                            Gebruikte Technologieën
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {geselecteerdProject.technologieen.map((tech, index) => (
                                                <motion.span
                                                    key={index}
                                                    className={`bg-gradient-to-r ${geselecteerdProject.kleurGradient} text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg`}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.6 + index * 0.05 }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Acties */}
                                    <motion.div
                                        className="flex gap-4 pt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        {geselecteerdProject.websiteUrl && (
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Knop variant="primair" grootte="groot">
                                                    <ExternalLink className="w-5 h-5 mr-2" />
                                                    Bekijk Live Website
                                                </Knop>
                                            </motion.div>
                                        )}
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Knop variant="outline" grootte="groot">
                                                <Star className="w-5 h-5 mr-2" />
                                                Vergelijkbaar Project Starten
                                            </Knop>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CTA Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="relative overflow-hidden">
                    {/* Achtergrond animaties */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </div>

                    <motion.div
                        className="text-center space-y-8 relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4">
                            <motion.h2
                                className="text-3xl lg:text-4xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Jouw project als volgende?
                            </motion.h2>
                            <motion.p
                                className="text-xl text-primair-100 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Laat ons ook jouw bedrijf helpen groeien met een professionele website
                                die resultaten oplevert. Start vandaag nog met een gratis gesprek.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="secundair" grootte="groot">
                                    Start Mijn Project
                                </Knop>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                    Bekijk Onze Diensten
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Knop>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>
        </>
    );
}