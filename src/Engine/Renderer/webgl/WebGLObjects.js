(function ($) {

    class WebGLObjects {

        constructor(gl, geometries, infoRender) {

            this._gl  = gl;
            this._igeometries = geometries;
            this._infoRender = infoRender;
            this.updateList = {};

        }

        update(object) {

            let frame = this._infoRender.frame;

            let geometry = object.geometry;
            let buffergeometry = this._igeometries.get( object, geometry );

            // Update once per frame

            if ( this.updateList[ buffergeometry.id ] !== frame ) {

                if ( geometry instanceof Bonnie3D.Geometry ) {

                    buffergeometry.updateFromObject( object );

                }

                this._igeometries.update( buffergeometry );

                this.updateList[ buffergeometry.id ] = frame;

            }

            return buffergeometry;
        }



        clear() {

            this.updateList = {};

        }

    }

    Bonnie3D.WebGLObjects = WebGLObjects;

}(this));