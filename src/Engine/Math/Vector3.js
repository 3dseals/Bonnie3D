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
    }

    Bonnie3D.Vector3 = Vector3;

}(this));