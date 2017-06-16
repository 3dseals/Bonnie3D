class Scene {
    constructor(name) {
        this._name = name;
        this._valid = false;
        this._objects = [];
    }

    onEnter() {
        Log.debug("Scene[" + this._name + "] onEnter");
        this._valid = true;
    }

    onExit() {
        Log.debug("Scene[" + this._name + "] onExit");
        this._valid = false;
    }
    
    update() {
        if(this._valid) {
            Log.debug("Scene[" + this._name + "] update");
        }
    }

    render() {
        if(this._valid) {
            Log.debug("Scene[" + this._name + "] render");
        }
    }

    get isValid() {
        return this._valid;
    }

    get rootGameObjects() {
        return this._objects;
    }
}