"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FalsaBio({ bio, fotofalsabuona, fotofalsacattiva }) {
    const { scrollYProgress } = useScroll();
    const opacity = useTransform(scrollYProgress, [0.33, 0.5, 0.75], [0, 0.75, 0.75]);
    const backgroundColor = useTransform(scrollYProgress, [0.33, 0.42, 0.66], ["transparent", "rgba(0, 0, 0, 0.75)", "rgba(0, 0, 0, 1)"]);

    return (
        <div className="h-[200vh]">
            <div className="flex sticky top-0 h-screen">
                {/* Parte sinistra: Bio */}
                <div className="w-1/2 p-8 flex items-center justify-center">
                    <ul>
                        {bio && bio.map((item, index) => (
                            <li key={index} className="text-xl mb-4">
                                {item.frase} <motion.span style={{ backgroundColor }} className="font-bold">{item.accento}</motion.span> {item.punto_dopo ? "." : ""}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Parte destra: Immagine */}
                <div className="w-1/2 p-8 flex items-center justify-center relative">
                    {fotofalsabuona && fotofalsacattiva && (
                        <>
                            <Image
                                src={fotofalsabuona.url}
                                alt={fotofalsabuona.alt || "Immagine Falsa Bio"}
                                width={fotofalsabuona.dimensions.width}
                                height={fotofalsabuona.dimensions.height}
                                className="max-w-full max-h-full object-contain absolute top-0 left-0"
                            />
                            <motion.div style={{ opacity }}>
                                <Image
                                    src={fotofalsacattiva.url}
                                    alt={fotofalsacattiva.alt || "Immagine Falsa Bio Cattiva"}
                                    width={fotofalsacattiva.dimensions.width}
                                    height={fotofalsacattiva.dimensions.height}
                                    className="max-w-full max-h-full object-contain absolute top-0 left-0"
                                    style={{ opacity }}
                                />
                            </motion.div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}