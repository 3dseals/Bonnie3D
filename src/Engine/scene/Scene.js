(function ($) {

    let Log = Bonnie3D.Log;

    class Scene extends Bonnie3D.Node {

        constructor() {

            super()

            this._valid = false;
            this._objects = [];
            this._renderer = Bonnie3D.WebGL2Renderer.getInstance();

        }

        onEnter() {

            Log.debug("Scene [" + this._name + "] onEnter");
            this._valid = true;

        }

        onExit() {

            Log.debug("Scene [" + this._name + "] onExit");
            this._valid = false;

        }

        update() {

            if(this._valid) {
                Log.debug("Scene [" + this._name + "] update");
            }

        }

        render() {

            if(this._valid) {
                Log.debug("Scene [" + this._name + "] render");
                this._renderer.render();
            }

        }

        get isValid() {

            return this._valid;

        }

        get rootGameObjects() {

            return this._objects;

        }
    }

    Bonnie3D.Scene = Scene;

}(this));
