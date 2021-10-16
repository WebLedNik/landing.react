import React from "react";
import './FooterInformation.css'
import {menu} from "../../project.config.json"
import {NavHashLink} from "react-router-hash-link";

function FooterInformation(){
    return(
       <div className={'footer__col footer__col_info'}>
           <span className={'footer__title'}>Меню</span>
           <ul className={'footer__menu'}>
               {menu.map( item => {
                   return (
                       <li className={'footer__menu-item'} key={item.id}>
                           <NavHashLink smooth className={'footer__menu-link'} to={item.href}>{item.title}</NavHashLink>
                       </li>
                   )
               })}
           </ul>
       </div>
    )
}

export default FooterInformation