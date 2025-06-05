// src/app/diensten/page.tsx - Dienstenpagina
import React from 'react';
import { Code, Settings, Server, Search, CheckCircle, ArrowRight, Clock, Users, Zap } from 'lucide-react';
import { Sectie } from '../../components/ui/Sectie';
import { Kaart } from '../../components/ui/Kaart';
import { Knop } from '../../components/ui/Knop';

const diensten = [
    {
        id: 'websitebouw',
        icoon: Code,
        titel: 'Website Ontwikkeling',
        korteDescriptie: 'Moderne, responsieve websites die perfect werken op alle apparaten.',
        uitgebreideDescriptie: 'Wij bouwen professionele websites die niet alleen mooi zijn, maar ook functioneel en gebruiksvriendelijk. Van eenvoudige bedrijfswebsites tot complexe webapplicaties - wij zorgen ervoor dat jouw online aanwezigheid perfect aansluit bij jouw bedrijfsdoelen.',
        functies: [
            'Volledig responsief design',
            'Content Management Systeem (CMS)',
            'E-commerce functionaliteit',
            'Custom maatwerk oplossingen',
            'Snelle laadtijden',
            'SEO-vriendelijke opbouw',
            'Veilige en moderne technologie',
            'Integratie met externe systemen'
        ],
        prijsVanaf: 1499,
        levertijd: '2-4 weken',
        geschiktVoor: ['Startups', 'MKB', 'E-commerce', 'Portfolio websites'],
        kleurAccent: 'bg-blue-500'
    },
    {
        id: 'onderhoud',
        icoon: Settings,
        titel: 'Website Onderhoud',
        korteDescriptie: 'Professioneel onderhoud om je website veilig, snel en up-to-date te houden.',
        uitgebreideDescriptie: 'Een website heeft regelmatig onderhoud nodig om optimaal te blijven functioneren. Ons onderhoudsservice zorgt ervoor dat je website altijd veilig, snel en actueel blijft, zodat jij je kunt focussen op je bedrijf.',
        functies: [
            'Maandelijkse veiligheidsupdates',
            'Performance monitoring en optimalisatie',
            'Content updates en aanpassingen',
            'Automatische backup beheer',
            'Uptime monitoring 24/7',
            'Technische support',
            'Software updates',
            'Maandelijkse rapportages'
        ],
        prijsVanaf: 79,
        levertijd: 'Doorlopend',
        geschiktVoor: ['Alle websites', 'WordPress sites', 'Webshops', 'Bedrijfswebsites'],
        kleurAccent: 'bg-green-500'
    },
    {
        id: 'hosting',
        icoon: Server,
        titel: 'Hosting & Domein',
        korteDescriptie: 'Betrouwbare hosting speciaal geoptimaliseerd voor Nederlandse bedrijven.',
        uitgebreideDescriptie: 'Onze hosting service biedt de perfecte basis voor jouw website. Met Nederlandse servers, uitstekende uptime en snelle laadtijden zorgen wij ervoor dat jouw website altijd beschikbaar is voor je bezoekers.',
        functies: [
            '99.9% uptime garantie',
            'Nederlandse datacenter',
            'SSD opslag voor snelheid',
            'Gratis SSL certificaten',
            'Dagelijkse backups',
            'E-mail accounts inclusief',
            'DNS beheer',
            '24/7 technische monitoring'
        ],
        prijsVanaf: 19,
        levertijd: '24 uur',
        geschiktVoor: ['Alle websites', 'Startende bedrijven', 'Gevestigde ondernemingen', 'Webshops'],
        kleurAccent: 'bg-purple-500'
    },
    {
        id: 'seo',
        icoon: Search,
        titel: 'SEO Optimalisatie',
        korteDescriptie: 'Verbeter je vindbaarheid in Google en trek meer bezoekers aan.',
        uitgebreideDescriptie: 'Met onze SEO service zorgen we ervoor dat jouw website hoger scoort in Google en andere zoekmachines. Meer vindbaarheid betekent meer bezoekers en uiteindelijk meer klanten voor jouw bedrijf.',
        functies: [
            'Uitgebreid keyword onderzoek',
            'On-page SEO optimalisatie',
            'Technische SEO verbeteringen',
            'Content strategie ontwikkeling',
            'Local SEO voor lokale bedrijven',
            'Ranking monitoring en rapportage',
            'Concurrentieanalyse',
            'Google Analytics setup'
        ],
        prijsVanaf: 299,
        levertijd: '1-2 weken',
        geschiktVoor: ['Lokale bedrijven', 'E-commerce', 'Service providers', 'B2B bedrijven'],
        kleurAccent: 'bg-orange-500'
    }
];

const werkproces = [
    {
        stap: 1,
        titel: 'Kennismaking & Analyse',
        beschrijving: 'We bespreken jouw wensen, doelen en analyseren de huidige situatie.',
        icoon: Users
    },
    {
        stap: 2,
        titel: 'Strategie & Planning',
        beschrijving: 'Op basis van de analyse maken we een gedetailleerd plan en tijdschema.',
        icoon: Clock
    },
    {
        stap: 3,
        titel: 'Uitvoering & Ontwikkeling',
        beschrijving: 'Wij gaan aan de slag en houden je op de hoogte van de voortgang.',
        icoon: Zap
    },
    {
        stap: 4,
        titel: 'Oplevering & Nazorg',
        beschrijving: 'Je nieuwe website gaat live en we bieden doorlopende ondersteuning.',
        icoon: CheckCircle
    }
];

export default function DienstenPagina() {
    return (
        <>
            {/* Hero Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="text-center space-y-8 text-white">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Onze Diensten
                        </h1>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto leading-relaxed">
                            Van websiteontwikkeling tot SEO optimalisatie - wij bieden alle services
                            die je nodig hebt om online te groeien en meer klanten te krijgen.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Knop variant="secundair" grootte="groot">
                            Gratis Strategiegesprek
                        </Knop>
                        <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                            Bekijk Portfolio
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Knop>
                    </div>
                </div>
            </Sectie>

            {/* Diensten Overzicht */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="space-y-16">
                    {diensten.map((dienst, index) => {
                        const IconComponent = dienst.icoon;
                        const isEven = index % 2 === 0;

                        return (
                            <div key={dienst.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                                {/* Tekst Content */}
                                <div className={`space-y-6 ${!isEven ? 'lg:order-2' : ''}`}>
                                    <div className="flex items-center space-x-4">
                                        <div className={`w-12 h-12 ${dienst.kleurAccent} rounded-lg flex items-center justify-center`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-secundair-900">
                                            {dienst.titel}
                                        </h2>
                                    </div>

                                    <p className="text-lg text-secundair-600 leading-relaxed">
                                        {dienst.uitgebreideDescriptie}
                                    </p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {dienst.functies.map((functie, functieIndex) => (
                                            <div key={functieIndex} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                                <span className="text-secundair-700">{functie}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                        <Knop variant="primair">
                                            Meer Informatie
                                        </Knop>
                                        <Knop variant="outline">
                                            Offerte Aanvragen
                                        </Knop>
                                    </div>
                                </div>

                                {/* Info Card */}
                                <div className={`${!isEven ? 'lg:order-1' : ''}`}>
                                    <Kaart padding="groot" className="space-y-6">
                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-3xl font-bold text-secundair-900">
                                                    €{dienst.prijsVanaf}
                                                    <span className="text-lg font-normal text-secundair-600 ml-1">
                                                        {dienst.titel.includes('Onderhoud') || dienst.titel.includes('Hosting') ? '/maand' : 'vanaf'}
                                                    </span>
                                                </div>
                                                <div className="text-sm text-secundair-500">
                                                    Levertijd: {dienst.levertijd}
                                                </div>
                                            </div>

                                            <div className="border-t border-secundair-200 pt-4">
                                                <h4 className="font-semibold text-secundair-900 mb-3">
                                                    Geschikt voor:
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {dienst.geschiktVoor.map((type, typeIndex) => (
                                                        <span key={typeIndex} className="px-3 py-1 bg-primair-100 text-primair-700 rounded-full text-sm">
                                                            {type}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <Knop variant="primair" volleBreedte>
                                            Direct Bestellen
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Knop>
                                    </Kaart>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Sectie>

            {/* Werkproces Sectie */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Zo werken wij
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Van eerste contact tot succesvolle lancering - ons bewezen proces
                        zorgt voor het beste resultaat.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {werkproces.map((stap, index) => {
                        const IconComponent = stap.icoon;
                        return (
                            <div key={index} className="text-center space-y-4">
                                <div className="relative">
                                    <div className="w-16 h-16 bg-primair-600 rounded-full flex items-center justify-center mx-auto">
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secundair-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                        {stap.stap}
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-secundair-900">
                                    {stap.titel}
                                </h3>
                                <p className="text-secundair-600">
                                    {stap.beschrijving}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Sectie>

            {/* FAQ Sectie */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Veelgestelde Vragen
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Antwoorden op de meest gestelde vragen over onze diensten.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <Kaart padding="groot">
                        <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                            Hoe lang duurt het om een website te maken?
                        </h3>
                        <p className="text-secundair-600">
                            De gemiddelde levertijd voor een complete website is 2-4 weken.
                            Dit hangt af van de complexiteit en het aantal gewenste functionaliteiten.
                        </p>
                    </Kaart>

                    <Kaart padding="groot">
                        <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                            Kan ik zelf content aanpassen op mijn website?
                        </h3>
                        <p className="text-secundair-600">
                            Ja, alle websites worden gebouwd met een gebruiksvriendelijk CMS
                            waarmee je eenvoudig teksten, afbeeldingen en andere content kunt beheren.
                        </p>
                    </Kaart>

                    <Kaart padding="groot">
                        <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                            Zijn de websites geschikt voor mobiele apparaten?
                        </h3>
                        <p className="text-secundair-600">
                            Absoluut! Alle websites die wij maken zijn volledig responsief
                            en werken perfect op smartphones, tablets en desktop computers.
                        </p>
                    </Kaart>

                    <Kaart padding="groot">
                        <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                            Wat gebeurt er na de lancering van mijn website?
                        </h3>
                        <p className="text-secundair-600">
                            We bieden doorlopende ondersteuning en onderhoud. Ook helpen we
                            graag met het optimaliseren van je website voor betere resultaten.
                        </p>
                    </Kaart>
                </div>
            </Sectie>

            {/* CTA Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Klaar om te starten?
                        </h2>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto">
                            Plan een gratis strategiegesprek in en ontdek welke diensten
                            het beste bij jouw bedrijf passen.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Knop variant="secundair" grootte="groot">
                            Gratis Strategiegesprek
                        </Knop>
                        <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                            Bel Direct: +31 (0)6 12 34 56 78
                        </Knop>
                    </div>
                </div>
            </Sectie>
        </>
    );
}