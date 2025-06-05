// components/ui/Knop.tsx
import React from 'react';

interface KnopProps {
    children: React.ReactNode;
    variant?: 'primair' | 'secundair' | 'outline';
    grootte?: 'klein' | 'normaal' | 'groot';
    volleBreedte?: boolean;
    uitgeschakeld?: boolean;
    klikHandler?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export const Knop: React.FC<KnopProps> = ({
    children,
    variant = 'primair',
    grootte = 'normaal',
    volleBreedte = false,
    uitgeschakeld = false,
    klikHandler,
    type = 'button',
    className = '',
}) => {
    const basisKlassen = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantKlassen = {
        primair: 'bg-primair-600 text-white hover:bg-primair-700 focus:ring-primair-500 schaduw-zacht hover:schaduw-hover',
        secundair: 'bg-secundair-100 text-secundair-900 hover:bg-secundair-200 focus:ring-secundair-500',
        outline: 'border-2 border-primair-600 text-primair-600 hover:bg-primair-600 hover:text-white focus:ring-primair-500',
    };

    const grootteKlassen = {
        klein: 'px-3 py-1.5 text-sm',
        normaal: 'px-4 py-2 text-base',
        groot: 'px-6 py-3 text-lg',
    };

    const breedteKlasse = volleBreedte ? 'w-full' : '';
    const uitgeschakeldKlasse = uitgeschakeld ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

    const samengesteldKlassen = [
        basisKlassen,
        variantKlassen[variant],
        grootteKlassen[grootte],
        breedteKlasse,
        uitgeschakeldKlasse,
        className,
    ].join(' ');

    return (
        <button
            type={type}
            className={samengesteldKlassen}
            onClick={klikHandler}
            disabled={uitgeschakeld}
        >
            {children}
        </button>
    );
};