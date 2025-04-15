"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export default function BarraHonest({ testoHonest }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const x1 = useTransform(scrollYProgress, [0.25, 0.75], ["100vw", "-100vw"]);
    const x2 = useTransform(scrollYProgress, [0.35, 0.85], ["105vw", "-95vw"]);
    const x3 = useTransform(scrollYProgress, [0.45, 0.95], ["110vw", "-90vw"]);

    return (
        <div ref={ref} className="h-screen bg-black dark:bg-white flex flex-col items-center justify-center overflow-hidden relative">
            <div className="sticky top-0">
                <motion.div
                    style={{ x: x1 }}
                    className="text-75 font-bold text-white dark:text-black whitespace-nowrap"
                >
                    {testoHonest}
                </motion.div>
                <motion.div
                    style={{ x: x2 }}
                    className="text-75 font-bold text-white dark:text-black whitespace-nowrap"
                >
                    {testoHonest}
                </motion.div>
                <motion.div
                    style={{ x: x3 }}
                    className="text-75 font-bold text-white dark:text-black whitespace-nowrap"
                >
                    {testoHonest}
                </motion.div>
            </div>
        </div>
    );
}
