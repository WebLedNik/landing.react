import React from "react";
import './FooterSub.css'
import {sub_footer} from '../../project.config.json'

function FooterSub(){
    return (
        <div className={'footer_sub'}>
            <span>{sub_footer}</span>
        </div>
    )
}

export default FooterSub