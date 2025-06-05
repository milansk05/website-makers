// components/homepage/VoordelenSectie.tsx
import React from 'react';
import { CheckCircle, Clock, Users, TrendingUp } from 'lucide-react';
import { Sectie } from '../ui/Sectie';

const voordelen = [
    {
        icoon: CheckCircle,
        titel: 'Altijd op tijd geleverd',
        beschrijving: 'Wij houden ons aan afspraken. Je website wordt binnen de afgesproken tijd opgeleverd, zonder verrassingen.',
    },
    {
        icoon: Clock,
        titel: 'Snelle laadtijden',
        beschrijving: 'Onze websites laden supersnel, wat zorgt voor betere gebruikerservaring en hogere rankings in Google.',
    },
    {
        icoon: Users,
        titel: 'Gebruiksvriendelijk',
        beschrijving: 'Intuïtieve websites die je bezoekers graag gebruiken. Meer bezoekers betekent meer potentiële klanten.',
    },
    {
        icoon: TrendingUp,
        titel: 'Bewezen resultaten',
        beschrijving: 'Onze klanten zien gemiddeld 40% meer online aanvragen binnen 3 maanden na lancering van hun nieuwe website.',
    },
];

export const VoordelenSectie: React.FC = () => {
    return (
        <Sectie achtergrondKleur="grijs" padding="groot">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Tekst Content */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                            Waarom kiezen voor{' '}
                            <span className="tekst-gradient">Website Makers</span>?
                        </h2>
                        <p className="text-xl text-secundair-600 leading-relaxed">
                            Meer dan 150 ondernemers gingen je voor. Ontdek waarom zij kiezen
                            voor onze persoonlijke aanpak en bewezen resultaten.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {voordelen.map((voordeel, index) => {
                            const IconComponent = voordeel.icoon;
                            return (
                                <div key={index} className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-12 h-12 bg-primair-100 rounded-lg flex items-center justify-center">
                                            <IconComponent className="w-6 h-6 text-primair-600" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="text-lg font-semibold text-secundair-900">
                                            {voordeel.titel}
                                        </h3>
                                        <p className="text-secundair-600 leading-relaxed">
                                            {voordeel.beschrijving}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Visuele Content */}
                <div className="relative">
                    {/* Stats Cards */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-xl p-6 schaduw-zacht">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-secundair-900">150+</div>
                                    <div className="text-sm text-secundair-600">Afgeronde projecten</div>
                                </div>
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 schaduw-zacht">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-secundair-900">4.9/5</div>
                                    <div className="text-sm text-secundair-600">Klantbeoordeling</div>
                                </div>
                                <div className="flex space-x-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div key={i} className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl p-6 schaduw-zacht">
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-3xl font-bold text-secundair-900">2-4 weken</div>
                                    <div className="text-sm text-secundair-600">Gemiddelde levertijd</div>
                                </div>
                                <div className="w-12 h-12 bg-primair-100 rounded-lg flex items-center justify-center">
                                    <Clock className="w-6 h-6 text-primair-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decoratieve elementen */}
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-primair-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-secundair-200 rounded-full opacity-20"></div>
                </div>
            </div>
        </Sectie>
    );
};