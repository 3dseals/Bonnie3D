(function ($) {

    class Vector3 {

        constructor(x, y, z) {

            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;

        }

        set(x, y, z) {

            this.x = x;
            this.y = y;
            this.z = z;

            return this;

        }

        copy (v) {

            this.x = v.x;
            this.y = v.y;
            this.z = v.z;

            return this;

        }

        applyToBufferAttribute( attribute ) {

            let v1 = new Bonnie3D.Vector3();

            for ( let i = 0, l = attribute.count; i < l; i ++ ) {

                v1.x = attribute.getX( i );
                v1.y = attribute.getY( i );
                v1.z = attribute.getZ( i );

                v1.applyMatrix3( this );

                attribute.setXYZ( i, v1.x, v1.y, v1.z );

            }

            return attribute;
        }

        applyMatrix3(m) {

            var x = this.x, y = this.y, z = this.z;
            var e = m.elements;

            this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
            this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
            this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

            return this;

        }

        applyMatrix4(m) {

            let x = this.x, y = this.y, z = this.z;
            let e = m.elements;

            this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ]  * z + e[ 12 ];
            this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ]  * z + e[ 13 ];
            this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ];
            let w =  e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ];

            return this.divideScalar( w );

        }

        multiplyScalar(scalar) {

            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;

            return this;

        }

        divideScalar(scalar) {

            return this.multiplyScalar( 1 / scalar );

        }

        length() {

            return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

        }

        normalize() {

            return this.divideScalar( this.length() );

        }
    }

    Bonnie3D.Vector3 = Vector3;

}(this));