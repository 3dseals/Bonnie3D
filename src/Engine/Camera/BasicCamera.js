(function ($) {

    class BasicCamera extends Bonnie3D.Component {

        constructor(name) {

            super(name);

            this._projectionMatrix = new Bonnie3D.Matrix4();

        }

    }

    Bonnie3D.BasicCamera = BasicCamera;

}(this));