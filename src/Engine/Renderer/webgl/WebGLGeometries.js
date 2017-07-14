(function ($) {

    class WebGLGeometries {

        constructor(gl, attributes, infoMemory) {

            this.geometries = {};
            this.wireframeAttributes = {};
            this.gl = gl;
            this.attributes = attributes;
            this.infoMemory = infoMemory;
        }

        onGeometryDispose( event ) {

            let geometry = event.target;
            let buffergeometry = this.geometries[ geometry.id ];

            if ( buffergeometry.index !== null ) {

                this.attributes.remove( buffergeometry.index );

            }

            for ( let name in buffergeometry.attributes ) {

                this.attributes.remove( buffergeometry.attributes[ name ] );

            }

            //geometry.removeEventListener( 'dispose', this.onGeometryDispose );

            delete this.geometries[ geometry.id ];

            // TODO Remove duplicate code

            let attribute = this.wireframeAttributes[ geometry.id ];

            if ( attribute ) {

                this.attributes.remove( attribute );
                delete this.wireframeAttributes[ geometry.id ];

            }

            attribute = this.wireframeAttributes[ buffergeometry.id ];

            if ( attribute ) {

                this.attributes.remove( attribute );
                delete this.wireframeAttributes[ buffergeometry.id ];

            }

            //

            this.infoMemory.geometries --;

        }

        get( object, geometry ) {

            let buffergeometry = this.geometries[ geometry.id ];

            if ( buffergeometry ) return buffergeometry;

            //geometry.addEventListener( 'dispose', this.onGeometryDispose );

            if ( geometry instanceof Bonnie3D.BufferGeometry ) {

                buffergeometry = geometry;

            } else if ( geometry instanceof Bonnie3D.Geometry ) {

                if ( geometry._bufferGeometry === undefined ) {

                    geometry._bufferGeometry = new Bonnie3D.BufferGeometry().setFromObject( object );

                }

                buffergeometry = geometry._bufferGeometry;

            }

            this.geometries[ geometry.id ] = buffergeometry;

            this.infoMemory.geometries ++;

            return buffergeometry;

        }

        update( geometry ) {

            let index = geometry.index;
            let geometryAttributes = geometry.attributes;

            if ( index !== null ) {

                this.attributes.update( index, this.gl.ELEMENT_ARRAY_BUFFER );

            }

            for ( var name in geometryAttributes ) {

                this.attributes.update( geometryAttributes[ name ], this.gl.ARRAY_BUFFER );

            }

            // morph targets

            let morphAttributes = geometry.morphAttributes;

            for ( let name in morphAttributes ) {

                let array = morphAttributes[ name ];

                for ( let i = 0, l = array.length; i < l; i ++ ) {

                    this.attributes.update( array[ i ], this.gl.ARRAY_BUFFER );

                }

            }

        }

        getWireframeAttribute( geometry ) {

            let attribute = this.wireframeAttributes[ geometry.id ];

            if ( attribute ) return attribute;

            let indices = [];

            let geometryIndex = geometry.index;
            let geometryAttributes = geometry.attributes;

            // console.time( 'wireframe' );

            if ( geometryIndex !== null ) {

                let array = geometryIndex.array;

                for ( let i = 0, l = array.length; i < l; i += 3 ) {

                    let a = array[ i + 0 ];
                    let b = array[ i + 1 ];
                    let c = array[ i + 2 ];

                    indices.push( a, b, b, c, c, a );

                }

            } else {

                let array = geometryAttributes.position.array;

                for ( let i = 0, l = ( array.length / 3 ) - 1; i < l; i += 3 ) {

                    let a = i + 0;
                    let b = i + 1;
                    let c = i + 2;

                    indices.push( a, b, b, c, c, a );

                }

            }

            // console.timeEnd( 'wireframe' );

            attribute = new Bonnie3D.BufferAttribute( indices, 1, false, Bonnie3D.arrayMax( indices ) > 65535 ? Uint32Array : Uint16Array );

            this.attributes.update( attribute, this.gl.ELEMENT_ARRAY_BUFFER );

            this.wireframeAttributes[ geometry.id ] = attribute;

            return attribute;
        }

    }

    Bonnie3D.WebGLGeometries = WebGLGeometries;

}(this));