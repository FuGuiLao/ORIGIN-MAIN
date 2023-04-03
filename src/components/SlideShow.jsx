import React, { useState, useEffect } from 'react';
import '@/styles/slideshow.css';

function Slideshow() {
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
            <p className="prev" onClick={handlePrevClick}>
                &lt;
            </p>
            {slides.map((slide, index) => (
                <div key={index} className="slide-container">
                    <p className={index === currentSlide ? 'active' : ''}>{slide}</p>
                </div>
            ))}
            <p className="next" onClick={handleNextClick}>
                &gt;
            </p>
        </div>
    );
}

export default Slideshow;
