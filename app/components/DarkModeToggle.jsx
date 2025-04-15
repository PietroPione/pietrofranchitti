// components/DarkModeToggle.jsx
'use client';

import { useEffect, useState } from 'react';

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Funzione per applicare il tema in base al localStorage o alle preferenze OS
        const applyTheme = () => {
            const storedTheme = localStorage.getItem('theme');
            const prefersDarkFromOS = window.matchMedia('(prefers-color-scheme: dark)').matches;

            if (storedTheme === 'dark' || (!storedTheme && prefersDarkFromOS)) {
                document.documentElement.classList.add('dark');
                setIsDarkMode(true);
            } else {
                document.documentElement.classList.remove('dark');
                setIsDarkMode(false);
            }
        };

        applyTheme(); // Applica il tema al caricamento del componente

        // Listener per cambiamenti nelle preferenze del sistema operativo
        const handleOSPreferenceChange = (event) => {
            if (!localStorage.getItem('theme')) {
                document.documentElement.classList.toggle('dark', event.matches);
                setIsDarkMode(event.matches);
            }
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleOSPreferenceChange);

        // Cleanup del listener
        return () => {
            mediaQuery.removeEventListener('change', handleOSPreferenceChange);
        };
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);

        if (newDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? 'Attiva Light Mode' : 'Attiva Dark Mode'}
        </button>
    );
};

export default DarkModeToggle;