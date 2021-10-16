import {makeAutoObservable} from "mobx";

class Notification{
    constructor() {
        this.active = false
        makeAutoObservable(this)
    }

    activate(){
        this.active = true
    }

    deactivate(){
        this.active = false
    }
}

export default new Notification()