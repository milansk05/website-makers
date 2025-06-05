// src/components/homepage/HeroSectie.tsx
'use client';

import React from 'react';
import { ArrowRight, Star, Sparkles, Zap, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Knop } from '../ui/Knop';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const floatingVariants = {
    floating: {
        y: [-10, 10, -10],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

const pulseVariants = {
    pulse: {
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
        },
    },
};

export const HeroSectie: React.FC = () => {
    return (
        <section className="relative bg-gradient-to-br from-primair-50 via-white to-secundair-50 py-20 lg:py-32 overflow-hidden">
            {/* Achtergrond decoraties */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10 w-64 h-64 bg-primair-200 rounded-full opacity-20 blur-3xl"
                    animate={floatingVariants.floating}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-80 h-80 bg-secundair-200 rounded-full opacity-20 blur-3xl"
                    animate={floatingVariants.floating}
                    transition={{ delay: 1.5 }}
                />
                <motion.div
                    className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-primair-100 to-secundair-100 rounded-full opacity-10 blur-3xl"
                    animate={floatingVariants.floating}
                    transition={{ delay: 3 }}
                />
            </div>

            <div className="container-aangepast relative z-10">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Tekst Content */}
                    <div className="space-y-8">
                        <motion.div className="space-y-4" variants={itemVariants}>
                            <motion.div
                                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primair-100 to-primair-200 text-primair-700 rounded-full text-sm font-medium border border-primair-300 backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Star className="w-4 h-4 mr-2 fill-current" />
                                Beoordeeld met 4.9/5 sterren
                                <Sparkles className="w-4 h-4 ml-2 text-primair-500" />
                            </motion.div>

                            <motion.h1
                                className="text-4xl lg:text-6xl font-bold text-secundair-900 leading-tight"
                                variants={itemVariants}
                            >
                                Jouw website die{' '}
                                <motion.span
                                    className="bg-gradient-to-r from-primair-600 via-primair-500 to-primair-700 bg-clip-text text-transparent"
                                    animate={{
                                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: 'linear',
                                    }}
                                    style={{
                                        backgroundSize: '200% 200%',
                                    }}
                                >
                                    écht verkoopt
                                </motion.span>
                            </motion.h1>

                            <motion.p
                                className="text-xl text-secundair-600 leading-relaxed max-w-lg"
                                variants={itemVariants}
                            >
                                Professionele websites die klanten aantrekken en omzet genereren.
                                Van ontwerp tot online marketing - wij zorgen voor jouw digitale succes.
                            </motion.p>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="primair" grootte="groot">
                                    <Zap className="w-5 h-5 mr-2" />
                                    Gratis Strategiegesprek
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Knop>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="outline" grootte="groot">
                                    Bekijk Portfolio
                                </Knop>
                            </motion.div>
                        </motion.div>

                        {/* Verbeterde Vertrouwensindicatoren */}
                        <motion.div
                            className="flex items-center space-x-8 pt-8"
                            variants={itemVariants}
                        >
                            {[
                                { cijfer: '150+', label: 'Tevreden klanten', icoon: Shield },
                                { cijfer: '5 jaar', label: 'Ervaring', icoon: Star },
                                { cijfer: '24/7', label: 'Support', icoon: Zap },
                            ].map((item, index) => {
                                const IconComponent = item.icoon;
                                return (
                                    <motion.div
                                        key={index}
                                        className="text-center group cursor-pointer"
                                        whileHover={{ scale: 1.1 }}
                                        variants={pulseVariants}
                                        animate="pulse"
                                        transition={{ delay: index * 0.2 }}
                                    >
                                        <div className="flex items-center justify-center mb-2">
                                            <IconComponent className="w-5 h-5 text-primair-600 mr-2" />
                                            <div className="text-2xl font-bold text-secundair-900 group-hover:text-primair-600 transition-colors">
                                                {item.cijfer}
                                            </div>
                                        </div>
                                        <div className="text-sm text-secundair-600 group-hover:text-secundair-700 transition-colors">
                                            {item.label}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Verbeterde Afbeelding/Visual */}
                    <motion.div className="lg:text-right" variants={itemVariants}>
                        <div className="relative">
                            {/* Hoofdcard */}
                            <motion.div
                                className="bg-gradient-to-br from-white to-primair-50 rounded-3xl p-8 schaduw-hover border border-primair-100 backdrop-blur-sm"
                                whileHover={{
                                    y: -10,
                                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                                }}
                                animate={floatingVariants.floating}
                            >
                                {/* Website Preview */}
                                <motion.div
                                    className="bg-white rounded-xl p-6 schaduw-zacht mb-6 border border-secundair-100"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="space-y-3">
                                        <motion.div
                                            className="h-3 bg-gradient-to-r from-secundair-200 to-secundair-300 rounded w-3/4"
                                            animate={{
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        />
                                        <motion.div
                                            className="h-3 bg-gradient-to-r from-secundair-200 to-secundair-300 rounded w-1/2"
                                            animate={{
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 0.3,
                                            }}
                                        />
                                        <motion.div
                                            className="h-3 bg-gradient-to-r from-primair-300 to-primair-400 rounded w-full"
                                            animate={{
                                                opacity: [0.5, 1, 0.5],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                                delay: 0.6,
                                            }}
                                        />
                                    </div>
                                </motion.div>

                                {/* Status Indicator */}
                                <motion.div
                                    className="text-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1 }}
                                >
                                    <motion.div
                                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full schaduw-zacht"
                                        animate={pulseVariants.pulse}
                                    >
                                        <motion.div
                                            className="w-3 h-3 bg-white rounded-full mr-3"
                                            animate={{
                                                scale: [1, 1.3, 1],
                                                opacity: [1, 0.7, 1],
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: 'easeInOut',
                                            }}
                                        />
                                        <span className="text-sm font-semibold">Live Website</span>
                                        <Sparkles className="w-4 h-4 ml-2" />
                                    </motion.div>
                                </motion.div>
                            </motion.div>

                            {/* Verbeterde Decoratieve elementen */}
                            <motion.div
                                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primair-300 to-primair-400 rounded-full opacity-30 blur-xl"
                                animate={floatingVariants.floating}
                                transition={{ delay: 0.5 }}
                            />
                            <motion.div
                                className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-secundair-300 to-secundair-400 rounded-full opacity-30 blur-xl"
                                animate={floatingVariants.floating}
                                transition={{ delay: 1 }}
                            />

                            {/* Zwevende iconen */}
                            <motion.div
                                className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center schaduw-zacht"
                                animate={floatingVariants.floating}
                                transition={{ delay: 2 }}
                            >
                                <Star className="w-6 h-6 text-yellow-500 fill-current" />
                            </motion.div>

                            <motion.div
                                className="absolute bottom-16 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center schaduw-zacht"
                                animate={floatingVariants.floating}
                                transition={{ delay: 2.5 }}
                            >
                                <Zap className="w-6 h-6 text-primair-600" />
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};