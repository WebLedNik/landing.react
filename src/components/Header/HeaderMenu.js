import React from "react";
import './HeaderMenu.css'
import HeaderMenuItem from "./HeaderMenuItem";
import {menu} from "../../project.config.json"

function HeaderMenu(){
    return (
        <ul className={'header__menu'}>
            {menu.map(m =>  <HeaderMenuItem item={m} key={m.id} />)}
        </ul>
    )
}

export default HeaderMenu