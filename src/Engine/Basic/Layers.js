(function ($) {

    class Layers extends Bonnie3D.Object {

        constructor() {

            super();

            this._mask = 1 | 0;

        }

    }

    Bonnie3D.Layers = Layers;

}(this));