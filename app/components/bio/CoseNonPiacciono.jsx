// CoseNonPiacciono.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import "../../../app/globals.css";

export default function CoseNonPiacciono({ coseNonPiacciono }) {
    if (!coseNonPiacciono || !coseNonPiacciono.primary || !coseNonPiacciono.primary.cosa) {
        return null;
    }

    const { titolo_cose_non_piacciono, cosa } = coseNonPiacciono.primary;
    const [hoveredImage, setHoveredImage] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);

    const handleMouseEnter = (item, event) => {
        setHoveredImage(item.gif_cosa);
        updateMousePosition(event);
    };

    const handleMouseLeave = () => {
        setHoveredImage(null);
    };

    const handleMouseMove = (event) => {
        updateMousePosition(event);
    };

    const updateMousePosition = (event) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            setMousePosition({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        }
    };

    return (
        <div ref={containerRef} className="container h-[50vh] group-hover flex-col space-y-10 flex justify-center relative">
            {titolo_cose_non_piacciono && <h2 className="text-20 md:text-32 lg:text-40">{titolo_cose_non_piacciono}</h2>}

            <div className="flex flex-col space-y-4">

                {cosa &&
                    cosa.map((item, index) => (
                        <p
                            className="text-26 md:text-40 lg:text-46 font-black group-hover hover:text-white hover:bg-black relative"
                            key={index}
                            style={{ marginLeft: `${index * 5}rem` }}
                            onMouseEnter={(event) => handleMouseEnter(item, event)}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={hoveredImage ? handleMouseMove : undefined}
                        >
                            - {item.nome_cosa}
                        </p>
                    ))}
            </div>

            <AnimatePresence>
                {hoveredImage && (
                    <motion.div
                        className="absolute z-10"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.2 }}
                        style={{
                            left: mousePosition.x + 5,
                            top: mousePosition.y - 230, // Modifica qui
                        }}
                    >
                        <Image
                            src={hoveredImage.url}
                            alt="Immagine cosa piaciuta"
                            width={400}
                            height={300}
                            unoptimized
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}