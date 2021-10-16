import React, {useEffect, useState} from "react";
import './Header.css'
import HeaderLogo from "./HeaderLogo";
import HeaderMenu from "./HeaderMenu";
import scroll from "../../store/scroll";
import {observer} from "mobx-react";
import navbar from "../../store/navbar";

const HeaderBurger = () => {
    const onClickBurger = () => {
        navbar.activate()
    }

    return(
        <div onClick={() => onClickBurger()} className={scroll.isPositionTop ? 'header__burger' : 'header__burger header__burger_scroll'}>
            <span></span>
        </div>
    )
}

const Header = observer(() => {
    React.useEffect(() => {

        window.addEventListener('scroll', () => {
            // eslint-disable-next-line no-restricted-globals
            pageYOffset < 100 ? scroll.activateIsPositionTop() : scroll.deactivateIsPositionTop()
        })
    })

    return (
        <header className={scroll.isPositionTop ? 'header' : 'header header_scroll'}>
            <div className={'container header__row'}>
                <HeaderLogo/>
                <HeaderMenu/>
                <HeaderBurger />
            </div>
        </header>
    )
})

export default Header