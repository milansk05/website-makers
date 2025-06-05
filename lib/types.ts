// lib/types.ts - Type definities voor Website Makers

export interface Dienst {
    id: string;
    titel: string;
    beschrijving: string;
    functies: string[];
    prijsVanaf: number;
    icoon: string;
}

export interface PortfolioProject {
    id: string;
    titel: string;
    beschrijving: string;
    afbeeldingUrl: string;
    websiteUrl?: string;
    technologieen: string[];
    categorie: 'website' | 'webshop' | 'applicatie';
}

export interface Getuigenis {
    id: string;
    naam: string;
    bedrijf: string;
    tekst: string;
    sterren: number;
    afbeeldingUrl?: string;
}

export interface TeamLid {
    id: string;
    naam: string;
    functie: string;
    beschrijving: string;
    afbeeldingUrl: string;
    linkedinUrl?: string;
}

export interface ContactFormulierData {
    naam: string;
    email: string;
    telefoon?: string;
    bedrijf?: string;
    dienst: string;
    bericht: string;
}