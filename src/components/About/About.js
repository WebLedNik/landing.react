import React from "react";
import './About.css'
import about1 from "../../images/ab/1.png"
import about2 from "../../images/ab/2.jpeg"
import about3 from "../../images/ab/3.jpeg"
import Content from "../Content/Content";
import Anchor from "../Anchor/Anchor";
import {content} from '../../project.config.json'
import Title from "../Title/Title";
function About(){
    return (
        <section className={'about main__about'}>
            <div className={'about__left'}>
                <div className={'about__col'}>
                    <img className={'about__img about__img_1'} src={about1} alt="about1"/>
                    <img className={'about__img about__img_2'} src={about2} alt="about2"/>
                </div>
                <div className={'about__col about__col_right'}>
                    <img className={'about__img about__img_3'} src={about3} alt="about3"/>
                </div>
            </div>
            <div className={'about__right'}>
                <div className={'about__title'}>
                    <Title text={content.about.title} />
                </div>
                <Anchor id={'about'} />
                <div className={'about__content'}>
                <Content text={content.about.text} />
                </div>
            </div>
        </section>
    )
}

export default About