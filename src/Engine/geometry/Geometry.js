(function ($) {

    class Geometry extends Bonnie3D.Object {

        constructor() {

            super();

            this._id = Bonnie3D.Geometry.countId++;

            this._vertices = [];
            this._colors = [];
            this._faces = [];
            this._faceVertexUvs = [[]];

            this._morphTargets = [];
            this._morphNormals = [];

            this._skinWeights = [];
            this._skinIndices = [];

            this._lineDistances = [];

            this._boundingBox = null;
            this._boundingSphere = null;

            // update flags

            this._elementsNeedUpdate = false;
            this._verticesNeedUpdate = false;
            this._uvsNeedUpdate = false;
            this._normalsNeedUpdate = false;
            this._colorsNeedUpdate = false;
            this._lineDistancesNeedUpdate = false;
            this._groupsNeedUpdate = false;
        }

        applyMatrix (matrix) {

            let normalMatrix = new Bonnie3D.Matrix3().getNormalMatrix( matrix );

            for ( let i = 0, il = this._vertices.length; i < il; i ++ ) {

                let vertex = this._vertices[ i ];
                vertex.applyMatrix4( matrix );

            }

            for ( var i = 0, il = this._faces.length; i < il; i ++ ) {

                var face = this._faces[ i ];
                face.normal.applyMatrix3( normalMatrix ).normalize();

                for ( var j = 0, jl = face.vertexNormals.length; j < jl; j ++ ) {

                    face.vertexNormals[ j ].applyMatrix3( normalMatrix ).normalize();

                }

            }

            if ( this._boundingBox !== null ) {

                this.computeBoundingBox();

            }

            if ( this._boundingSphere !== null ) {

                this.computeBoundingSphere();

            }

            this._verticesNeedUpdate = true;
            this._normalsNeedUpdate = true;

            return this;

        }

        computeBoundingBox() {

        }

        computeBoundingSphere() {

        }

    }

    Geometry.countId = 0;

    Bonnie3D.Geometry = Geometry;

}(this));