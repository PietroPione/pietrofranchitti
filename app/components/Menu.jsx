"use client";

import React, { useState, useEffect, useRef, forwardRef } from "react";
import Link from 'next/link';
import { X } from 'lucide-react';

const Menu = forwardRef(({ menu }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [menuHeight, setMenuHeight] = useState(0);
    const navRef = useRef(null);

    // Mostra la "X" dopo uno scroll minimo
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowToggle(true);
            } else {
                setShowToggle(false);
                setIsOpen(false); // chiude il menu se torni su
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
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    if (!menu?.primary?.link) return null;

    return (
        <>
            {/* Bottone "X" visibile solo dopo scroll */}
            {showToggle && (
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="fixed top-4 right-4 z-50 text-black bg-white rounded-full shadow-md p-2 hover:bg-gray-100 transition"
                    aria-label={isOpen ? "Chiudi menu" : "Apri menu"}
                >
                    <X className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                </button>
            )}

            {/* Menu visibile solo se aperto */}
            {isOpen && (
                <nav
                    ref={navRef}
                    className={`fixed top-0 left-0 w-full bg-white z-40 shadow-md transition-all duration-300 ${isSticky ? 'shadow-md' : ''}`}
                >
                    <div className="container py-6">
                        <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                            {menu.primary.link.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        href={item.link.url}
                                        className="hover:underline text-lg"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.testo_link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}

            {/* Div invisibile per mantenere lo spazio quando il menu diventa sticky */}
            {isSticky && (
                <div style={{ height: `${menuHeight}px` }} aria-hidden="true" />
            )}
        </>
    );
});

Menu.displayName = 'Menu';
export default Menu;
