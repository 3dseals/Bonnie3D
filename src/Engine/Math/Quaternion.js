(function ($) {

    class Quaternion {

        constructor(x, y, z, w) {

            this._x = x || 0;
            this._y = y || 0;
            this._z = z || 0;
            this._w = ( w !== undefined ) ? w : 1;

            this._onChangeCallback = function () {};

        }

        set(x, y, z, w) {

            this._x = x;
            this._y = y;
            this._z = z;
            this._w = w;

            return this;

        }

        setFromEuler (euler, update) {

            let x = euler.x, y = euler.y, z = euler.z, order = euler.order;

            // http://www.mathworks.com/matlabcentral/fileexchange/
            // 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
            //	content/SpinCalc.m

            let cos = Math.cos;
            let sin = Math.sin;

            let c1 = cos( x / 2 );
            let c2 = cos( y / 2 );
            let c3 = cos( z / 2 );

            let s1 = sin( x / 2 );
            let s2 = sin( y / 2 );
            let s3 = sin( z / 2 );

            if ( order === 'XYZ' ) {

                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;

            } else if ( order === 'YXZ' ) {

                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;

            } else if ( order === 'ZXY' ) {

                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;

            } else if ( order === 'ZYX' ) {

                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;

            } else if ( order === 'YZX' ) {

                this._x = s1 * c2 * c3 + c1 * s2 * s3;
                this._y = c1 * s2 * c3 + s1 * c2 * s3;
                this._z = c1 * c2 * s3 - s1 * s2 * c3;
                this._w = c1 * c2 * c3 - s1 * s2 * s3;

            } else if ( order === 'XZY' ) {

                this._x = s1 * c2 * c3 - c1 * s2 * s3;
                this._y = c1 * s2 * c3 - s1 * c2 * s3;
                this._z = c1 * c2 * s3 + s1 * s2 * c3;
                this._w = c1 * c2 * c3 + s1 * s2 * s3;

            }

            if ( update !== false ) this._onChangeCallback();

            return this;

        }

        onChange (callback) {

            this._onChangeCallback = callback;

            return this;

        }
    }

    Bonnie3D.Quaternion = Quaternion;

}(this));