import React from "react";
import './Footer.css'
import FooterLogo from "./FooterLogo";
import FooterInformation from "./FooterInformation";
import FooterContacts from "./FooterContacts";
import FooterSocialMedia from "./FooterSocialMedia";
import FooterSub from "./FooterSub";

function Footer() {
    return (
        <footer className={'footer'}>
            <div className={'container'}>
                <div className={'footer__row'}>
                    <FooterLogo/>
                    <FooterInformation/>
                    <FooterContacts/>
                    <FooterSocialMedia/>
                </div>
            </div>
            <FooterSub/>
        </footer>
    )
}

export default Footer