// src/app/contact/page.tsx - Complete Verbeterde Contact pagina
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, Coffee, ArrowRight, Zap, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sectie } from '../../components/ui/Sectie';
import { Kaart } from '../../components/ui/Kaart';
import { Knop } from '../../components/ui/Knop';

interface ContactFormulierData {
    naam: string;
    email: string;
    telefoon: string;
    bedrijf: string;
    dienst: string;
    budget: string;
    bericht: string;
    privacyAkkoord: boolean;
}

const initieleFormData: ContactFormulierData = {
    naam: '',
    email: '',
    telefoon: '',
    bedrijf: '',
    dienst: '',
    budget: '',
    bericht: '',
    privacyAkkoord: false
};

const dienstOpties = [
    'Website Ontwikkeling',
    'Website Onderhoud',
    'Hosting & Domein',
    'SEO Optimalisatie',
    'E-commerce Webshop',
    'Website Redesign',
    'Anders / Weet ik nog niet'
];

const budgetOpties = [
    'Onder €2.500',
    '€2.500 - €5.000',
    '€5.000 - €10.000',
    '€10.000 - €25.000',
    'Boven €25.000',
    'Weet ik nog niet'
];

const contactMethodes = [
    {
        icoon: Phone,
        titel: 'Telefonisch Contact',
        beschrijving: 'Direct contact voor snelle vragen',
        detail: '+31 (0)6 12 34 56 78',
        beschikbaarheid: 'Ma-Vr: 09:00-17:00',
        actie: 'Bel Direct',
        kleurGradient: 'from-green-500 to-emerald-500',
        achtergrond: 'from-green-50 to-emerald-50'
    },
    {
        icoon: Mail,
        titel: 'E-mail Contact',
        beschrijving: 'Voor uitgebreide vragen en projecten',
        detail: 'info@websitemakers.nl',
        beschikbaarheid: 'Reactie binnen 4 uur',
        actie: 'Stuur E-mail',
        kleurGradient: 'from-blue-500 to-cyan-500',
        achtergrond: 'from-blue-50 to-cyan-50'
    },
    {
        icoon: Calendar,
        titel: 'Strategiegesprek',
        beschrijving: 'Gratis adviesgesprek van 30 minuten',
        detail: 'Plan online in',
        beschikbaarheid: 'Ma-Vr: 10:00-16:00',
        actie: 'Plan Afspraak',
        kleurGradient: 'from-purple-500 to-violet-500',
        achtergrond: 'from-purple-50 to-violet-50'
    },
    {
        icoon: Coffee,
        titel: 'Kantoorbezoek',
        beschrijving: 'Kom langs voor een koffie en brainstorm',
        detail: 'Amsterdam Centrum',
        beschikbaarheid: 'Op afspraak',
        actie: 'Plan Bezoek',
        kleurGradient: 'from-orange-500 to-amber-500',
        achtergrond: 'from-orange-50 to-amber-50'
    }
];

const veelGesteldeVragen = [
    {
        vraag: 'Hoe snel krijg ik een reactie op mijn aanvraag?',
        antwoord: 'We streven ernaar om binnen 4 uur te reageren op alle aanvragen. Op werkdagen vaak al binnen 1 uur!',
        icoon: Clock
    },
    {
        vraag: 'Kunnen we een gesprek inplannen voordat ik besluit?',
        antwoord: 'Absoluut! We bieden altijd een gratis strategiegesprek van 30 minuten aan om je project te bespreken.',
        icoon: Calendar
    },
    {
        vraag: 'Wat heb ik nodig voordat ik contact opneem?',
        antwoord: 'Het helpt als je een idee hebt van je doelen, maar dat is niet verplicht. We helpen je graag bij het uitwerken van je plannen.',
        icoon: Star
    },
    {
        vraag: 'Werken jullie ook met bedrijven buiten Amsterdam?',
        antwoord: 'Ja, we werken met klanten door heel Nederland. Veel samenwerking verloopt online, maar we komen ook graag op bezoek.',
        icoon: MessageSquare
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

export default function ContactPagina() {
    const [formData, setFormData] = useState<ContactFormulierData>(initieleFormData);
    const [isVerzonden, setIsVerzonden] = useState(false);
    const [isVerzenden, setIsVerzenden] = useState(false);
    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsVerzenden(true);

        // Simuleer API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsVerzonden(true);
        setIsVerzenden(false);

        // Reset formulier na 3 seconden
        setTimeout(() => {
            setFormData(initieleFormData);
            setIsVerzonden(false);
        }, 3000);
    };

    const isFormulierGeldig = formData.naam && formData.email && formData.bericht && formData.privacyAkkoord;

    return (
        <>
            {/* Hero Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="relative overflow-hidden">
                    {/* Achtergrond animaties */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
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
                            className="absolute bottom-20 right-10 w-80 h-80 bg-primair-300 rounded-full opacity-20 blur-3xl"
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

                    <motion.div
                        className="text-center space-y-8 text-white relative z-10"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="space-y-4" variants={itemVariants}>
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                Neem Contact Op
                            </h1>
                            <p className="text-xl text-primair-100 max-w-3xl mx-auto leading-relaxed">
                                Klaar om jouw website project te starten? We helpen je graag verder!
                                Kies de manier van contact die het beste bij je past.
                            </p>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={containerVariants}
                        >
                            {contactMethodes.map((methode, index) => {
                                const IconComponent = methode.icoon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 },
                                        }}
                                    >
                                        <Kaart hoverEffect padding="groot" className="text-center h-full relative overflow-hidden">
                                            {/* Gradient achtergrond */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${methode.achtergrond} opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

                                            <div className="space-y-4 relative z-10">
                                                <motion.div
                                                    className={`w-16 h-16 bg-gradient-to-r ${methode.kleurGradient} rounded-full flex items-center justify-center mx-auto shadow-lg`}
                                                    whileHover={{
                                                        scale: 1.1,
                                                        rotate: 360,
                                                    }}
                                                    transition={{ duration: 0.6 }}
                                                >
                                                    <IconComponent className="w-8 h-8 text-white" />
                                                </motion.div>
                                                <h3 className="font-semibold text-secundair-900">
                                                    {methode.titel}
                                                </h3>
                                                <p className="text-sm text-secundair-600">
                                                    {methode.beschrijving}
                                                </p>
                                                <div className="text-sm">
                                                    <div className="font-medium text-secundair-900">{methode.detail}</div>
                                                    <div className="text-secundair-500">{methode.beschikbaarheid}</div>
                                                </div>
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    <Knop variant="primair" grootte="klein">
                                                        {methode.actie}
                                                    </Knop>
                                                </motion.div>
                                            </div>
                                        </Kaart>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>

            {/* Contact Formulier & Info */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Formulier */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="space-y-4">
                            <motion.h2
                                className="text-3xl font-bold text-secundair-900"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                Stuur ons een bericht
                            </motion.h2>
                            <motion.p
                                className="text-lg text-secundair-600"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Vertel ons over je project en wij nemen binnen 4 uur contact met je op
                                met een eerste advies en planning.
                            </motion.p>
                        </div>

                        <AnimatePresence mode="wait">
                            {isVerzonden ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Kaart padding="groot" className="text-center space-y-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                                        <motion.div
                                            className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-lg"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                                        >
                                            <CheckCircle className="w-10 h-10 text-white" />
                                        </motion.div>
                                        <div className="space-y-2">
                                            <h3 className="text-2xl font-bold text-secundair-900">
                                                Bericht Verzonden!
                                            </h3>
                                            <p className="text-secundair-600">
                                                Bedankt voor je bericht. We nemen binnen 4 uur contact met je op.
                                            </p>
                                        </div>
                                        <motion.div
                                            className="flex items-center justify-center space-x-2 text-green-600"
                                            animate={{
                                                opacity: [1, 0.5, 1],
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <Zap className="w-4 h-4" />
                                            <span className="text-sm font-medium">Snel contact gegarandeerd</span>
                                        </motion.div>
                                    </Kaart>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Naam en E-mail */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <label htmlFor="naam" className="block text-sm font-medium text-secundair-700 mb-2">
                                                Naam *
                                            </label>
                                            <motion.input
                                                type="text"
                                                id="naam"
                                                name="naam"
                                                value={formData.naam}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('naam')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'naam'
                                                    ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                    : 'border-secundair-300 hover:border-primair-400'
                                                    }`}
                                                placeholder="Je volledige naam"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <label htmlFor="email" className="block text-sm font-medium text-secundair-700 mb-2">
                                                E-mailadres *
                                            </label>
                                            <motion.input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                required
                                                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'email'
                                                    ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                    : 'border-secundair-300 hover:border-primair-400'
                                                    }`}
                                                placeholder="je@email.nl"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Telefoon en Bedrijf */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <label htmlFor="telefoon" className="block text-sm font-medium text-secundair-700 mb-2">
                                                Telefoonnummer
                                            </label>
                                            <motion.input
                                                type="tel"
                                                id="telefoon"
                                                name="telefoon"
                                                value={formData.telefoon}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('telefoon')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'telefoon'
                                                    ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                    : 'border-secundair-300 hover:border-primair-400'
                                                    }`}
                                                placeholder="+31 6 12345678"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            <label htmlFor="bedrijf" className="block text-sm font-medium text-secundair-700 mb-2">
                                                Bedrijfsnaam
                                            </label>
                                            <motion.input
                                                type="text"
                                                id="bedrijf"
                                                name="bedrijf"
                                                value={formData.bedrijf}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('bedrijf')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'bedrijf'
                                                    ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                    : 'border-secundair-300 hover:border-primair-400'
                                                    }`}
                                                placeholder="Je bedrijfsnaam"
                                                whileFocus={{ scale: 1.02 }}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Dienst en Budget */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <label htmlFor="dienst" className="block text-sm font-medium text-secundair-700 mb-2">
                                                Welke dienst?
                                            </label>
                                            <motion.select
                                                id="dienst"
                                                name="dienst"
                                                value={formData.dienst}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('dienst')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'dienst'
                                                    ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                    : 'border-secundair-300 hover:border-primair-400'
                                                    }`}
                                                whileFocus={{ scale: 1.02 }}
                                            >
                                                <option value="">Selecteer een dienst</option>
                                                {dienstOpties.map((dienst, index) => (
                                                    <option key={index} value={dienst}>
                                                        {dienst}
                                                    </option>
                                                ))}
                                            </motion.select>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <label htmlFor="budget" className="block text-sm font-medium text-secundair-700 mb-2">
                                                Indicatief budget
                                            </label>
                                            <motion.select
                                                id="budget"
                                                name="budget"
                                                value={formData.budget}
                                                onChange={handleInputChange}
                                                onFocus={() => setFocusedField('budget')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'budget'
                                                    ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                    : 'border-secundair-300 hover:border-primair-400'
                                                    }`}
                                                whileFocus={{ scale: 1.02 }}
                                            >
                                                <option value="">Selecteer een budget</option>
                                                {budgetOpties.map((budget, index) => (
                                                    <option key={index} value={budget}>
                                                        {budget}
                                                    </option>
                                                ))}
                                            </motion.select>
                                        </motion.div>
                                    </div>

                                    {/* Bericht */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 }}
                                    >
                                        <label htmlFor="bericht" className="block text-sm font-medium text-secundair-700 mb-2">
                                            Vertel ons over je project *
                                        </label>
                                        <motion.textarea
                                            id="bericht"
                                            name="bericht"
                                            value={formData.bericht}
                                            onChange={handleInputChange}
                                            onFocus={() => setFocusedField('bericht')}
                                            onBlur={() => setFocusedField(null)}
                                            required
                                            rows={5}
                                            className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${focusedField === 'bericht'
                                                ? 'border-primair-500 ring-2 ring-primair-500 ring-opacity-20 scale-105'
                                                : 'border-secundair-300 hover:border-primair-400'
                                                }`}
                                            placeholder="Beschrijf je project, doelen en eventuele specifieke wensen..."
                                            whileFocus={{ scale: 1.02 }}
                                        />
                                    </motion.div>

                                    {/* Privacy Akkoord */}
                                    <motion.div
                                        className="flex items-start space-x-3"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <motion.input
                                            type="checkbox"
                                            id="privacyAkkoord"
                                            name="privacyAkkoord"
                                            checked={formData.privacyAkkoord}
                                            onChange={handleInputChange}
                                            required
                                            className="mt-1 w-4 h-4 text-primair-600 border-secundair-300 rounded focus:ring-primair-500"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                        />
                                        <label htmlFor="privacyAkkoord" className="text-sm text-secundair-600">
                                            Ik ga akkoord met het{' '}
                                            <a href="/privacy" className="text-primair-600 hover:text-primair-700 underline">
                                                privacybeleid
                                            </a>{' '}
                                            en geef toestemming voor het verwerken van mijn gegevens. *
                                        </label>
                                    </motion.div>

                                    {/* Submit Knop */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.9 }}
                                        whileHover={{ scale: isFormulierGeldig && !isVerzenden ? 1.02 : 1 }}
                                        whileTap={{ scale: isFormulierGeldig && !isVerzenden ? 0.98 : 1 }}
                                    >
                                        <Knop
                                            type="submit"
                                            variant="primair"
                                            grootte="groot"
                                            volleBreedte
                                            uitgeschakeld={!isFormulierGeldig || isVerzenden}
                                        >
                                            {isVerzenden ? (
                                                <>
                                                    <motion.div
                                                        animate={{ rotate: 360 }}
                                                        transition={{
                                                            duration: 1,
                                                            repeat: Infinity,
                                                            ease: 'linear',
                                                        }}
                                                        className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                                                    />
                                                    Bezig met verzenden...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Verstuur Bericht
                                                    <motion.div
                                                        animate={{ x: [0, 5, 0] }}
                                                        transition={{
                                                            duration: 1.5,
                                                            repeat: Infinity,
                                                            ease: 'easeInOut',
                                                        }}
                                                    >
                                                        <ArrowRight className="w-5 h-5 ml-2" />
                                                    </motion.div>
                                                </>
                                            )}
                                        </Knop>
                                    </motion.div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Contact Informatie */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-secundair-900">
                                Direct Contact
                            </h2>
                            <p className="text-lg text-secundair-600">
                                Liever direct contact? We zijn graag bereikbaar via telefoon,
                                e-mail of kom gewoon langs op kantoor!
                            </p>
                        </div>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <Kaart padding="groot" className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                    <div className="flex items-start space-x-4 relative z-10">
                                        <motion.div
                                            className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Phone className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="font-semibold text-secundair-900 text-lg">
                                                Telefonisch
                                            </h3>
                                            <p className="text-secundair-600">
                                                +31 (0)6 12 34 56 78
                                            </p>
                                            <p className="text-sm text-secundair-500">
                                                Ma-Vr: 09:00-17:00<br />
                                                Buiten kantooruren? Laat een voicemail achter!
                                            </p>
                                        </div>
                                    </div>
                                </Kaart>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                whileHover={{ y: -5 }}
                            >
                                <Kaart padding="groot" className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                    <div className="flex items-start space-x-4 relative z-10">
                                        <motion.div
                                            className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Mail className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="font-semibold text-secundair-900 text-lg">
                                                E-mail
                                            </h3>
                                            <p className="text-secundair-600">
                                                info@websitemakers.nl
                                            </p>
                                            <p className="text-sm text-secundair-500">
                                                Reactie binnen 4 uur<br />
                                                Voor spoedvragen: bel direct
                                            </p>
                                        </div>
                                    </div>
                                </Kaart>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ y: -5 }}
                            >
                                <Kaart padding="groot" className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                    <div className="flex items-start space-x-4 relative z-10">
                                        <motion.div
                                            className="w-14 h-14 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <MapPin className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="font-semibold text-secundair-900 text-lg">
                                                Kantoor
                                            </h3>
                                            <p className="text-secundair-600">
                                                Prinsengracht 123<br />
                                                1015 LM Amsterdam
                                            </p>
                                            <p className="text-sm text-secundair-500">
                                                Alleen op afspraak<br />
                                                Parkeren: betaald parkeren in de buurt
                                            </p>
                                        </div>
                                    </div>
                                </Kaart>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                whileHover={{ y: -5 }}
                            >
                                <Kaart padding="groot" className="relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                                    <div className="flex items-start space-x-4 relative z-10">
                                        <motion.div
                                            className="w-14 h-14 bg-gradient-to-r from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg"
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                        >
                                            <Clock className="w-7 h-7 text-white" />
                                        </motion.div>
                                        <div className="space-y-2 flex-1">
                                            <h3 className="font-semibold text-secundair-900 text-lg">
                                                Openingstijden
                                            </h3>
                                            <div className="text-secundair-600 text-sm space-y-1">
                                                <div>Maandag - Vrijdag: 09:00 - 17:00</div>
                                                <div>Zaterdag: 10:00 - 14:00 (op afspraak)</div>
                                                <div>Zondag: Gesloten</div>
                                            </div>
                                            <p className="text-sm text-secundair-500">
                                                Spoed? We zijn vaak ook buiten kantooruren bereikbaar
                                            </p>
                                        </div>
                                    </div>
                                </Kaart>
                            </motion.div>
                        </div>

                        {/* Snel Contact CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <Kaart padding="groot" className="bg-gradient-to-br from-primair-50 to-primair-100 border-primair-200 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-primair-200 rounded-full opacity-20 -translate-y-10 translate-x-10" />
                                <div className="absolute bottom-0 left-0 w-16 h-16 bg-primair-300 rounded-full opacity-20 translate-y-8 -translate-x-8" />

                                <div className="text-center space-y-4 relative z-10">
                                    <motion.h3
                                        className="text-xl font-bold text-secundair-900 flex items-center justify-center"
                                        animate={{ rotate: [0, 5, -5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                    >
                                        <Calendar className="w-6 h-6 mr-2 text-primair-600" />
                                        Liever direct praten?
                                    </motion.h3>
                                    <p className="text-secundair-600">
                                        Plan een gratis strategiegesprek van 30 minuten in
                                    </p>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Knop variant="primair">
                                            <Zap className="w-4 h-4 mr-2" />
                                            Plan Gratis Gesprek
                                        </Knop>
                                    </motion.div>
                                </div>
                            </Kaart>
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>

            {/* FAQ Sectie */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <motion.div
                    className="text-center space-y-4 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Veelgestelde Vragen
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Voordat je contact opneemt, bekijk deze veelgestelde vragen.
                        Staat je vraag er niet bij? Neem gerust contact op!
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {veelGesteldeVragen.map((faq, index) => {
                        const IconComponent = faq.icoon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <Kaart hoverEffect padding="groot" className="h-full">
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-3">
                                            <motion.div
                                                className="w-8 h-8 bg-primair-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                                                whileHover={{ rotate: 360, scale: 1.1 }}
                                                transition={{ duration: 0.6 }}
                                            >
                                                <IconComponent className="w-4 h-4 text-primair-600" />
                                            </motion.div>
                                            <h3 className="font-semibold text-secundair-900">
                                                {faq.vraag}
                                            </h3>
                                        </div>
                                        <p className="text-secundair-600 ml-11 leading-relaxed">
                                            {faq.antwoord}
                                        </p>
                                    </div>
                                </Kaart>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <p className="text-secundair-600 mb-4">
                        Heb je nog andere vragen?
                    </p>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Knop variant="primair">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Stel Je Vraag
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Knop>
                    </motion.div>
                </motion.div>
            </Sectie>

            {/* CTA Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="relative overflow-hidden">
                    {/* Achtergrond animaties */}
                    <div className="absolute inset-0">
                        <motion.div
                            className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"
                            animate={{
                                x: [0, 100, 0],
                                y: [0, -50, 0],
                            }}
                            transition={{
                                duration: 15,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                        <motion.div
                            className="absolute bottom-0 right-0 w-80 h-80 bg-primair-300 rounded-full opacity-20 blur-3xl"
                            animate={{
                                x: [0, -80, 0],
                                y: [0, 60, 0],
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                        />
                    </div>

                    <motion.div
                        className="text-center space-y-8 relative z-10"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="space-y-4">
                            <motion.h2
                                className="text-3xl lg:text-4xl font-bold text-white"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Klaar om te beginnen?
                            </motion.h2>
                            <motion.p
                                className="text-xl text-primair-100 max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                We kijken ernaar uit om van je te horen! Kies de manier van contact
                                die het beste bij je past en laten we samen jouw project realiseren.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="secundair" grootte="groot">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Bel Direct
                                </Knop>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                    <Mail className="w-5 h-5 mr-2" />
                                    Stuur E-mail
                                </Knop>
                            </motion.div>
                        </motion.div>

                        {/* Responstijd indicator */}
                        <motion.div
                            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'easeInOut',
                            }}
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: 'linear',
                                }}
                            >
                                <Zap className="w-5 h-5 text-green-300 mr-2" />
                            </motion.div>
                            <span className="text-primair-100 font-medium">
                                Gegarandeerde reactie binnen 4 uur op werkdagen
                            </span>
                        </motion.div>
                    </motion.div>
                </div>
            </Sectie>
        </>
    );
}