import React from "react";
import './HeaderLogo.css'
import scroll from "../../store/scroll";
import logo from '../../images/logo.png'
import logoWhite from '../../images/logo-white.png'
import {NavHashLink} from "react-router-hash-link";


function HeaderLogo(){
    return(
        <NavHashLink className={'header__logo'} smooth to='#'>
            <img   src={scroll.isPositionTop ? logo : logoWhite} alt="Logo" />
        </NavHashLink>
    )
}

export default HeaderLogo