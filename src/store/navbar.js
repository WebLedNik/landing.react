import {makeAutoObservable} from "mobx";

class Navbar {
    constructor() {
        this.active = false
        makeAutoObservable(this)
    }

    activate(src) {
        let html = document.querySelector('html')
        html.classList.add('overflow_hidden')

        this.active = true
    }

    deactivate() {
        let html = document.querySelector('html')
        html.classList.remove('overflow_hidden')

        this.active = false
    }
}

export default new Navbar()