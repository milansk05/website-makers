// app/page.tsx - Homepage
import React from 'react';
import { HeroSectie } from '../components/homepage/HeroSectie';
import { DienstenOverzicht } from '../components/homepage/DienstenOverzicht';
import { VoordelenSectie } from '../components/homepage/VoordelenSectie';
import { GetuigenissenSectie } from '../components/homepage/GetuigenissenSectie';
import { Sectie } from '../components/ui/Sectie';
import { Knop } from '../components/ui/Knop';
import { ArrowRight, Phone } from 'lucide-react';

export default function Homepage() {
  return (
    <>
      {/* Hero Sectie */}
      <HeroSectie />

      {/* Diensten Overzicht */}
      <DienstenOverzicht />

      {/* Voordelen Sectie */}
      <VoordelenSectie />

      {/* Getuigenissen */}
      <GetuigenissenSectie />

      {/* Call-to-Action Sectie */}
      <section className="bg-primair-600 py-24">
        <div className="container-aangepast">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Klaar om te groeien met een nieuwe website?
              </h2>
              <p className="text-xl text-primair-100 max-w-3xl mx-auto">
                Plan een gratis strategiegesprek in en ontdek hoe wij jouw bedrijf
                online kunnen laten groeien. Geen verplichtingen, wel concrete adviezen.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Knop variant="secundair" grootte="groot">
                <Phone className="w-5 h-5 mr-2" />
                Gratis Strategiegesprek
              </Knop>
              <Knop variant="outline" grootte="groot" className="border-white text-white hover:bg-white hover:text-primair-600">
                Bekijk Portfolio
                <ArrowRight className="w-5 h-5 ml-2" />
              </Knop>
            </div>

            {/* Vertrouwensindicatoren */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 pt-8 text-primair-100">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Gratis gesprek van 30 minuten</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Concrete adviezen en strategie</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Geen verplichtingen</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}