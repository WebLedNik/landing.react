import React from "react";
import './FooterContacts.css'
import ContactsList from "../ContactsList/ContactsList";


function FooterContacts() {
    return (
        <div className={'footer__col'}>
            <span className={'footer__title'}>Контакты</span>
            <div className={'footer__contacts'}>
                <ContactsList />
            </div>
        </div>
    )
}

export default FooterContacts