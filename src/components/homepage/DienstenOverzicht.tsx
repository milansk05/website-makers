// components/homepage/DienstenOverzicht.tsx
import React from 'react';
import { Code, Settings, Server, Search, ArrowRight } from 'lucide-react';
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
    },
    {
        icoon: Settings,
        titel: 'Website Onderhoud',
        beschrijving: 'Houd je website veilig, snel en up-to-date met onze professionele onderhoudsservice. Maandelijkse updates en monitoring.',
        functies: ['Security updates', 'Performance optimalisatie', 'Content updates', 'Backup beheer'],
        prijsVanaf: 79,
    },
    {
        icoon: Server,
        titel: 'Hosting & Domein',
        beschrijving: 'Betrouwbare, snelle hosting speciaal geoptimaliseerd voor Nederlandse bedrijven. Inclusief domeinregistratie en SSL.',
        functies: ['99.9% uptime garantie', 'Nederlandse servers', 'SSL certificaten', '24/7 monitoring'],
        prijsVanaf: 19,
    },
    {
        icoon: Search,
        titel: 'SEO Optimalisatie',
        beschrijving: 'Verbeter je vindbaarheid in Google en trek meer bezoekers aan. Complete SEO strategie en implementatie.',
        functies: ['Keyword onderzoek', 'On-page optimalisatie', 'Content strategie', 'Ranking monitoring'],
        prijsVanaf: 299,
    },
];

export const DienstenOverzicht: React.FC = () => {
    return (
        <Sectie achtergrondKleur="wit" padding="groot">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                    Alles wat je nodig hebt voor{' '}
                    <span className="tekst-gradient">online succes</span>
                </h2>
                <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                    Van concept tot conversie - wij bieden alle services die je nodig hebt
                    om online te groeien en meer klanten te krijgen.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {diensten.map((dienst, index) => {
                    const IconComponent = dienst.icoon;
                    return (
                        <Kaart key={index} hoverEffect padding="groot" className="h-full">
                            <div className="space-y-6">
                                {/* Icoon */}
                                <div className="w-12 h-12 bg-primair-100 rounded-lg flex items-center justify-center">
                                    <IconComponent className="w-6 h-6 text-primair-600" />
                                </div>

                                {/* Titel en beschrijving */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-secundair-900">
                                        {dienst.titel}
                                    </h3>
                                    <p className="text-secundair-600 leading-relaxed">
                                        {dienst.beschrijving}
                                    </p>
                                </div>

                                {/* Functies lijst */}
                                <ul className="space-y-2">
                                    {dienst.functies.map((functie, functieIndex) => (
                                        <li key={functieIndex} className="flex items-center text-sm text-secundair-700">
                                            <div className="w-1.5 h-1.5 bg-primair-500 rounded-full mr-3"></div>
                                            {functie}
                                        </li>
                                    ))}
                                </ul>

                                {/* Prijs */}
                                <div className="pt-4 border-t border-secundair-100">
                                    <div className="flex items-baseline justify-between">
                                        <div>
                                            <span className="text-2xl font-bold text-secundair-900">
                                                €{dienst.prijsVanaf}
                                            </span>
                                            <span className="text-sm text-secundair-500 ml-1">
                                                {dienst.titel.includes('Onderhoud') || dienst.titel.includes('Hosting') ? '/maand' : 'vanaf'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Kaart>
                    );
                })}
            </div>

            {/* CTA Sectie */}
            <div className="text-center mt-16">
                <Knop variant="primair" grootte="groot">
                    Bekijk Alle Diensten
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Knop>
            </div>
        </Sectie>
    );
};