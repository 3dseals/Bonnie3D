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
    }

    Bonnie3D.Vector4 = Vector4;

}(this));