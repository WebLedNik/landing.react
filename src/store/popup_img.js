import {makeAutoObservable} from "mobx";

class PopupImg {
    constructor() {
        this.src = ""
        this.alt = ""
        this.active = false
        makeAutoObservable(this)
    }

    activate(src) {
        let html = document.querySelector('html')
        html.classList.add('overflow_hidden')

        this.src = src
        this.active = true
    }

    deactivate() {
        let html = document.querySelector('html')
        html.classList.remove('overflow_hidden')

        this.src = ""
        this.active = false
    }

    get glSrc() {
        return '/images/gl/' + this.src
    }
}

export default new PopupImg()