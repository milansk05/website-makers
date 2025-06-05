// src/app/portfolio/page.tsx - Portfolio pagina
'use client';

import React, { useState } from 'react';
import { ExternalLink, Eye, Code, Calendar, Tag, ArrowRight, Filter } from 'lucide-react';
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
        uitgelicht: true
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
        uitgelicht: true
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
        uitgelicht: false
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
        uitgelicht: false
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
        uitgelicht: true
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
        uitgelicht: false
    }
];

const categorieën = [
    { waarde: 'alle', label: 'Alle Projecten' },
    { waarde: 'website', label: 'Websites' },
    { waarde: 'webshop', label: 'Webshops' },
    { waarde: 'applicatie', label: 'Applicaties' },
    { waarde: 'redesign', label: 'Redesigns' }
];

export default function PortfolioPagina() {
    const [geselecteerdeCategorie, setGeselecteerdeCategorie] = useState('alle');
    const [geselecteerdProject, setGeselecteerdProject] = useState<PortfolioProject | null>(null);

    const gefilterdeProjecten = geselecteerdeCategorie === 'alle'
        ? portfolioProjecten
        : portfolioProjecten.filter(project => project.categorie === geselecteerdeCategorie);

    const uitgelichtProjecten = portfolioProjecten.filter(project => project.uitgelicht);

    return (
        <>
            {/* Hero Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="text-center space-y-8 text-white">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Ons Portfolio
                        </h1>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto leading-relaxed">
                            Ontdek hoe wij andere ondernemers hebben geholpen met professionele
                            websites die écht resultaat opleveren. Van startups tot gevestigde bedrijven.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Knop variant="secundair" grootte="groot">
                            Start Jouw Project
                        </Knop>
                        <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                            Gratis Strategiegesprek
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Knop>
                    </div>
                </div>
            </Sectie>

            {/* Uitgelichte Projecten */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Uitgelichte Projecten
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Deze projecten tonen onze expertise en de resultaten die wij voor onze klanten behalen.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {uitgelichtProjecten.slice(0, 2).map((project) => (
                        <Kaart key={project.id} hoverEffect padding="groot" className="h-full">
                            <div className="space-y-6">
                                {/* Project Afbeelding */}
                                <div className="relative bg-gradient-to-br from-primair-100 to-primair-200 rounded-lg h-48 flex items-center justify-center">
                                    <div className="text-primair-600 font-medium">
                                        Preview van {project.titel}
                                    </div>
                                    <div className="absolute top-3 right-3">
                                        <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                            Uitgelicht
                                        </span>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-secundair-900">
                                            {project.titel}
                                        </h3>
                                        <span className="bg-primair-100 text-primair-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                            {project.categorie}
                                        </span>
                                    </div>

                                    <p className="text-secundair-600 leading-relaxed">
                                        {project.korteDescriptie}
                                    </p>

                                    {/* Resultaten */}
                                    <div className="space-y-2">
                                        <h4 className="font-semibold text-secundair-900">Resultaten:</h4>
                                        <ul className="space-y-1">
                                            {project.resultaten.slice(0, 2).map((resultaat, index) => (
                                                <li key={index} className="flex items-center text-sm text-secundair-700">
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                                                    {resultaat}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Technologieën */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologieen.slice(0, 3).map((tech, index) => (
                                            <span key={index} className="bg-secundair-100 text-secundair-700 px-2 py-1 rounded text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologieen.length > 3 && (
                                            <span className="bg-secundair-100 text-secundair-700 px-2 py-1 rounded text-xs">
                                                +{project.technologieen.length - 3} meer
                                            </span>
                                        )}
                                    </div>

                                    {/* Acties */}
                                    <div className="flex gap-3 pt-2">
                                        <Knop
                                            variant="primair"
                                            klikHandler={() => setGeselecteerdProject(project)}
                                        >
                                            <Eye className="w-4 h-4 mr-2" />
                                            Bekijk Details
                                        </Knop>
                                        {project.websiteUrl && (
                                            <Knop variant="outline">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Live Site
                                            </Knop>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Kaart>
                    ))}
                </div>
            </Sectie>

            {/* Alle Projecten */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Alle Projecten
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Bekijk onze complete portfolio en filter op projecttype.
                    </p>
                </div>

                {/* Filter Knoppen */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categorieën.map((categorie) => (
                        <button
                            key={categorie.waarde}
                            onClick={() => setGeselecteerdeCategorie(categorie.waarde)}
                            className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${geselecteerdeCategorie === categorie.waarde
                                    ? 'bg-primair-600 text-white'
                                    : 'bg-secundair-100 text-secundair-700 hover:bg-secundair-200'
                                }`}
                        >
                            <Filter className="w-4 h-4 mr-2 inline" />
                            {categorie.label}
                        </button>
                    ))}
                </div>

                {/* Projecten Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gefilterdeProjecten.map((project) => (
                        <Kaart key={project.id} hoverEffect padding="groot" className="h-full">
                            <div className="space-y-4">
                                {/* Project Afbeelding */}
                                <div className="relative bg-gradient-to-br from-secundair-100 to-secundair-200 rounded-lg h-40 flex items-center justify-center">
                                    <div className="text-secundair-600 font-medium text-center px-4">
                                        {project.titel}
                                    </div>
                                    {project.uitgelicht && (
                                        <div className="absolute top-2 right-2">
                                            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                                                ⭐
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Project Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-bold text-secundair-900">
                                            {project.titel}
                                        </h3>
                                        <span className="bg-primair-100 text-primair-700 px-2 py-1 rounded text-xs font-medium capitalize">
                                            {project.categorie}
                                        </span>
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
                                        {project.technologieen.slice(0, 2).map((tech, index) => (
                                            <span key={index} className="bg-secundair-100 text-secundair-600 px-2 py-1 rounded text-xs">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologieen.length > 2 && (
                                            <span className="bg-secundair-100 text-secundair-600 px-2 py-1 rounded text-xs">
                                                +{project.technologieen.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    {/* Acties */}
                                    <div className="flex gap-2 pt-2">
                                        <Knop
                                            variant="primair"
                                            grootte="klein"
                                            klikHandler={() => setGeselecteerdProject(project)}
                                        >
                                            <Eye className="w-3 h-3 mr-1" />
                                            Details
                                        </Knop>
                                        {project.websiteUrl && (
                                            <Knop variant="outline" grootte="klein">
                                                <ExternalLink className="w-3 h-3 mr-1" />
                                                Live
                                            </Knop>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </Kaart>
                    ))}
                </div>
            </Sectie>

            {/* Project Detail Modal */}
            {geselecteerdProject && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold text-secundair-900 mb-2">
                                        {geselecteerdProject.titel}
                                    </h2>
                                    <p className="text-secundair-600">
                                        {geselecteerdProject.klant}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setGeselecteerdProject(null)}
                                    className="text-secundair-400 hover:text-secundair-600 text-2xl"
                                >
                                    ×
                                </button>
                            </div>

                            <div className="space-y-6">
                                {/* Project Afbeelding */}
                                <div className="bg-gradient-to-br from-primair-100 to-primair-200 rounded-lg h-64 flex items-center justify-center">
                                    <div className="text-primair-600 font-medium">
                                        Preview van {geselecteerdProject.titel}
                                    </div>
                                </div>

                                {/* Beschrijving */}
                                <div>
                                    <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                                        Projectbeschrijving
                                    </h3>
                                    <p className="text-secundair-600 leading-relaxed">
                                        {geselecteerdProject.uitgebreideDescriptie}
                                    </p>
                                </div>

                                {/* Resultaten */}
                                <div>
                                    <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                                        Behaalde Resultaten
                                    </h3>
                                    <ul className="space-y-2">
                                        {geselecteerdProject.resultaten.map((resultaat, index) => (
                                            <li key={index} className="flex items-center text-secundair-700">
                                                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                                                {resultaat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologieën */}
                                <div>
                                    <h3 className="text-lg font-semibold text-secundair-900 mb-3">
                                        Gebruikte Technologieën
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {geselecteerdProject.technologieen.map((tech, index) => (
                                            <span key={index} className="bg-primair-100 text-primair-700 px-3 py-1 rounded-full text-sm">
                                                <Code className="w-3 h-3 mr-1 inline" />
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Acties */}
                                <div className="flex gap-4 pt-4">
                                    {geselecteerdProject.websiteUrl && (
                                        <Knop variant="primair">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Bekijk Live Website
                                        </Knop>
                                    )}
                                    <Knop variant="outline">
                                        Vergelijkbaar Project Starten
                                    </Knop>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* CTA Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Jouw project als volgende?
                        </h2>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto">
                            Laat ons ook jouw bedrijf helpen groeien met een professionele website
                            die resultaten oplevert. Start vandaag nog met een gratis gesprek.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Knop variant="secundair" grootte="groot">
                            Start Mijn Project
                        </Knop>
                        <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                            Bekijk Onze Diensten
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Knop>
                    </div>
                </div>
            </Sectie>
        </>
    );
}