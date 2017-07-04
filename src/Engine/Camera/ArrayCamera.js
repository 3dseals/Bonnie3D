(function ($) {

    class ArrayCamera extends Bonnie3D.Camera {

        constructor(array) {

            super();

            this._cameras = array || [];

        }

        get cameras() {

            return this._cameras;

        }

    }

    Bonnie3D.ArrayCamera = ArrayCamera;

}(this));