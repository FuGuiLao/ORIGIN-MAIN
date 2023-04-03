import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

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
        <div className="relative bg-gray-50">
            <div className="relative w-full overflow-hidden">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${index === currentSlide ? 'z-10' : 'opacity-0'
                            } absolute w-full h-full transition-opacity duration-500`}
                    >
                        <div className="absolute inset-0 bg-gray-500"></div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                            <p
                                className="text-4xl font-bold text-white cursor-pointer"
                                onClick={handleNextClick}
                            >
                                <ChevronRightIcon className="h-10 w-10" />
                            </p>
                        </div>
                        <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                            <p
                                className="text-4xl font-bold text-white cursor-pointer"
                                onClick={handlePrevClick}
                            >
                                <ChevronLeftIcon className="h-10 w-10" />
                            </p>
                        </div>
                        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32">
                            <div className="w-full font-mono flex flex-col items-center relative">
                                <p className="text-6xl text-white leading-none mb-2">
                                    {slide}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

