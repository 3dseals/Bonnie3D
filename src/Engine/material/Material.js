(function ($) {

    class Material extends Bonnie3D.Object {

        constructor() {

            super();

            this._id = Bonnie3D.Material.materialId++;

            this._fog = true;
            this._lights = true;

            this._blending = Bonnie3D.NormalBlending;
            this._side = Bonnie3D.FrontSide;
            this._shading = Bonnie3D.SmoothShading; // Bonnie3D.FlatShading, Bonnie3D.SmoothShading
            this._vertexColors = Bonnie3D.NoColors; // Bonnie3D.NoColors, Bonnie3D.VertexColors, Bonnie3D.FaceColors

            this._opacity = 1;
            this._transparent = false;

            this._blendSrc = Bonnie3D.SrcAlphaFactor;
            this._blendDst = Bonnie3D.OneMinusSrcAlphaFactor;
            this._blendEquation = Bonnie3D.AddEquation;
            this._blendSrcAlpha = null;
            this._blendDstAlpha = null;
            this._blendEquationAlpha = null;

            this._depthFunc = Bonnie3D.LessEqualDepth;
            this._depthTest = true;
            this._depthWrite = true;

            this._clippingPlanes = null;
            this._clipIntersection = false;
            this._clipShadows = false;

            this._colorWrite = true;

            this._precision = null; // override the renderer's default precision for this material

            this._polygonOffset = false;
            this._polygonOffsetFactor = 0;
            this._polygonOffsetUnits = 0;

            this._dithering = false;

            this._alphaTest = 0;
            this._premultipliedAlpha = false;

            this._overdraw = 0; // Overdrawn pixels (typically between 0 and 1) for fixing antialiasing gaps in CanvasRenderer

            this._visible = true;

            this._needsUpdate = true;

        }

        setValues (values) {

            if ( values === undefined ) return;

            for ( let key in values ) {

                let newValue = values[ key ];

                if ( newValue === undefined ) {

                    Bonnie3D.Log.warning( "Bonnie3D.Material: '" + key + "' parameter is undefined." );
                    continue;

                }

                let currentValue = this[ "_" + key ];

                if ( currentValue === undefined ) {

                    Bonnie3D.Log.warning( "Bonnie3D." + this.type + ": '" + key + "' is not a property of this material." );
                    continue;

                }

                if ( currentValue instanceof Bonnie3D.Color) {

                    currentValue.set( newValue );

                } else if ( ( currentValue instanceof Bonnie3D.Vector3 ) && ( newValue instanceof Bonnie3D.Vector3 ) ) {

                    currentValue.copy( newValue );

                } else if ( key === 'overdraw' ) {

                    // ensure overdraw is backwards-compatible with legacy boolean type
                    this[ "_" + key ] = Number( newValue );

                } else {

                    this[ "_" + key ] = newValue;

                }

            }

        }

    }

    Material.materialId = 0;

    Bonnie3D.Material = Material;

}(this));