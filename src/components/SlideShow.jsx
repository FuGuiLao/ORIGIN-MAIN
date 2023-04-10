import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { GridPattern } from '@/components/GridPattern'
import { SectionHeading } from '@/components/SectionHeading'
import authorImage from '@/images/avatars/avatar-brant.png'

const Slideshow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        // Add your slides here
        // For example:
        // { image: '/path/to/image1.jpg', caption: 'Slide 1' },
        // { image: '/path/to/image2.jpg', caption: 'Slide 2' },
        // { image: '/path/to/image3.jpg', caption: 'Slide 3' },
    ];

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length)
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide + slides.length - 1) % slides.length)
    };

    return (
        <div className="relative scroll-mt-14 pb-3 pt-8 sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16">
            <div className="absolute inset-x-0 bottom-0 top-1/2 text-zinc-900/10 [mask-image:linear-gradient(transparent,white)]">
                <GridPattern x="50%" y="100%" />
            </div>
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`${currentSlide === index ? "" : "hidden"
                        } absolute inset-0`}
                >
                    <img
                        src={slide.image}
                        alt={slide.caption}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-4 py-6 bg-gradient-to-t from-black to-transparent">
                        <p className="text-xl font-bold text-white">{slide.caption}</p>
                    </div>
                </div>
            ))}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2 mb-6">
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={prevSlide}
                >
                    Prev
                </button>
                <button
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                    onClick={nextSlide}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
export default Slideshow
