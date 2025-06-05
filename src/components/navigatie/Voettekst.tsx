// src/components/navigatie/Voettekst.tsx - Moderne versie met animaties
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Send, Star, Award, Users, ArrowUp, Heart, Globe, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Knop } from '../ui/Knop';

const socialLinks = [
    {
        icoon: Facebook,
        href: '#',
        label: 'Facebook',
        kleur: 'hover:text-blue-600',
        achtergrond: 'hover:bg-blue-50'
    },
    {
        icoon: Twitter,
        href: '#',
        label: 'Twitter',
        kleur: 'hover:text-sky-500',
        achtergrond: 'hover:bg-sky-50'
    },
    {
        icoon: Linkedin,
        href: '#',
        label: 'LinkedIn',
        kleur: 'hover:text-blue-700',
        achtergrond: 'hover:bg-blue-50'
    },
    {
        icoon: Instagram,
        href: '#',
        label: 'Instagram',
        kleur: 'hover:text-pink-600',
        achtergrond: 'hover:bg-pink-50'
    }
];

const snelleLinks = [
    { label: 'Onze Diensten', href: '/diensten' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Over Ons', href: '/over-ons' },
    { label: 'Contact', href: '/contact' },
    { label: 'Blog', href: '/blog' },
    { label: 'Klanten Login', href: '/login' }
];

const diensten = [
    { label: 'Website Ontwikkeling', href: '/diensten#websitebouw' },
    { label: 'Website Onderhoud', href: '/diensten#onderhoud' },
    { label: 'Hosting & Domein', href: '/diensten#hosting' },
    { label: 'SEO Optimalisatie', href: '/diensten#seo' },
    { label: 'E-commerce Webshops', href: '/diensten#ecommerce' },
    { label: 'Website Redesign', href: '/diensten#redesign' }
];

const vertrouwensStatistieken = [
    {
        icoon: Users,
        waarde: '150+',
        label: 'Tevreden klanten',
        kleurGradient: 'from-blue-500 to-cyan-500'
    },
    {
        icoon: Star,
        waarde: '4.9/5',
        label: 'Gemiddelde beoordeling',
        kleurGradient: 'from-yellow-500 to-orange-500'
    },
    {
        icoon: Award,
        waarde: '5 jaar',
        label: 'Ervaring in de markt',
        kleurGradient: 'from-purple-500 to-pink-500'
    },
    {
        icoon: Shield,
        waarde: '24/7',
        label: 'Support beschikbaar',
        kleurGradient: 'from-green-500 to-emerald-500'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut',
        },
    },
};

export const Voettekst: React.FC = () => {
    const huidigJaar = new Date().getFullYear();
    const [nieuwsbriefEmail, setNieuwsbriefEmail] = useState('');
    const [nieuwsbriefVerzonden, setNieuwsbriefVerzonden] = useState(false);
    const [toonScrollTop, setToonScrollTop] = useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setToonScrollTop(window.scrollY > 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNieuwsbriefSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (nieuwsbriefEmail) {
            setNieuwsbriefVerzonden(true);
            setTimeout(() => {
                setNieuwsbriefVerzonden(false);
                setNieuwsbriefEmail('');
            }, 3000);
        }
    };

    const scrollNaarBoven = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <footer className="bg-gradient-to-br from-secundair-900 via-secundair-800 to-secundair-900 text-white relative overflow-hidden">
                {/* Achtergrond decoraties */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div
                        className="absolute top-20 left-20 w-64 h-64 bg-primair-600 rounded-full opacity-5 blur-3xl"
                        animate={{
                            x: [0, 100, 0],
                            y: [0, -50, 0],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                    <motion.div
                        className="absolute bottom-20 right-20 w-80 h-80 bg-primair-500 rounded-full opacity-5 blur-3xl"
                        animate={{
                            x: [0, -80, 0],
                            y: [0, 60, 0],
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    />
                </div>

                {/* Nieuwsbrief Sectie */}
                <div className="relative z-10 border-b border-secundair-700">
                    <div className="container-aangepast py-12">
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="space-y-4">
                                <motion.h3
                                    className="text-2xl lg:text-3xl font-bold"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 }}
                                >
                                    Blijf op de hoogte van webtrends
                                </motion.h3>
                                <motion.p
                                    className="text-secundair-200 text-lg"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                >
                                    Ontvang maandelijks praktische tips, webdesign trends en succesverhalen van onze klanten.
                                </motion.p>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <AnimatePresence mode="wait">
                                    {nieuwsbriefVerzonden ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.8 }}
                                            className="bg-green-600 rounded-lg p-6 text-center"
                                        >
                                            <motion.div
                                                className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-3"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.2, type: 'spring' }}
                                            >
                                                <Heart className="w-6 h-6 text-green-600" />
                                            </motion.div>
                                            <h4 className="font-bold mb-2">Bedankt voor je aanmelding!</h4>
                                            <p className="text-green-100">We sturen je binnenkort onze eerste nieuwsbrief.</p>
                                        </motion.div>
                                    ) : (
                                        <motion.form
                                            key="form"
                                            onSubmit={handleNieuwsbriefSubmit}
                                            className="flex flex-col sm:flex-row gap-3"
                                            initial={{ opacity: 1 }}
                                        >
                                            <motion.input
                                                type="email"
                                                value={nieuwsbriefEmail}
                                                onChange={(e) => setNieuwsbriefEmail(e.target.value)}
                                                placeholder="Je e-mailadres"
                                                required
                                                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-secundair-300 focus:outline-none focus:ring-2 focus:ring-primair-500 focus:border-transparent backdrop-blur-sm"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Knop
                                                    type="submit"
                                                    variant="primair"
                                                    className="whitespace-nowrap"
                                                >
                                                    <Send className="w-4 h-4 mr-2" />
                                                    Aanmelden
                                                </Knop>
                                            </motion.div>
                                        </motion.form>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Hoofdcontent Footer */}
                <div className="container-aangepast py-16 relative z-10">
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Bedrijfsinformatie */}
                        <motion.div className="space-y-6 lg:col-span-1" variants={itemVariants}>
                            <motion.div
                                className="flex items-center space-x-3"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.div
                                    className="w-12 h-12 bg-gradient-to-r from-primair-600 to-primair-700 rounded-xl flex items-center justify-center shadow-lg"
                                    whileHover={{
                                        rotate: 360,
                                        scale: 1.1,
                                    }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <span className="text-white font-bold text-lg">WM</span>
                                </motion.div>
                                <span className="text-2xl font-bold">Website Makers</span>
                            </motion.div>

                            <p className="text-secundair-200 leading-relaxed">
                                Professionele websites voor ondernemers die willen groeien.
                                Van concept tot online succes.
                            </p>

                            {/* Social Media Links */}
                            <div className="flex space-x-3">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icoon;
                                    return (
                                        <motion.a
                                            key={index}
                                            href={social.href}
                                            className={`w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-secundair-200 ${social.kleur} ${social.achtergrond} transition-all duration-300 backdrop-blur-sm border border-white/10`}
                                            whileHover={{
                                                scale: 1.1,
                                                y: -2,
                                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 + 0.5 }}
                                        >
                                            <IconComponent size={18} />
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Certificaten/Badges */}
                            <motion.div
                                className="flex items-center space-x-3 pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                            >
                                <div className="flex items-center space-x-2 text-secundair-300 text-sm">
                                    <Shield className="w-4 h-4 text-green-400" />
                                    <span>SSL Veilig</span>
                                </div>
                                <div className="flex items-center space-x-2 text-secundair-300 text-sm">
                                    <Globe className="w-4 h-4 text-blue-400" />
                                    <span>GDPR Compliant</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Snelle Links */}
                        <motion.div className="space-y-6" variants={itemVariants}>
                            <h3 className="text-lg font-semibold">Snelle Links</h3>
                            <ul className="space-y-3">
                                {snelleLinks.map((link, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="text-secundair-200 hover:text-primair-200 transition-colors duration-200 flex items-center group"
                                        >
                                            <motion.span
                                                className="w-0 h-0.5 bg-primair-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                                            />
                                            {link.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Diensten */}
                        <motion.div className="space-y-6" variants={itemVariants}>
                            <h3 className="text-lg font-semibold">Onze Diensten</h3>
                            <ul className="space-y-3">
                                {diensten.map((dienst, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={dienst.href}
                                            className="text-secundair-200 hover:text-primair-200 transition-colors duration-200 flex items-center group"
                                        >
                                            <motion.span
                                                className="w-0 h-0.5 bg-primair-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"
                                            />
                                            {dienst.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Contactinformatie */}
                        <motion.div className="space-y-6" variants={itemVariants}>
                            <h3 className="text-lg font-semibold">Contact & Bereikbaarheid</h3>
                            <div className="space-y-4">
                                <motion.div
                                    className="flex items-start space-x-3 text-secundair-200 group cursor-pointer"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-green-500/20 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Mail size={16} />
                                    </motion.div>
                                    <div>
                                        <div className="font-medium group-hover:text-white transition-colors">info@websitemakers.nl</div>
                                        <div className="text-sm text-secundair-400">Reactie binnen 4 uur</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start space-x-3 text-secundair-200 group cursor-pointer"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-blue-500/20 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <Phone size={16} />
                                    </motion.div>
                                    <div>
                                        <div className="font-medium group-hover:text-white transition-colors">+31 (0)6 12 34 56 78</div>
                                        <div className="text-sm text-secundair-400">Ma-Vr: 09:00-17:00</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="flex items-start space-x-3 text-secundair-200 group cursor-pointer"
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-orange-500/20 transition-colors duration-300"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <MapPin size={16} />
                                    </motion.div>
                                    <div>
                                        <div className="font-medium group-hover:text-white transition-colors">Amsterdam, Nederland</div>
                                        <div className="text-sm text-secundair-400">Bezoek op afspraak</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Snelle CTA */}
                            <motion.div
                                className="pt-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Knop variant="outline" className="border-primair-400 text-primair-200 hover:bg-primair-600 hover:text-white w-full">
                                        Plan Gratis Gesprek
                                    </Knop>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Vertrouwensstatistieken */}
                    <motion.div
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-12 border-t border-secundair-700"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {vertrouwensStatistieken.map((stat, index) => {
                            const IconComponent = stat.icoon;
                            return (
                                <motion.div
                                    key={index}
                                    className="text-center group cursor-pointer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.6 }}
                                    whileHover={{
                                        scale: 1.05,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <motion.div
                                        className={`w-12 h-12 bg-gradient-to-r ${stat.kleurGradient} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg`}
                                        whileHover={{
                                            rotate: 360,
                                            scale: 1.1,
                                        }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <div className="text-2xl font-bold text-white mb-1 group-hover:text-primair-200 transition-colors">
                                        {stat.waarde}
                                    </div>
                                    <div className="text-sm text-secundair-300 group-hover:text-secundair-100 transition-colors">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Onderkant footer */}
                <motion.div
                    className="border-t border-secundair-700 relative z-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <div className="container-aangepast py-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <motion.p
                                className="text-secundair-200 text-sm flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                            >
                                © {huidigJaar} Website Makers. Alle rechten voorbehouden.
                                <motion.span
                                    className="ml-2"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    💙
                                </motion.span>
                            </motion.p>

                            <motion.div
                                className="flex space-x-6"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.9 }}
                            >
                                <Link
                                    href="/privacy"
                                    className="text-secundair-200 hover:text-primair-200 text-sm transition-colors duration-200 hover:underline"
                                >
                                    Privacy Beleid
                                </Link>
                                <Link
                                    href="/voorwaarden"
                                    className="text-secundair-200 hover:text-primair-200 text-sm transition-colors duration-200 hover:underline"
                                >
                                    Algemene Voorwaarden
                                </Link>
                                <Link
                                    href="/cookies"
                                    className="text-secundair-200 hover:text-primair-200 text-sm transition-colors duration-200 hover:underline"
                                >
                                    Cookie Beleid
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </footer>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {toonScrollTop && (
                    <motion.button
                        onClick={scrollNaarBoven}
                        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primair-600 to-primair-700 text-white rounded-full shadow-lg border-2 border-white/20 backdrop-blur-sm z-50 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        whileHover={{
                            scale: 1.1,
                            boxShadow: '0 8px 25px rgba(37, 99, 235, 0.4)',
                        }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ArrowUp className="w-5 h-5" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};