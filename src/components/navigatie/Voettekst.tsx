// components/navigatie/Voettekst.tsx
import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Voettekst: React.FC = () => {
    const huidigJaar = new Date().getFullYear();

    return (
        <footer className="bg-secundair-900 text-white">
            <div className="container-aangepast py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Bedrijfsinformatie */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primair-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">WM</span>
                            </div>
                            <span className="text-xl font-bold">Website Makers</span>
                        </div>
                        <p className="text-secundair-200 leading-relaxed">
                            Professionele websites voor ondernemers die willen groeien.
                            Van concept tot online succes.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Snelle Links */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Snelle Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/diensten" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Onze Diensten</Link></li>
                            <li><Link href="/portfolio" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Portfolio</Link></li>
                            <li><Link href="/over-ons" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Over Ons</Link></li>
                            <li><Link href="/contact" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Diensten */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Onze Diensten</h3>
                        <ul className="space-y-2">
                            <li><Link href="/diensten#websitebouw" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Website Ontwikkeling</Link></li>
                            <li><Link href="/diensten#onderhoud" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Website Onderhoud</Link></li>
                            <li><Link href="/diensten#hosting" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">Hosting & Domein</Link></li>
                            <li><Link href="/diensten#seo" className="text-secundair-200 hover:text-primair-200 transition-colors duration-200">SEO Optimalisatie</Link></li>
                        </ul>
                    </div>

                    {/* Contactinformatie */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Contact</h3>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3 text-secundair-200">
                                <Mail size={18} />
                                <span>info@websitemakers.nl</span>
                            </div>
                            <div className="flex items-center space-x-3 text-secundair-200">
                                <Phone size={18} />
                                <span>+31 (0)6 12 34 56 78</span>
                            </div>
                            <div className="flex items-center space-x-3 text-secundair-200">
                                <MapPin size={18} />
                                <span>Amsterdam, Nederland</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Onderkant footer */}
                <div className="border-t border-secundair-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-secundair-200 text-sm">
                        © {huidigJaar} Website Makers. Alle rechten voorbehouden.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-secundair-200 hover:text-primair-200 text-sm transition-colors duration-200">
                            Privacy Beleid
                        </Link>
                        <Link href="/voorwaarden" className="text-secundair-200 hover:text-primair-200 text-sm transition-colors duration-200">
                            Algemene Voorwaarden
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};