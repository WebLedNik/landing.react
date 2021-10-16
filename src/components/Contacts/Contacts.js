import React from "react";
import './Contacts.css'
import ContactsList from "../../components/ContactsList/ContactsList";
import {YMaps, Map, Placemark} from 'react-yandex-maps';
import {company} from "../../project.config.json";
import Anchor from "../Anchor/Anchor";
import Title from "../Title/Title";
const defaultState = {center: [+company.ll.split(',')[0],+company.ll.split(',')[1]], zoom: 16, controls: ['zoomControl']}
const modules = ['control.ZoomControl']

function Contacts() {
    return (
        <section className={'contacts'}>
                <div className={'contacts__row'}>
                    <div className={'contacts__info'}>
                        <div className={'contacts__title'}>
                            <Title text={'Контакты'}/>
                        </div>
                        <Anchor id={'contacts'} />
                        <div className={'contacts__company'}>
                            <ContactsList dark={true}/>
                        </div>
                    </div>
                    <div className={'contacts__map'}>
                        <YMaps>
                            <Map width="100%" height={'400px'} defaultState={defaultState} modules={modules}>
                                <Placemark
                                    modules={['geoObject.addon.balloon']}
                                    defaultGeometry={[+company.ll.split(',')[0],+company.ll.split(',')[1]]}
                                    properties={{
                                        balloonContent:'mdi-home',
                                        balloonContentBody:company.description,
                                    }}
                                    options={{
                                        preset:'islands#blueHomeCircleIcon'
                                    }}
                                />
                            </Map>
                        </YMaps>
                    </div>
                </div>
        </section>
    )
}

export default Contacts