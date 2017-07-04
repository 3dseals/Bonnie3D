(function ($) {

    class SkinnedMesh extends Bonnie3D.Mesh {

        constructor(geometry, material) {

            super();

            this.skeleton = null;

        }

    }

    Bonnie3D.SkinnedMesh = SkinnedMesh;

}(this));