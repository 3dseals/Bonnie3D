(function ($) {

    class Object {

        constructor(name) {

            this._name = name || "";
        }

        get name() {
            return this._name;
        }

    }

    Bonnie3D.Object = Object;

}(this));
