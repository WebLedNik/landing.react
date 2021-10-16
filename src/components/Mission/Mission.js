import React from "react";
import './Mission.css'
import Anchor from "../Anchor/Anchor";
import {content} from '../../project.config.json'
import Title from "../Title/Title";

class MissionCol extends React.Component{
    render() {
        return(
            <div className={'mission__col'}>
                <div className={'mission__number'}>
                    <span>{this.props.number}</span>
                </div>
                <div className={'mission__text'}>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

function Mission() {
    return (
        <section className={'mission main__mission'}>
            <div className={'mission__title'}>
                <Title text={'Наша идея'}/>
            </div>
            <Anchor id={'mission'} />
            <div className={'mission__row'}>
                {content.mission.ideas.map(idea => <MissionCol key={idea.id} number={idea.id + ''} text={idea.text} />)}
            </div>
        </section>
    )
}

export default Mission