import React from "react";
import './CallBack.css'
import CbForm from "../CbForm/CbForm";
import {content} from '../../project.config.json'
import Anchor from "../Anchor/Anchor";
import Title from "../Title/Title";

function CallBack(){
    return(
        <section className={'contact-us main__contact-us'}>
            <div className={'contact-us__title'}>
                <Title text={content.callback.title}/>
            </div>
            <Anchor id={'callback'} />
            <div className={'contact-us__row'}>
                <div className={'contact-us__form'}>
                    <CbForm />
                </div>
            </div>
        </section>
    )
}

export default CallBack