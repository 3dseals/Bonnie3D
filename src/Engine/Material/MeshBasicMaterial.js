(function ($) {

    class MeshBasicMaterial extends Bonnie3D.Material {

        constructor(parameters) {

            super();

            this._color = new Bonnie3D.Color( 0xffffff ); // emissive

            this._map = null;

            this._lightMap = null;
            this._lightMapIntensity = 1.0;

            this._aoMap = null;
            this._aoMapIntensity = 1.0;

            this._specularMap = null;

            this._alphaMap = null;

            this._envMap = null;
            this._combine = Bonnie3D.MultiplyOperation;
            this._reflectivity = 1;
            this._refractionRatio = 0.98;

            this._wireframe = false;
            this._wireframeLinewidth = 1;
            this._wireframeLinecap = 'round';
            this._wireframeLinejoin = 'round';

            this._skinning = false;
            this._morphTargets = false;

            this._lights = false;

            this.setValues( parameters );

        }

        get wireframe() {

            return this._wireframe;

        }

    }

    Bonnie3D.MeshBasicMaterial = MeshBasicMaterial;

}(this));