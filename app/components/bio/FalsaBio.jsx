"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FalsaBio({ bio, fotofalsabuona, fotofalsacattiva }) {
    const ref = useRef(null); // Riferimento alla sezione
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.75], [0, 0.75, 0.75]);
    const backgroundColor = useTransform(scrollYProgress, [0.33, 0.42, 0.66], ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.75)", "rgba(0, 0, 0, 1)"]);

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
                <p key={`paragraph-${index}`} className="text-2xl mb-4">
                    {currentLine}
                </p>
            );
            currentLine = [];
        }
    });

    return (
        <div ref={ref} className="h-[250vh] container">
            <div className="flex sticky top-0 h-screen">
                {/* Parte sinistra: Bio */}
                <div className="w-1/2 p-8 flex items-center justify-center">
                    <div>{formattedText}</div>
                </div>

                {/* Parte destra: Immagine */}
                <div className="w-1/2 p-8 flex items-center justify-center">
                    <div className="relative h-[75vh] w-auto aspect-[9/16] flex items-center justify-center">
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
