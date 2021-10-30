import React, { useState } from 'react';
import { Slider, Image, LeftArrow, RightArrow, Slide, ImgCount } from './imageSliderElements';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <Slider>
            <>
                <LeftArrow onClick={prevSlide} />
                {/* <ImgCount>{`${current + 1} / ${slides.length}`}</ImgCount> */}
                <RightArrow onClick={nextSlide} />
            </>
            <>
                {slides.map((slide, index) => {
                    return (
                        <Slide
                            isActive={index === current}
                            key={index}
                        >
                            {index === current && (
                                <Image src={slide} alt='Trailer' />
                            )}
                        </Slide>
                    );
                })}
            </>
        </Slider>
    );
};

export default ImageSlider;