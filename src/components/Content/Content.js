import React from "react";
import './Content.css'

function Content({text}){
    return(
        <p className={'content'}>{text}</p>
    )
}

export default Content