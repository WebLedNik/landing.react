import React from "react";
import Slider from "react-slick";
import {content} from '../../project.config.json'
import './General.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    {id: 1, src: '1.jpeg', alt: ""},
    {id: 2, src: '2.jpeg', alt: ""},
    {id: 3, src: '3.jpeg', alt: ""},
]

function General() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className={'general general__container'}>
                <div className={'general__left'}>
                    <h1 className={'general__title'}>{content.h1}</h1>
                    <h2 className={'general__subtitle'}>{content.h2}</h2>
                </div>
                <div className={'general__right'}>
                    <div className={'general__slider-text'}>
                        <div className={'general__slider-wrapper'}>
                            <h1 className={'general__slider-title'}>{content.h1}</h1>
                            <h2 className={'general__slider-subtitle'}>{content.h2}</h2>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {images.map(img => {
                            return (
                                <img key={img.id} className={'general__img'} src={'/images/gn/' + img.src}
                                     alt={img.alt}/>
                            )
                        })}
                    </Slider>
                </div>
        </section>
    )
}

export default General