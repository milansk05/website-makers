// src/app/diensten/page.tsx - Volledig Vernieuwde en Verbeterde Diensten Pagina
'use client';

// Zorg dat alle imports bovenaan staan
import React, { useState } from 'react';
import { Code, Settings, Server, Search, CheckCircle, ArrowRight, Clock, Users, Zap, Star, Award, Calendar, Phone, Mail, TrendingUp, Shield, Globe, Lightbulb, Target, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sectie } from '../../components/ui/Sectie';
import { Kaart } from '../../components/ui/Kaart';
import { Knop } from '../../components/ui/Knop';

interface Dienst {
    id: string;
    icoon: React.ComponentType<{ className?: string }>;
    titel: string;
    tagline: string;
    korteDescriptie: string;
    uitgebreideDescriptie: string;
    functies: string[];
    voordelen: string[];
    prijsVanaf: number;
    prijsType: 'eenmalig' | 'maandelijks';
    levertijd: string;
    geschiktVoor: string[];
    kleurGradient: string;
    achtergrondKleur: string;
    populariteit: number;
    uitgelicht: boolean;
    resultaten: string[];
    technologieen: string[];
    garanties: string[];
}

const diensten: Dienst[] = [
    {
        id: 'websitebouw',
        icoon: Code,
        titel: 'Website Ontwikkeling',
        tagline: 'Van concept tot conversie',
        korteDescriptie: 'Moderne, responsieve websites die klanten aantrekken en omzet genereren.',
        uitgebreideDescriptie: 'Wij bouwen professionele websites die niet alleen visueel aantrekkelijk zijn, maar ook strategisch ontworpen om je bedrijfsdoelen te behalen. Van eenvoudige bedrijfswebsites tot complexe webapplicaties - elke website wordt op maat gemaakt.',
        functies: [
            'Volledig responsief design voor alle apparaten',
            'Gebruiksvriendelijk Content Management Systeem',
            'SEO-geoptimaliseerde opbouw vanaf dag één',
            'Snelle laadtijden door moderne technologie',
            'Veilige hosting en SSL-certificaten',
            'Integratie met sociale media platforms',
            'Contact- en aanvraagformulieren',
            'Google Analytics en tracking setup'
        ],
        voordelen: [
            'Professionele uitstraling die vertrouwen wekt',
            'Verhoogde online vindbaarheid in Google',
            'Meer leads en klanten via je website',
            'Eenvoudig zelf content beheren'
        ],
        prijsVanaf: 1499,
        prijsType: 'eenmalig',
        levertijd: '2-4 weken',
        geschiktVoor: ['Startups', 'MKB bedrijven', 'Freelancers', 'Lokale ondernemers'],
        kleurGradient: 'from-blue-500 to-indigo-600',
        achtergrondKleur: 'from-blue-50 to-indigo-50',
        populariteit: 95,
        uitgelicht: true,
        resultaten: [
            'Gemiddeld 150% meer websitebezoekers',
            '60% meer contactaanvragen',
            '40% hogere conversie naar klanten'
        ],
        technologieen: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress'],
        garanties: ['30 dagen gratis aanpassingen', '99.9% uptime garantie', '24/7 technische support']
    },
    {
        id: 'onderhoud',
        icoon: Settings,
        titel: 'Website Onderhoud',
        tagline: 'Zorgeloos online blijven',
        korteDescriptie: 'Professioneel onderhoud om je website veilig, snel en actueel te houden.',
        uitgebreideDescriptie: 'Een website heeft regelmatig onderhoud nodig om optimaal te blijven functioneren. Ons onderhoudsservice zorgt voor updates, beveiliging, backups en prestatie-optimalisatie, zodat jij je kunt focussen op je bedrijf.',
        functies: [
            'Maandelijkse veiligheidsupdates en patches',
            'Performance monitoring en optimalisatie',
            'Wekelijkse automatische backups',
            'Malware scanning en bescherming',
            'Content updates en kleine aanpassingen',
            'Uptime monitoring 24/7',
            'Maandelijkse rapportages en analytics',
            'Technische support via telefoon en email'
        ],
        voordelen: [
            'Altijd een veilige en actuele website',
            'Minimale kans op downtime of problemen',
            'Focus op je bedrijf, wij regelen de techniek',
            'Lagere kosten dan bij problemen achteraf'
        ],
        prijsVanaf: 79,
        prijsType: 'maandelijks',
        levertijd: 'Direct actief',
        geschiktVoor: ['Alle websites', 'WordPress sites', 'E-commerce', 'Bedrijfswebsites'],
        kleurGradient: 'from-green-500 to-emerald-600',
        achtergrondKleur: 'from-green-50 to-emerald-50',
        populariteit: 88,
        uitgelicht: false,
        resultaten: [
            '99.8% uptime voor onze klanten',
            '50% snellere laadtijden na optimalisatie',
            '0 gehackte websites in 5 jaar'
        ],
        technologieen: ['Automated Monitoring', 'Security Scanning', 'Performance Tools', 'Backup Systems'],
        garanties: ['Herstel binnen 2 uur bij problemen', 'Gratis urgente fixes', 'Maandelijks performance rapport']
    },
    {
        id: 'hosting',
        icoon: Server,
        titel: 'Hosting & Domein',
        tagline: 'Snelle en betrouwbare basis',
        korteDescriptie: 'Premium hosting speciaal geoptimaliseerd voor Nederlandse bedrijven.',
        uitgebreideDescriptie: 'Onze hosting service biedt de perfecte basis voor jouw website. Met Nederlandse servers, uitstekende snelheid en betrouwbaarheid zorgen we ervoor dat jouw website altijd beschikbaar is.',
        functies: [
            '99.9% uptime garantie met SLA',
            'Nederlandse datacenter locatie',
            'SSD opslag voor optimale snelheid',
            'Gratis SSL certificaten en vernieuwing',
            'Dagelijkse automatische backups',
            'Onbeperkte e-mail accounts',
            'DNS beheer en domein services',
            'CDN voor wereldwijde snelheid'
        ],
        voordelen: [
            'Supersnel voor Nederlandse bezoekers',
            'GDPR compliant en privacy vriendelijk',
            'Lokale support in Nederlandse taal',
            'Schaalbaar naar jouw groei'
        ],
        prijsVanaf: 19,
        prijsType: 'maandelijks',
        levertijd: '24 uur',
        geschiktVoor: ['Alle websites', 'Nieuwe bedrijven', 'Bestaande sites', 'E-commerce'],
        kleurGradient: 'from-purple-500 to-violet-600',
        achtergrondKleur: 'from-purple-50 to-violet-50',
        populariteit: 82,
        uitgelicht: false,
        resultaten: [
            'Gemiddeld 2.3 seconden laadtijd',
            '99.97% uptime afgelopen jaar',
            '24/7 monitoring en support'
        ],
        technologieen: ['CloudFlare CDN', 'SSD Storage', 'LiteSpeed Servers', 'cPanel'],
        garanties: ['Geld terug garantie', '24/7 monitoring', 'Gratis migratie service']
    },
    {
        id: 'seo',
        icoon: Search,
        titel: 'SEO Optimalisatie',
        tagline: 'Vindbaar in Google',
        korteDescriptie: 'Verbeter je vindbaarheid in Google en trek meer bezoekers aan.',
        uitgebreideDescriptie: 'Met onze SEO service zorgen we ervoor dat jouw website hoger scoort in Google. Meer vindbaarheid betekent meer bezoekers en uiteindelijk meer klanten en omzet voor jouw bedrijf.',
        functies: [
            'Uitgebreid keyword onderzoek en analyse',
            'On-page SEO optimalisatie',
            'Technische SEO verbeteringen',
            'Content strategie en copywriting',
            'Local SEO voor lokale bedrijven',
            'Google My Business optimalisatie',
            'Maandelijkse ranking rapportages',
            'Concurrentie analyse en strategie'
        ],
        voordelen: [
            'Hogere posities in Google zoekresultaten',
            'Meer organische websitebezoekers',
            'Betere kwaliteit bezoekers en leads',
            'Langdurige resultaten en groei'
        ],
        prijsVanaf: 299,
        prijsType: 'maandelijks',
        levertijd: '1-2 weken start',
        geschiktVoor: ['Lokale bedrijven', 'E-commerce', 'Service providers', 'B2B'],
        kleurGradient: 'from-orange-500 to-amber-600',
        achtergrondKleur: 'from-orange-50 to-amber-50',
        populariteit: 91,
        uitgelicht: true,
        resultaten: [
            'Gemiddeld 250% meer organisch verkeer',
            '180% toename in Google rankings',
            '65% meer leads via organische zoekresultaten'
        ],
        technologieen: ['Google Analytics', 'Search Console', 'SEMrush', 'Ahrefs', 'Technical SEO Tools'],
        garanties: ['Eerste resultaten binnen 3 maanden', 'Transparante rapportages', 'Geen langetermijn contracten']
    }
];

const pakketten = [
    {
        naam: 'Starter',
        beschrijving: 'Perfect voor startende ondernemers',
        prijs: 1899,
        oorspronkelijkePrijs: 2299,
        populair: false,
        functies: [
            'Professionele website (5 pagina\'s)',
            'Responsive design voor alle apparaten',
            'Basis SEO optimalisatie',
            '3 maanden gratis hosting',
            '30 dagen support'
        ],
        kleurGradient: 'from-blue-500 to-cyan-500'
    },
    {
        naam: 'Professional',
        beschrijving: 'De beste keuze voor groeiende bedrijven',
        prijs: 2899,
        oorspronkelijkePrijs: 3599,
        populair: true,
        functies: [
            'Uitgebreide website (10 pagina\'s)',
            'Custom design en functionaliteit',
            'Volledige SEO setup',
            '6 maanden gratis hosting',
            '3 maanden onderhoud inclusief',
            'Contact formulieren en integraties',
            'Google Analytics setup'
        ],
        kleurGradient: 'from-purple-500 to-pink-500'
    },
    {
        naam: 'Enterprise',
        beschrijving: 'Voor bedrijven die het maximale willen',
        prijs: 4899,
        oorspronkelijkePrijs: 6299,
        populair: false,
        functies: [
            'Complete website oplossing',
            'E-commerce functionaliteit',
            'Geavanceerde SEO strategie',
            '12 maanden gratis hosting',
            '6 maanden onderhoud inclusief',
            'Custom integraties en API\'s',
            'Training en workshops',
            'Prioriteit support'
        ],
        kleurGradient: 'from-green-500 to-teal-500'
    }
];

const werkproces = [
    {
        stap: 1,
        titel: 'Kennismaking & Strategie',
        beschrijving: 'We leren je bedrijf kennen en bepalen samen de beste aanpak voor jouw doelen.',
        icoon: Users,
        duur: '1-2 dagen',
        kleurGradient: 'from-blue-500 to-cyan-500'
    },
    {
        stap: 2,
        titel: 'Design & Ontwikkeling',
        beschrijving: 'Onze experts gaan aan de slag met het ontwerp en de technische realisatie.',
        icoon: Code,
        duur: '1-3 weken',
        kleurGradient: 'from-purple-500 to-pink-500'
    },
    {
        stap: 3,
        titel: 'Testen & Optimaliseren',
        beschrijving: 'We testen alles uitgebreid en optimaliseren voor de beste prestaties.',
        icoon: Zap,
        duur: '3-5 dagen',
        kleurGradient: 'from-green-500 to-teal-500'
    },
    {
        stap: 4,
        titel: 'Lancering & Nazorg',
        beschrijving: 'Je website gaat live en we zorgen voor doorlopende ondersteuning.',
        icoon: Star,
        duur: '1 dag + doorlopend',
        kleurGradient: 'from-orange-500 to-red-500'
    }
];

const veelGesteldeVragen = [
    {
        vraag: 'Hoe lang duurt het om een website te maken?',
        antwoord: 'Een standaard bedrijfswebsite duurt 2-4 weken. Dit hangt af van de complexiteit, het aantal pagina\'s en de gewenste functionaliteiten. E-commerce sites kunnen 4-6 weken duren.',
        categorie: 'Algemeen'
    },
    {
        vraag: 'Kan ik zelf content aanpassen na oplevering?',
        antwoord: 'Ja, absoluut! Alle websites worden gebouwd met een gebruiksvriendelijk CMS waarmee je eenvoudig teksten, afbeeldingen en andere content kunt wijzigen. We geven ook training.',
        categorie: 'Beheer'
    },
    {
        vraag: 'Zijn jullie websites geschikt voor mobiele apparaten?',
        antwoord: 'Alle onze websites zijn volledig responsief en werken perfect op smartphones, tablets en computers. We testen uitgebreid op verschillende apparaten en browsers.',
        categorie: 'Technisch'
    },
    {
        vraag: 'Wat kost website onderhoud en is dit nodig?',
        antwoord: 'Onderhoud start vanaf €79 per maand. Het is wel aan te raden voor veiligheid, updates en prestaties. Een gehackte website kost vaak meer dan jarenlang onderhoud.',
        categorie: 'Onderhoud'
    },
    {
        vraag: 'Helpen jullie ook met online marketing?',
        antwoord: 'Ja, we bieden SEO optimalisatie, Google Ads beheer en sociale media strategie. Een mooie website is het begin, maar marketing zorgt voor de bezoekers.',
        categorie: 'Marketing'
    },
    {
        vraag: 'Kunnen jullie mijn bestaande website verbeteren?',
        antwoord: 'Zeker! We kunnen bestaande websites redesignen, versnellen, beveiligen of nieuwe functionaliteiten toevoegen. Een analyse is altijd gratis.',
        categorie: 'Verbetering'
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

export default function DienstenPagina() {
    const [geselecteerdeDienst, setGeselecteerdeDienst] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('overzicht');
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <>
            {/* --- Hero Sectie --- */}
            <Sectie achtergrondKleur="primair" padding="groot" patroon="waves" decoratie="floating">
                <div className="relative overflow-hidden">
                    {/* Geavanceerde achtergrond animaties */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                        <motion.div
                            className="absolute bottom-20 right-10 w-80 h-80 bg-primair-300 rounded-full opacity-20 blur-3xl"
                            animate={{
                                x: [0, -80, 0],
                                y: [0, 60, 0],
                                scale: [1, 0.8, 1],
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
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="space-y-6" variants={itemVariants}>
                            <motion.div
                                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
                            >
                                <Award className="w-5 h-5 mr-2" />
                                <span className="font-medium">150+ Succesvolle Projecten</span>
                            </motion.div>

                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                Onze{' '}
                                <motion.span
                                    className="relative"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                        Diensten
                                    </span>
                                    <motion.div
                                        className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                    />
                                </motion.span>
                            </h1>

                            <p className="text-xl text-primair-100 max-w-4xl mx-auto leading-relaxed">
                                Van websiteontwikkeling tot online marketing - wij bieden alle services
                                die je nodig hebt om online te groeien en meer klanten te krijgen.
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            variants={itemVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="secundair" grootte="groot">
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Gratis Strategiegesprek
                                </Knop>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Direct Contact
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Knop>
                            </motion.div>
                        </motion.div>

                        {/* Vertrouwensindicatoren */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8"
                            variants={itemVariants}
                        >
                            {[
                                { icoon: Shield, tekst: '5 jaar ervaring' },
                                { icoon: Users, tekst: '150+ tevreden klanten' },
                                { icoon: Award, tekst: '4.9/5 sterren' },
                                { icoon: Clock, tekst: '24/7 support' }
                            ].map((item, index) => {
                                const IconComponent = item.icoon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="flex items-center space-x-2 text-primair-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 1 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, color: '#ffffff' }}
                                    >
                                        <IconComponent className="w-5 h-5" />
                                        <span className="font-medium">{item.tekst}</span>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>

            {/* --- Tabs & Diensten Overzicht --- */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Wat kunnen wij voor je betekenen?
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Ontdek onze diensten en kies wat het beste bij jouw bedrijf past.
                    </p>
                </motion.div>

                {/* Tab Navigatie */}
                <motion.div
                    className="flex flex-wrap justify-center gap-4 mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {[
                        { id: 'overzicht', label: 'Alle Diensten', icoon: Globe },
                        { id: 'pakketten', label: 'Pakketten', icoon: Target },
                        { id: 'proces', label: 'Ons Proces', icoon: Clock }
                    ].map((tab) => {
                        const IconComponent = tab.icoon;
                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === tab.id
                                        ? 'bg-primair-600 text-white shadow-lg'
                                        : 'bg-secundair-100 text-secundair-700 hover:bg-primair-100 hover:text-primair-700'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <IconComponent className="w-4 h-4" />
                                <span>{tab.label}</span>
                            </motion.button>
                        );
                    })}
                </motion.div>

                {/* Tab Content */}
                <AnimatePresence mode="wait">
                    {activeTab === 'overzicht' && (
                        <motion.div
                            key="overzicht"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-20"
                        >
                            {diensten.map((dienst, index) => {
                                const IconComponent = dienst.icoon;
                                const isEven = index % 2 === 0;
                                const isSelected = geselecteerdeDienst === dienst.id;

                                return (
                                    <motion.div
                                        key={dienst.id}
                                        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''
                                            }`}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                    >
                                        {/* Content */}
                                        <div className={`space-y-6 ${!isEven ? 'lg:col-start-2' : ''}`}>
                                            <div className="flex items-center space-x-4">
                                                <motion.div
                                                    className={`w-16 h-16 bg-gradient-to-r ${dienst.kleurGradient} rounded-2xl flex items-center justify-center shadow-lg`}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: 360,
                                                    }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </motion.div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-secundair-900">
                                                        {dienst.titel}
                                                    </h3>
                                                    <p className={`text-sm font-medium bg-gradient-to-r ${dienst.kleurGradient} bg-clip-text text-transparent`}>
                                                        {dienst.tagline}
                                                    </p>
                                                </div>
                                                {dienst.uitgelicht && (
                                                    <motion.div
                                                        className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-bold"
                                                        animate={{
                                                            scale: [1, 1.1, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                        }}
                                                    >
                                                        POPULAIR
                                                    </motion.div>
                                                )}
                                            </div>

                                            <p className="text-lg text-secundair-600 leading-relaxed">
                                                {dienst.uitgebreideDescriptie}
                                            </p>

                                            {/* Belangrijkste voordelen */}
                                            <div className="space-y-3">
                                                <h4 className="font-semibold text-secundair-900 flex items-center">
                                                    <Heart className="w-4 h-4 mr-2 text-red-500" />
                                                    Wat dit je oplevert:
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                    {dienst.voordelen.map((voordeel, vIndex) => (
                                                        <motion.div
                                                            key={vIndex}
                                                            className="flex items-center space-x-3"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: vIndex * 0.1 }}
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                            <span className="text-secundair-700">{voordeel}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Resultaten */}
                                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                                                <h4 className="font-semibold text-secundair-900 mb-3 flex items-center">
                                                    <TrendingUp className="w-5 h-5 mr-2 text-green-600" />
                                                    Bewezen resultaten:
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                    {dienst.resultaten.map((resultaat, rIndex) => (
                                                        <motion.div
                                                            key={rIndex}
                                                            className="text-center"
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: rIndex * 0.1 }}
                                                        >
                                                            <div className="text-lg font-bold text-green-700">
                                                                {resultaat.split(' ')[0]}
                                                            </div>
                                                            <div className="text-sm text-green-600">
                                                                {resultaat.split(' ').slice(1).join(' ')}
                                                            </div>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-4">
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Knop
                                                        variant="primair"
                                                        grootte="groot"
                                                        klikHandler={() => setGeselecteerdeDienst(
                                                            geselecteerdeDienst === dienst.id ? null : dienst.id
                                                        )}
                                                    >
                                                        {isSelected ? 'Minder Details' : 'Meer Informatie'}
                                                        <ArrowRight className={`w-5 h-5 ml-2 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                                                    </Knop>
                                                </motion.div>
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Knop variant="outline" grootte="groot">
                                                        <Mail className="w-5 h-5 mr-2" />
                                                        Offerte Aanvragen
                                                    </Knop>
                                                </motion.div>
                                            </div>

                                            {/* Uitklapbare details */}
                                            <AnimatePresence>
                                                {isSelected && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="bg-secundair-50 rounded-xl p-6 space-y-6">
                                                            {/* Alle functies */}
                                                            <div>
                                                                <h5 className="font-semibold text-secundair-900 mb-3 flex items-center">
                                                                    <Lightbulb className="w-4 h-4 mr-2 text-yellow-600" />
                                                                    Alle functies:
                                                                </h5>
                                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                                    {dienst.functies.map((functie, fIndex) => (
                                                                        <motion.div
                                                                            key={fIndex}
                                                                            className="flex items-center space-x-2 text-sm text-secundair-700"
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: fIndex * 0.05 }}
                                                                        >
                                                                            <div className="w-1.5 h-1.5 bg-primair-500 rounded-full" />
                                                                            <span>{functie}</span>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Technologieën */}
                                                            <div>
                                                                <h5 className="font-semibold text-secundair-900 mb-3">
                                                                    Gebruikte technologieën:
                                                                </h5>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {dienst.technologieen.map((tech, tIndex) => (
                                                                        <motion.span
                                                                            key={tIndex}
                                                                            className={`px-3 py-1 bg-gradient-to-r ${dienst.kleurGradient} text-white rounded-full text-sm font-medium`}
                                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                                            animate={{ opacity: 1, scale: 1 }}
                                                                            transition={{ delay: tIndex * 0.1 }}
                                                                            whileHover={{ scale: 1.05 }}
                                                                        >
                                                                            {tech}
                                                                        </motion.span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Garanties */}
                                                            <div>
                                                                <h5 className="font-semibold text-secundair-900 mb-3 flex items-center">
                                                                    <Shield className="w-4 h-4 mr-2 text-green-600" />
                                                                    Onze garanties:
                                                                </h5>
                                                                <div className="space-y-2">
                                                                    {dienst.garanties.map((garantie, gIndex) => (
                                                                        <motion.div
                                                                            key={gIndex}
                                                                            className="flex items-center space-x-3 text-sm text-secundair-700"
                                                                            initial={{ opacity: 0, x: -10 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            transition={{ delay: gIndex * 0.1 }}
                                                                        >
                                                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                                                            <span>{garantie}</span>
                                                                        </motion.div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Prijs Card */}
                                        <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                                            <motion.div
                                                className="relative"
                                                whileHover={{
                                                    y: -10,
                                                    transition: { duration: 0.3 },
                                                }}
                                            >
                                                <Kaart hoverEffect="glow" padding="groot" className="relative overflow-hidden">
                                                    {/* Gradient achtergrond */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${dienst.achtergrondKleur} opacity-20 rounded-xl`} />

                                                    {/* Populariteits indicator */}
                                                    <motion.div
                                                        className="absolute top-4 right-4"
                                                        animate={{
                                                            scale: [1, 1.1, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                        }}
                                                    >
                                                        <div className={`w-16 h-16 bg-gradient-to-r ${dienst.kleurGradient} rounded-full flex items-center justify-center`}>
                                                            <div className="text-white text-xs font-bold text-center">
                                                                <div>{dienst.populariteit}%</div>
                                                                <div className="text-[10px]">keuze</div>
                                                            </div>
                                                        </div>
                                                    </motion.div>

                                                    <div className="space-y-6 relative z-10">
                                                        <div className="space-y-4">
                                                            <div className="text-4xl font-bold text-secundair-900">
                                                                €{dienst.prijsVanaf}
                                                                <span className="text-lg font-normal text-secundair-600 ml-1">
                                                                    {dienst.prijsType === 'maandelijks' ? '/maand' : 'vanaf'}
                                                                </span>
                                                            </div>
                                                            <div className="text-sm text-secundair-500">
                                                                Levertijd: {dienst.levertijd}
                                                            </div>
                                                        </div>

                                                        <div className="border-t border-secundair-200 pt-4">
                                                            <h4 className="font-semibold text-secundair-900 mb-3">
                                                                Perfect voor:
                                                            </h4>
                                                            <div className="flex flex-wrap gap-2">
                                                                {dienst.geschiktVoor.map((type, typeIndex) => (
                                                                    <motion.span
                                                                        key={typeIndex}
                                                                        className="px-3 py-1 bg-primair-100 text-primair-700 rounded-full text-sm"
                                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                                        viewport={{ once: true }}
                                                                        transition={{ delay: typeIndex * 0.1 }}
                                                                        whileHover={{ scale: 1.05 }}
                                                                    >
                                                                        {type}
                                                                    </motion.span>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <motion.div
                                                            whileHover={{ scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            <Knop variant="primair" volleBreedte grootte="groot">
                                                                <Calendar className="w-5 h-5 mr-2" />
                                                                Direct Bestellen
                                                                <ArrowRight className="w-5 h-5 ml-2" />
                                                            </Knop>
                                                        </motion.div>
                                                    </div>
                                                </Kaart>
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    )}

                    {activeTab === 'pakketten' && (
                        <motion.div
                            key="pakketten"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {pakketten.map((pakket, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative"
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <Kaart
                                            hoverEffect="glow"
                                            padding="groot"
                                            className={`h-full relative overflow-hidden ${pakket.populair ? 'ring-2 ring-primair-500' : ''}`}
                                        >
                                            {pakket.populair && (
                                                <motion.div
                                                    className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                                                    initial={{ scale: 0, rotate: -12 }}
                                                    animate={{ scale: 1, rotate: -12 }}
                                                    transition={{ delay: 0.5 }}
                                                >
                                                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                                                        <Star className="w-4 h-4 inline mr-1" />
                                                        MEEST GEKOZEN
                                                    </div>
                                                </motion.div>
                                            )}

                                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${pakket.kleurGradient} opacity-10 rounded-bl-full`} />

                                            <div className="space-y-6 relative z-10">
                                                <div className="space-y-2">
                                                    <h3 className="text-2xl font-bold text-secundair-900">
                                                        {pakket.naam}
                                                    </h3>
                                                    <p className="text-secundair-600">
                                                        {pakket.beschrijving}
                                                    </p>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex items-baseline space-x-2">
                                                        <span className="text-4xl font-bold text-secundair-900">
                                                            €{pakket.prijs}
                                                        </span>
                                                        <span className="text-lg text-secundair-500 line-through">
                                                            €{pakket.oorspronkelijkePrijs}
                                                        </span>
                                                    </div>
                                                    <div className="text-sm text-green-600 font-medium">
                                                        Besparing: €{pakket.oorspronkelijkePrijs - pakket.prijs}
                                                    </div>
                                                </div>

                                                <div className="space-y-3">
                                                    {pakket.functies.map((functie, fIndex) => (
                                                        <motion.div
                                                            key={fIndex}
                                                            className="flex items-center space-x-3"
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: index * 0.1 + fIndex * 0.05 }}
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                            <span className="text-secundair-700">{functie}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                <motion.div
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                >
                                                    <Knop
                                                        variant={pakket.populair ? "primair" : "outline"}
                                                        volleBreedte
                                                        grootte="groot"
                                                    >
                                                        {pakket.populair ? (
                                                            <>
                                                                <Star className="w-5 h-5 mr-2" />
                                                                Kies Dit Pakket
                                                            </>
                                                        ) : (
                                                            <>
                                                                Meer Informatie
                                                                <ArrowRight className="w-5 h-5 ml-2" />
                                                            </>
                                                        )}
                                                    </Knop>
                                                </motion.div>
                                            </div>
                                        </Kaart>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className="text-center mt-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <p className="text-secundair-600 mb-4">
                                    Niet zeker welk pakket het beste bij je past?
                                </p>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Knop variant="primair" grootte="groot">
                                        <Phone className="w-5 h-5 mr-2" />
                                        Gratis Adviesgesprek
                                    </Knop>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}

                    {activeTab === 'proces' && (
                        <motion.div
                            key="proces"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="relative">
                                {/* Timeline lijn */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-secundair-200 h-full hidden lg:block">
                                    <motion.div
                                        className="w-full bg-gradient-to-b from-primair-500 to-purple-500 origin-top"
                                        initial={{ scaleY: 0 }}
                                        animate={{ scaleY: 1 }}
                                        transition={{ duration: 2, ease: 'easeOut' }}
                                    />
                                </div>

                                <div className="space-y-16 lg:space-y-24">
                                    {werkproces.map((stap, index) => {
                                        const IconComponent = stap.icoon;
                                        const isEven = index % 2 === 0;

                                        return (
                                            <motion.div
                                                key={index}
                                                className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                                                initial={{ opacity: 0, y: 50 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                            >
                                                {/* Content Card */}
                                                <div className={`lg:w-5/12 ${isEven ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                                                    <motion.div
                                                        whileHover={{
                                                            scale: 1.02,
                                                            y: -5,
                                                        }}
                                                    >
                                                        <Kaart hoverEffect="glow" padding="groot" className="relative overflow-hidden">
                                                            <div className={`absolute inset-0 bg-gradient-to-br ${stap.kleurGradient} opacity-5 rounded-xl`} />

                                                            <div className="space-y-4 relative z-10">
                                                                <div className="flex items-center space-x-3">
                                                                    <motion.div
                                                                        className={`w-12 h-12 bg-gradient-to-r ${stap.kleurGradient} rounded-xl flex items-center justify-center shadow-lg`}
                                                                        whileHover={{
                                                                            rotate: 360,
                                                                            scale: 1.1,
                                                                        }}
                                                                        transition={{ duration: 0.6 }}
                                                                    >
                                                                        <IconComponent className="w-6 h-6 text-white" />
                                                                    </motion.div>
                                                                    <div>
                                                                        <motion.span
                                                                            className={`font-bold text-2xl bg-gradient-to-r ${stap.kleurGradient} bg-clip-text text-transparent`}
                                                                        >
                                                                            Stap {stap.stap}
                                                                        </motion.span>
                                                                    </div>
                                                                </div>

                                                                <h3 className="text-xl font-bold text-secundair-900">
                                                                    {stap.titel}
                                                                </h3>

                                                                <p className="text-secundair-600 leading-relaxed">
                                                                    {stap.beschrijving}
                                                                </p>

                                                                <div className="flex items-center space-x-2 text-sm text-secundair-500">
                                                                    <Clock className="w-4 h-4" />
                                                                    <span>Duur: {stap.duur}</span>
                                                                </div>
                                                            </div>
                                                        </Kaart>
                                                    </motion.div>
                                                </div>

                                                {/* Timeline dot */}
                                                <div className="hidden lg:flex lg:w-2/12 justify-center relative">
                                                    <motion.div
                                                        className={`w-8 h-8 bg-gradient-to-r ${stap.kleurGradient} rounded-full border-4 border-white shadow-lg z-10`}
                                                        animate={{
                                                            scale: [1, 1.2, 1],
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            delay: index * 0.5,
                                                        }}
                                                    />
                                                </div>

                                                {/* Spacer */}
                                                <div className="hidden lg:block lg:w-5/12"></div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Sectie>

            {/* --- FAQ Sectie --- */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Veelgestelde Vragen
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Antwoorden op de meest gestelde vragen over onze diensten en werkwijze.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {veelGesteldeVragen.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Kaart className="overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                        className="w-full p-6 text-left hover:bg-secundair-50 transition-colors duration-200"
                                    >
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-4">
                                                <span className="text-xs bg-primair-100 text-primair-700 px-2 py-1 rounded-full font-medium">
                                                    {faq.categorie}
                                                </span>
                                                <h3 className="font-semibold text-secundair-900 text-lg">
                                                    {faq.vraag}
                                                </h3>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: openFaq === index ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ArrowRight className="w-5 h-5 text-secundair-400" />
                                            </motion.div>
                                        </div>
                                    </button>

                                    <AnimatePresence>
                                        {openFaq === index && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-6 pb-6 text-secundair-600 leading-relaxed">
                                                    {faq.antwoord}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Kaart>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <p className="text-secundair-600 mb-4">
                        Staat je vraag er niet bij?
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Knop variant="primair" grootte="groot">
                            <Mail className="w-5 h-5 mr-2" />
                            Stel Je Vraag
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Knop>
                    </motion.div>
                </motion.div>
            </Sectie>

            {/* --- CTA Sectie --- */}
            <Sectie achtergrondKleur="primair" padding="groot" patroon="dots" decoratie="organic">
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
                        <motion.div
                            className="absolute bottom-0 right-0 w-80 h-80 bg-primair-300 rounded-full opacity-20 blur-3xl"
                            animate={{
                                x: [0, -80, 0],
                                y: [0, 60, 0],
                            }}
                            transition={{
                                duration: 20,
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
                                Klaar om te starten met jouw project?
                            </motion.h2>
                            <motion.p
                                className="text-xl text-primair-100 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                Plan een gratis strategiegesprek in en ontdek welke diensten
                                het beste bij jouw bedrijf passen. Geen verplichtingen, wel concrete adviezen.
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
                                    <Calendar className="w-5 h-5 mr-2" />
                                    Gratis Strategiegesprek
                                </Knop>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Bel Direct: +31 (0)6 12 34 56 78
                                </Knop>
                            </motion.div>
                        </motion.div>

                        {/* Vertrouwensindicatoren */}
                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-primair-100"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                        >
                            {[
                                { icoon: CheckCircle, tekst: 'Gratis gesprek van 30 minuten' },
                                { icoon: Lightbulb, tekst: 'Concrete adviezen en strategie' },
                                { icoon: Heart, tekst: 'Geen verplichtingen' }
                            ].map((item, index) => {
                                const IconComponent = item.icoon;
                                return (
                                    <div key={index} className="flex items-center space-x-2">
                                        <IconComponent className="w-5 h-5" />
                                        <span>{item.tekst}</span>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>

        </>
    );
}