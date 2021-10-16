import React from "react";
import './BtnsMessengers.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTelegramPlane, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {NavHashLink} from "react-router-hash-link";

const messengers = [
    {id:1, href:"https://www.whatsapp.com", icon:faWhatsapp},
    {id:2, href:"https://web.telegram.org", icon:faTelegramPlane}
]

const BtnMessanger = ({href, icon}) => {
    return(
        <a target="_blank" rel="noopener noreferrer" className={'btns-messagers__link'} href={href}>
            <FontAwesomeIcon icon={icon} size="2x" color={'#ffffff'} />
        </a>
    )
}

const BtnsMessengers = () => {
    return(
        <ul className={'btns-messagers'}>
            {messengers.map(m => {
                return(
                    <li key={m.id} className={'btns-messagers__item'}>
                        <BtnMessanger  icon={m.icon} href={m.href} />
                    </li>
                )
            })}
            <li>
                <NavHashLink smooth className={'btns-messagers__link'} to="#callback">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color={'#ffffff'} />
                </NavHashLink>
            </li>
        </ul>
    )
}

export default BtnsMessengers