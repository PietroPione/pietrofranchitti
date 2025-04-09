// CosePiacciono.jsx
"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


export default function CosePiacciono({ cosePiacciono }) {
    if (!cosePiacciono || !cosePiacciono.primary || !cosePiacciono.primary.cosa) {
        return null;
    }

    const { titolo_cose_piacciono, cosa } = cosePiacciono.primary;
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
        <div className="relative">
            <div
                ref={containerRef}
                className="container min-h-[60vh] flex-col flex space-y-10 justify-center relative"
            >
                {titolo_cose_piacciono && <h2 className="text-20 md:text-32 lg:text-40">{titolo_cose_piacciono}</h2>}

                <div className="flex flex-col space-y-4">
                    {cosa.map((item, index) => (
                        <p
                            key={index}
                            onMouseEnter={(e) => handleMouseEnter(item, e)}
                            onMouseLeave={handleMouseLeave}
                            onMouseMove={hoveredImage ? handleMouseMove : undefined}
                            className="text-26 md:text-40 lg:text-46 font-black hover:text-white hover:bg-black relative"
                            style={{ marginLeft: `${index * 5}rem` }}
                        >
                            - {item.nome_cosa}
                        </p>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {hoveredImage && (
                    <motion.div
                        className="absolute z-10 pointer-events-none"
                        initial={{ opacity: 0, scale: 0.8, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: -20 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        style={{
                            left: mousePosition.x + 10,
                            top: mousePosition.y - 250,
                        }}
                    >
                        <Image
                            src={hoveredImage.url}
                            alt="Immagine cosa non piaciuta"
                            width={400}
                            height={300}
                            style={{ pointerEvents: "none" }}
                            unoptimized
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

}