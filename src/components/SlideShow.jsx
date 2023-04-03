import React, { useState } from 'react';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/solid';
import './index.css';
import GridPattern from './GridPattern';

const slides = [
    {
        id: 'slide1',
        title: 'Slide 1',
        description: 'Description for slide 1',
        imageUrl: 'https://picsum.photos/id/1015/600/400',
    },
    {
        id: 'slide2',
        title: 'Slide 2',
        description: 'Description for slide 2',
        imageUrl: 'https://picsum.photos/id/1016/600/400',
    },
    {
        id: 'slide3',
        title: 'Slide 3',
        description: 'Description for slide 3',
        imageUrl: 'https://picsum.photos/id/1018/600/400',
    },
];

export default function SlideShow() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
    };

    const handleNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <div className="relative min-h-screen bg-zinc-100">
            <section
                id="slideshow"
                aria-labelledby="slideshow-title"
                className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
            >
                <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 [mask-image:linear-gradient(transparent,white)]">
                    <GridPattern x="50%" y="100%" />
                </div>
                <div className="relative w-full h-full">
                    <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
                        <div
                            className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${slides[currentSlide].imageUrl})` }}
                        />
                    </div>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                        <div className="sm:text-center">
                            <h2
                                id="slideshow-title"
                                className="text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl"
                            >
                                {slides[currentSlide].title}
                            </h2>
                            <p className="mt-4 max-w-2xl text-xl text-zinc-500 sm:mx-auto">
                                {slides[currentSlide].description}
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 pb-6 sm:pb-10">
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-center">
                                <button
                                    onClick={handlePrevSlide}
                                    className="inline-flex justify-center rounded-full border border-zinc-100 bg-white dark:bg-zinc-900 dark:text-white text-zinc-900 hover:bg-z
