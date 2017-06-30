(function ($) {

    class BufferGeometry extends Bonnie3D.Object {

        constructor() {

            super();

            this._index = null;
            this._attributes = {};

            this._morphAttributes = {};

            this._groups = [];

            this._boundingBox = null;
            this._boundingSphere = null;

            this._drawRange = { start: 0, count: Infinity };
        }

        get index() {

            return this._index;

        }

        set index( index ) {

            if ( index instanceof Array) {

                if(Bonnie3D.arrayMax(index) >　65535) {

                    this._index = new Bonnie3D.BufferAttribute( index, 1, false, Uint32Array );

                }else{

                    this._index = new Bonnie3D.BufferAttribute( index, 1, false, Uint16Array );

                }

            } else {

                this._index = index;

            }

        }

        addAttribute(name, ...attribute) {

            if ( ! ( attribute[0] instanceof Bonnie3D.BufferAttribute) && ! ( attribute[0] instanceof Bonnie3D.InterleavedBufferAttribute) ) {

                Bonnie3D.Log.warning( 'Bonnie3D.BufferGeometry: .addAttribute() now expects ( name, attribute ).' );

                this.addAttribute( name, new Bonnie3D.BufferAttribute( ...attribute ) );

                return;

            }

            if ( name === 'index' ) {

                Bonnie3D.Log.warning( 'Bonnie3D.BufferGeometry.addAttribute: Use .set index() for index attribute.' );
                this.index = attribute[0];

                return;

            }

            this._attributes[ name ] = attribute[0];

            return this;

        }

        getAttribute(name) {

            return this._attributes[ name ];

        }

        removeAttribute(name) {

            delete this._attributes[ name ];

            return this;

        }

        addGroup(start, count, materialIndex) {

            this._groups.push( {

                start: start,
                count: count,
                materialIndex: materialIndex !== undefined ? materialIndex : 0

            } );

        }

        clearGroups () {

            this.groups = [];

        }

        setDrawRange (start, count) {

            this._drawRange.start = start;
            this._drawRange.count = count;

        }

        applyMatrix (matrix) {

            var position = this._attributes.position;

            if ( position !== undefined ) {

                matrix.applyToBufferAttribute( position );
                position.needsUpdate = true;

            }

            var normal = this._attributes.normal;

            if ( normal !== undefined ) {

                var normalMatrix = new Bonnie3D.Matrix3().getNormalMatrix( matrix );

                normalMatrix.applyToBufferAttribute( normal );
                normal.needsUpdate = true;

            }

            if ( this._boundingBox !== null ) {

                this.computeBoundingBox();

            }

            if ( this._boundingSphere !== null ) {

                this.computeBoundingSphere();

            }

            return this;

        }

        computeBoundingBox() {

        }

        computeBoundingSphere() {

        }

    }

    BufferGeometry.MaxIndex = 65535;

    Bonnie3D.BufferGeometry = BufferGeometry;

}(this));