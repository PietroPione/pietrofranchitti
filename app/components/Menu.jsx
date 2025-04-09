"use client";

import React from "react";
import Link from 'next/link';

export default function Menu({ menu }) {
    if (!menu?.primary?.link) {
        return <div>Caricamento menu...</div>; // O un altro fallback
    }

    return (
        <nav>
            <ul className="flex space-x-6">
                {menu.primary.link.map((item, index) => (
                    <li key={index}>
                        <Link href={item.link.url} className="hover:underline">
                            {item.testo_link}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}