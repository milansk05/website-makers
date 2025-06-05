// src/components/ui/Sectie.tsx - Uitgebreide versie met achtergrond patronen
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SectieProps {
    children: React.ReactNode;
    achtergrondKleur?: 'wit' | 'grijs' | 'primair' | 'secundair' | 'gradient' | 'dark';
    padding?: 'none' | 'klein' | 'normaal' | 'groot' | 'xl';
    className?: string;
    patroon?: 'none' | 'dots' | 'grid' | 'waves' | 'diagonal' | 'circles' | 'hexagon' | 'noise';
    decoratie?: 'none' | 'basic' | 'floating' | 'geometric' | 'organic' | 'tech' | 'particles';
    animatie?: 'none' | 'fadeIn' | 'slideUp' | 'parallax';
    maxBreedte?: 'container' | 'full' | 'narrow' | 'wide';
    id?: string;
}

export const Sectie: React.FC<SectieProps> = ({
    children,
    achtergrondKleur = 'wit',
    padding = 'normaal',
    className = '',
    patroon = 'none',
    decoratie = 'none',
    animatie = 'none',
    maxBreedte = 'container',
    id,
}) => {
    const achtergrondKlassen = {
        wit: 'bg-white',
        grijs: 'bg-secundair-50',
        primair: 'bg-primair-600 text-white',
        secundair: 'bg-secundair-900 text-white',
        gradient: 'bg-gradient-to-br from-primair-50 via-white to-secundair-50',
        dark: 'bg-gradient-to-br from-secundair-900 to-secundair-800 text-white',
    };

    const paddingKlassen = {
        none: '',
        klein: 'py-8',
        normaal: 'py-16',
        groot: 'py-24',
        xl: 'py-32',
    };

    const maxBreedteKlassen = {
        container: 'container-aangepast',
        full: 'w-full px-4',
        narrow: 'max-w-4xl mx-auto px-4',
        wide: 'max-w-8xl mx-auto px-4',
    };

    const samengesteldKlassen = [
        'relative overflow-hidden',
        achtergrondKlassen[achtergrondKleur],
        paddingKlassen[padding],
        className,
    ].join(' ');

    const animatieVariants = {
        none: {},
        fadeIn: {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            viewport: { once: true },
            transition: { duration: 0.8 }
        },
        slideUp: {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.8, ease: 'easeOut' }
        },
        parallax: {
            initial: { y: 100 },
            whileInView: { y: 0 },
            viewport: { once: true },
            transition: { duration: 1.2, ease: 'easeOut' }
        }
    };

    // Pattern components
    const PatroonComponent = () => {
        switch (patroon) {
            case 'dots':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-repeat bg-center" style={{
                            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                        }} />
                    </div>
                );

            case 'grid':
                return (
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `
                                linear-gradient(currentColor 1px, transparent 1px),
                                linear-gradient(90deg, currentColor 1px, transparent 1px)
                            `,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>
                );

            case 'waves':
                return (
                    <div className="absolute inset-0 opacity-20">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" preserveAspectRatio="none">
                            <defs>
                                <pattern id="wave" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M0 10 Q25 0 50 10 T100 10" stroke="currentColor" strokeWidth="1" fill="none" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#wave)" />
                        </svg>
                    </div>
                );

            case 'diagonal':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `repeating-linear-gradient(
                                45deg,
                                transparent,
                                transparent 10px,
                                currentColor 10px,
                                currentColor 11px
                            )`
                        }} />
                    </div>
                );

            case 'circles':
                return (
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 2px, transparent 2px)`,
                            backgroundSize: '60px 60px'
                        }} />
                    </div>
                );

            case 'hexagon':
                return (
                    <div className="absolute inset-0 opacity-15">
                        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                            <defs>
                                <pattern id="hexagon" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                                    <polygon
                                        points="30,0 52,15 52,37 30,52 8,37 8,15"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        fill="none"
                                    />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hexagon)" />
                        </svg>
                    </div>
                );

            case 'noise':
                return (
                    <div className="absolute inset-0 opacity-20">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
                            }}
                        />
                    </div>
                );

            default:
                return null;
        }
    };

    // Decoratie components
    const DecoratieComponent = () => {
        switch (decoratie) {
            case 'basic':
                return (
                    <>
                        <motion.div
                            className="absolute top-10 left-10 w-20 h-20 bg-current opacity-10 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.1, 0.2, 0.1],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <motion.div
                            className="absolute bottom-10 right-10 w-32 h-32 bg-current opacity-5 rounded-full blur-2xl"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.05, 0.15, 0.05],
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 1,
                            }}
                        />
                    </>
                );

            case 'floating':
                return (
                    <>
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute bg-current opacity-20 rounded-full blur-sm"
                                style={{
                                    width: `${20 + Math.random() * 40}px`,
                                    height: `${20 + Math.random() * 40}px`,
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [-20, 20, -20],
                                    x: [-10, 10, -10],
                                    scale: [0.8, 1.2, 0.8],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 8 + Math.random() * 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: i * 0.5,
                                }}
                            />
                        ))}
                    </>
                );

            case 'geometric':
                return (
                    <>
                        <motion.div
                            className="absolute top-20 right-20 w-16 h-16 border-2 border-current opacity-20 rotate-45"
                            animate={{
                                rotate: [45, 405, 45],
                                scale: [1, 1.1, 1],
                            }}
                            transition={{
                                duration: 10,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                        <motion.div
                            className="absolute bottom-32 left-16 w-12 h-12 bg-current opacity-15 transform rotate-12"
                            animate={{
                                rotate: [12, 192, 12],
                                y: [-5, 5, -5],
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        />
                        <div className="absolute top-1/2 left-8 w-8 h-8 border border-current opacity-25 rotate-45 transform -translate-y-1/2" />
                    </>
                );

            case 'organic':
                return (
                    <>
                        <motion.div
                            className="absolute top-0 right-0 w-64 h-64 opacity-10"
                            initial={{ scale: 0.8, rotate: 0 }}
                            animate={{
                                scale: [0.8, 1.2, 0.8],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                                <path d="M50,20 C70,20 80,30 80,50 C80,70 70,80 50,80 C30,80 20,70 20,50 C20,30 30,20 50,20 Z" />
                            </svg>
                        </motion.div>
                        <motion.div
                            className="absolute bottom-0 left-0 w-48 h-48 opacity-5"
                            animate={{
                                scale: [1, 1.3, 1],
                                rotate: [0, -90, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: 'easeInOut',
                                delay: 2,
                            }}
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
                                <path d="M30,10 Q50,30 70,10 Q90,30 70,50 Q50,70 70,90 Q50,70 30,90 Q10,70 30,50 Q50,30 30,10 Z" />
                            </svg>
                        </motion.div>
                    </>
                );

            case 'tech':
                return (
                    <>
                        <div className="absolute inset-0 opacity-10">
                            <svg className="absolute top-10 left-10 w-24 h-24" viewBox="0 0 100 100">
                                <circle cx="20" cy="20" r="2" fill="currentColor" />
                                <circle cx="80" cy="20" r="2" fill="currentColor" />
                                <circle cx="20" cy="80" r="2" fill="currentColor" />
                                <circle cx="80" cy="80" r="2" fill="currentColor" />
                                <line x1="20" y1="20" x2="80" y2="20" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="80" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="80" y1="80" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="20" y1="80" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="20" y1="20" x2="80" y2="80" stroke="currentColor" strokeWidth="0.5" />
                                <line x1="80" y1="20" x2="20" y2="80" stroke="currentColor" strokeWidth="0.5" />
                            </svg>
                            <svg className="absolute bottom-10 right-10 w-32 h-32" viewBox="0 0 100 100">
                                <g fill="none" stroke="currentColor" strokeWidth="0.5">
                                    <rect x="10" y="10" width="80" height="80" />
                                    <rect x="20" y="20" width="60" height="60" />
                                    <rect x="30" y="30" width="40" height="40" />
                                    <circle cx="50" cy="50" r="10" />
                                </g>
                            </svg>
                        </div>
                    </>
                );

            case 'particles':
                return (
                    <div className="absolute inset-0 pointer-events-none">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-current opacity-30 rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [-50, 50, -50],
                                    x: [-25, 25, -25],
                                    opacity: [0.1, 0.5, 0.1],
                                    scale: [0.5, 1.5, 0.5],
                                }}
                                transition={{
                                    duration: 6 + Math.random() * 4,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: i * 0.2,
                                }}
                            />
                        ))}
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <motion.section
            id={id}
            className={samengesteldKlassen}
            {...(animatie !== 'none' ? animatieVariants[animatie] : {})}
        >
            {/* Achtergrond patronen */}
            <PatroonComponent />

            {/* Decoratieve elementen */}
            <DecoratieComponent />

            {/* Gradient overlays voor specifieke achtergronden */}
            {achtergrondKleur === 'gradient' && (
                <>
                    <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-primair-200/20 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-secundair-200/20 to-transparent rounded-full blur-3xl" />
                </>
            )}

            {/* Speciale effecten voor primair achtergrond */}
            {achtergrondKleur === 'primair' && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-primair-500 to-primair-700" />
                    <motion.div
                        className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                    <motion.div
                        className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl"
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.05, 0.1, 0.05],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: 2,
                        }}
                    />
                </>
            )}

            {/* Dark mode effecten */}
            {achtergrondKleur === 'dark' && (
                <>
                    <div className="absolute inset-0 bg-gradient-to-br from-secundair-800 via-secundair-900 to-black" />
                    <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primair-400/10 rounded-full blur-2xl" />
                    <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl" />

                    {/* Subtiele sterren effect */}
                    <div className="absolute inset-0 opacity-20">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-0.5 h-0.5 bg-white rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    opacity: [0.2, 1, 0.2],
                                    scale: [0.5, 1, 0.5],
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                    delay: i * 0.3,
                                }}
                            />
                        ))}
                    </div>
                </>
            )}

            {/* Content container */}
            <div className={`relative z-10 ${maxBreedteKlassen[maxBreedte]}`}>
                {children}
            </div>

            {/* Bottom border effect voor sommige achtergronden */}
            {(achtergrondKleur === 'primair' || achtergrondKleur === 'dark') && (
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            )}
        </motion.section>
    );
};