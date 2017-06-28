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

        copy　(m) {

            let te = this.elements;
            let me = m.elements;

            te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
            te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
            te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
            te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

            return this;

        }

        makeRotationFromQuaternion (q) {

            let te = this.elements;

            let x = q._x, y = q._y, z = q._z, w = q._w;
            let x2 = x + x, y2 = y + y, z2 = z + z;
            let xx = x * x2, xy = x * y2, xz = x * z2;
            let yy = y * y2, yz = y * z2, zz = z * z2;
            let wx = w * x2, wy = w * y2, wz = w * z2;

            te[ 0 ] = 1 - ( yy + zz );
            te[ 4 ] = xy - wz;
            te[ 8 ] = xz + wy;

            te[ 1 ] = xy + wz;
            te[ 5 ] = 1 - ( xx + zz );
            te[ 9 ] = yz - wx;

            te[ 2 ] = xz - wy;
            te[ 6 ] = yz + wx;
            te[ 10 ] = 1 - ( xx + yy );

            // last column
            te[ 3 ] = 0;
            te[ 7 ] = 0;
            te[ 11 ] = 0;

            // bottom row
            te[ 12 ] = 0;
            te[ 13 ] = 0;
            te[ 14 ] = 0;
            te[ 15 ] = 1;

            return this;

        }

        multiplyMatrices (a, b) {

            let ae = a.elements;
            let be = b.elements;
            let te = this.elements;

            let a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
            let a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
            let a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
            let a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

            let b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
            let b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
            let b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
            let b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

            te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
            te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
            te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
            te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

            te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
            te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
            te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
            te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

            te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
            te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
            te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
            te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

            te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
            te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
            te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
            te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

            return this;

        }

        setPosition ( v ) {

            let te = this.elements;

            te[ 12 ] = v.x;
            te[ 13 ] = v.y;
            te[ 14 ] = v.z;

            return this;

        }

        scale ( v ) {

            let te = this.elements;
            let x = v.x, y = v.y, z = v.z;

            te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
            te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
            te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
            te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

            return this;

        }


        compose ( position, quaternion, scale ) {

            this.makeRotationFromQuaternion( quaternion );
            this.scale( scale );
            this.setPosition( position );

            return this;

        }

        decompose (position, quaternion, scale) {

            let vector = new Bonnie3D.Vector3();
            let matrix = new Bonnie3D.Matrix4();

            let te = this.elements;

            let sx = vector.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
            let sy = vector.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
            let sz = vector.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

            // if determine is negative, we need to invert one scale
            let det = this.determinant();
            if ( det < 0 ) sx = - sx;

            position.x = te[ 12 ];
            position.y = te[ 13 ];
            position.z = te[ 14 ];

            // scale the rotation part
            matrix.copy( this );

            let invSX = 1 / sx;
            let invSY = 1 / sy;
            let invSZ = 1 / sz;

            matrix.elements[ 0 ] *= invSX;
            matrix.elements[ 1 ] *= invSX;
            matrix.elements[ 2 ] *= invSX;

            matrix.elements[ 4 ] *= invSY;
            matrix.elements[ 5 ] *= invSY;
            matrix.elements[ 6 ] *= invSY;

            matrix.elements[ 8 ] *= invSZ;
            matrix.elements[ 9 ] *= invSZ;
            matrix.elements[ 10 ] *= invSZ;

            quaternion.setFromRotationMatrix( matrix );

            scale.x = sx;
            scale.y = sy;
            scale.z = sz;

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

        determinant () {

            let te = this.elements;

            let n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
            let n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
            let n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
            let n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

            //TODO: make this more efficient
            //( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

            return (
                n41 * (
                    + n14 * n23 * n32
                    - n13 * n24 * n32
                    - n14 * n22 * n33
                    + n12 * n24 * n33
                    + n13 * n22 * n34
                    - n12 * n23 * n34
                ) +
                n42 * (
                    + n11 * n23 * n34
                    - n11 * n24 * n33
                    + n14 * n21 * n33
                    - n13 * n21 * n34
                    + n13 * n24 * n31
                    - n14 * n23 * n31
                ) +
                n43 * (
                    + n11 * n24 * n32
                    - n11 * n22 * n34
                    - n14 * n21 * n32
                    + n12 * n21 * n34
                    + n14 * n22 * n31
                    - n12 * n24 * n31
                ) +
                n44 * (
                    - n13 * n22 * n31
                    - n11 * n23 * n32
                    + n11 * n22 * n33
                    + n13 * n21 * n32
                    - n12 * n21 * n33
                    + n12 * n23 * n31
                )

            );

        }

    }

    Bonnie3D.Matrix4 = Matrix4;

}(this));