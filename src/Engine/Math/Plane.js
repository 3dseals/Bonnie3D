(function ($) {

    class Plane {

        constructor(normal, constant) {

            this.normal = ( normal !== undefined ) ? normal : new Bonnie3D.Vector3( 1, 0, 0 );
            this.constant = ( constant !== undefined ) ? constant : 0;

        }
    }

    Bonnie3D.Plane = Plane;

}(this));