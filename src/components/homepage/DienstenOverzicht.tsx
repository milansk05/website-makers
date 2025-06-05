// src/components/homepage/DienstenOverzicht.tsx
'use client';

import React, { useState } from 'react';
import { Code, Settings, Server, Search, ArrowRight, Star, CheckCircle, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Kaart } from '../ui/Kaart';
import { Knop } from '../ui/Knop';
import { Sectie } from '../ui/Sectie';

const diensten = [
    {
        icoon: Code,
        titel: 'Website Ontwikkeling',
        beschrijving: 'Moderne, responsieve websites die perfect werken op alle apparaten. Van simpele landingspagina\'s tot complexe webapplicaties.',
        functies: ['Responsive design', 'CMS integratie', 'E-commerce', 'Custom functionaliteit'],
        prijsVanaf: 1499,
        populair: true,
        kleurGradient: 'from-blue-500 to-blue-600',
        achtergrondKleur: 'from-blue-50 to-blue-100',
    },
    {
        icoon: Settings,
        titel: 'Website Onderhoud',
        beschrijving: 'Houd je website veilig, snel en up-to-date met onze professionele onderhoudsservice. Maandelijkse updates en monitoring.',
        functies: ['Security updates', 'Performance optimalisatie', 'Content updates', 'Backup beheer'],
        prijsVanaf: 79,
        populair: false,
        kleurGradient: 'from-green-500 to-green-600',
        achtergrondKleur: 'from-green-50 to-green-100',
    },
    {
        icoon: Server,
        titel: 'Hosting & Domein',
        beschrijving: 'Betrouwbare, snelle hosting speciaal geoptimaliseerd voor Nederlandse bedrijven. Inclusief domeinregistratie en SSL.',
        functies: ['99.9% uptime garantie', 'Nederlandse servers', 'SSL certificaten', '24/7 monitoring'],
        prijsVanaf: 19,
        populair: false,
        kleurGradient: 'from-purple-500 to-purple-600',
        achtergrondKleur: 'from-purple-50 to-purple-100',
    },
    {
        icoon: Search,
        titel: 'SEO Optimalisatie',
        beschrijving: 'Verbeter je vindbaarheid in Google en trek meer bezoekers aan. Complete SEO strategie en implementatie.',
        functies: ['Keyword onderzoek', 'On-page optimalisatie', 'Content strategie', 'Ranking monitoring'],
        prijsVanaf: 299,
        populair: true,
        kleurGradient: 'from-orange-500 to-orange-600',
        achtergrondKleur: 'from-orange-50 to-orange-100',
    },
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
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export const DienstenOverzicht: React.FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <Sectie achtergrondKleur="wit" padding="groot">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-4 mb-16"
            >
                <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                    Alles wat je nodig hebt voor{' '}
                    <span className="bg-gradient-to-r from-primair-600 to-primair-700 bg-clip-text text-transparent">
                        online succes
                    </span>
                </h2>
                <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                    Van concept tot conversie - wij bieden alle services die je nodig hebt
                    om online te groeien en meer klanten te krijgen.
                </p>
            </motion.div>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {diensten.map((dienst, index) => {
                    const IconComponent = dienst.icoon;
                    const isHovered = hoveredCard === index;

                    return (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            onHoverStart={() => setHoveredCard(index)}
                            onHoverEnd={() => setHoveredCard(null)}
                            className="relative"
                        >
                            <motion.div
                                className="h-full relative overflow-hidden"
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3, ease: 'easeOut' },
                                }}
                            >
                                <Kaart hoverEffect padding="groot" className="h-full relative">
                                    {/* Populair badge */}
                                    <AnimatePresence>
                                        {dienst.populair && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                                                animate={{ opacity: 1, scale: 1, rotate: -12 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="absolute -top-2 -right-2 z-10"
                                            >
                                                <div className={`bg-gradient-to-r ${dienst.kleurGradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                                                    <Star className="w-3 h-3 inline mr-1" />
                                                    POPULAIR
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Achtergrond gradient overlay */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${dienst.achtergrondKleur} opacity-0 rounded-xl transition-opacity duration-300`}
                                        animate={{
                                            opacity: isHovered ? 0.1 : 0,
                                        }}
                                    />

                                    <div className="space-y-6 relative z-10">
                                        {/* Icoon met verbeterde animatie */}
                                        <motion.div
                                            className={`w-16 h-16 bg-gradient-to-r ${dienst.kleurGradient} rounded-xl flex items-center justify-center shadow-lg`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 360,
                                                transition: { duration: 0.6 },
                                            }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </motion.div>

                                        {/* Titel en beschrijving */}
                                        <div className="space-y-3">
                                            <motion.h3
                                                className="text-xl font-semibold text-secundair-900"
                                                animate={{
                                                    color: isHovered ? '#2563eb' : '#0f172a',
                                                }}
                                            >
                                                {dienst.titel}
                                            </motion.h3>
                                            <p className="text-secundair-600 leading-relaxed">
                                                {dienst.beschrijving}
                                            </p>
                                        </div>

                                        {/* Functies lijst met stagger animatie */}
                                        <motion.ul className="space-y-2">
                                            {dienst.functies.map((functie, functieIndex) => (
                                                <motion.li
                                                    key={functieIndex}
                                                    className="flex items-center text-sm text-secundair-700"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{
                                                        delay: functieIndex * 0.1,
                                                        duration: 0.4,
                                                    }}
                                                    viewport={{ once: true }}
                                                >
                                                    <motion.div
                                                        className="w-2 h-2 bg-gradient-to-r from-primair-500 to-primair-600 rounded-full mr-3 flex-shrink-0"
                                                        whileHover={{ scale: 1.3 }}
                                                    />
                                                    {functie}
                                                </motion.li>
                                            ))}
                                        </motion.ul>

                                        {/* Prijs sectie */}
                                        <div className="pt-4 border-t border-secundair-100">
                                            <motion.div
                                                className="flex items-baseline justify-between"
                                                animate={{
                                                    scale: isHovered ? 1.05 : 1,
                                                }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <div>
                                                    <span className="text-3xl font-bold text-secundair-900">
                                                        €{dienst.prijsVanaf}
                                                    </span>
                                                    <span className="text-sm text-secundair-500 ml-2">
                                                        {dienst.titel.includes('Onderhoud') || dienst.titel.includes('Hosting') ? '/maand' : 'vanaf'}
                                                    </span>
                                                </div>
                                                <motion.div
                                                    animate={{
                                                        rotate: isHovered ? 45 : 0,
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Zap className={`w-6 h-6 text-gradient-to-r ${dienst.kleurGradient.replace('from-', '').replace('to-', '')}`} />
                                                </motion.div>
                                            </motion.div>
                                        </div>

                                        {/* Hover CTA knop */}
                                        <AnimatePresence>
                                            {isHovered && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="pt-4"
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        <Knop variant="primair" volleBreedte grootte="klein">
                                                            <CheckCircle className="w-4 h-4 mr-2" />
                                                            Meer Info
                                                        </Knop>
                                                    </motion.div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </Kaart>
                            </motion.div>
                        </motion.div>
                    );
                })}
            </motion.div>

            {/* Verbeterde CTA Sectie */}
            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Knop variant="primair" grootte="groot">
                        <Search className="w-5 h-5 mr-2" />
                        Bekijk Alle Diensten
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </motion.div>
                    </Knop>
                </motion.div>
            </motion.div>
        </Sectie>
    );
};