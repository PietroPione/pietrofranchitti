"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VeraBio({ bioVeraText, fotoBioVera }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.75], [0, 0.75, 0.75]);
    const backgroundColor = useTransform(scrollYProgress, [0.33, 0.42, 0.66], ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0.75)", "rgba(0, 0, 0, 0)"]);
    const imageOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.5], [0, 0.5, 1]);
    let formattedText = [];
    let currentLine = [];

    bioVeraText.forEach((item, index) => {
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
                <div className="w-1/2 p-8 flex items-center justify-center">
                    <div>{formattedText}</div>
                </div>

                <div className="w-1/2 p-8 flex items-center justify-center">
                    <motion.div
                        className="relative h-[75vh] w-auto aspect-[9/16] flex items-center justify-center"
                        style={{ opacity: imageOpacity }}
                    >
                        {fotoBioVera && (
                            <Image
                                src={fotoBioVera.url}
                                alt={fotoBioVera.alt || "Immagine Vera Bio"}
                                width={fotoBioVera.dimensions.width}
                                height={fotoBioVera.dimensions.height}
                                className="max-w-full max-h-full object-contain"
                            />
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}