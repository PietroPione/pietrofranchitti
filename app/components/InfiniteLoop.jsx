// InfiniteLoop.jsx
import React, { useState, useEffect } from 'react';

export default function InfiniteLoop({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 1200);

        return () => clearInterval(interval);
    }, [items]);

    return items[currentIndex];
}