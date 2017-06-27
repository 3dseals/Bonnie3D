(function ($) {

    class Face {

        constructor(a, b, c, normal, color, materialIndex) {

            this._a = a;
            this._b = b;
            this._c = c;

            this._normal = normal instanceof Bonnie3D.Vector3 ? normal : new Bonnie3D.Vector3();
            this._vertexNormals = normal instanceof Array ? normal : [];

            this._color = color instanceof Bonnie3D.Color ? color : new Bonnie3D.Color();
            this._vertexColors = color instanceof Array ? color : [];

            this._materialIndex = materialIndex !== undefined ? materialIndex : 0;

        }

        get vertexNormals() {
            return this._vertexNormals;
        }

        get vertexColors() {
            return this._vertexColors;
        }
    }

    Bonnie3D.Face = Face;

}(this));