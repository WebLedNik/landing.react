import React from "react";
import './Navbar.css'
import {menu, company} from "../../project.config.json";
import {NavHashLink} from "react-router-hash-link";
import Divider from "../Divider/Divider";
import navbar from "../../store/navbar";
import {observer} from "mobx-react";

const NavbarMenuItem = ({item}) => {
    return (
        <li className={'navbar__item'} >
            <NavHashLink onClick={() => navbar.deactivate()}  smooth activeClassName={'navbar__link_active'} className={'navbar__link'} to={item.href}>{item.title}</NavHashLink>
        </li>
    )
}

const Navbar = observer(() => {
    let navbarRef = React.createRef()

    const onCLickOverlay = (e) => {
        if(!navbarRef.current.contains(e.target)){
            navbar.deactivate()
        }
    }

    return  navbar.active ? (
        <div className={'overlay'} onClick={(e) => onCLickOverlay(e)}>
            <div ref={navbarRef} className={'navbar'}>
                <div className={'navbar__title'}>
                    <span>{company.name}</span>
                </div>
                <Divider />
                <ul className={'navbar__menu'}>
                    {menu.map(m => <NavbarMenuItem item={m} key={m.id}/>)}
                </ul>
            </div>
        </div>
    ) : <div></div>
})

export default Navbar