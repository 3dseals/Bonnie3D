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

        multiplyScalar ( scalar ) {

            this.x *= scalar;
            this.y *= scalar;

            return this;

        }

        divideScalar ( scalar ) {

            return this.multiplyScalar( 1 / scalar );

        }

        length () {

            return Math.sqrt( this.x * this.x + this.y * this.y );

        }

        normalize () {

            return this.divideScalar( this.length() );

        }

    }

    Bonnie3D.Vector2 = Vector2;

}(this));