(function ($) {

    let Log = Bonnie3D.Log;

    class Scene extends Bonnie3D.Node {

        constructor(name) {

            super(name)

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

        add(object) {
            if(object instanceof Bonnie3D.Component) {
                this.addChild(object.node);
            }else if (object instanceof Bonnie3D.Node) {
                this.addChild(object);
            }
        }
    }

    Bonnie3D.Scene = Scene;

}(this));
