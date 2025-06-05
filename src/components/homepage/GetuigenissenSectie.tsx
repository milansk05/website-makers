// components/homepage/GetuigenissenSectie.tsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Kaart } from '../ui/Kaart';
import { Sectie } from '../ui/Sectie';

const getuigenissen = [
    {
        naam: 'Sarah van der Berg',
        bedrijf: 'Bloemenwinkel De Tulp',
        tekst: 'Binnen 2 maanden na de lancering van onze nieuwe website zijn onze online bestellingen met 60% gestegen. Het team van Website Makers heeft echt begrepen wat wij nodig hadden.',
        sterren: 5,
        afbeeldingUrl: '', // Placeholder
    },
    {
        naam: 'Mark Jansen',
        bedrijf: 'Jansen Consultancy',
        tekst: 'Professionele website die precies uitstraalt wat ik wilde. De samenwerking was prettig en alles werd op tijd opgeleverd. Ik krijg nu veel meer aanvragen via mijn website.',
        sterren: 5,
        afbeeldingUrl: '', // Placeholder
    },
    {
        naam: 'Lisa Bakker',
        bedrijf: 'Gezondheidscentrum Vitaal',
        tekst: 'De nieuwe website heeft ons geholpen om meer patiënten te bereiken. Het online afspraaksysteem werkt perfect en bespaart ons veel tijd. Zeer tevreden!',
        sterren: 5,
        afbeeldingUrl: '', // Placeholder
    },
];

export const GetuigenissenSectie: React.FC = () => {
    return (
        <Sectie achtergrondKleur="wit" padding="groot">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                    Wat onze klanten{' '}
                    <span className="tekst-gradient">over ons zeggen</span>
                </h2>
                <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                    Ontdek waarom ondernemers kiezen voor Website Makers en hoe wij
                    hun online aanwezigheid hebben getransformeerd.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getuigenissen.map((getuigenis, index) => (
                    <Kaart key={index} hoverEffect padding="groot" className="h-full">
                        <div className="space-y-6">
                            {/* Quote icoon */}
                            <div className="flex justify-between items-start">
                                <Quote className="w-8 h-8 text-primair-200" />
                                <div className="flex space-x-1">
                                    {[...Array(getuigenis.sterren)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </div>

                            {/* Getuigenis tekst */}
                            <p className="text-secundair-700 leading-relaxed italic">
                                "{getuigenis.tekst}"
                            </p>

                            {/* Klant informatie */}
                            <div className="flex items-center space-x-4 pt-4 border-t border-secundair-100">
                                <div className="w-12 h-12 bg-primair-100 rounded-full flex items-center justify-center">
                                    <span className="text-primair-600 font-semibold text-lg">
                                        {getuigenis.naam.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-secundair-900">
                                        {getuigenis.naam}
                                    </div>
                                    <div className="text-sm text-secundair-600">
                                        {getuigenis.bedrijf}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Kaart>
                ))}
            </div>

            {/* Extra vertrouwensindicatoren */}
            <div className="mt-16 text-center">
                <div className="inline-flex items-center px-6 py-3 bg-secundair-50 rounded-full">
                    <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                    <span className="text-secundair-700 font-medium">
                        Gemiddeld beoordeeld met 4.9/5 sterren op basis van 87 reviews
                    </span>
                </div>
            </div>
        </Sectie>
    );
};