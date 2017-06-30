(function ($) {

    class Frustum {

        constructor(p0, p1, p2, p3, p4, p5) {

            this.planes = [

                ( p0 !== undefined ) ? p0 : new Bonnie3D.Plane(),
                ( p1 !== undefined ) ? p1 : new Bonnie3D.Plane(),
                ( p2 !== undefined ) ? p2 : new Bonnie3D.Plane(),
                ( p3 !== undefined ) ? p3 : new Bonnie3D.Plane(),
                ( p4 !== undefined ) ? p4 : new Bonnie3D.Plane(),
                ( p5 !== undefined ) ? p5 : new Bonnie3D.Plane()

            ];

        }

        setFromMatrix() {

        }
    }

    Bonnie3D.Frustum = Frustum;

}(this));