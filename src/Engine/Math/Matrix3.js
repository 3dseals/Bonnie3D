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
    }

    Bonnie3D.Matrix3 = Matrix3;

}(this));