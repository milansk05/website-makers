// src/components/navigatie/Navigatiebalk.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobieleMenu = () => {
        setMobieleMenuOpen(!mobieleMenuOpen);
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-white/20'
                    : 'bg-white/95 backdrop-blur-sm shadow-sm'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="container-aangepast">
                <div className="flex justify-between items-center py-4">
                    {/* Logo met animatie */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/" className="flex items-center space-x-3 group">
                            <motion.div
                                className="w-10 h-10 bg-gradient-to-r from-primair-600 to-primair-700 rounded-xl flex items-center justify-center shadow-lg"
                                whileHover={{
                                    rotate: 360,
                                    scale: 1.1,
                                }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-white font-bold text-lg">WM</span>
                            </motion.div>
                            <motion.span
                                className="text-xl font-bold bg-gradient-to-r from-secundair-900 to-secundair-700 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                                style={{
                                    backgroundSize: '200% 200%',
                                }}
                            >
                                Website Makers
                            </motion.span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigatie */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigatieItems.map((item, index) => (
                            <motion.div
                                key={item.href}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <Link
                                    href={item.href}
                                    className="relative text-secundair-700 hover:text-primair-600 font-medium transition-colors duration-200 group"
                                >
                                    {item.label}
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primair-600 to-primair-700 group-hover:w-full transition-all duration-300"
                                        whileHover={{ width: '100%' }}
                                    />
                                </Link>
                            </motion.div>
                        ))}

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Knop variant="primair">
                                <Zap className="w-4 h-4 mr-2" />
                                Gratis Offerte
                            </Knop>
                        </motion.div>
                    </div>

                    {/* Mobiele Menu Knop */}
                    <motion.button
                        onClick={toggleMobieleMenu}
                        className="md:hidden p-2 text-secundair-700 hover:text-primair-600 transition-colors duration-200 relative"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <AnimatePresence mode="wait">
                            {mobieleMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobiele Menu */}
                <AnimatePresence>
                    {mobieleMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden border-t border-secundair-200/50 backdrop-blur-md bg-white/90"
                        >
                            <div className="flex flex-col space-y-4 py-6">
                                {navigatieItems.map((item, index) => (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={item.href}
                                            className="block text-secundair-700 hover:text-primair-600 font-medium py-2 px-4 rounded-lg hover:bg-primair-50 transition-all duration-200"
                                            onClick={() => setMobieleMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    className="pt-4 px-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Knop variant="primair" volleBreedte>
                                        <Zap className="w-4 h-4 mr-2" />
                                        Gratis Offerte
                                    </Knop>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};