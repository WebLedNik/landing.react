import React, {useEffect} from "react";
import './Notification.css'
import success from '../../images/success.svg'
import notification from "../../store/notification";
import {observer} from "mobx-react";
import {content} from "../../project.config.json"

const Notification = observer(() => {
    useEffect(() => {
        setTimeout(() => {
            notification.deactivate()
        }, 2000)
    })

    return notification.active ? (
        <div className={'notification'}>
            <div className={'container'}>
                <div className={'notification__row'}>
                    <img className={'notification__img'} src={success} alt="success"/>
                    <span className={'notification__title'}>{content.notification.title}</span>
                    <span className={'notification__text'}>{content.notification.text}</span>
                </div>
            </div>
        </div>
    ) : <div></div>
})

export default Notification