(function ($) {

    class Matrix3 {

        constructor(n11, n12, n13, n21, n22, n23, n31, n32, n33) {

            if(n11 instanceof Array){

                if(n11.length == 3*3) {

                    this.elements = n11;

                }

            }else {

                this.elements = [

                    1, 0, 0,
                    0, 1, 0,
                    0, 0, 1

                ];

                if(n11 !== undefined && n12 !== undefined && n13 !== undefined
                    && n21 !== undefined && n22 !== undefined && n23 !== undefined
                    && n31 !== undefined && n32 !== undefined && n33 !== undefined){

                    this.elements[ 0 ] = n11; this.elements[ 3 ] = n12; this.elements[ 6 ] = n13;
                    this.elements[ 1 ] = n21; this.elements[ 4 ] = n22; this.elements[ 7 ] = n23;
                    this.elements[ 2 ] = n31; this.elements[ 5 ] = n32; this.elements[ 8 ] = n33;

                }

            }

        }

        set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {

            if(n11 instanceof Array){

                if(n11.length == 3*3) {

                    this.elements = n11;

                }

            }else if(n11 !== undefined && n12 !== undefined && n13 !== undefined
                && n21 !== undefined && n22 !== undefined && n23 !== undefined
                && n31 !== undefined && n32 !== undefined && n33 !== undefined){

                this.elements[ 0 ] = n11; this.elements[ 3 ] = n12; this.elements[ 6 ] = n13;
                this.elements[ 1 ] = n21; this.elements[ 4 ] = n22; this.elements[ 7 ] = n23;
                this.elements[ 2 ] = n31; this.elements[ 5 ] = n32; this.elements[ 8 ] = n33;

            }

            return this;

        }

        setFromMatrix4 (m) {

            let me = m.elements;

            this.set(

                me[ 0 ], me[ 4 ], me[  8 ],
                me[ 1 ], me[ 5 ], me[  9 ],
                me[ 2 ], me[ 6 ], me[ 10 ]

            );

            return this;

        }

        getInverse(matrix, throwOnDegenerate) {

            let me = matrix.elements,
                te = this.elements,

                n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ],
                n12 = me[ 3 ], n22 = me[ 4 ], n32 = me[ 5 ],
                n13 = me[ 6 ], n23 = me[ 7 ], n33 = me[ 8 ],

                t11 = n33 * n22 - n32 * n23,
                t12 = n32 * n13 - n33 * n12,
                t13 = n23 * n12 - n22 * n13,

                det = n11 * t11 + n21 * t12 + n31 * t13;

            if ( det === 0 ) {

                let msg = "Bonnie3D.Matrix3.getInverse(): can't invert matrix, determinant is 0";

                if ( throwOnDegenerate === true ) {

                    throw new Error( msg );

                } else {

                    Bonnie3D.Log.warning( msg );

                }

                return this.identity();

            }

            let detInv = 1 / det;

            te[ 0 ] = t11 * detInv;
            te[ 1 ] = ( n31 * n23 - n33 * n21 ) * detInv;
            te[ 2 ] = ( n32 * n21 - n31 * n22 ) * detInv;

            te[ 3 ] = t12 * detInv;
            te[ 4 ] = ( n33 * n11 - n31 * n13 ) * detInv;
            te[ 5 ] = ( n31 * n12 - n32 * n11 ) * detInv;

            te[ 6 ] = t13 * detInv;
            te[ 7 ] = ( n21 * n13 - n23 * n11 ) * detInv;
            te[ 8 ] = ( n22 * n11 - n21 * n12 ) * detInv;

            return this;

        }

        transpose () {

            let tmp, m = this.elements;

            tmp = m[ 1 ]; m[ 1 ] = m[ 3 ]; m[ 3 ] = tmp;
            tmp = m[ 2 ]; m[ 2 ] = m[ 6 ]; m[ 6 ] = tmp;
            tmp = m[ 5 ]; m[ 5 ] = m[ 7 ]; m[ 7 ] = tmp;

            return this;

        }


        getNormalMatrix (matrix4) {

            return this.setFromMatrix4( matrix4 ).getInverse( this ).transpose();

        }

    }

    Bonnie3D.Matrix3 = Matrix3;

}(this));