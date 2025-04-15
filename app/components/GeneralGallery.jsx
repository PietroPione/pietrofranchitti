'use client'
import { AnimatePresence, motion, useDragControls, useMotionValue, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function GeneralGallery({ images }) {
    const [direction, setDirection] = useState('right')
    const [currentIndex, setCurrentIndex] = useState(0)
    const dragControls = useDragControls()
    const x = useMotionValue(0)
    const pageWidth = typeof window !== 'undefined' ? window.innerWidth : 1 // Fallback per SSR
    const swipeThreshold = 0.3 // Percentuale di trascinamento per cambiare slide

    const currentImage = images[currentIndex]

    const variants = {
        enter: (direction) => ({
            x: direction === 'left' ? '-100%' : '100%',
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction === 'right' ? '100%' : '-100%',
            opacity: 0,
        }),
    };

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setDirection('right')
    }

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        setDirection('left')
    }

    const handleDragEnd = (event, info) => {
        const draggedDistance = info.offset.x
        const swipeVelocity = info.velocity.x

        if (Math.abs(draggedDistance) > pageWidth * swipeThreshold || Math.abs(swipeVelocity) > 500) {
            if (draggedDistance > 0 || swipeVelocity > 0) {
                prev()
            } else {
                next()
            }
        }
        // Resetta la posizione dopo il trascinamento
        x.set(0) // Correzione: rimozione dello spazio inatteso
    }

    const navigation = () => {
        return (
            images.length > 1 && (
                <div className="flex w-full gap-x-2 justify-center absolute bottom-2 left-0 z-10">
                    {images.map((image, i) => (
                        <button
                            key={i}
                            className={`flex-none w-3 h-3 rounded-full border border-black ${currentIndex === i ? 'bg-white' : 'bg-white/50'
                                }`}
                            onClick={() => {
                                setCurrentIndex(i)
                                setDirection(i > currentIndex ? 'right' : 'left')
                            }}
                        >
                            <span className="sr-only">{i + 1}</span>
                        </button>
                    ))}
                </div>
            )
        )
    }

    return (
        <section
            className={`relative overflow-hidden h-[50vh] w-full aspect-[9/16] flex justify-center cursor-grab`}
        >
            {images.length > 0 && (
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentImage?.url || currentIndex} // Nuova key: URL o currentIndex come fallback
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            opacity: { duration: 0.3 },
                            x: { type: 'spring', stiffness: 300, damping: 20 },
                        }}
                        className="absolute inset-0 bg-cover bg-center"
                        drag="x"
                        dragControls={dragControls}
                        onDragEnd={handleDragEnd}
                        style={{ x }}
                    >
                        <Image
                            src={currentImage?.url}
                            alt={currentImage?.alt || ""}
                            fill
                            className="object-contain"
                            draggable={false} // Impedisce il trascinamento nativo dell'immagine
                        />
                    </motion.div>
                </AnimatePresence>
            )}
            {navigation()}
        </section>
    )
}