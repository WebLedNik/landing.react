import React from "react";
import './HeaderMenuItem.css'
import scroll from "../../store/scroll";
import { NavHashLink } from 'react-router-hash-link';

function HeaderMenuItem({item}){
    return (
        <li className={'header__menu-item'}>
            <NavHashLink smooth activeClassName={'header__menu-link_active'} className={scroll.isPositionTop ? 'header__menu-link' : 'header__menu-link header__menu-link_scroll'} to={item.href}>{item.title}</NavHashLink>
        </li>
    )
}

export default HeaderMenuItem