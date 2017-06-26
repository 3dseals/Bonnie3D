(function ($) {

    class Vector2 {

        constructor(x, y, z) {

            this.x = x || 0;
            this.y = y || 0;

        }

        set(x, y, z) {

            this.x = x;
            this.y = y;

            return this;

        }
    }

    Bonnie3D.Vector2 = Vector2;

}(this));