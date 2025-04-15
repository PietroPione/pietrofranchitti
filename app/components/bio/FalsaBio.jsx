"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "@/app/components/ThemeProvider"; // Importa useTheme

export default function FalsaBio({ bio, fotofalsabuona, fotofalsacattiva }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const { isDarkMode } = useTheme(); // Ottieni lo stato della modalità scura

    const opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.75], [0, 0.75, 0.75]);

    // Definisci l'intervallo di colori di sfondo in base alla modalità scura
    const lightModeBackgroundColor = ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.75)", "rgba(0, 0, 0, 1)"];
    const darkModeBackgroundColor = ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.75)", "rgba(255, 255, 255, 1)"];

    // Usa un array di colori condizionale in base alla modalità scura
    const backgroundColor = useTransform(
        scrollYProgress,
        [0.33, 0.42, 0.66],
        isDarkMode ? darkModeBackgroundColor : lightModeBackgroundColor
    );

    let formattedText = [];
    let currentLine = [];

    bio.forEach((item, index) => {
        currentLine.push(
            <React.Fragment key={`line-${index}`}>
                {item.frase}{" "}
                <motion.span style={{ backgroundColor }} className="font-bold">
                    {item.accento}
                </motion.span>
                {item.punto_dopo ? "." : ""}
            </React.Fragment>
        );

        if (item.punto_dopo) {
            formattedText.push(
                <p key={`paragraph-${index}`} className="text-14 md:text-22 mb-4">
                    {currentLine}
                </p>
            );
            currentLine = [];
        }
    });

    return (
        <div ref={ref} className="h-screen md:h-[200vh] container">
            <div className="flex flex-col md:flex-row sticky top-0">
                {/* Parte sinistra: Bio */}
                <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
                    <div>{formattedText}</div>
                </div>

                {/* Parte destra: Immagine */}
                <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
                    <div className="relative h-[50vh] md:h-[75vh] w-auto aspect-[9/16] flex items-center justify-center">
                        {fotofalsabuona && fotofalsacattiva && (
                            <>
                                <Image
                                    src={fotofalsabuona.url}
                                    alt={fotofalsabuona.alt || "Immagine Falsa Bio"}
                                    width={fotofalsabuona.dimensions.width}
                                    height={fotofalsabuona.dimensions.height}
                                    className="max-w-full max-h-full object-contain absolute top-0 left-0"
                                />

                                <motion.div style={{ opacity }} className="absolute top-0 left-0 w-full h-full">
                                    <Image
                                        src={fotofalsacattiva.url}
                                        alt={fotofalsacattiva.alt || "Immagine Falsa Bio Cattiva"}
                                        width={fotofalsacattiva.dimensions.width}
                                        height={fotofalsacattiva.dimensions.height}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </motion.div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}