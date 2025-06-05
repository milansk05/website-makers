// components/ui/Kaart.tsx
import React from 'react';

interface KaartProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    padding?: 'klein' | 'normaal' | 'groot';
}

export const Kaart: React.FC<KaartProps> = ({
    children,
    className = '',
    hoverEffect = false,
    padding = 'normaal',
}) => {
    const basisKlassen = 'bg-white rounded-xl border border-secundair-200 schaduw-zacht';

    const paddingKlassen = {
        klein: 'p-4',
        normaal: 'p-6',
        groot: 'p-8',
    };

    const hoverKlasse = hoverEffect ? 'hover:schaduw-hover hover:border-primair-200 transition-all duration-200' : '';

    const samengesteldKlassen = [
        basisKlassen,
        paddingKlassen[padding],
        hoverKlasse,
        className,
    ].join(' ');

    return (
        <div className={samengesteldKlassen}>
            {children}
        </div>
    );
};