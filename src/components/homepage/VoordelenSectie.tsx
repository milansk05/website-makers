// src/components/homepage/VoordelenSectie.tsx - Interactieve versie met animaties
'use client';

import React, { useState } from 'react';
import { CheckCircle, Clock, Users, TrendingUp, Star, Zap, Shield, Award, ArrowRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sectie } from '../ui/Sectie';

const voordelen = [
    {
        icoon: CheckCircle,
        titel: 'Altijd op tijd geleverd',
        beschrijving: 'Wij houden ons aan afspraken. Je website wordt binnen de afgesproken tijd opgeleverd, zonder verrassingen.',
        uitgebreideBeschrijving: 'Met een bewezen projectmethodiek en duidelijke planning zorgen we ervoor dat je website altijd op tijd live gaat. Geen stress, geen vertragingen.',
        kleurGradient: 'from-green-500 to-emerald-500',
        achtergrondKleur: 'from-green-50 to-emerald-50',
        statistiek: '98%',
        statistiekLabel: 'Op tijd opgeleverd',
        detailFeatures: [
            'Duidelijke planning vooraf',
            'Wekelijkse voortgangsrapportages',
            'Geen verborgen verrassingen',
            'Backup planning voor noodgevallen'
        ]
    },
    {
        icoon: Zap,
        titel: 'Supersnel geladen',
        beschrijving: 'Onze websites laden supersnel, wat zorgt voor betere gebruikerservaring en hogere rankings in Google.',
        uitgebreideBeschrijving: 'Dankzij moderne technologie en optimalisatie technieken laden onze websites in minder dan 2 seconden, wat cruciaal is voor conversie.',
        kleurGradient: 'from-yellow-500 to-orange-500',
        achtergrondKleur: 'from-yellow-50 to-orange-50',
        statistiek: '<2s',
        statistiekLabel: 'Gemiddelde laadtijd',
        detailFeatures: [
            'Afbeelding optimalisatie',
            'Code minimalisatie',
            'CDN implementatie',
            'Moderne caching technieken'
        ]
    },
    {
        icoon: Users,
        titel: 'Gebruiksvriendelijk design',
        beschrijving: 'Intuïtieve websites die je bezoekers graag gebruiken. Meer bezoekers betekent meer potentiële klanten.',
        uitgebreideBeschrijving: 'Ons design is gebaseerd op gebruikersonderzoek en bewezen UX-principes, wat resulteert in hogere conversieratio\'s.',
        kleurGradient: 'from-blue-500 to-cyan-500',
        achtergrondKleur: 'from-blue-50 to-cyan-50',
        statistiek: '+45%',
        statistiekLabel: 'Betere conversie',
        detailFeatures: [
            'Gebruikersonderzoek',
            'Intuïtieve navigatie',
            'Mobile-first design',
            'Toegankelijkheid standaarden'
        ]
    },
    {
        icoon: TrendingUp,
        titel: 'Bewezen resultaten',
        beschrijving: 'Onze klanten zien gemiddeld 40% meer online aanvragen binnen 3 maanden na lancering van hun nieuwe website.',
        uitgebreideBeschrijving: 'Door gerichte SEO optimalisatie en conversie-geoptimaliseerd design zien onze klanten meetbare groei in leads en verkoop.',
        kleurGradient: 'from-purple-500 to-pink-500',
        achtergrondKleur: 'from-purple-50 to-pink-50',
        statistiek: '+150%',
        statistiekLabel: 'Meer online aanvragen',
        detailFeatures: [
            'SEO geoptimaliseerd',
            'Conversie tracking',
            'A/B testing',
            'Continue optimalisatie'
        ]
    }
];

const statistieken = [
    {
        icoon: Award,
        nummer: '150+',
        label: 'Afgeronde projecten',
        beschrijving: 'Succesvolle websites opgeleverd',
        kleurGradient: 'from-green-500 to-emerald-600'
    },
    {
        icoon: Star,
        nummer: '4.9/5',
        label: 'Klantbeoordeling',
        beschrijving: 'Gemiddelde score van al onze klanten',
        kleurGradient: 'from-yellow-500 to-orange-600'
    },
    {
        icoon: Clock,
        nummer: '2-4',
        label: 'Weken levertijd',
        beschrijving: 'Van concept tot live website',
        kleurGradient: 'from-blue-500 to-indigo-600'
    },
    {
        icoon: Shield,
        nummer: '24/7',
        label: 'Support beschikbaar',
        beschrijving: 'Altijd bereikbaar voor noodgevallen',
        kleurGradient: 'from-purple-500 to-pink-600'
    }
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

const itemVariants = {
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

const floatingVariants = {
    floating: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export const VoordelenSectie: React.FC = () => {
    const [activeVoordeel, setActiveVoordeel] = useState<number | null>(null);
    const [hoveredStat, setHoveredStat] = useState<number | null>(null);

    return (
        <Sectie achtergrondKleur="grijs" padding="groot">
            <div className="space-y-20">
                {/* Header met animatie */}
                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h2
                        className="text-3xl lg:text-5xl font-bold text-secundair-900"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Waarom kiezen voor{' '}
                        <motion.span
                            className="bg-gradient-to-r from-primair-600 via-primair-500 to-primair-700 bg-clip-text text-transparent"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            style={{
                                backgroundSize: '200% 200%',
                            }}
                        >
                            Website Makers
                        </motion.span>
                        ?
                    </motion.h2>
                    <motion.p
                        className="text-xl text-secundair-600 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Meer dan 150 ondernemers gingen je voor. Ontdek waarom zij kiezen
                        voor onze persoonlijke aanpak en bewezen resultaten.
                    </motion.p>
                </motion.div>

                {/* Voordelen Grid met Interactie */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {voordelen.map((voordeel, index) => {
                        const IconComponent = voordeel.icoon;
                        const isActive = activeVoordeel === index;

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="relative"
                                onHoverStart={() => setActiveVoordeel(index)}
                                onHoverEnd={() => setActiveVoordeel(null)}
                                whileHover={{
                                    scale: 1.02,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <div className="bg-white rounded-2xl p-8 schaduw-zacht hover:schaduw-hover transition-all duration-300 relative overflow-hidden h-full border border-secundair-100">
                                    {/* Gradient achtergrond overlay */}
                                    <motion.div
                                        className={`absolute inset-0 bg-gradient-to-br ${voordeel.achtergrondKleur} opacity-0 transition-opacity duration-500`}
                                        animate={{
                                            opacity: isActive ? 0.1 : 0,
                                        }}
                                    />

                                    {/* Decoratieve hoek */}
                                    <motion.div
                                        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${voordeel.kleurGradient} opacity-10 rounded-bl-full`}
                                        animate={{
                                            scale: isActive ? 1.2 : 1,
                                            opacity: isActive ? 0.2 : 0.1,
                                        }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <div className="space-y-6 relative z-10">
                                        {/* Icoon met statistiek */}
                                        <div className="flex items-start justify-between">
                                            <motion.div
                                                className={`w-16 h-16 bg-gradient-to-r ${voordeel.kleurGradient} rounded-2xl flex items-center justify-center shadow-lg`}
                                                whileHover={{
                                                    scale: 1.1,
                                                    rotate: [0, -10, 10, 0],
                                                }}
                                                transition={{ duration: 0.6 }}
                                                animate={floatingVariants.floating}
                                            >
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </motion.div>

                                            <motion.div
                                                className="text-right"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: index * 0.1 + 0.5 }}
                                            >
                                                <motion.div
                                                    className={`text-2xl font-bold bg-gradient-to-r ${voordeel.kleurGradient} bg-clip-text text-transparent`}
                                                    animate={{
                                                        scale: isActive ? 1.1 : 1,
                                                    }}
                                                >
                                                    {voordeel.statistiek}
                                                </motion.div>
                                                <div className="text-xs text-secundair-500">
                                                    {voordeel.statistiekLabel}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Titel en beschrijving */}
                                        <div className="space-y-3">
                                            <motion.h3
                                                className="text-xl font-bold text-secundair-900"
                                                animate={{
                                                    color: isActive ? '#2563eb' : '#0f172a',
                                                }}
                                            >
                                                {voordeel.titel}
                                            </motion.h3>
                                            <motion.p
                                                className="text-secundair-600 leading-relaxed"
                                                animate={{
                                                    opacity: isActive ? 0.8 : 1,
                                                }}
                                            >
                                                {isActive ? voordeel.uitgebreideBeschrijving : voordeel.beschrijving}
                                            </motion.p>
                                        </div>

                                        {/* Uitgebreide features bij hover */}
                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="space-y-3 border-t border-secundair-200 pt-4"
                                                >
                                                    <h4 className="font-semibold text-secundair-900 flex items-center">
                                                        <Sparkles className="w-4 h-4 mr-2 text-primair-600" />
                                                        Wat dit betekent voor jou:
                                                    </h4>
                                                    <div className="grid grid-cols-1 gap-2">
                                                        {voordeel.detailFeatures.map((feature, featureIndex) => (
                                                            <motion.div
                                                                key={featureIndex}
                                                                className="flex items-center text-sm text-secundair-700"
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: featureIndex * 0.1 }}
                                                            >
                                                                <motion.div
                                                                    className="w-1.5 h-1.5 bg-primair-500 rounded-full mr-3"
                                                                    animate={{
                                                                        scale: [1, 1.3, 1],
                                                                    }}
                                                                    transition={{
                                                                        duration: 2,
                                                                        repeat: Infinity,
                                                                        delay: featureIndex * 0.2,
                                                                    }}
                                                                />
                                                                {feature}
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Statistieken Sectie */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Achtergrond decoraties */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            className="absolute top-10 left-10 w-32 h-32 bg-primair-200 rounded-full opacity-20 blur-xl"
                            animate={floatingVariants.floating}
                        />
                        <motion.div
                            className="absolute bottom-10 right-10 w-40 h-40 bg-secundair-200 rounded-full opacity-20 blur-xl"
                            animate={floatingVariants.floating}
                            transition={{ delay: 1.5 }}
                        />
                    </div>

                    <div className="relative z-10 bg-white rounded-3xl p-8 lg:p-12 schaduw-hover border border-secundair-100">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-2xl lg:text-3xl font-bold text-secundair-900 mb-4">
                                Website Makers in cijfers
                            </h3>
                            <p className="text-lg text-secundair-600 max-w-2xl mx-auto">
                                Onze prestaties spreken voor zich - dit zijn de cijfers die tellen.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {statistieken.map((stat, index) => {
                                const IconComponent = stat.icoon;
                                const isHovered = hoveredStat === index;

                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="text-center group cursor-pointer"
                                        onHoverStart={() => setHoveredStat(index)}
                                        onHoverEnd={() => setHoveredStat(null)}
                                        whileHover={{
                                            scale: 1.05,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <motion.div
                                            className={`w-16 h-16 bg-gradient-to-r ${stat.kleurGradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                                            animate={{
                                                rotate: isHovered ? 360 : 0,
                                                scale: isHovered ? 1.1 : 1,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <motion.div
                                            className="text-3xl lg:text-4xl font-bold text-secundair-900 mb-2"
                                            animate={{
                                                scale: isHovered ? 1.1 : 1,
                                                color: isHovered ? '#2563eb' : '#0f172a',
                                            }}
                                        >
                                            {stat.nummer}
                                        </motion.div>

                                        <div className="text-sm font-semibold text-secundair-700 mb-1">
                                            {stat.label}
                                        </div>

                                        <motion.div
                                            className="text-xs text-secundair-500"
                                            animate={{
                                                opacity: isHovered ? 1 : 0.7,
                                            }}
                                        >
                                            {stat.beschrijving}
                                        </motion.div>

                                        {/* Hover effect glow */}
                                        <motion.div
                                            className={`absolute inset-0 bg-gradient-to-r ${stat.kleurGradient} rounded-2xl opacity-0 blur-xl -z-10`}
                                            animate={{
                                                opacity: isHovered ? 0.1 : 0,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </motion.div>

                {/* CTA Sectie */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <motion.div
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primair-600 to-primair-700 text-white rounded-2xl font-semibold shadow-lg cursor-pointer group"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: '0 20px 40px rgba(37, 99, 235, 0.3)',
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="mr-3">Ontdek wat wij voor jou kunnen betekenen</span>
                        <motion.div
                            animate={{
                                x: [0, 5, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <ArrowRight className="w-5 h-5" />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </Sectie>
    );
};