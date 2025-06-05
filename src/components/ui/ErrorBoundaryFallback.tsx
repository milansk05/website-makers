// src/components/ui/ErrorBoundaryFallback.tsx
'use client';

import React from 'react';

export default function ErrorBoundaryFallback() {
  return (
    <div className="fixed inset-0 bg-secundair-50 flex items-center justify-center z-50">
      <div className="text-center p-8">
        <h1 className="text-2xl font-bold text-secundair-900 mb-4">
          Er is iets misgegaan
        </h1>
        <p className="text-secundair-600 mb-6">
          We excuseren ons voor het ongemak. Probeer de pagina te verversen.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-primair-600 text-white px-6 py-3 rounded-lg hover:bg-primair-700 transition-colors"
        >
          Pagina Verversen
        </button>
      </div>
    </div>
  );
}
