(function ($) {

    class BasicCamera extends Bonnie3D.Component {

        constructor() {

            super();

            this.matrixWorldInverse = new Bonnie3D.Matrix4();
            this.projectionMatrix = new Bonnie3D.Matrix4();

        }

    }

    Bonnie3D.BasicCamera = BasicCamera;

}(this));