// src/components/homepage/GetuigenissenSectie.tsx - Carousel versie met animaties
'use client';

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User, Building, Calendar, ThumbsUp, Award, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Kaart } from '../ui/Kaart';
import { Sectie } from '../ui/Sectie';
import { Knop } from '../ui/Knop';

interface Getuigenis {
    id: string;
    naam: string;
    functie: string;
    bedrijf: string;
    tekst: string;
    uitgebreideTekst: string;
    sterren: number;
    datum: string;
    projectType: string;
    resultaat: string;
    afbeeldingUrl: string;
    kleurGradient: string;
}

const getuigenissen: Getuigenis[] = [
    {
        id: '1',
        naam: 'Sarah van der Berg',
        functie: 'Eigenaar',
        bedrijf: 'Bloemenwinkel De Tulp',
        tekst: 'Binnen 2 maanden na de lancering van onze nieuwe website zijn onze online bestellingen met 60% gestegen.',
        uitgebreideTekst: 'Het team van Website Makers heeft echt begrepen wat wij nodig hadden. De nieuwe webshop is niet alleen prachtig, maar werkt ook perfect. Klanten kunnen nu eenvoudig online bestellen en wij hebben veel minder administratie. Binnen 2 maanden zagen we al 60% meer online bestellingen en onze omzet is aanzienlijk gestegen.',
        sterren: 5,
        datum: '2024-03',
        projectType: 'Webshop Ontwikkeling',
        resultaat: '+60% online bestellingen',
        afbeeldingUrl: '',
        kleurGradient: 'from-pink-500 to-rose-500'
    },
    {
        id: '2',
        naam: 'Mark Jansen',
        functie: 'Managing Director',
        bedrijf: 'Jansen Consultancy',
        tekst: 'Professionele website die precies uitstraalt wat ik wilde. Ik krijg nu veel meer aanvragen via mijn website.',
        uitgebreideTekst: 'Als consultant is een professionele uitstraling cruciaal. Website Makers heeft een website gecreëerd die perfect past bij mijn bedrijf en doelgroep. De samenwerking was prettig, alles werd op tijd opgeleverd en het resultaat overtreft mijn verwachtingen. Ik krijg nu 150% meer contactaanvragen dan voorheen.',
        sterren: 5,
        datum: '2024-01',
        projectType: 'Bedrijfswebsite',
        resultaat: '+150% meer aanvragen',
        afbeeldingUrl: '',
        kleurGradient: 'from-blue-500 to-indigo-500'
    },
    {
        id: '3',
        naam: 'Lisa Bakker',
        functie: 'Praktijkmanager',
        bedrijf: 'Gezondheidscentrum Vitaal',
        tekst: 'Het online afspraaksysteem werkt perfect en bespaart ons veel tijd. Zeer tevreden!',
        uitgebreideTekst: 'De nieuwe website met online afspraaksysteem heeft ons werk volledig veranderd. Patiënten kunnen nu 24/7 afspraken inplannen en wijzigen, wat ons personeel enorm veel tijd bespaart. We hebben 70% minder telefonische afspraken en kunnen ons nu beter focussen op de zorg voor onze patiënten.',
        sterren: 5,
        datum: '2024-02',
        projectType: 'Website + Afspraaksysteem',
        resultaat: '70% minder telefonie',
        afbeeldingUrl: '',
        kleurGradient: 'from-green-500 to-emerald-500'
    },
    {
        id: '4',
        naam: 'Tom de Vries',
        functie: 'Eigenaar',
        bedrijf: 'Restaurant De Smaak',
        tekst: 'Onze nieuwe website heeft ons geholpen om veel meer gasten te bereiken. De online reserveringen lopen uitstekend.',
        uitgebreideTekst: 'Na jaren met een verouderde website was het tijd voor iets nieuws. Website Makers heeft een prachtige website gemaakt die perfect past bij de sfeer van ons restaurant. Het online reserveringssysteem werkt naadloos en we zien 80% meer online reserveringen. Ook krijgen we veel complimenten van gasten over de website.',
        sterren: 5,
        datum: '2023-12',
        projectType: 'Restaurant Website',
        resultaat: '+80% online reserveringen',
        afbeeldingUrl: '',
        kleurGradient: 'from-orange-500 to-amber-500'
    },
    {
        id: '5',
        naam: 'Emma Visser',
        functie: 'E-commerce Manager',
        bedrijf: 'Gadgets Plus',
        tekst: 'De nieuwe webshop heeft onze online verkoop volledig getransformeerd. Geweldige samenwerking!',
        uitgebreideTekst: 'Als e-commerce bedrijf zijn we afhankelijk van een goed functionerende webshop. Website Makers heeft onze oude shop volledig vernieuwd met moderne functionaliteit en een gebruiksvriendelijk design. Het resultaat? 120% meer verkoop en 35% hogere conversie. Hun kennis van e-commerce is indrukwekkend.',
        sterren: 5,
        datum: '2024-04',
        projectType: 'E-commerce Platform',
        resultaat: '+120% meer verkoop',
        afbeeldingUrl: '',
        kleurGradient: 'from-purple-500 to-violet-500'
    },
    {
        id: '6',
        naam: 'Pieter Smit',
        functie: 'Eigenaar',
        bedrijf: 'Fitness Studio Max',
        tekst: 'De redesign van onze website heeft ons ledenbeheer volledig verbeterd. Moderne uitstraling en perfecte functionaliteit.',
        uitgebreideTekst: 'Onze oude website was niet meer van deze tijd. Website Makers heeft een complete redesign gedaan inclusief een nieuw ledenbeheer systeem. Leden kunnen nu zelf hun abonnementen beheren en lessen boeken. Dit bespaart ons 60% administratie tijd en we hebben 45% meer online inschrijvingen.',
        sterren: 5,
        datum: '2024-01',
        projectType: 'Website Redesign',
        resultaat: '+45% meer inschrijvingen',
        afbeeldingUrl: '',
        kleurGradient: 'from-red-500 to-pink-500'
    }
];

const vertrouwensIndicatoren = [
    {
        icoon: Award,
        waarde: '4.9/5',
        label: 'Gemiddelde beoordeling',
        beschrijving: 'Op basis van 87 reviews'
    },
    {
        icoon: ThumbsUp,
        waarde: '98%',
        label: 'Tevreden klanten',
        beschrijving: 'Zou ons aanbevelen'
    },
    {
        icoon: Star,
        waarde: '150+',
        label: 'Succesvolle projecten',
        beschrijving: 'Afgerond in 5 jaar'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const slideVariants = {
    enter: {
        x: 1000,
        opacity: 0,
    },
    center: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
    exit: {
        x: -1000,
        opacity: 0,
        transition: {
            duration: 0.6,
            ease: 'easeIn',
        },
    },
};

export const GetuigenissenSectie: React.FC = () => {
    const [huidigeGetuigenis, setHuidigeGetuigenis] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [uitgebreideWeergave, setUitgebreideWeergave] = useState(false);

    // Auto-play functionaliteit
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            setHuidigeGetuigenis((prev) =>
                prev === getuigenissen.length - 1 ? 0 : prev + 1
            );
        }, 5000); // Wissel elke 5 seconden

        return () => clearInterval(interval);
    }, [isAutoPlay]);

    const volgendeToegang = () => {
        setHuidigeGetuigenis((prev) =>
            prev === getuigenissen.length - 1 ? 0 : prev + 1
        );
        setIsAutoPlay(false); // Stop auto-play bij handmatige navigatie
    };

    const vorigeToegang = () => {
        setHuidigeGetuigenis((prev) =>
            prev === 0 ? getuigenissen.length - 1 : prev - 1
        );
        setIsAutoPlay(false); // Stop auto-play bij handmatige navigatie
    };

    const gaanNaarGetuigenis = (index: number) => {
        setHuidigeGetuigenis(index);
        setIsAutoPlay(false);
    };

    const huidige = getuigenissen[huidigeGetuigenis];

    return (
        <Sectie achtergrondKleur="wit" padding="groot">
            <div className="space-y-16">
                {/* Header */}
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
                        Wat onze klanten{' '}
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
                            over ons zeggen
                        </motion.span>
                    </motion.h2>
                    <motion.p
                        className="text-xl text-secundair-600 max-w-4xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ontdek waarom ondernemers kiezen voor Website Makers en hoe wij
                        hun online aanwezigheid hebben getransformeerd.
                    </motion.p>
                </motion.div>

                {/* Hoofdgetuigenis Carousel */}
                <div className="relative max-w-6xl mx-auto">
                    <motion.div
                        className="relative overflow-hidden rounded-3xl"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={huidigeGetuigenis}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="relative"
                            >
                                <Kaart padding="groot" className="relative overflow-hidden border-2 border-secundair-100">
                                    {/* Gradient achtergrond */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${huidige.kleurGradient} opacity-5`} />
                                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${huidige.kleurGradient} opacity-10 rounded-bl-full`} />

                                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                                        {/* Klant informatie */}
                                        <div className="lg:col-span-1 text-center lg:text-left space-y-6">
                                            {/* Avatar */}
                                            <motion.div
                                                className={`w-24 h-24 bg-gradient-to-br ${huidige.kleurGradient} rounded-full flex items-center justify-center mx-auto lg:mx-0 shadow-lg`}
                                                initial={{ scale: 0, rotate: -180 }}
                                                animate={{ scale: 1, rotate: 0 }}
                                                transition={{ duration: 0.6, delay: 0.3 }}
                                            >
                                                <User className="w-12 h-12 text-white" />
                                            </motion.div>

                                            {/* Klant details */}
                                            <motion.div
                                                className="space-y-2"
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.4 }}
                                            >
                                                <h3 className="text-xl font-bold text-secundair-900">
                                                    {huidige.naam}
                                                </h3>
                                                <p className="text-primair-600 font-medium">
                                                    {huidige.functie}
                                                </p>
                                                <div className="flex items-center justify-center lg:justify-start text-secundair-600">
                                                    <Building className="w-4 h-4 mr-2" />
                                                    <span>{huidige.bedrijf}</span>
                                                </div>
                                            </motion.div>

                                            {/* Project info */}
                                            <motion.div
                                                className="space-y-3"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.5 }}
                                            >
                                                <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${huidige.kleurGradient} text-white rounded-full text-sm font-medium`}>
                                                    <Calendar className="w-3 h-3 mr-2" />
                                                    {new Date(huidige.datum).toLocaleDateString('nl-NL', {
                                                        year: 'numeric',
                                                        month: 'long'
                                                    })}
                                                </div>
                                                <div className="text-sm text-secundair-600">
                                                    <strong>Project:</strong> {huidige.projectType}
                                                </div>
                                                <div className={`text-sm font-semibold bg-gradient-to-r ${huidige.kleurGradient} bg-clip-text text-transparent`}>
                                                    <strong>Resultaat:</strong> {huidige.resultaat}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Getuigenis content */}
                                        <div className="lg:col-span-2 space-y-6">
                                            {/* Sterren */}
                                            <motion.div
                                                className="flex justify-center lg:justify-start space-x-1"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.6, delay: 0.6 }}
                                            >
                                                {[...Array(huidige.sterren)].map((_, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, rotate: -180 }}
                                                        animate={{ opacity: 1, rotate: 0 }}
                                                        transition={{ delay: 0.7 + i * 0.1 }}
                                                    >
                                                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                                                    </motion.div>
                                                ))}
                                            </motion.div>

                                            {/* Quote */}
                                            <motion.div
                                                className="relative"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                <Quote className="w-12 h-12 text-primair-200 absolute -top-2 -left-2" />
                                                <blockquote className="text-lg lg:text-xl text-secundair-700 leading-relaxed italic pl-8">
                                                    &ldquo;{uitgebreideWeergave ? huidige.uitgebreideTekst : huidige.tekst}&rdquo;
                                                </blockquote>
                                            </motion.div>

                                            {/* Uitklap functie */}
                                            <motion.button
                                                onClick={() => setUitgebreideWeergave(!uitgebreideWeergave)}
                                                className="inline-flex items-center text-primair-600 hover:text-primair-700 font-medium text-sm transition-colors duration-200"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                {uitgebreideWeergave ? 'Toon minder' : 'Lees volledige review'}
                                                <motion.div
                                                    animate={{ rotate: uitgebreideWeergave ? 180 : 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <ArrowRight className="w-4 h-4 ml-1" />
                                                </motion.div>
                                            </motion.button>
                                        </div>
                                    </div>
                                </Kaart>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Navigatie knoppen */}
                    <motion.button
                        onClick={vorigeToegang}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-secundair-200 flex items-center justify-center text-secundair-600 hover:text-primair-600 transition-colors duration-200 z-10"
                        whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </motion.button>

                    <motion.button
                        onClick={volgendeToegang}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border border-secundair-200 flex items-center justify-center text-secundair-600 hover:text-primair-600 transition-colors duration-200 z-10"
                        whileHover={{ scale: 1.1, boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </motion.button>
                </div>

                {/* Dots indicator */}
                <motion.div
                    className="flex justify-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                >
                    {getuigenissen.map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => gaanNaarGetuigenis(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === huidigeGetuigenis
                                    ? 'bg-primair-600 scale-125'
                                    : 'bg-secundair-300 hover:bg-primair-400'
                                }`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        />
                    ))}
                </motion.div>

                {/* Vertrouwensindicatoren */}
                <motion.div
                    className="bg-gradient-to-r from-primair-50 via-white to-primair-50 rounded-2xl p-8 border border-primair-100"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {vertrouwensIndicatoren.map((indicator, index) => {
                            const IconComponent = indicator.icoon;
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="text-center group cursor-pointer"
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <motion.div
                                        className="w-16 h-16 bg-gradient-to-r from-primair-600 to-primair-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </motion.div>
                                    <div className="text-3xl font-bold text-secundair-900 mb-2 group-hover:text-primair-600 transition-colors">
                                        {indicator.waarde}
                                    </div>
                                    <div className="text-sm font-semibold text-secundair-700 mb-1">
                                        {indicator.label}
                                    </div>
                                    <div className="text-xs text-secundair-500">
                                        {indicator.beschrijving}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>

                {/* CTA Sectie */}
                <motion.div
                    className="text-center space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-secundair-900">
                        Klaar om het volgende succesverhaal te worden?
                    </h3>
                    <p className="text-lg text-secundair-600 max-w-2xl mx-auto">
                        Sluit je aan bij meer dan 150 tevreden ondernemers die hun bedrijf hebben laten groeien met Website Makers.
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Knop variant="primair" grootte="groot">
                            Start Jouw Succesverhaal
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
            </div>
        </Sectie>
    );
};