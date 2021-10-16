import React from "react";
import './ContactsList.css'
import Icon from "@mdi/react";
import {mdiEmailOutline, mdiMapMarkerOutline, mdiPhoneOutline} from "@mdi/js";
import {company} from "../../project.config.json";

function ContactsList({dark}){
    return(
        <ul className={'contacts-list'}>
            <li className={'contacts-list__item'}>
                <Icon path={mdiMapMarkerOutline} size={1} color={dark ? '#333333' : '#ffffff'}/>
                <a target="_blank" rel="noopener noreferrer" className={dark ? 'contacts-list__link contacts-list__link_dark' :'contacts-list__link'}
                   href={company.ya_map}>{company.address}</a>
            </li>
            <li className={'contacts-list__item'}>
                <Icon path={mdiPhoneOutline} size={1} color={dark ? '#333333' : '#ffffff'}/>
                <a target="_blank" rel="noopener noreferrer" className={dark ? 'contacts-list__link contacts-list__link_dark' :'contacts-list__link'} href={'tel:' + company.phone}>{company.phone}</a>
            </li>
            <li className={'contacts-list__item'}>
                <Icon path={mdiEmailOutline} size={1} color={dark ? '#333333' : '#ffffff'}/>
                <a target="_blank" rel="noopener noreferrer" className={dark ? 'contacts-list__link contacts-list__link_dark' :'contacts-list__link'} href={'mailto:' + company.email}>{company.email}</a>
            </li>
        </ul>
    )
}

export default ContactsList