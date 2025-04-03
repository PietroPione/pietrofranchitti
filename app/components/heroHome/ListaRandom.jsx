"use client";

import React, { useState, useEffect, useRef } from "react";

export default function ListaRandom({ testoLista, elencoLista }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [textBgColor, setTextBgColor] = useState('#FFFFFF');
    const positions = useRef([]);

    useEffect(() => {
        const generatePositions = () => {
            return elencoLista.map(() => {
                const radiusMin = 35;
                const radiusMax = 40;
                const angle = Math.random() * 2 * Math.PI;
                const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
                const top = `${50 + radius * Math.sin(angle)}%`;
                const left = `${50 + radius * Math.cos(angle)}%`;
                return { top, left };
            });
        };

        positions.current = generatePositions();

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                let nextIndex = prevIndex + 1;
                if (nextIndex === elencoLista.length) {
                    nextIndex = 0; // Reimposta a 0 quando raggiunge l'ultimo elemento
                }
                console.log(nextIndex)
                return nextIndex;
            });
            setTextBgColor(getRandomLightColor());
        }, 1200);

        return () => clearInterval(interval);
    }, [elencoLista.length]);

    function getRandomLightColor() {
        const letters = '89ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 8)];
        }
        return color;
    }

    return (
        <div className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
            <h3 className="text-36 text-black px-6 py-4" style={{ backgroundColor: textBgColor }}>{testoLista}</h3>
            <div className="w-full h-screen absolute aspect-[16:9] flex items-center justify-center">
                {elencoLista.map((item, i) => (
                    <div
                        key={i}
                        style={{
                            position: "absolute",
                            top: positions.current[i]?.top,
                            left: positions.current[i]?.left,
                            opacity: i === currentIndex ? 1 : 0,
                            transition: "opacity 0.8s ease-in-out",
                            backgroundColor: i === currentIndex ? textBgColor : 'transparent',
                        }}
                    >
                        <p className="text-60 font-bold text-center px-6 py-4">{item.bullet_point}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}