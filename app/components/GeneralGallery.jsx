'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

export default function GeneralGallery({ images }) {
    const [direction, setDirection] = useState('right')
    const [currentIndex, setCurrentIndex] = useState(0)

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
        <section className={`relative overflow-hidden h-[50vh] w-full aspect-[9/16] flex justify-center`}>
            {images.length > 0 && (
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={currentIndex}
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
                    >
                        <Image
                            src={images[currentIndex]?.url}
                            alt={images[currentIndex]?.alt || ""}
                            fill
                            className="object-contain"
                        />
                    </motion.div>
                </AnimatePresence>
            )}
            {navigation()}
        </section>
    )
}