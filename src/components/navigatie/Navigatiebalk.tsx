// components/navigatie/Navigatiebalk.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Knop } from '../ui/Knop';

const navigatieItems = [
    { label: 'Home', href: '/' },
    { label: 'Diensten', href: '/diensten' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Over Ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact' },
];

export const Navigatiebalk: React.FC = () => {
    const [mobieleMenuOpen, setMobieleMenuOpen] = useState(false);

    const toggleMobieleMenu = () => {
        setMobieleMenuOpen(!mobieleMenuOpen);
    };

    return (
        <nav className="bg-white schaduw-zacht sticky top-0 z-50">
            <div className="container-aangepast">
                <div className="flex justify-between items-center py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primair-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">WM</span>
                        </div>
                        <span className="text-xl font-bold text-secundair-900">Website Makers</span>
                    </Link>

                    {/* Desktop Navigatie */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigatieItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-secundair-700 hover:text-primair-600 font-medium transition-colors duration-200"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Knop variant="primair">
                            Gratis Offerte
                        </Knop>
                    </div>

                    {/* Mobiele Menu Knop */}
                    <button
                        onClick={toggleMobieleMenu}
                        className="md:hidden p-2 text-secundair-700 hover:text-primair-600 transition-colors duration-200"
                    >
                        {mobieleMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobiele Menu */}
                {mobieleMenuOpen && (
                    <div className="md:hidden border-t border-secundair-200 py-4">
                        <div className="flex flex-col space-y-4">
                            {navigatieItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="text-secundair-700 hover:text-primair-600 font-medium py-2 transition-colors duration-200"
                                    onClick={() => setMobieleMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Knop variant="primair" volleBreedte>
                                    Gratis Offerte
                                </Knop>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};