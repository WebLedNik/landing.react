import React from "react";
import './PopupImg.css'
import {observer} from "mobx-react";
import popup_img from "../../store/popup_img";

const PopupImg = observer(() => {
    let imgRef = React.createRef()

    const onCLickImg = (e) => {
        if(!imgRef.current.contains(e.target)){
            popup_img.deactivate()
        }
    }

    return popup_img.active ? (
        <div className={'overlay'}>
            <div  className={'popup-img'} onClick={(e) => onCLickImg(e)}>
                <div className={'popup__container'}>
                    <div ref={imgRef} className={'popup-img__card'}>
                        <div className={'popup-img__wrapper-img'}>
                            <img src={popup_img.glSrc} alt={popup_img.alt}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <div></div>
})

export default PopupImg