import React, {useState} from "react";
import './CbForm.css'
import InputMask from 'react-input-mask';
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import notification from "../../store/notification";

function CbForm() {
    const [message, setMessage] = useState({name:"",email:"", phone:"", text:""})
    const [loading, setLoading] = useState(false)
    const [send, setSend] = useState(false)

    const handleSubmit = async (e) => {
        try {
            setLoading(true)
            e.preventDefault()

            await fetch('/api/v1/send-mail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(message)
            })

            setMessage({name:"",email:"", phone:"", text:""})
            setLoading(false)
            notification.activate()
        } catch (e) {
            setLoading(false)
        }
    }

    return (
        <form className={'cb-form'} onSubmit={handleSubmit}>
            <label className={'cb-form__label'} htmlFor="name"></label>
            <input value={message.name} onChange={e => setMessage({...message, name:e.target.value})} required className={'cb-form__input'} id="name" name="name"
                   placeholder="Полное имя"/>

            <label className={'cb-form__label'} htmlFor="email"></label>
            <input value={message.email} onChange={e => setMessage({...message, email:e.target.value})} type="email" required className={'cb-form__input'}
                   id="email" name="email" placeholder="Эл. почта"/>

            <label className={'cb-form__label'} htmlFor="phone"></label>
            <InputMask value={message.phone} type="tel" onChange={e => setMessage({...message, phone:e.target.value})} className={'cb-form__input'} id="phone"
                       name="phone" placeholder="Телефон"
                       mask="+7 (999) 999-99-99" maskChar=" "/>

            <label className={'cb-form__label'} htmlFor="message"></label>
            <textarea value={message.text} onChange={e => setMessage({...message, text:e.target.value})} required className={'cb-form__textarea'} rows="5"
                      id="text" name="text"
                      placeholder="Сообщение"/>

            <div className={'cb-form__wrapper-checkbox'}>
                <input required className={'cb-form__checkbox'} type="checkbox" id="checkbox" name="checkbox"/>
                <label className={'cb-form__label cb-form__label_checkbox'} htmlFor="checkbox">Отправляя заявку Вы
                    соглашаетесь с политикой конфиденциальности</label>
            </div>

            <button className={'cb-form__btn'} type="submit">{loading ? (<FontAwesomeIcon icon={faCircleNotch} spin size="2x" />) : 'Отправить'}</button>
        </form>
    )
}

export default CbForm