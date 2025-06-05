// src/app/over-ons/page.tsx - Verbeterde Over Ons pagina met animaties
'use client';

import React, { useState } from 'react';
import { Users, Target, Heart, Award, Calendar, Code, Coffee, Lightbulb, ArrowRight, Quote, Linkedin, Mail, Star, CheckCircle, Shield, TrendingUp, Eye, Clock, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sectie } from '../../components/ui/Sectie';
import { Kaart } from '../../components/ui/Kaart';
import { Knop } from '../../components/ui/Knop';

interface TeamLid {
    id: string;
    naam: string;
    functie: string;
    beschrijving: string;
    expertise: string[];
    afbeeldingUrl: string;
    linkedinUrl?: string;
    emailUrl?: string;
    quote: string;
    ervaring: string;
    projecten: number;
    specialiteit: string;
    kleurGradient: string;
    achievements: string[];
}

const teamLeden: TeamLid[] = [
    {
        id: 'jan-de-vries',
        naam: 'Jan de Vries',
        functie: 'Oprichter & Lead Developer',
        beschrijving: 'Jan is de drijvende kracht achter Website Makers. Met meer dan 8 jaar ervaring in webdevelopment en een passie voor ondernemerschap, helpt hij bedrijven groeien met slimme digitale oplossingen.',
        expertise: ['React', 'Next.js', 'Node.js', 'WordPress', 'E-commerce'],
        afbeeldingUrl: '/placeholder-jan.jpg',
        linkedinUrl: 'https://linkedin.com/in/jandevries',
        emailUrl: 'mailto:jan@websitemakers.nl',
        quote: 'Elke website die we maken, moet een probleem oplossen en waarde toevoegen voor het bedrijf.',
        ervaring: '8+ jaar',
        projecten: 120,
        specialiteit: 'Full-stack Development',
        kleurGradient: 'from-blue-500 to-indigo-600',
        achievements: ['AWS Certified', '50+ E-commerce sites', 'React Expert']
    },
    {
        id: 'lisa-bakker',
        naam: 'Lisa Bakker',
        functie: 'UX/UI Designer',
        beschrijving: 'Lisa zorgt ervoor dat alle websites niet alleen mooi zijn, maar vooral gebruiksvriendelijk. Haar achtergrond in psychologie helpt haar om interfaces te ontwerpen die echt werken voor gebruikers.',
        expertise: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
        afbeeldingUrl: '/placeholder-lisa.jpg',
        linkedinUrl: 'https://linkedin.com/in/lisabakker',
        emailUrl: 'mailto:lisa@websitemakers.nl',
        quote: 'Goed design is onzichtbaar - het werkt gewoon perfect voor de gebruiker.',
        ervaring: '6+ jaar',
        projecten: 85,
        specialiteit: 'User Experience Design',
        kleurGradient: 'from-pink-500 to-rose-600',
        achievements: ['Adobe Certified Expert', 'UX Research Specialist', 'Design System Creator']
    },
    {
        id: 'mark-jansen',
        naam: 'Mark Jansen',
        functie: 'SEO & Marketing Specialist',
        beschrijving: 'Mark zorgt ervoor dat onze websites niet alleen goed gebouwd zijn, maar ook gevonden worden. Zijn data-gedreven aanpak heeft al vele klanten geholpen om hun online zichtbaarheid te vergroten.',
        expertise: ['SEO', 'Google Ads', 'Analytics', 'Content Marketing', 'Local SEO'],
        afbeeldingUrl: '/placeholder-mark.jpg',
        linkedinUrl: 'https://linkedin.com/in/markjansen',
        emailUrl: 'mailto:mark@websitemakers.nl',
        quote: 'Een mooie website zonder bezoekers is als een mooie etalage in een donkere steeg.',
        ervaring: '7+ jaar',
        projecten: 95,
        specialiteit: 'Digital Marketing',
        kleurGradient: 'from-green-500 to-emerald-600',
        achievements: ['Google Ads Certified', 'SEO Expert', 'Analytics Specialist']
    }
];

const waardenEnMissie = [
    {
        icoon: Target,
        titel: 'Onze Missie',
        beschrijving: 'Wij helpen ondernemers hun bedrijf laten groeien door middel van professionele websites die echt resultaat opleveren. Geen mooie plaatjes, maar concrete omzetgroei.',
        kleurAccent: 'from-blue-500 to-cyan-500',
        statistiek: '150+',
        statistiekLabel: 'Succesvolle projecten'
    },
    {
        icoon: Heart,
        titel: 'Onze Waarden',
        beschrijving: 'Eerlijkheid, kwaliteit en persoonlijke service staan centraal. We bouwen langdurige relaties met onze klanten en zijn pas tevreden als zij succesvol zijn.',
        kleurAccent: 'from-red-500 to-pink-500',
        statistiek: '4.9/5',
        statistiekLabel: 'Klantbeoordeling'
    },
    {
        icoon: Award,
        titel: 'Onze Expertise',
        beschrijving: 'Met jaren van ervaring en up-to-date kennis van de nieuwste technologieën, leveren we websites die toekomstbestendig zijn en blijven presteren.',
        kleurAccent: 'from-purple-500 to-violet-500',
        statistiek: '98%',
        statistiekLabel: 'Op tijd opgeleverd'
    }
];

const tijdlijn = [
    {
        jaar: '2019',
        titel: 'De Start',
        beschrijving: 'Jan start Website Makers vanuit zijn passie voor webdevelopment en ondernemerschap. De eerste klanten zijn lokale bedrijven uit Amsterdam.',
        mijlpaal: 'Eerste 10 klanten',
        hoogtepunten: ['Eerste website live', 'Kantoor in Amsterdam', 'WordPress specialisatie'],
        kleurGradient: 'from-blue-500 to-cyan-500'
    },
    {
        jaar: '2020',
        titel: 'Groei & Uitbreiding',
        beschrijving: 'Lisa sluit zich aan als UX/UI Designer. Samen ontwikkelen we een unieke aanpak die design en functionaliteit perfect combineert.',
        mijlpaal: '50+ websites opgeleverd',
        hoogtepunten: ['Lisa wordt teamlid', 'Eerste grote projecten', 'Design system ontwikkeld'],
        kleurGradient: 'from-pink-500 to-rose-500'
    },
    {
        jaar: '2021',
        titel: 'Specialisatie',
        beschrijving: 'Mark versterkt het team als SEO specialist. We beginnen met het aanbieden van complete digitale marketing oplossingen naast webdevelopment.',
        mijlpaal: '100+ tevreden klanten',
        hoogtepunten: ['SEO expertise toegevoegd', 'Marketing services', 'E-commerce focus'],
        kleurGradient: 'from-green-500 to-emerald-500'
    },
    {
        jaar: '2022',
        titel: 'Erkenning',
        beschrijving: 'Website Makers wordt erkend als een van de beste webdevelopment bedrijven in Nederland. We winnen onze eerste branche award.',
        mijlpaal: 'Top 10 Webdevelopers NL',
        hoogtepunten: ['Branche award gewonnen', 'Media aandacht', 'Partnership programma'],
        kleurGradient: 'from-orange-500 to-amber-500'
    },
    {
        jaar: '2023',
        titel: 'Innovatie',
        beschrijving: 'We introduceren nieuwe services zoals headless CMS oplossingen en geavanceerde e-commerce integraties voor grotere klanten.',
        mijlpaal: '150+ projecten afgerond',
        hoogtepunten: ['Headless CMS expertise', 'Enterprise klanten', 'API integraties'],
        kleurGradient: 'from-purple-500 to-violet-500'
    },
    {
        jaar: '2024',
        titel: 'Vandaag',
        beschrijving: 'Met een sterke reputatie en een groeiend klantenbestand, blijven we focussen op kwaliteit en persoonlijke service. De toekomst ziet er rooskleurig uit.',
        mijlpaal: '200+ succesvolle projecten',
        hoogtepunten: ['Nieuwe technologieën', 'Internationale klanten', 'AI integratie'],
        kleurGradient: 'from-indigo-500 to-blue-500'
    }
];

const bedrijfsCijfers = [
    {
        icoon: Users,
        nummer: '200+',
        label: 'Afgeronde Projecten',
        beschrijving: 'Websites en webshops die echt werken',
        kleurGradient: 'from-blue-500 to-cyan-500'
    },
    {
        icoon: Star,
        nummer: '150+',
        label: 'Tevreden Klanten',
        beschrijving: 'Ondernemers die ons aanbevelen',
        kleurGradient: 'from-yellow-500 to-orange-500'
    },
    {
        icoon: Calendar,
        nummer: '5 jaar',
        label: 'Ervaring',
        beschrijving: 'Bewezen track record in de markt',
        kleurGradient: 'from-green-500 to-emerald-500'
    },
    {
        icoon: CheckCircle,
        nummer: '4.9/5',
        label: 'Klantbeoordeling',
        beschrijving: 'Gemiddelde score van al onze klanten',
        kleurGradient: 'from-pink-500 to-rose-500'
    },
    {
        icoon: TrendingUp,
        nummer: '98%',
        label: 'Op Tijd Opgeleverd',
        beschrijving: 'Wij houden ons aan afspraken',
        kleurGradient: 'from-purple-500 to-violet-500'
    },
    {
        icoon: Shield,
        nummer: '24/7',
        label: 'Support',
        beschrijving: 'Altijd bereikbaar voor onze klanten',
        kleurGradient: 'from-red-500 to-pink-500'
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

export default function OverOnsPagina() {
    const [activeTeamMember, setActiveTeamMember] = useState<string | null>(null);
    const [activeTimelineItem, setActiveTimelineItem] = useState<number | null>(null);

    return (
        <>
            {/* Hero Sectie */}
            <Sectie
                achtergrondKleur="gradient"
                padding="groot"
                patroon="dots"
                decoratie="floating"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4">
                            <motion.h1
                                className="text-4xl lg:text-6xl font-bold text-secundair-900"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Over Website Makers
                            </motion.h1>
                            <motion.p
                                className="text-xl text-secundair-600 leading-relaxed"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                We zijn een team van gepassioneerde professionals die geloven dat
                                elke ondernemer een website verdient die écht werkt. Sinds 2019
                                helpen we bedrijven groeien met slimme digitale oplossingen.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Knop variant="primair" grootte="groot">
                                <Users className="w-5 h-5 mr-2" />
                                Maak Kennis Met Ons Team
                            </Knop>
                            <Knop variant="outline" grootte="groot">
                                Ons Verhaal
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Knop>
                        </motion.div>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        {bedrijfsCijfers.slice(0, 4).map((stat, index) => {
                            const IconComponent = stat.icoon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 + 0.8 }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <Kaart
                                        padding="groot"
                                        variant="glass"
                                        hoverEffect="glow"
                                        className="text-center space-y-3 h-full"
                                    >
                                        <motion.div
                                            className={`w-12 h-12 bg-gradient-to-r ${stat.kleurGradient} rounded-xl flex items-center justify-center mx-auto shadow-lg`}
                                            whileHover={{
                                                rotate: 360,
                                                scale: 1.1,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <div className="text-2xl font-bold text-secundair-900">
                                            {stat.nummer}
                                        </div>
                                        <div className="text-sm text-secundair-600">
                                            {stat.label}
                                        </div>
                                    </Kaart>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>
            </Sectie>

            {/* Missie, Waarden & Expertise */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Wat ons drijft
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Onze missie, waarden en expertise vormen de basis van alles wat we doen.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {waardenEnMissie.map((item, index) => {
                        const IconComponent = item.icoon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <Kaart
                                    hoverEffect="glow"
                                    padding="groot"
                                    className="text-center h-full relative overflow-hidden group"
                                >
                                    {/* Gradient background */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.kleurAccent} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                                    <div className="space-y-6 relative z-10">
                                        <motion.div
                                            className={`w-16 h-16 bg-gradient-to-r ${item.kleurAccent} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: 360,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <h3 className="text-xl font-bold text-secundair-900">
                                            {item.titel}
                                        </h3>

                                        <p className="text-secundair-600 leading-relaxed">
                                            {item.beschrijving}
                                        </p>

                                        {/* Statistiek */}
                                        <motion.div
                                            className="pt-4 border-t border-secundair-100"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 + 0.5 }}
                                        >
                                            <div className={`text-3xl font-bold bg-gradient-to-r ${item.kleurAccent} bg-clip-text text-transparent`}>
                                                {item.statistiek}
                                            </div>
                                            <div className="text-sm text-secundair-500">
                                                {item.statistiekLabel}
                                            </div>
                                        </motion.div>
                                    </div>
                                </Kaart>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Sectie>

            {/* Team Sectie met Interactive Cards */}
            <Sectie
                achtergrondKleur="grijs"
                padding="groot"
                patroon="circles"
                decoratie="geometric"
            >
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Maak kennis met ons{' '}
                        <span className="bg-gradient-to-r from-primair-600 to-purple-600 bg-clip-text text-transparent">
                            dream team
                        </span>
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        De mensen achter Website Makers die dagelijks werken aan jouw online succes.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {teamLeden.map((teamLid) => (
                        <motion.div
                            key={teamLid.id}
                            variants={itemVariants}
                            className="relative"
                            onHoverStart={() => setActiveTeamMember(teamLid.id)}
                            onHoverEnd={() => setActiveTeamMember(null)}
                            whileHover={{
                                y: -10,
                                transition: { duration: 0.3 },
                            }}
                        >
                            <Kaart
                                hoverEffect="glow"
                                padding="groot"
                                className="h-full relative overflow-hidden group"
                                variant="elevated"
                            >
                                {/* Gradient background */}
                                <motion.div
                                    className={`absolute inset-0 bg-gradient-to-br ${teamLid.kleurGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                />

                                <div className="space-y-6 relative z-10">
                                    {/* Avatar met floating effect */}
                                    <div className="relative">
                                        <motion.div
                                            className={`w-24 h-24 bg-gradient-to-br ${teamLid.kleurGradient} rounded-full mx-auto flex items-center justify-center shadow-lg relative`}
                                            animate={{
                                                y: activeTeamMember === teamLid.id ? [-2, 2, -2] : 0,
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: activeTeamMember === teamLid.id ? Infinity : 0,
                                                ease: 'easeInOut',
                                            }}
                                        >
                                            <span className="text-2xl font-bold text-white">
                                                {teamLid.naam.split(' ').map(n => n[0]).join('')}
                                            </span>

                                            {/* Status indicator */}
                                            <motion.div
                                                className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center"
                                                animate={{
                                                    scale: activeTeamMember === teamLid.id ? [1, 1.2, 1] : 1,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    repeat: activeTeamMember === teamLid.id ? Infinity : 0,
                                                }}
                                            >
                                                <div className="w-2 h-2 bg-white rounded-full" />
                                            </motion.div>
                                        </motion.div>
                                    </div>

                                    {/* Basis informatie */}
                                    <div className="text-center space-y-2">
                                        <h3 className="text-xl font-bold text-secundair-900">
                                            {teamLid.naam}
                                        </h3>
                                        <p className={`font-medium bg-gradient-to-r ${teamLid.kleurGradient} bg-clip-text text-transparent`}>
                                            {teamLid.functie}
                                        </p>
                                        <p className="text-sm text-secundair-600">
                                            {teamLid.specialiteit}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-secundair-900">
                                                {teamLid.ervaring}
                                            </div>
                                            <div className="text-xs text-secundair-500">
                                                Ervaring
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-secundair-900">
                                                {teamLid.projecten}+
                                            </div>
                                            <div className="text-xs text-secundair-500">
                                                Projecten
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <div className={`bg-gradient-to-r ${teamLid.kleurGradient} bg-opacity-10 rounded-lg p-4 relative`}>
                                        <Quote className="w-6 h-6 text-primair-300 absolute top-2 left-2" />
                                        <p className="text-sm text-secundair-700 italic pl-8">
                                            &quot;{teamLid.quote}&quot;
                                        </p>
                                    </div>

                                    {/* Expertise badges */}
                                    <div className="space-y-3">
                                        <h4 className="font-semibold text-secundair-900 text-sm">Expertise:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {teamLid.expertise.slice(0, 3).map((skill, skillIndex) => (
                                                <motion.span
                                                    key={skillIndex}
                                                    className={`bg-gradient-to-r ${teamLid.kleurGradient} text-white px-2 py-1 rounded-full text-xs font-medium`}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: skillIndex * 0.1 }}
                                                    whileHover={{ scale: 1.05 }}
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                            {teamLid.expertise.length > 3 && (
                                                <span className="bg-secundair-100 text-secundair-700 px-2 py-1 rounded-full text-xs">
                                                    +{teamLid.expertise.length - 3} meer
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Achievements */}
                                    <AnimatePresence>
                                        {activeTeamMember === teamLid.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="space-y-2 border-t border-secundair-200 pt-4"
                                            >
                                                <h4 className="font-semibold text-secundair-900 text-sm flex items-center">
                                                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                                                    Achievements:
                                                </h4>
                                                {teamLid.achievements.map((achievement, achIndex) => (
                                                    <motion.div
                                                        key={achIndex}
                                                        className="flex items-center text-xs text-secundair-600"
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: achIndex * 0.1 }}
                                                    >
                                                        <Star className="w-3 h-3 mr-2 text-yellow-400 fill-current" />
                                                        {achievement}
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Contact buttons */}
                                    <div className="flex gap-3 pt-4">
                                        {teamLid.linkedinUrl && (
                                            <motion.a
                                                href={teamLid.linkedinUrl}
                                                className={`w-10 h-10 bg-gradient-to-r ${teamLid.kleurGradient} rounded-lg flex items-center justify-center text-white shadow-lg`}
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                        {teamLid.emailUrl && (
                                            <motion.a
                                                href={teamLid.emailUrl}
                                                className="w-10 h-10 bg-secundair-100 rounded-lg flex items-center justify-center text-secundair-700 hover:bg-secundair-200 transition-colors"
                                                whileHover={{ scale: 1.1, rotate: -5 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Mail className="w-5 h-5" />
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </Kaart>
                        </motion.div>
                    ))}
                </motion.div>
            </Sectie>

            {/* Interactive Timeline Sectie */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Ons verhaal door de jaren
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Van kleine start-up tot erkend webdevelopment bureau - dit is onze reis.
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Timeline lijn */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secundair-200 h-full hidden lg:block">
                        <motion.div
                            className="w-full bg-gradient-to-b from-primair-500 to-purple-500 origin-top"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: 'easeOut' }}
                        />
                    </div>

                    <div className="space-y-16 lg:space-y-24">
                        {tijdlijn.map((item, index) => {
                            const isEven = index % 2 === 0;
                            const isActive = activeTimelineItem === index;

                            return (
                                <motion.div
                                    key={index}
                                    className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    onHoverStart={() => setActiveTimelineItem(index)}
                                    onHoverEnd={() => setActiveTimelineItem(null)}
                                >
                                    {/* Content Card */}
                                    <div className={`lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                                        <motion.div
                                            whileHover={{
                                                scale: 1.02,
                                                y: -5,
                                                transition: { duration: 0.3 },
                                            }}
                                        >
                                            <Kaart
                                                hoverEffect="glow"
                                                padding="groot"
                                                className="relative overflow-hidden group"
                                            >
                                                {/* Gradient background */}
                                                <motion.div
                                                    className={`absolute inset-0 bg-gradient-to-br ${item.kleurGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                                                />

                                                <div className="space-y-4 relative z-10">
                                                    {/* Jaar badge */}
                                                    <div className="flex items-center space-x-3">
                                                        <motion.div
                                                            className={`w-12 h-12 bg-gradient-to-r ${item.kleurGradient} rounded-xl flex items-center justify-center shadow-lg`}
                                                            whileHover={{
                                                                rotate: 360,
                                                                scale: 1.1,
                                                            }}
                                                            transition={{ duration: 0.6 }}
                                                        >
                                                            <Calendar className="w-6 h-6 text-white" />
                                                        </motion.div>
                                                        <motion.span
                                                            className={`font-bold text-2xl bg-gradient-to-r ${item.kleurGradient} bg-clip-text text-transparent`}
                                                            animate={{
                                                                scale: isActive ? 1.1 : 1,
                                                            }}
                                                        >
                                                            {item.jaar}
                                                        </motion.span>
                                                    </div>

                                                    {/* Titel */}
                                                    <h3 className="text-xl font-bold text-secundair-900">
                                                        {item.titel}
                                                    </h3>

                                                    {/* Beschrijving */}
                                                    <p className="text-secundair-600 leading-relaxed">
                                                        {item.beschrijving}
                                                    </p>

                                                    {/* Mijlpaal badge */}
                                                    <motion.div
                                                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.kleurGradient} text-white rounded-full text-sm font-medium shadow-lg`}
                                                        whileHover={{ scale: 1.05 }}
                                                    >
                                                        <Award className="w-4 h-4 mr-2" />
                                                        {item.mijlpaal}
                                                    </motion.div>

                                                    {/* Hoogtepunten */}
                                                    <AnimatePresence>
                                                        {isActive && (
                                                            <motion.div
                                                                initial={{ opacity: 0, height: 0 }}
                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                exit={{ opacity: 0, height: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="space-y-2 border-t border-secundair-200 pt-4"
                                                            >
                                                                <h4 className="font-semibold text-secundair-900 text-sm">
                                                                    Hoogtepunten:
                                                                </h4>
                                                                {item.hoogtepunten.map((punt, puntIndex) => (
                                                                    <motion.div
                                                                        key={puntIndex}
                                                                        className="flex items-center text-sm text-secundair-600"
                                                                        initial={{ opacity: 0, x: -10 }}
                                                                        animate={{ opacity: 1, x: 0 }}
                                                                        transition={{ delay: puntIndex * 0.1 }}
                                                                    >
                                                                        <CheckCircle className="w-3 h-3 mr-2 text-green-500" />
                                                                        {punt}
                                                                    </motion.div>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            </Kaart>
                                        </motion.div>
                                    </div>

                                    {/* Timeline dot */}
                                    <div className="hidden lg:flex lg:w-2/12 justify-center relative">
                                        <motion.div
                                            className={`w-6 h-6 bg-gradient-to-r ${item.kleurGradient} rounded-full border-4 border-white shadow-lg z-10`}
                                            animate={{
                                                scale: isActive ? 1.3 : 1,
                                                boxShadow: isActive
                                                    ? '0 0 20px rgba(37, 99, 235, 0.5)'
                                                    : '0 4px 6px rgba(0, 0, 0, 0.1)',
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />

                                        {/* Pulse effect */}
                                        <motion.div
                                            className={`absolute w-6 h-6 bg-gradient-to-r ${item.kleurGradient} rounded-full opacity-20`}
                                            animate={{
                                                scale: isActive ? [1, 2, 1] : 1,
                                                opacity: isActive ? [0.2, 0, 0.2] : 0.2,
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: isActive ? Infinity : 0,
                                                ease: 'easeInOut',
                                            }}
                                        />
                                    </div>

                                    {/* Spacer voor andere kant */}
                                    <div className="hidden lg:block lg:w-5/12"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </Sectie>

            {/* Bedrijfscijfers Grid */}
            <Sectie
                achtergrondKleur="grijs"
                padding="groot"
                patroon="hexagon"
                decoratie="particles"
            >
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Website Makers in cijfers
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Onze prestaties spreken voor zich - dit zijn de cijfers die tellen.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {bedrijfsCijfers.map((cijfer, index) => {
                        const IconComponent = cijfer.icoon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{
                                    y: -5,
                                    transition: { duration: 0.3 },
                                }}
                            >
                                <Kaart
                                    hoverEffect="glow"
                                    padding="groot"
                                    className="text-center h-full group"
                                    variant="elevated"
                                >
                                    <div className="space-y-4">
                                        <motion.div
                                            className={`w-16 h-16 bg-gradient-to-r ${cijfer.kleurGradient} rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
                                            whileHover={{
                                                rotate: 360,
                                                scale: 1.1,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </motion.div>

                                        <motion.div
                                            className="text-4xl font-bold text-secundair-900 group-hover:text-primair-600 transition-colors"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            {cijfer.nummer}
                                        </motion.div>

                                        <h3 className="text-lg font-semibold text-secundair-900">
                                            {cijfer.label}
                                        </h3>

                                        <p className="text-secundair-600 text-sm">
                                            {cijfer.beschrijving}
                                        </p>
                                    </div>
                                </Kaart>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Sectie>

            {/* Waarom kiezen voor ons */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Tekst */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                            Waarom kiezen ondernemers voor ons?
                        </h2>
                        <p className="text-lg text-secundair-600 leading-relaxed">
                            We zijn niet zomaar een webdevelopment bureau. We zijn jouw digitale partners
                            die begrijpen dat een website een investering is in de groei van je bedrijf.
                        </p>

                        <div className="space-y-4">
                            {[
                                {
                                    icoon: Coffee,
                                    titel: 'Persoonlijke Aanpak',
                                    beschrijving: 'We nemen de tijd om jouw bedrijf te begrijpen en bouwen websites die passen bij jouw doelen.',
                                    kleur: 'text-green-600',
                                    bg: 'bg-green-100'
                                },
                                {
                                    icoon: Code,
                                    titel: 'Technische Expertise',
                                    beschrijving: 'We gebruiken de nieuwste technologieën en beste praktijken voor optimale prestaties en veiligheid.',
                                    kleur: 'text-blue-600',
                                    bg: 'bg-blue-100'
                                },
                                {
                                    icoon: Lightbulb,
                                    titel: 'Resultaatgericht',
                                    beschrijving: 'We bouwen geen websites, we bouwen digitale groeimachines die écht bijdragen aan je bedrijfssucces.',
                                    kleur: 'text-orange-600',
                                    bg: 'bg-orange-100'
                                }
                            ].map((item, index) => {
                                const IconComponent = item.icoon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-start space-x-4 group cursor-pointer"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.div
                                            className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-200`}
                                            whileHover={{ rotate: 5 }}
                                        >
                                            <IconComponent className={`w-6 h-6 ${item.kleur}`} />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-semibold text-secundair-900 group-hover:text-primair-600 transition-colors">
                                                {item.titel}
                                            </h4>
                                            <p className="text-secundair-600 text-sm leading-relaxed">
                                                {item.beschrijving}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Knop variant="primair" grootte="groot">
                                Plan Een Kennismaking
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Knop>
                        </motion.div>
                    </motion.div>

                    {/* Visual met stats */}
                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="bg-gradient-to-br from-primair-100 to-primair-200 rounded-3xl p-8 relative overflow-hidden">
                            {/* Decoratieve elementen */}
                            <motion.div
                                className="absolute top-4 right-4 w-16 h-16 bg-white/20 rounded-full"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 180, 360],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            />

                            <div className="space-y-6 relative z-10">
                                {/* Contact info card */}
                                <Kaart padding="normaal" className="bg-white/90 backdrop-blur-sm">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Phone className="w-5 h-5 text-primair-600" />
                                        <span className="font-medium text-secundair-900">Direct Contact</span>
                                    </div>
                                    <div className="space-y-2 text-sm text-secundair-600">
                                        <div>📞 +31 (0)6 12 34 56 78</div>
                                        <div>📧 info@websitemakers.nl</div>
                                        <div>📍 Amsterdam, Nederland</div>
                                    </div>
                                </Kaart>

                                {/* Resultaten card */}
                                <Kaart padding="normaal" className="bg-white/90 backdrop-blur-sm">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <TrendingUp className="w-5 h-5 text-green-600" />
                                        <span className="font-medium text-secundair-900">Gemiddelde Resultaten</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <div className="text-lg font-bold text-green-600">+60%</div>
                                            <div className="text-xs text-secundair-500">Meer Leads</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-blue-600">+150%</div>
                                            <div className="text-xs text-secundair-500">Traffic</div>
                                        </div>
                                        <div>
                                            <div className="text-lg font-bold text-orange-600">+40%</div>
                                            <div className="text-xs text-secundair-500">Conversie</div>
                                        </div>
                                    </div>
                                </Kaart>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Sectie>

            {/* CTA Sectie */}
            <Sectie
                achtergrondKleur="primair"
                padding="groot"
                patroon="waves"
                decoratie="organic"
            >
                <motion.div
                    className="text-center space-y-8"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Klaar om samen te werken?
                        </h2>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto">
                            We geloven in persoonlijk contact. Plan een vrijblijvend gesprek in
                            en ontdek hoe wij jouw bedrijf kunnen helpen groeien.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Knop variant="secundair" grootte="groot">
                                <Calendar className="w-5 h-5 mr-2" />
                                Plan Een Kennismaking
                            </Knop>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                <Eye className="w-5 h-5 mr-2" />
                                Bekijk Ons Portfolio
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Knop>
                        </motion.div>
                    </div>

                    {/* Contact info */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-primair-100"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <div className="flex items-center space-x-2">
                            <Mail className="w-5 h-5" />
                            <span>info@websitemakers.nl</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Phone className="w-5 h-5" />
                            <span>+31 (0)6 12 34 56 78</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5" />
                            <span>Ma-Vr: 09:00-17:00</span>
                        </div>
                    </motion.div>
                </motion.div>
            </Sectie>
        </>
    );
}