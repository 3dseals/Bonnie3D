(function ($) {

    class Euler {

        constructor(x, y, z, order) {

            this._x = x || 0;
            this._y = y || 0;
            this._z = z || 0;
            this._order = order || Euler.DefaultOrder;

            this._onChangeCallback = function () {};

        }

        get x() {

            return this._x;

        }

        get y() {

            return this._y;

        }

        get z() {

            return this._z;

        }

        get order() {

            return this._order;

        }

        setFromRotationMatrix (m, order, update) {

            let clamp = Bonnie3D.Math.clamp;

            // assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

            let te = m.elements;
            let m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ];
            let m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ];
            let m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ];

            order = order || this._order;

            if ( order === 'XYZ' ) {

                this._y = Math.asin( clamp( m13, - 1, 1 ) );

                if ( Math.abs( m13 ) < 0.99999 ) {

                    this._x = Math.atan2( - m23, m33 );
                    this._z = Math.atan2( - m12, m11 );

                } else {

                    this._x = Math.atan2( m32, m22 );
                    this._z = 0;

                }

            } else if ( order === 'YXZ' ) {

                this._x = Math.asin( - clamp( m23, - 1, 1 ) );

                if ( Math.abs( m23 ) < 0.99999 ) {

                    this._y = Math.atan2( m13, m33 );
                    this._z = Math.atan2( m21, m22 );

                } else {

                    this._y = Math.atan2( - m31, m11 );
                    this._z = 0;

                }

            } else if ( order === 'ZXY' ) {

                this._x = Math.asin( clamp( m32, - 1, 1 ) );

                if ( Math.abs( m32 ) < 0.99999 ) {

                    this._y = Math.atan2( - m31, m33 );
                    this._z = Math.atan2( - m12, m22 );

                } else {

                    this._y = 0;
                    this._z = Math.atan2( m21, m11 );

                }

            } else if ( order === 'ZYX' ) {

                this._y = Math.asin( - clamp( m31, - 1, 1 ) );

                if ( Math.abs( m31 ) < 0.99999 ) {

                    this._x = Math.atan2( m32, m33 );
                    this._z = Math.atan2( m21, m11 );

                } else {

                    this._x = 0;
                    this._z = Math.atan2( - m12, m22 );

                }

            } else if ( order === 'YZX' ) {

                this._z = Math.asin( clamp( m21, - 1, 1 ) );

                if ( Math.abs( m21 ) < 0.99999 ) {

                    this._x = Math.atan2( - m23, m22 );
                    this._y = Math.atan2( - m31, m11 );

                } else {

                    this._x = 0;
                    this._y = Math.atan2( m13, m33 );

                }

            } else if ( order === 'XZY' ) {

                this._z = Math.asin( - clamp( m12, - 1, 1 ) );

                if ( Math.abs( m12 ) < 0.99999 ) {

                    this._x = Math.atan2( m32, m22 );
                    this._y = Math.atan2( m13, m11 );

                } else {

                    this._x = Math.atan2( - m23, m33 );
                    this._y = 0;

                }

            } else {

                Bonnie3D.Log.warning( 'Bonnie3D.Euler: .setFromRotationMatrix() given unsupported order: ' + order );

            }

            this._order = order;

            if ( update !== false ) this._onChangeCallback();

            return this;

        }

        setFromQuaternion (q, order, update) {

            let matrix = new Bonnie3D.Matrix4();

            matrix.makeRotationFromQuaternion( q );

            this.setFromRotationMatrix( matrix, order, update );

            return this;
        }

        onChange (callback) {

            this._onChangeCallback = callback;

            return this;

        }

    }

    Euler.RotationOrders = [ 'XYZ', 'YZX', 'ZXY', 'XZY', 'YXZ', 'ZYX' ];
    Euler.DefaultOrder = 'XYZ';

    Bonnie3D.Euler = Euler;

}(this));