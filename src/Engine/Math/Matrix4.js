(function ($) {

    class Matrix4 {

        constructor(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {

            if(n11 instanceof Array){

                if(n11.length == 4*4) {

                    this.elements = n11;

                }

            }else {

                this.elements = [

                    1, 0, 0, 0,
                    0, 1, 0, 0,
                    0, 0, 1, 0,
                    0, 0, 0, 1

                ];

                if(n11 !== undefined && n12 !== undefined && n13 !== undefined && n14 !== undefined
                    && n21 !== undefined && n22 !== undefined && n23 !== undefined && n24 !== undefined
                    && n31 !== undefined && n32 !== undefined && n33 !== undefined && n34 !== undefined
                    && n41 !== undefined && n42 !== undefined && n43 !== undefined && n44 !== undefined){

                    this.elements[ 0 ] = n11; this.elements[ 4 ] = n12; this.elements[ 8 ] = n13; this.elements[ 12 ] = n14;
                    this.elements[ 1 ] = n21; this.elements[ 5 ] = n22; this.elements[ 9 ] = n23; this.elements[ 13 ] = n24;
                    this.elements[ 2 ] = n31; this.elements[ 6 ] = n32; this.elements[ 10 ] = n33; this.elements[ 14 ] = n34;
                    this.elements[ 3 ] = n41; this.elements[ 7 ] = n42; this.elements[ 11 ] = n43; this.elements[ 15 ] = n44;

                }

            }

        }

        set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44) {

            if(n11 instanceof Array){

                if(n11.length == 4*4) {

                    this.elements = n11;

                }

                }else if(n11 !== undefined && n12 !== undefined && n13 !== undefined && n14 !== undefined
                    && n21 !== undefined && n22 !== undefined && n23 !== undefined && n24 !== undefined
                    && n31 !== undefined && n32 !== undefined && n33 !== undefined && n34 !== undefined
                    && n41 !== undefined && n42 !== undefined && n43 !== undefined && n44 !== undefined){

                this.elements[ 0 ] = n11; this.elements[ 4 ] = n12; this.elements[ 8 ] = n13; this.elements[ 12 ] = n14;
                this.elements[ 1 ] = n21; this.elements[ 5 ] = n22; this.elements[ 9 ] = n23; this.elements[ 13 ] = n24;
                this.elements[ 2 ] = n31; this.elements[ 6 ] = n32; this.elements[ 10 ] = n33; this.elements[ 14 ] = n34;
                this.elements[ 3 ] = n41; this.elements[ 7 ] = n42; this.elements[ 11 ] = n43; this.elements[ 15 ] = n44;

            }

            return this;

        }


        makePerspective( left, right, top, bottom, near, far ) {

            let x = 2 * near / ( right - left );
            let y = 2 * near / ( top - bottom );

            let a = ( right + left ) / ( right - left );
            let b = ( top + bottom ) / ( top - bottom );
            let c = - ( far + near ) / ( far - near );
            let d = - 2 * far * near / ( far - near );

            this.elements[ 0 ] = x;	this.elements[ 4 ] = 0;	this.elements[ 8 ] = a;	this.elements[ 12 ] = 0;
            this.elements[ 1 ] = 0;	this.elements[ 5 ] = y;	this.elements[ 9 ] = b;	this.elements[ 13 ] = 0;
            this.elements[ 2 ] = 0;	this.elements[ 6 ] = 0;	this.elements[ 10 ] = c;	this.elements[ 14 ] = d;
            this.elements[ 3 ] = 0;	this.elements[ 7 ] = 0;	this.elements[ 11 ] = - 1;	this.elements[ 15 ] = 0;

            return this;

        }

    }

    Bonnie3D.Matrix4 = Matrix4;

}(this));