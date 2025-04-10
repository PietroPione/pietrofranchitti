'use client';

import { useState } from 'react';
import Image from 'next/image';
import BasicButton from './BasicButton';

export default function PortfolioClient({ title, description, pages }) {
    const [filtro, setFiltro] = useState('tutti');

    const pagesFiltrate = pages.filter((page) => {
        const informazioniSlice = page.data.slices.find(
            (slice) => slice.slice_type === 'informazioni'
        );
        const madeWith = informazioniSlice?.primary?.made_with;

        if (filtro === 'tutti') return true;
        return madeWith === filtro;
    });

    const filtriDisponibili = ['tutti', 'Wordpress', 'Elementor', 'React', 'View', 'Shopify'];

    return (
        <div className='container py-20 space-y-12'>
            <div className='space-y-2'>
                <h1 className="text-60 font-bold">{title}</h1>
                <div>{description}</div>
            </div>

            {/* FILTRI */}
            <div className="flex flex-wrap gap-4">
                {filtriDisponibili.map((tipo) => (
                    <button
                        key={tipo}
                        onClick={() => setFiltro(tipo)}
                        className={`
                        px-4 py-2 border font-medium transition
                        shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px]
                        ${filtro === tipo
                                ? 'bg-black text-white border-black'
                                : 'hover:scale-110 duration-200'}
                    `}
                    >
                        {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </button>


                ))}
            </div>

            {/* GRID PROGETTI */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pagesFiltrate.map((page) => {
                    const informazioniSlice = page.data.slices.find(
                        (slice) => slice.slice_type === 'informazioni'
                    );
                    const gallerySlice = page.data.slices.find(
                        (slice) => slice.slice_type === 'gallery'
                    );

                    const titoloProgetto = informazioniSlice?.primary?.titolo;
                    const primaImmagine = gallerySlice?.primary?.screen_desktop?.[0]?.screen?.url;

                    return (
                        <div key={page.id} className="border shadow-md p-6 space-y-6">
                            <h2 className="text-36 leading-9 font-semibold">{titoloProgetto}</h2>


                            {primaImmagine && (
                                <Image
                                    src={primaImmagine}
                                    alt="Anteprima progetto"
                                    width={500}
                                    height={300}
                                    className="w-full h-auto object-cover"
                                />
                            )}

                            <BasicButton testo="Vediamolo!" link={`/portfolio/${page.uid}`} scaleHover />
                        </div>
                    );
                })}
            </div>

            {pagesFiltrate.length === 0 && (
                <p className="text-gray-500 text-center">Nessun progetto trovato per questo filtro.</p>
            )}
        </div>
    );
}
