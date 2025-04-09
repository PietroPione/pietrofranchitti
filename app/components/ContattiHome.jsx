"use client";

import React, { useState, useRef, useEffect } from "react";

export default function ContattiHome({ contattiHome }) {
    const { primary } = contattiHome;
    const [showContent, setShowContent] = useState(false);
    const [clipPathActive, setClipPathActive] = useState(true);
    const revealRef = useRef(null);
    const buttonRef = useRef(null);

    const handleClick = () => {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const endRadius = 0;

        if (revealRef.current) {
            revealRef.current.style.clipPath = `circle(150% at ${centerX}px ${centerY}px)`;
            revealRef.current.style.transition = `clip-path 1.2s ease-in-out`;

            void revealRef.current.offsetWidth;

            revealRef.current.style.clipPath = `circle(${endRadius}px at ${centerX}px ${centerY}px)`;

            setTimeout(() => {
                setClipPathActive(false);
                setShowContent(true);
            }, 1200);
        } else {
            setShowContent(true);
        }
    };


    return (
        <div className="min-h-screen relative overflow-hidden">
            {clipPathActive && (
                <div
                    ref={revealRef}
                    className="absolute top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center z-20"
                    style={{ clipPath: "circle(150% at 50% 50%)" }}
                >
                    <h2 className="text-white text-center text-6xl font-bold mb-8">{primary.titolo_contatti}</h2>
                    <button
                        ref={buttonRef}
                        onClick={handleClick}
                        className="relative inline-block text-14 tracking-widest uppercase text-white cursor-pointer border-3 border-white py-2 px-4 shadow-[1px_1px_0px_0px,2px_2px_0px_0px,3px_3px_0px_0px,4px_4px_0px_0px,5px_5px_0px_0px] active:shadow-[0px_0px_0px_0px] active:top-[5px] active:left-[5px] select-none touch-action-manipulation md:px-6 hover:scale-110 transition-transform duration-200"
                    >
                        {primary.testo_tasto_scopri}
                    </button>
                </div>
            )}

            <div className={`relative z-10 ${showContent ? 'opacity-100 transition-opacity duration-500' : 'opacity-0'}`}>
                <div className="container py-16 flex flex-col gap-y-20 h-full">
                    <div className="max-w-[50vw] space-y-4">

                        <h2 className="text-60 font-bold mb-8">{primary.titolo_contatti}</h2>
                        <p className="text-16 mb-8">{primary.copy_contatti}</p>
                    </div>

                    <div className="max-w-[50vw] flex flex-col gap-y-10">

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">{primary.titolo_mail}</h3>
                            <p className="text-lg">
                                <a href={`mailto:${primary.mail}`} className="hover:underline">
                                    {primary.mail}
                                </a>
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">{primary.titolo_luogo}</h3>
                            <p className="text-lg">{primary.testo_luogo}</p>
                        </div>
                    </div>

                    {primary.quote_contatti && primary.autore_quote && (
                        <blockquote className="italic text-gray-600 mb-8">
                            <p className="text-32">{primary.quote_contatti}</p>
                            <footer className="mt-2">- {primary.autore_quote}</footer>
                        </blockquote>
                    )}


                </div>
            </div>
        </div>
    );
}
