// components/homepage/HeroSectie.tsx
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Knop } from '../ui/Knop';

export const HeroSectie: React.FC = () => {
    return (
        <section className="bg-gradient-to-br from-primair-50 via-white to-secundair-50 py-20 lg:py-32">
            <div className="container-aangepast">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Tekst Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-3 py-1 bg-primair-100 text-primair-700 rounded-full text-sm font-medium">
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Beoordeeld met 4.9/5 sterren
                            </div>

                            <h1 className="text-4xl lg:text-6xl font-bold text-secundair-900 leading-tight">
                                Jouw website die{' '}
                                <span className="tekst-gradient">
                                    écht verkoopt
                                </span>
                            </h1>

                            <p className="text-xl text-secundair-600 leading-relaxed max-w-lg">
                                Professionele websites die klanten aantrekken en omzet genereren.
                                Van ontwerp tot online marketing - wij zorgen voor jouw digitale succes.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Knop variant="primair" grootte="groot">
                                Gratis Strategiegesprek
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Knop>
                            <Knop variant="outline" grootte="groot">
                                Bekijk Portfolio
                            </Knop>
                        </div>

                        {/* Vertrouwensindicatoren */}
                        <div className="flex items-center space-x-8 pt-8">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secundair-900">150+</div>
                                <div className="text-sm text-secundair-600">Tevreden klanten</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secundair-900">5 jaar</div>
                                <div className="text-sm text-secundair-600">Ervaring</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-secundair-900">24/7</div>
                                <div className="text-sm text-secundair-600">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Afbeelding/Visual */}
                    <div className="lg:text-right">
                        <div className="relative">
                            {/* Placeholder voor hero afbeelding */}
                            <div className="bg-gradient-to-br from-primair-100 to-primair-200 rounded-2xl p-8 schaduw-hover">
                                <div className="bg-white rounded-lg p-6 schaduw-zacht">
                                    <div className="space-y-3">
                                        <div className="h-4 bg-secundair-200 rounded w-3/4"></div>
                                        <div className="h-4 bg-secundair-200 rounded w-1/2"></div>
                                        <div className="h-4 bg-primair-200 rounded w-full"></div>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <div className="inline-flex items-center px-4 py-2 bg-white rounded-full schaduw-zacht">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                        <span className="text-sm font-medium text-secundair-700">Live Website</span>
                                    </div>
                                </div>
                            </div>

                            {/* Decoratieve elementen */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primair-200 rounded-full opacity-20"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secundair-200 rounded-full opacity-20"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}