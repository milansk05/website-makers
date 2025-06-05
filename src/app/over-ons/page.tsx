// src/app/over-ons/page.tsx - Over Ons pagina
import React from 'react';
import { Users, Target, Heart, Award, Calendar, Code, Coffee, Lightbulb, ArrowRight, Quote, Linkedin, Mail } from 'lucide-react';
import { Sectie } from '../../components/ui/Sectie';
import { Kaart } from '../../components/ui/Kaart';
import { Knop } from '../../components/ui/Knop';

interface TeamLid {
    id: string;
    naam: string;
    functie: string;
    beschrijving: string;
    expertise: string[];
    afbeeldingUrl: string;
    linkedinUrl?: string;
    emailUrl?: string;
    quote: string;
}

const teamLeden: TeamLid[] = [
    {
        id: 'jan-de-vries',
        naam: 'Jan de Vries',
        functie: 'Oprichter & Lead Developer',
        beschrijving: 'Jan is de drijvende kracht achter Website Makers. Met meer dan 8 jaar ervaring in webdevelopment en een passie voor ondernemerschap, helpt hij bedrijven groeien met slimme digitale oplossingen.',
        expertise: ['React', 'Next.js', 'Node.js', 'WordPress', 'E-commerce'],
        afbeeldingUrl: '/placeholder-jan.jpg',
        linkedinUrl: 'https://linkedin.com/in/jandevries',
        emailUrl: 'mailto:jan@websitemakers.nl',
        quote: 'Elke website die we maken, moet een probleem oplossen en waarde toevoegen voor het bedrijf.'
    },
    {
        id: 'lisa-bakker',
        naam: 'Lisa Bakker',
        functie: 'UX/UI Designer',
        beschrijving: 'Lisa zorgt ervoor dat alle websites niet alleen mooi zijn, maar vooral gebruiksvriendelijk. Haar achtergrond in psychologie helpt haar om interfaces te ontwerpen die echt werken voor gebruikers.',
        expertise: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
        afbeeldingUrl: '/placeholder-lisa.jpg',
        linkedinUrl: 'https://linkedin.com/in/lisabakker',
        emailUrl: 'mailto:lisa@websitemakers.nl',
        quote: 'Goed design is onzichtbaar - het werkt gewoon perfect voor de gebruiker.'
    },
    {
        id: 'mark-jansen',
        naam: 'Mark Jansen',
        functie: 'SEO & Marketing Specialist',
        beschrijving: 'Mark zorgt ervoor dat onze websites niet alleen goed gebouwd zijn, maar ook gevonden worden. Zijn data-gedreven aanpak heeft al vele klanten geholpen om hun online zichtbaarheid te vergroten.',
        expertise: ['SEO', 'Google Ads', 'Analytics', 'Content Marketing', 'Local SEO'],
        afbeeldingUrl: '/placeholder-mark.jpg',
        linkedinUrl: 'https://linkedin.com/in/markjansen',
        emailUrl: 'mailto:mark@websitemakers.nl',
        quote: 'Een mooie website zonder bezoekers is als een mooie etalage in een donkere steeg.'
    }
];

const waardenEnMissie = [
    {
        icoon: Target,
        titel: 'Onze Missie',
        beschrijving: 'Wij helpen ondernemers hun bedrijf laten groeien door middel van professionele websites die echt resultaat opleveren. Geen mooie plaatjes, maar concrete omzetgroei.',
        kleurAccent: 'bg-blue-500'
    },
    {
        icoon: Heart,
        titel: 'Onze Waarden',
        beschrijving: 'Eerlijkheid, kwaliteit en persoonlijke service staan centraal. We bouwen langdurige relaties met onze klanten en zijn pas tevreden als zij succesvol zijn.',
        kleurAccent: 'bg-red-500'
    },
    {
        icoon: Award,
        titel: 'Onze Expertise',
        beschrijving: 'Met jaren van ervaring en up-to-date kennis van de nieuwste technologieën, leveren we websites die toekomstbestendig zijn en blijven presteren.',
        kleurAccent: 'bg-green-500'
    }
];

const tijdlijn = [
    {
        jaar: '2019',
        titel: 'De Start',
        beschrijving: 'Jan start Website Makers vanuit zijn passie voor webdevelopment en ondernemerschap. De eerste klanten zijn lokale bedrijven uit Amsterdam.',
        mijlpaal: 'Eerste 10 klanten'
    },
    {
        jaar: '2020',
        titel: 'Groei & Uitbreiding',
        beschrijving: 'Lisa sluit zich aan als UX/UI Designer. Samen ontwikkelen we een unieke aanpak die design en functionaliteit perfect combineert.',
        mijlpaal: '50+ websites opgeleverd'
    },
    {
        jaar: '2021',
        titel: 'Specialisatie',
        beschrijving: 'Mark versterkt het team als SEO specialist. We beginnen met het aanbieden van complete digitale marketing oplossingen naast webdevelopment.',
        mijlpaal: '100+ tevreden klanten'
    },
    {
        jaar: '2022',
        titel: 'Erkenning',
        beschrijving: 'Website Makers wordt erkend als een van de beste webdevelopment bedrijven in Nederland. We winnen onze eerste branche award.',
        mijlpaal: 'Top 10 Webdevelopers NL'
    },
    {
        jaar: '2023',
        titel: 'Innovatie',
        beschrijving: 'We introduceren nieuwe services zoals headless CMS oplossingen en geavanceerde e-commerce integraties voor grotere klanten.',
        mijlpaal: '150+ projecten afgerond'
    },
    {
        jaar: '2024',
        titel: 'Vandaag',
        beschrijving: 'Met een sterke reputatie en een groeiend klantenbestand, blijven we focussen op kwaliteit en persoonlijke service. De toekomst ziet er rooskleurig uit.',
        mijlpaal: '200+ succesvolle projecten'
    }
];

const bedrijfsCijfers = [
    {
        nummer: '200+',
        label: 'Afgeronde Projecten',
        beschrijving: 'Websites en webshops die echt werken'
    },
    {
        nummer: '150+',
        label: 'Tevreden Klanten',
        beschrijving: 'Ondernemers die ons aanbevelen'
    },
    {
        nummer: '5 jaar',
        label: 'Ervaring',
        beschrijving: 'Bewezen track record in de markt'
    },
    {
        nummer: '4.9/5',
        label: 'Klantbeoordeling',
        beschrijving: 'Gemiddelde score van al onze klanten'
    },
    {
        nummer: '98%',
        label: 'Op Tijd Opgeleverd',
        beschrijving: 'Wij houden ons aan afspraken'
    },
    {
        nummer: '24/7',
        label: 'Support',
        beschrijving: 'Altijd bereikbaar voor onze klanten'
    }
];

export default function OverOnsPagina() {
    return (
        <>
            {/* Hero Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 text-white">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold">
                                Over Website Makers
                            </h1>
                            <p className="text-xl text-primair-100 leading-relaxed">
                                We zijn een team van gepassioneerde professionals die geloven dat
                                elke ondernemer een website verdient die écht werkt. Sinds 2019
                                helpen we bedrijven groeien met slimme digitale oplossingen.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Knop variant="secundair" grootte="groot">
                                Maak Kennis Met Ons Team
                            </Knop>
                            <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                                Ons Verhaal
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Knop>
                        </div>
                    </div>

                    {/* Visual/Stats */}
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <Kaart padding="groot" className="text-center space-y-2">
                                <div className="text-3xl font-bold text-primair-600">200+</div>
                                <div className="text-sm text-secundair-600">Projecten</div>
                            </Kaart>
                            <Kaart padding="groot" className="text-center space-y-2">
                                <div className="text-3xl font-bold text-primair-600">5 jaar</div>
                                <div className="text-sm text-secundair-600">Ervaring</div>
                            </Kaart>
                            <Kaart padding="groot" className="text-center space-y-2">
                                <div className="text-3xl font-bold text-primair-600">4.9/5</div>
                                <div className="text-sm text-secundair-600">Beoordeling</div>
                            </Kaart>
                            <Kaart padding="groot" className="text-center space-y-2">
                                <div className="text-3xl font-bold text-primair-600">24/7</div>
                                <div className="text-sm text-secundair-600">Support</div>
                            </Kaart>
                        </div>

                        {/* Decoratieve elementen */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white bg-opacity-10 rounded-full"></div>
                    </div>
                </div>
            </Sectie>

            {/* Missie, Waarden & Expertise */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Wat ons drijft
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Onze missie, waarden en expertise vormen de basis van alles wat we doen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {waardenEnMissie.map((item, index) => {
                        const IconComponent = item.icoon;
                        return (
                            <Kaart key={index} hoverEffect padding="groot" className="text-center h-full">
                                <div className="space-y-6">
                                    <div className={`w-16 h-16 ${item.kleurAccent} rounded-full flex items-center justify-center mx-auto`}>
                                        <IconComponent className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secundair-900">
                                        {item.titel}
                                    </h3>
                                    <p className="text-secundair-600 leading-relaxed">
                                        {item.beschrijving}
                                    </p>
                                </div>
                            </Kaart>
                        );
                    })}
                </div>
            </Sectie>

            {/* Ons Team */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Maak kennis met ons team
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        De mensen achter Website Makers die dagelijks werken aan jouw online succes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamLeden.map((teamLid) => (
                        <Kaart key={teamLid.id} hoverEffect padding="groot" className="text-center h-full">
                            <div className="space-y-6">
                                {/* Profielfoto */}
                                <div className="relative">
                                    <div className="w-32 h-32 bg-gradient-to-br from-primair-100 to-primair-200 rounded-full mx-auto flex items-center justify-center">
                                        <span className="text-3xl font-bold text-primair-600">
                                            {teamLid.naam.split(' ').map(n => n[0]).join('')}
                                        </span>
                                    </div>
                                </div>

                                {/* Informatie */}
                                <div className="space-y-3">
                                    <h3 className="text-xl font-bold text-secundair-900">
                                        {teamLid.naam}
                                    </h3>
                                    <p className="text-primair-600 font-medium">
                                        {teamLid.functie}
                                    </p>
                                    <p className="text-secundair-600 text-sm leading-relaxed">
                                        {teamLid.beschrijving}
                                    </p>
                                </div>

                                {/* Quote */}
                                <div className="bg-primair-50 rounded-lg p-4 relative">
                                    <Quote className="w-6 h-6 text-primair-200 absolute top-2 left-2" />
                                    <p className="text-sm text-secundair-700 italic pl-8">
                                        "{teamLid.quote}"
                                    </p>
                                </div>

                                {/* Expertise */}
                                <div className="space-y-3">
                                    <h4 className="font-semibold text-secundair-900 text-sm">Expertise:</h4>
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {teamLid.expertise.map((skill, index) => (
                                            <span key={index} className="bg-secundair-100 text-secundair-700 px-2 py-1 rounded text-xs">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="flex justify-center space-x-3 pt-4">
                                    {teamLid.linkedinUrl && (
                                        <a href={teamLid.linkedinUrl} className="w-10 h-10 bg-primair-100 rounded-full flex items-center justify-center hover:bg-primair-200 transition-colors">
                                            <Linkedin className="w-5 h-5 text-primair-600" />
                                        </a>
                                    )}
                                    {teamLid.emailUrl && (
                                        <a href={teamLid.emailUrl} className="w-10 h-10 bg-primair-100 rounded-full flex items-center justify-center hover:bg-primair-200 transition-colors">
                                            <Mail className="w-5 h-5 text-primair-600" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </Kaart>
                    ))}
                </div>
            </Sectie>

            {/* Ons Verhaal - Tijdlijn */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Ons verhaal
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Van kleine start-up tot erkend webdevelopment bureau - dit is onze reis.
                    </p>
                </div>

                <div className="relative">
                    {/* Tijdlijn lijn */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primair-200 h-full hidden lg:block"></div>

                    <div className="space-y-12">
                        {tijdlijn.map((item, index) => (
                            <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Content */}
                                <div className={`lg:w-5/12 ${index % 2 === 0 ? 'lg:text-right lg:pr-8' : 'lg:text-left lg:pl-8'}`}>
                                    <Kaart hoverEffect padding="groot">
                                        <div className="space-y-4">
                                            <div className="flex items-center space-x-3">
                                                <Calendar className="w-5 h-5 text-primair-600" />
                                                <span className="font-bold text-primair-600 text-lg">{item.jaar}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-secundair-900">
                                                {item.titel}
                                            </h3>
                                            <p className="text-secundair-600 leading-relaxed">
                                                {item.beschrijving}
                                            </p>
                                            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                                <Award className="w-4 h-4 mr-2" />
                                                {item.mijlpaal}
                                            </div>
                                        </div>
                                    </Kaart>
                                </div>

                                {/* Timeline dot */}
                                <div className="hidden lg:flex lg:w-2/12 justify-center">
                                    <div className="w-4 h-4 bg-primair-600 rounded-full border-4 border-white shadow-lg"></div>
                                </div>

                                {/* Spacer voor andere kant */}
                                <div className="hidden lg:block lg:w-5/12"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Sectie>

            {/* Cijfers & Feiten */}
            <Sectie achtergrondKleur="grijs" padding="groot">
                <div className="text-center space-y-4 mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                        Website Makers in cijfers
                    </h2>
                    <p className="text-xl text-secundair-600 max-w-3xl mx-auto">
                        Onze prestaties spreken voor zich - dit zijn de cijfers die tellen.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {bedrijfsCijfers.map((cijfer, index) => (
                        <Kaart key={index} hoverEffect padding="groot" className="text-center">
                            <div className="space-y-4">
                                <div className="text-4xl font-bold text-primair-600">
                                    {cijfer.nummer}
                                </div>
                                <h3 className="text-lg font-semibold text-secundair-900">
                                    {cijfer.label}
                                </h3>
                                <p className="text-secundair-600 text-sm">
                                    {cijfer.beschrijving}
                                </p>
                            </div>
                        </Kaart>
                    ))}
                </div>
            </Sectie>

            {/* Waarom Kiezen Voor Ons */}
            <Sectie achtergrondKleur="wit" padding="groot">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Tekst */}
                    <div className="space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-secundair-900">
                            Waarom kiezen ondernemers voor ons?
                        </h2>
                        <p className="text-lg text-secundair-600 leading-relaxed">
                            We zijn niet zomaar een webdevelopment bureau. We zijn jouw digitale partners
                            die begrijpen dat een website een investering is in de groei van je bedrijf.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Coffee className="w-4 h-4 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secundair-900">Persoonlijke Aanpak</h4>
                                    <p className="text-secundair-600 text-sm">We nemen de tijd om jouw bedrijf te begrijpen en bouwen websites die passen bij jouw doelen.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Code className="w-4 h-4 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secundair-900">Technische Expertise</h4>
                                    <p className="text-secundair-600 text-sm">We gebruiken de nieuwste technologieën en beste praktijken voor optimale prestaties en veiligheid.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <Lightbulb className="w-4 h-4 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-secundair-900">Resultaatgericht</h4>
                                    <p className="text-secundair-600 text-sm">We bouwen geen websites, we bouwen digitale groeimachines die écht bijdragen aan je bedrijfssucces.</p>
                                </div>
                            </div>
                        </div>

                        <Knop variant="primair" grootte="groot">
                            Plan Een Kennismaking
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Knop>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-primair-100 to-primair-200 rounded-2xl p-8">
                            <div className="space-y-6">
                                <div className="bg-white rounded-lg p-4 schaduw-zacht">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Users className="w-5 h-5 text-primair-600" />
                                        <span className="font-medium text-secundair-900">Team Samenwerking</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 bg-primair-200 rounded w-full"></div>
                                        <div className="h-2 bg-primair-200 rounded w-3/4"></div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg p-4 schaduw-zacht">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Target className="w-5 h-5 text-green-600" />
                                        <span className="font-medium text-secundair-900">Resultaten</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-green-600">+60%</div>
                                            <div className="text-xs text-secundair-500">Conversie</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-blue-600">+150%</div>
                                            <div className="text-xs text-secundair-500">Traffic</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-lg font-bold text-orange-600">+40%</div>
                                            <div className="text-xs text-secundair-500">Leads</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decoratieve elementen */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primair-300 rounded-full opacity-30"></div>
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secundair-200 rounded-full opacity-30"></div>
                    </div>
                </div>
            </Sectie>

            {/* CTA Sectie */}
            <Sectie achtergrondKleur="primair" padding="groot">
                <div className="text-center space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white">
                            Klaar om samen te werken?
                        </h2>
                        <p className="text-xl text-primair-100 max-w-3xl mx-auto">
                            We geloven in persoonlijk contact. Plan een vrijblijvend gesprek in
                            en ontdek hoe wij jouw bedrijf kunnen helpen groeien.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Knop variant="secundair" grootte="groot">
                            Plan Een Kennismaking
                        </Knop>
                        <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                            Bekijk Ons Portfolio
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Knop>
                    </div>

                    {/* Contact info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-primair-100">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-5 h-5" />
                            <span>info@websitemakers.nl</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <span>📞</span>
                            <span>+31 (0)6 12 34 56 78</span>
                        </div>
                    </div>
                </div>
            </Sectie>
        </>
    );
}