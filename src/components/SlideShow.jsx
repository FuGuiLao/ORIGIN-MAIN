import React, { useState } from 'react'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'

export function SlideShow() {
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
        <section
            id="slideshow"
            aria-labelledby="author-title"
            className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
        >
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 [mask-image:linear-gradient(transparent,white)]">
                <GridPattern x="50%" y="100%" />
            </div>

                <button
                    className="p-4 text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
                    onClick={handlePrevClick}
                >
                    <ArrowLeftCircleIcon className="h-6 w-6" />
                </button>

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
            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-8">
                <div className="flex space-x-4">
                    <button
                        className="p-2 text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
                        onClick={handlePrevClick}
                    >
                        <ArrowLeftCircleIcon className="h-6 w-6" />
                    </button>
                    <button
                        className="p-2 text-white hover:text-gray-400 focus:outline-none focus:text-gray-400 transition ease-in-out duration-150"
                        onClick={handleNextClick}
                    >
                        <ArrowRightCircleIcon className="h-6 w-6" />
                    </button>
                </div>
            </div>

            );
        </section>
   )
}
