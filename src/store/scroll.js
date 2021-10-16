import {makeAutoObservable} from "mobx";

class Scroll {
    constructor() {
        this.isPositionTop = true
        makeAutoObservable(this)
    }

    activateIsPositionTop(){
        this.isPositionTop = true
    }

    deactivateIsPositionTop(){
        this.isPositionTop = false
    }
}

export default new Scroll()