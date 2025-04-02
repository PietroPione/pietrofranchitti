"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import PanziDori from "./PanziDori";

export default function VeraBio({ bioVeraText, fotoBioVera, testoGatti, bioVera }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.75], [0, 0.75, 0.75]);
    const backgroundColor = useTransform(scrollYProgress, [0.2, 0.3, 0.4], ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0.75)", "rgba(0, 0, 0, 0)"]);
    const imageOpacity = useTransform(scrollYProgress, [0.3, 0.4, 0.7], [0, 1, 0]);

    const [showPanziDori, setShowPanziDori] = useState(false);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((value) => {
            setShowPanziDori(value > 0.7);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    let formattedText = [];
    let currentLine = [];

    bioVeraText.forEach((item, index) => {
        currentLine.push(
            <React.Fragment key={`line-${index}`}>
                {item.frase}{" "}
                <motion.span style={{ backgroundColor }} className="font-bold">
                    {item.accento}
                </motion.span>
                {item.punto_dopo ? "." : " "}
            </React.Fragment>
        );

        if (item.punto_dopo) {
            formattedText.push(
                <p key={`paragraph-${index}`} className="text-22 mb-4">
                    {currentLine}
                </p>
            );
            currentLine = [];
        }
    });

    return (
        <div ref={ref} className="h-[400vh] container">
            <div className="flex sticky top-0 h-screen">
                <div className="w-1/2 p-8 flex items-center justify-center">
                    <div>{formattedText}</div>
                </div>

                <div className="w-1/2 p-8 flex items-center justify-center relative">
                    <motion.div
                        className="absolute inset-0 w-full"
                        style={{ opacity: showPanziDori ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <PanziDori testoGatti={testoGatti} bioVera={bioVera} />
                    </motion.div>
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
