"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import Link from 'next/link';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Menu = forwardRef(({ menu }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const navRef = useRef(null);
    const nodeRef = useRef(null); // Ref per il container del menu
    const toggleContainerRef = useRef(null); // Ref per il container del bottone toggle

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Gestisce sia la visualizzazione del toggle che lo sticky menu
    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setShowToggle(true);
            } else {
                // Ritarda la disattivazione per evitare "flickering" su mobile
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    setShowToggle(false);
                    setIsOpen(false); // chiude il menu se torni su
                }, 100); // Regola il ritardo (in millisecondi) se necessario
            }

            // Sticky menu
            const navElement = navRef.current;
            if (navElement) {
                const offsetTop = navElement.offsetTop;
                if (window.scrollY >= offsetTop && !isSticky) {
                    setIsSticky(true);
                    setMenuHeight(navElement.offsetHeight);
                } else if (window.scrollY < offsetTop && isSticky) {
                    setIsSticky(false);
                    setMenuHeight(0);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isSticky]);

    // Chiude il menu cliccando fuori
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (nodeRef.current && !nodeRef.current.contains(event.target) && isOpen) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [isOpen]);

    if (!menu?.primary?.link) return null;

    const menuVariants = {
        open: { x: 0 },
        closed: { x: "100%" }, // Il menu entra da destra
    };

    const linkVariants = {
        initial: { x: 20, opacity: 0 }, // Partono da destra
        animate: { x: 0, opacity: 1 },
        exit: { x: 20, opacity: 0 }, // Escono a destra
    };

    return (
        <div ref={nodeRef} className="relative">
            {/* Contenitore per il bottone apri/chiudi */}
            <div ref={toggleContainerRef} className="fixed top-4 right-8 z-50">
                {showToggle && (
                    <button
                        onClick={toggleMenu}
                        className="p-2 transition flex items-center justify-center"
                        aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
                    >
                        <div className="w-8 h-8 flex items-center justify-center ">
                            {isOpen ? (
                                <X className="w-6 h-6 transition duration-200 hover:scale-110 hover:rotate-45" />
                            ) : (
                                <div className="border px-2 py-1 text-sm transition duration-200 hover:scale-110">menu</div>
                            )}
                        </div>
                    </button>
                )}
            </div>

            {/* Menu visibile solo se aperto */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        ref={navRef}
                        className="fixed top-0 right-8 md:right-4 w-full bg-white z-40 transition-all duration-300"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    >
                        <div className="container py-6 flex justify-end">
                            <ul className="flex flex-col md:flex-row items-end md:space-x-4">
                                {menu.primary.link.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        variants={linkVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ delay: index * 0.1, duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <Link
                                            href={item.link.url}
                                            className="hover:underline text-lg"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.testo_link}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Div invisibile per mantenere lo spazio quando il menu diventa sticky */}
            {isSticky && (
                <div style={{ height: `${menuHeight}px` }} aria-hidden="true" />
            )}
        </div>
    );
});

Menu.displayName = 'Menu';
export default Menu;