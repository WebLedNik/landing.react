import React from "react";
import './Gallery.css'
import popup_img from "../../store/popup_img";
import Anchor from "../Anchor/Anchor";
import {content} from '../../project.config.json'
import Title from "../Title/Title";

const images = [
    {id:1, src: '1.jpeg', alt:"", active: false},
    {id:2, src: '2.jpeg', alt:"", active: false},
    {id:3, src: '3.jpeg', alt:"", active: false},
    {id:4, src: '4.jpeg', alt:"", active: false},
    {id:5, src: '5.jpeg', alt:"", active: false},
    {id:6, src: '6.jpeg', alt:"", active: false},
    {id:7, src: '7.jpeg', alt:"", active: false}
]



function Gallery() {
    function onClickImg(image){
        popup_img.activate(image.src)
    }

    return (
        <section  className={'gallery main__our-projects '}>
            <div className={'gallery__title'}>
                <Title text={content.gallery.title}/>
            </div>
            <Anchor id={'gallery'} />
            <div className={'gallery__content'}>
                {images.map(img => {
                    return (
                        <div key={img.id} onClick={() => onClickImg(img)}  className={'gallery__wrapper-img'}>
                            <img onClick={() => onClickImg(img)} src={'/images/gl/' + img.src} alt={img.alt}/>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Gallery