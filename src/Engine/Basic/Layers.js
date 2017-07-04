(function ($) {

    class Layers extends Bonnie3D.Object {

        constructor() {

            super();

            this._mask = 1 | 0;

        }

        get mask() {

            return this._mask;

        }

        test(layers) {
            return ( this.mask & layers.mask ) !== 0;
        }

    }

    Bonnie3D.Layers = Layers;

}(this));