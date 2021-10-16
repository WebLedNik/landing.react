import React from "react";
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import './FooterSocialMedia.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const social_media = [
    {id:1, href:"https://www.facebook.com", icon:faFacebook},
    {id:2, href:"https://twitter.com", icon:faTwitter},
    {id:3, href:"https://www.instagram.com", icon:faInstagram},
]

function FooterSocialMedia() {
    return (
        <div className={'footer__col'}>
            <span className={'footer__title'}>Социальные сети</span>
            <ul className={'footer__social-media'}>
                {social_media.map(sm => {
                    return(
                        <li key={sm.id} className={'footer__social-media-item'}>
                            <a target="_blank" rel="noopener noreferrer" href={sm.href}>
                                <FontAwesomeIcon icon={sm.icon} size="1x" color={'#ffffff'} />
                            </a>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}

export default FooterSocialMedia