// components/ui/Sectie.tsx
import React from 'react';

interface SectieProps {
    children: React.ReactNode;
    achtergrondKleur?: 'wit' | 'grijs' | 'primair';
    padding?: 'klein' | 'normaal' | 'groot';
    className?: string;
}

export const Sectie: React.FC<SectieProps> = ({
    children,
    achtergrondKleur = 'wit',
    padding = 'normaal',
    className = '',
}) => {
    const achtergrondKlassen = {
        wit: 'bg-white',
        grijs: 'bg-secundair-50',
        primair: 'bg-primair-600',
    };

    const paddingKlassen = {
        klein: 'py-8',
        normaal: 'py-16',
        groot: 'py-24',
    };

    const samengesteldKlassen = [
        achtergrondKlassen[achtergrondKleur],
        paddingKlassen[padding],
        className,
    ].join(' ');

    return (
        <section className={samengesteldKlassen}>
            <div className="container-aangepast">
                {children}
            </div>
        </section>
    );
};