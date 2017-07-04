(function ($) {

    class Math {

        static generateUUID() {

            let r;

            for ( let i = 0; i < 36; i ++ ) {

                if ( i === 8 || i === 13 || i === 18 || i === 23 ) {

                    Bonnie3D.Math._uuid[ i ] = '-';

                } else if ( i === 14 ) {

                    Bonnie3D.Math._uuid[ i ] = '4';

                } else {

                    if ( Bonnie3D.Math._rnd <= 0x02 ) Bonnie3D.Math._rnd = 0x2000000 + ( window["Math"].random() * 0x1000000 ) | 0;
                    r = Bonnie3D.Math._rnd & 0xf;
                    Bonnie3D.Math._rnd = Bonnie3D.Math._rnd >> 4;
                    Bonnie3D.Math._uuid[ i ] = Bonnie3D.Math._chars[ ( i === 19 ) ? ( r & 0x3 ) | 0x8 : r ];

                }

            }

            return Bonnie3D.Math._uuid.join( '' );
        }



        static clamp (value, min, max) {

            return window.Math.max( min, window.Math.min( max, value ) );

        }

        // compute euclidian modulo of m % n
        // https://en.wikipedia.org/wiki/Modulo_operation

        static euclideanModulo (n, m) {

            return ( ( n % m ) + m ) % m;

        }

    }

    Math._chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split( '' );
    Math._uuid = new Array( 36 );
    Math._rnd = 0;

    Math.DEG2RAD = window.Math.PI / 180;
    Math.RAD2DEG = 180 / window.Math.PI;

    Bonnie3D.Math = Math;

}(this));