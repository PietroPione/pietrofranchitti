// PortfolioHome.jsx
"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';
import BasicButton from '../BasicButton';

export default function PortfolioHome({ portfolioHome, id }) {
    const { primary } = portfolioHome;
    const [selectedProject, setSelectedProject] = useState(primary.progetti[0]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [logoSrc, setLogoSrc] = useState('');
    const [isDesktopView, setIsDesktopView] = useState(true); // Stato per la visualizzazione desktop/mobile

    useEffect(() => {
        if (selectedProject?.made_with) {
            setLogoSrc(`/logos/${selectedProject.made_with}Logo.png`);
        } else {
            setLogoSrc('');
        }
    }, [selectedProject?.made_with]);

    const handleProjectClick = (progetto, index) => {
        setSelectedProject(progetto);
        setSelectedIndex(index);
        setIsDesktopView(true); // Reset alla visualizzazione desktop al cambio progetto
    };

    const toggleImageView = () => {
        setIsDesktopView(!isDesktopView);
    };

    const currentImageUrl = isDesktopView ? selectedProject?.screen_desktop?.url : selectedProject?.screen_mobile?.url;
    const buttonText = isDesktopView ? "Mobile -->" : "Desktop -->";

    const fixedImageHeight = "100vh"; // Altezza fissa desiderata per il container dell'immagine (puoi modificarla)

    return (
        <div id={id} className=" container space-y-20 -scroll-mt-10 ">
            <div className='space-y-4'>

                <h2 className="text-60 font-bold md:leading-0 leading-normal py-8 bg-white z-10">{primary.titolo_portfolio}</h2>
                <p >{primary.copy_portfolio}</p>
            </div>
            <div className="flex items-center h-[75vh]">
                {/* Colonna sinistra (Listato progetti) */}
                <div className="w-1/2 py-4 flex flex-col h-full">
                    <div className="flex-grow w-full flex items-center justify-center"> {/* Contenitore per centrare la ul */}
                        <ul className="space-y-4 text-center">
                            {primary.progetti.map((progetto, index) => (
                                <li key={index} onClick={() => handleProjectClick(progetto, index)} className="cursor-pointer">
                                    {/* Qui puoi aggiungere i dettagli di ogni progetto */}
                                    <h3
                                        className={`text-32 font-semibold ${selectedIndex === index ? 'border pl-2' : ''}`}
                                        style={{ backgroundColor: selectedIndex === index ? `#${selectedProject?.bg_color}` : 'transparent' }}
                                    >
                                        {progetto.nome}
                                    </h3>
                                    {/* Altri dettagli del progetto */}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='space-y-4 text-22 flex flex-col items-center'>
                        <div>{primary.copy_vedere_altro}</div>
                        <BasicButton testo={primary?.testo_tasto_altro} link={primary?.link_altro.url} scaleHover />
                    </div>
                </div>

                {/* Colonna destra (Anteprima portfolio) */}
                <div className="w-1/2 p-4 border h-full py-10 px-20 flex flex-col items-center justify-center space-y-10" style={{ backgroundColor: `#${selectedProject?.bg_color}` }}>
                    <button onClick={toggleImageView} className="px-4 py-2 bg-white hover:bg-black hover:text-white border">
                        {buttonText}
                    </button>
                    <div
                        className={` w-full ${isDesktopView ? 'aspect-video' : `aspect-[9_16]`}`}
                        style={{
                            height: `${fixedImageHeight}`, // Imposta l'altezza fissa
                            backgroundImage: `url(${currentImageUrl})`,
                            backgroundSize: 'contain', // Usa 'contain' per adattare l'immagine all'altezza fissa
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    {logoSrc && (
                        <div className="mt-4">
                            <div className='text-center'>Made with:</div>
                            <Image
                                src={logoSrc}
                                alt={`Logo ${selectedProject?.made_with}`}
                                width={150}
                                height={50}
                                className="w-auto h-20"
                                onError={(e) => {
                                    console.error("Errore nel caricamento dell'immagine:", e.target.src);
                                    setLogoSrc('');
                                }}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}