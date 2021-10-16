import React from "react";
import './FooterLogo.css'
import logo from '../../images/logo-white.png'

function FooterLogo(){
    return(
        <div className={'footer__col footer__col_logo'}>
            <img src={logo} alt='footer logo'/>
        </div>
    )
}

export default FooterLogo