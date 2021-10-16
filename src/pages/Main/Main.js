import React from "react";
import './Main.css'
import General from "../../components/General/General";
import About from "../../components/About/About";
import Mission from "../../components/Mission/Mission";
import CallBack from "../../components/CallBack/CallBack";
import Gallery from "../../components/Gallery/Gallery";
import Contacts from "../../components/Contacts/Contacts";


function Main() {
    return (
        <main className={'main'}>
                <General/>
            <div className={'container'}>
                <About/>
                <Mission/>
                <Gallery/>
                <Contacts/>
                <CallBack/>
            </div>
        </main>
    )
}

export default Main
