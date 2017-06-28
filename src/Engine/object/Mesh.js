(function ($) {

    class Mesh extends Bonnie3D.Component {

        constructor(geometry, material) {

            super();

            this._geometry = geometry !== undefined ? geometry : new Bonnie3D.BufferGeometry();
            this._material = material !== undefined ? material : new Bonnie3D.MeshBasicMaterial( { color: Math.random() * 0xffffff } );

            this._drawMode = Bonnie3D.TrianglesDrawMode;

            this.updateMorphTargets();

        }

        updateMorphTargets() {

        }

    }

    Bonnie3D.Mesh = Mesh;

}(this));