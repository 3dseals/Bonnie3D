(function ($) {

    let Log = Bonnie3D.Log;

    class Scene extends Bonnie3D.Node {

        constructor() {

            super()

            this._valid = false;
            this._renderer = Bonnie3D.WebGLRenderer.getInstance();

            this.background = null;
            this.fog = null;
            this.overrideMaterial = null;

            this.autoUpdate = true; // checked by the renderer

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
    }

    Bonnie3D.Scene = Scene;

}(this));
