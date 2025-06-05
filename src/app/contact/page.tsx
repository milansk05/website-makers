// src/app/contact/page.tsx - Contact pagina
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, Coffee, ArrowRight } from 'lucide-react';
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
        kleurAccent: 'bg-green-500'
    },
    {
        icoon: Mail,
        titel: 'E-mail Contact',
        beschrijving: 'Voor uitgebreide vragen en projecten',
        detail: 'info@websitemakers.nl',
        beschikbaarheid: 'Reactie binnen 4 uur',
        actie: 'Stuur E-mail',
        kleurAccent: 'bg-blue-500'
    },
    {
        icoon: Calendar,
        titel: 'Strategiegesprek',
        beschrijving: 'Gratis adviesgesprek van 30 minuten',
        detail: 'Plan online in',
        beschikbaarheid: 'Ma-Vr: 10:00-16:00',
        actie: 'Plan Afspraak',
        kleurAccent: 'bg-purple-500'
    },
    {
        icoon: Coffee,
        titel: 'Kantoorbezoek',
        beschrijving: 'Kom langs voor een koffie en brainstorm',
        detail: 'Amsterdam Centrum',
        beschikbaarheid: 'Op afspraak',
        actie: 'Plan Bezoek',
        kleurAccent: 'bg-orange-500'
    }
];

const veelGesteldeVragen = [
    {
        vraag: 'Hoe snel krijg ik een reactie op mijn aanvraag?',
        antwoord: 'We streven ernaar om binnen 4 uur te reageren op alle aanvragen. Op werkdagen vaak al binnen 1 uur!'
    },
    {
        vraag: 'Kunnen we een gesprek inplannen voordat ik besluit?',
        antwoord: 'Absoluut! We bieden altijd een gratis strategiegesprek van 30 minuten aan om je project te bespreken.'
    },
    {
        vraag: 'Wat heb ik nodig voordat ik contact opneem?',
        antwoord: 'Het helpt als je een idee hebt van je doelen, maar dat is niet verplicht. We helpen je graag bij het uitwerken van je plannen.'
    },
    {
        vraag: 'Werken jullie ook met bedrijven buiten Amsterdam?',
        antwoord: 'Ja, we werken met klanten door heel Nederland. Veel samenwerking verloopt online, maar we komen ook graag op bezoek.'
    }
];

export default function ContactPagina() {
    const [formData, setFormData] = useState<ContactFormulierData>(initieleFormData);
    const [isVerzonden, setIsVerzonden] = useState(false);
    const [isVerzenden, setIsVerzenden] = useState(false);

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
                <div className="text-center space-y-8 text-white">
                    <div className="space-y-4">
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Neem Contact Op
                        </h1>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto leading-relaxed">
                            Klaar om jouw website project te starten? We helpen je graag verder!
                            Kies de manier van contact die het beste bij je past.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactMethodes.map((methode, index) => {
                            const IconComponent = methode.icoon;
                            return (
                                <Kaart key={index} hoverEffect padding="groot" className="text-center">
                                    <div className="space-y-4">
                                        <div className={`w-12 h-12 ${methode.kleurAccent} rounded-full flex items-center justify-center mx-auto`}>
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
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
                                        <Knop variant="primair" grootte="klein">
                                            {methode.actie}
                                        </Knop>
                                    </div>
                                </Kaart>
                            );
                        })}
                    </div>
                </div>
            </Sectie>

            {/* Contact Formulier & Info */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Formulier */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-secundair-900">
                                Stuur ons een bericht
                            </h2>
                            <p className="text-lg text-secundair-600">
                                Vertel ons over je project en wij nemen binnen 4 uur contact met je op
                                met een eerste advies en planning.
                            </p>
                        </div>

                        {isVerzonden ? (
                            <Kaart padding="groot" className="text-center space-y-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-secundair-900">
                                        Bericht Verzonden!
                                    </h3>
                                    <p className="text-secundair-600">
                                        Bedankt voor je bericht. We nemen binnen 4 uur contact met je op.
                                    </p>
                                </div>
                            </Kaart>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Naam en E-mail */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="naam" className="block text-sm font-medium text-secundair-700 mb-2">
                                            Naam *
                                        </label>
                                        <input
                                            type="text"
                                            id="naam"
                                            name="naam"
                                            value={formData.naam}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                            placeholder="Je volledige naam"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-secundair-700 mb-2">
                                            E-mailadres *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                            placeholder="je@email.nl"
                                        />
                                    </div>
                                </div>

                                {/* Telefoon en Bedrijf */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="telefoon" className="block text-sm font-medium text-secundair-700 mb-2">
                                            Telefoonnummer
                                        </label>
                                        <input
                                            type="tel"
                                            id="telefoon"
                                            name="telefoon"
                                            value={formData.telefoon}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                            placeholder="+31 6 12345678"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="bedrijf" className="block text-sm font-medium text-secundair-700 mb-2">
                                            Bedrijfsnaam
                                        </label>
                                        <input
                                            type="text"
                                            id="bedrijf"
                                            name="bedrijf"
                                            value={formData.bedrijf}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                            placeholder="Je bedrijfsnaam"
                                        />
                                    </div>
                                </div>

                                {/* Dienst en Budget */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="dienst" className="block text-sm font-medium text-secundair-700 mb-2">
                                            Welke dienst?
                                        </label>
                                        <select
                                            id="dienst"
                                            name="dienst"
                                            value={formData.dienst}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                        >
                                            <option value="">Selecteer een dienst</option>
                                            {dienstOpties.map((dienst, index) => (
                                                <option key={index} value={dienst}>
                                                    {dienst}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="budget" className="block text-sm font-medium text-secundair-700 mb-2">
                                            Indicatief budget
                                        </label>
                                        <select
                                            id="budget"
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                        >
                                            <option value="">Selecteer een budget</option>
                                            {budgetOpties.map((budget, index) => (
                                                <option key={index} value={budget}>
                                                    {budget}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Bericht */}
                                <div>
                                    <label htmlFor="bericht" className="block text-sm font-medium text-secundair-700 mb-2">
                                        Vertel ons over je project *
                                    </label>
                                    <textarea
                                        id="bericht"
                                        name="bericht"
                                        value={formData.bericht}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-secundair-300 rounded-lg focus:ring-2 focus:ring-primair-500 focus:border-primair-500 transition-colors"
                                        placeholder="Beschrijf je project, doelen en eventuele specifieke wensen..."
                                    />
                                </div>

                                {/* Privacy Akkoord */}
                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="privacyAkkoord"
                                        name="privacyAkkoord"
                                        checked={formData.privacyAkkoord}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 w-4 h-4 text-primair-600 border-secundair-300 rounded focus:ring-primair-500"
                                    />
                                    <label htmlFor="privacyAkkoord" className="text-sm text-secundair-600">
                                        Ik ga akkoord met het{' '}
                                        <a href="/privacy" className="text-primair-600 hover:text-primair-700 underline">
                                            privacybeleid
                                        </a>{' '}
                                        en geef toestemming voor het verwerken van mijn gegevens. *
                                    </label>
                                </div>

                                {/* Submit Knop */}
                                <Knop
                                    type="submit"
                                    variant="primair"
                                    grootte="groot"
                                    volleBreedte
                                    uitgeschakeld={!isFormulierGeldig || isVerzenden}
                                >
                                    {isVerzenden ? (
                                        'Bezig met verzenden...'
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Verstuur Bericht
                                        </>
                                    )}
                                </Knop>
                            </form>
                        )}
                    </div>

                    {/* Contact Informatie */}
                    <div className="space-y-8">
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
                            <Kaart padding="groot">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-green-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-secundair-900">Telefonisch</h3>
                                        <p className="text-secundair-600">+31 (0)6 12 34 56 78</p>
                                        <p className="text-sm text-secundair-500">
                                            Ma-Vr: 09:00-17:00<br />
                                            Buiten kantooruren? Laat een voicemail achter!
                                        </p>
                                    </div>
                                </div>
                            </Kaart>

                            <Kaart padding="groot">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-secundair-900">E-mail</h3>
                                        <p className="text-secundair-600">info@websitemakers.nl</p>
                                        <p className="text-sm text-secundair-500">
                                            Reactie binnen 4 uur<br />
                                            Voor spoedvragen: bel direct
                                        </p>
                                    </div>
                                </div>
                            </Kaart>

                            <Kaart padding="groot">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-secundair-900">Kantoor</h3>
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

                            <Kaart padding="groot">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Clock className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div className="space-y-2">
                                        <h3 className="font-semibold text-secundair-900">Openingstijden</h3>
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
                        </div>

                        {/* Snel Contact CTA */}
                        <Kaart padding="groot" className="bg-gradient-to-r from-primair-50 to-primair-100 border-primair-200">
                            <div className="text-center space-y-4">
                                <h3 className="text-lg font-bold text-secundair-900">
                                    Liever direct praten?
                                </h3>
                                <p className="text-secundair-600 text-sm">
                                    Plan een gratis strategiegesprek van 30 minuten in
                                </p>
                                <Knop variant="primair">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Plan Gratis Gesprek
                                </Knop>
                            </div>
                        </Kaart>
                    </div>
                </div>
            </Sectie>

            {/* FAQ Sectie */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Veelgestelde Vragen
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Voordat je contact opneemt, bekijk deze veelgestelde vragen.
                        Staat je vraag er niet bij? Neem gerust contact op!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {veelGesteldeVragen.map((faq, index) => (
                        <Kaart key={index} hoverEffect padding="groot">
                            <div className="space-y-4">
                                <div className="flex items-start space-x-3">
                                    <MessageSquare className="w-6 h-6 text-primair-600 flex-shrink-0 mt-1" />
                                    <h3 className="font-semibold text-secundair-900">
                                        {faq.vraag}
                                    </h3>
                                </div>
                                <p className="text-secundair-600 ml-9">
                                    {faq.antwoord}
                                </p>
                            </div>
                        </Kaart>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="text-secundair-600 mb-4">
                        Heb je nog andere vragen?
                    </p>
                    <Knop variant="primair">
                        Stel Je Vraag
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Knop>
                </div>
            </Sectie>

            {/* CTA Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Klaar om te beginnen?
                        </h2>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto">
                            We kijken ernaar uit om van je te horen! Kies de manier van contact
                            die het beste bij je past en laten we samen jouw project realiseren.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Knop variant="secundair" grootte="groot">
                            <Phone className="w-5 h-5 mr-2" />
                            Bel Direct
                        </Knop>
                        <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                            <Mail className="w-5 h-5 mr-2" />
                            Stuur E-mail
                        </Knop>
                    </div>

                    {/* Responstijd indicator */}
                    <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-10 rounded-full">
                        <CheckCircle className="w-5 h-5 text-green-300 mr-2" />
                        <span className="text-primair-100 font-medium">
                            Gegarandeerde reactie binnen 4 uur op werkdagen
                        </span>
                    </div>
                </div>
            </Sectie>
        </>
    );
}