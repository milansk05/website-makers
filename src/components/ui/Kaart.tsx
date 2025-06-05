// src/components/ui/Kaart.tsx - Uitgebreide versie met animaties en styles
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface KaartProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean | 'lift' | 'glow' | 'tilt' | 'border' | 'scale' | 'shadow' | 'gradient' | 'float';
    padding?: 'none' | 'klein' | 'normaal' | 'groot' | 'xl';
    variant?: 'default' | 'elevated' | 'outlined' | 'filled' | 'glass' | 'gradient' | 'neon' | 'minimal';
    borderRadius?: 'none' | 'klein' | 'normaal' | 'groot' | 'xl' | 'rond';
    achtergrond?: 'wit' | 'grijs' | 'primair' | 'gradient' | 'transparent';
    border?: boolean | 'dun' | 'normaal' | 'dik' | 'gradient';
    schaduw?: 'none' | 'klein' | 'normaal' | 'groot' | 'xl';
    animatie?: 'none' | 'fadeIn' | 'slideUp' | 'slideIn' | 'bounce' | 'flip';
    clickable?: boolean;
    klikHandler?: () => void;
}

export const Kaart: React.FC<KaartProps> = ({
    children,
    className = '',
    hoverEffect = false,
    padding = 'normaal',
    variant = 'default',
    borderRadius = 'normaal',
    achtergrond = 'wit',
    border = false,
    schaduw = 'normaal',
    animatie = 'none',
    clickable = false,
    klikHandler,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const basisKlassen = 'relative transition-all duration-300 group';

    const paddingKlassen = {
        none: '',
        klein: 'p-4',
        normaal: 'p-6',
        groot: 'p-8',
        xl: 'p-12',
    };

    const borderRadiusKlassen = {
        none: '',
        klein: 'rounded-lg',
        normaal: 'rounded-xl',
        groot: 'rounded-2xl',
        xl: 'rounded-3xl',
        rond: 'rounded-full',
    };

    const achtergrondKlassen = {
        wit: 'bg-white',
        grijs: 'bg-secundair-50',
        primair: 'bg-primair-50',
        gradient: 'bg-gradient-to-br from-white via-primair-50 to-secundair-50',
        transparent: 'bg-transparent',
    };

    const variantKlassen = {
        default: 'bg-white border border-secundair-200',
        elevated: 'bg-white border border-secundair-100 shadow-lg',
        outlined: 'bg-white border-2 border-primair-200',
        filled: 'bg-gradient-to-br from-primair-50 to-primair-100 border border-primair-200',
        glass: 'bg-white/20 backdrop-blur-md border border-white/30',
        gradient: 'bg-gradient-to-br from-primair-500 via-purple-500 to-pink-500 text-white border-0',
        neon: 'bg-secundair-900 border-2 border-cyan-400 text-cyan-400',
        minimal: 'bg-transparent border-0',
    };

    const schaduwKlassen = {
        none: '',
        klein: 'shadow-sm',
        normaal: 'shadow-md',
        groot: 'shadow-lg',
        xl: 'shadow-xl',
    };

    const borderKlassen = {
        false: '',
        true: 'border border-secundair-200',
        dun: 'border border-secundair-200',
        normaal: 'border-2 border-secundair-300',
        dik: 'border-4 border-secundair-400',
        gradient: 'border-2 border-gradient-to-r from-primair-400 to-purple-400',
    };

    const getHoverEffectKlassen = () => {
        if (!hoverEffect) return '';

        const effectType = typeof hoverEffect === 'string' ? hoverEffect : 'lift';

        switch (effectType) {
            case 'lift':
                return 'hover:-translate-y-2 hover:shadow-xl';
            case 'glow':
                return 'hover:shadow-2xl hover:shadow-primair-500/25';
            case 'tilt':
                return 'hover:rotate-1 hover:scale-105';
            case 'border':
                return 'hover:border-primair-400 hover:shadow-lg';
            case 'scale':
                return 'hover:scale-105';
            case 'shadow':
                return 'hover:shadow-2xl';
            case 'gradient':
                return 'hover:bg-gradient-to-r hover:from-primair-50 hover:to-purple-50';
            case 'float':
                return 'hover:-translate-y-1 hover:shadow-lg';
            default:
                return 'hover:-translate-y-1 hover:shadow-lg hover:border-primair-200';
        }
    };

    const animatieVariants = {
        none: {
            initial: {},
            animate: {},
        },
        fadeIn: {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
        },
        slideUp: {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
        },
        slideIn: {
            initial: { opacity: 0, x: -30 },
            animate: { opacity: 1, x: 0 },
        },
        bounce: {
            initial: { opacity: 0, scale: 0.8 },
            animate: {
                opacity: 1,
                scale: 1,
                transition: { type: 'spring', stiffness: 200, damping: 10 }
            },
        },
        flip: {
            initial: { opacity: 0, rotateX: -90 },
            animate: {
                opacity: 1,
                rotateX: 0,
                transition: { duration: 0.6 }
            },
        },
    };

    const clickableKlassen = clickable ? 'cursor-pointer select-none' : '';

    const samengesteldKlassen = [
        basisKlassen,
        variant === 'default' ? achtergrondKlassen[achtergrond] : '',
        variantKlassen[variant],
        paddingKlassen[padding],
        borderRadiusKlassen[borderRadius],
        schaduwKlassen[schaduw],
        typeof border === 'string' ? borderKlassen[border] : border ? borderKlassen.true : '',
        getHoverEffectKlassen(),
        clickableKlassen,
        className,
    ].filter(Boolean).join(' ');

    return (
        <motion.div
            className={samengesteldKlassen}
            onClick={clickable ? klikHandler : undefined}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            initial={animatieVariants[animatie].initial}
            animate={animatieVariants[animatie].animate}
            whileHover={clickable ? { scale: 1.02 } : undefined}
            whileTap={clickable ? { scale: 0.98 } : undefined}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            layout
        >
            {/* Gradient overlay voor glass effect */}
            {variant === 'glass' && (
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-xl pointer-events-none" />
            )}

            {/* Glow effect overlay */}
            {hoverEffect === 'glow' && isHovered && (
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primair-400/20 to-purple-400/20 rounded-xl blur-sm -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                />
            )}

            {/* Neon glow voor neon variant */}
            {variant === 'neon' && (
                <motion.div
                    className="absolute inset-0 border-2 border-cyan-400 rounded-xl opacity-50 blur-sm -z-10"
                    animate={{
                        opacity: [0.3, 0.7, 0.3],
                        scale: [0.98, 1.02, 0.98],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            )}

            {/* Gradient border effect */}
            {border === 'gradient' && (
                <div className="absolute inset-0 rounded-xl p-0.5 bg-gradient-to-r from-primair-400 to-purple-400 -z-10">
                    <div className={`w-full h-full rounded-xl ${achtergrondKlassen[achtergrond]}`} />
                </div>
            )}

            {/* Shimmer effect voor hover */}
            <AnimatePresence>
                {isHovered && hoverEffect === 'gradient' && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                        initial={{ x: '-100%', skewX: -15 }}
                        animate={{
                            x: '200%',
                            transition: { duration: 0.8, ease: 'easeInOut' }
                        }}
                        exit={{ x: '200%' }}
                    />
                )}
            </AnimatePresence>

            {/* Floating particles voor speciale effects */}
            {(variant === 'gradient' || variant === 'neon') && isHovered && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-xl">
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className={`absolute w-1 h-1 ${variant === 'neon' ? 'bg-cyan-400' : 'bg-white'} rounded-full`}
                            style={{
                                left: `${10 + i * 15}%`,
                                top: `${20 + (i % 3) * 30}%`,
                            }}
                            animate={{
                                y: [-5, -15, -5],
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: 'easeInOut',
                            }}
                        />
                    ))}
                </div>
            )}

            {/* Corner decoraties voor elevated variant */}
            {variant === 'elevated' && (
                <>
                    <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-primair-100 to-transparent rounded-bl-xl opacity-50" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-gradient-to-tr from-secundair-100 to-transparent rounded-tr-xl opacity-30" />
                </>
            )}

            {/* Content container */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Ripple effect voor clickable cards */}
            {clickable && (
                <motion.div
                    className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                    initial={false}
                >
                    <motion.div
                        className="absolute inset-0 bg-primair-400/20 rounded-full scale-0"
                        animate={isHovered ? { scale: 2, opacity: [0, 0.3, 0] } : { scale: 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.div>
            )}

            {/* Tilt indicator voor tilt hover effect */}
            {hoverEffect === 'tilt' && isHovered && (
                <motion.div
                    className="absolute top-2 right-2 w-2 h-2 bg-primair-400 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* Border pulse voor outlined variant */}
            {variant === 'outlined' && isHovered && (
                <motion.div
                    className="absolute inset-0 border-2 border-primair-400 rounded-xl"
                    animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            )}
        </motion.div>
    );
};