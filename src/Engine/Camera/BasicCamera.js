(function ($) {

    class BasicCamera extends Bonnie3D.Component {

        constructor() {

            super();

            this.bounds = new Bonnie3D.Vector4( 0.0, 0.0, 1.0, 1.0 );

            this.matrixWorldInverse = new Bonnie3D.Matrix4();
            this.projectionMatrix = new Bonnie3D.Matrix4();

        }

    }

    Bonnie3D.BasicCamera = BasicCamera;

}(this));