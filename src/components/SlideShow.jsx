import React, { useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid';

export default function Slideshow() {
    const [slides, setSlides] = useState([
        'First slide',
        'Second slide',
        'Third slide',
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevClick = () =>
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

    const handleNextClick = () =>
        setCurrentSlide((currentSlide + 1) % slides.length);

    return (
        <div className="relative h-screen">
            <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                    className="p-4 text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
                    onClick={handlePrevClick}
                >
                    <ArrowLeftCircleIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                    className="p-4 text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
                    onClick={handleNextClick}
                >
                    <ArrowRightCircleIcon className="h-6 w-6" />
                </button>
            </div>
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <p
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full flex items-center justify-center text-white transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                        style={{ backgroundColor: '#333' }}
                    >
                        {slide}
                    </p>
                ))}
            </div>
        </div>
    );
}
