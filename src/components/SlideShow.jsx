import React, { useState, useEffect } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/solid';

export function SlideShow() {
    const [slides, setSlides] = useState([
        'First slide',
        'Second slide',
        'Third slide',
    ]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 2000);

        return () => {
            clearInterval(slideInterval);
        };
    }, [currentSlide, slides.length]);

    function handlePrevClick() {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    }

    function handleNextClick() {
        setCurrentSlide((currentSlide + 1) % slides.length);
    }

    return (
        <div id="slideshow">
            <div className="absolute inset-y-0 left-0 flex items-center">
                <button className="p-4" onClick={handlePrevClick}>
                    <ArrowNarrowLeftIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <button className="p-4" onClick={handleNextClick}>
                    <ArrowNarrowRightIcon className="h-6 w-6 text-white" />
                </button>
            </div>
            <div className="relative">
                {slides.map((slide, index) => (
                    <p
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full ${index === currentSlide ? '' : 'opacity-0'
                            }`}
                    >
                        {slide}
                    </p>
                ))}
            </div>
        </div>
    );
}
