(function ($) {

    class Vector4 {

        constructor(x, y, z, w) {

            this.x = x || 0;
            this.y = y || 0;
            this.z = z || 0;
            this.w = ( w !== undefined ) ? w : 1;

        }

        set(x, y, z, w) {

            this.x = x;
            this.y = y;
            this.z = z;
            this.w = w;

            return this;

        }

        applyToBufferAttribute( attribute ) {

            let v1 = new Bonnie3D.Vector3();

            for ( let i = 0, l = attribute.count; i < l; i ++ ) {

                v1.x = attribute.getX( i );
                v1.y = attribute.getY( i );
                v1.z = attribute.getZ( i );

                v1.applyMatrix4( this );

                attribute.setXYZ( i, v1.x, v1.y, v1.z );

            }

            return attribute;
        }

        applyMatrix4(m) {

            var x = this.x, y = this.y, z = this.z, w = this.w;
            var e = m.elements;

            this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] * w;
            this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] * w;
            this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] * w;
            this.w = e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] * w;

            return this;

        }

        multiplyScalar(scalar) {

            this.x *= scalar;
            this.y *= scalar;
            this.z *= scalar;
            this.w *= scalar;

            return this;

        }

        divideScalar(scalar) {

            return this.multiplyScalar( 1 / scalar );

        }

        length () {

            return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );

        }

        normalize () {

            return this.divideScalar( this.length() );

        }
    }

    Bonnie3D.Vector4 = Vector4;

}(this));