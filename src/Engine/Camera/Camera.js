(function ($) {

    class Camera extends Bonnie3D.BasicCamera {

        constructor(fov, aspect, near, far) {

            super();

            this._fov = fov !== undefined ? fov : 50;
            this._zoom = 1;

            this._near = near !== undefined ? near : 0.1;
            this._far = far !== undefined ? far : 2000;
            this._focus = 10;

            this._aspect = aspect !== undefined ? aspect : 1;
            this._view = null;

            this._filmGauge = 35;	// width of the film (default in millimeters)
            this._filmOffset = 0;	// horizontal film offset (same unit as gauge)

            this.updateProjectionMatrix();

        }

        set focalLength(focalLength) {

            // see http://www.bobatkins.com/photography/technical/field_of_view.html
            let vExtentSlope = 0.5 * this.filmHeight / focalLength;

            this._fov = Bonnie3D.Math.RAD2DEG * 2 * Math.atan( vExtentSlope );
            this.updateProjectionMatrix();

        }

        get focalLength() {

            let vExtentSlope = Math.tan( Bonnie3D.Math.DEG2RAD * 0.5 * this._fov );

            return 0.5 * this.filmHeight / vExtentSlope;

        }

        getEffectiveFOV() {

            return Bonnie3D.Math.RAD2DEG * 2 * Math.atan(
                    Math.tan( Bonnie3D.Math.DEG2RAD * 0.5 * this._fov ) / this._zoom );

        }

        get filmWidth () {

            // film not completely covered in portrait format (aspect < 1)
            return this._filmGauge * Math.min( this._aspect, 1 );

        }

        get filmHeight () {

            // film not completely covered in landscape format (aspect > 1)
            return this._filmGauge / Math.max( this._aspect, 1 );

        }

        /**
         * Sets an offset in a larger frustum. This is useful for multi-window or
         * multi-monitor/multi-machine setups.
         *
         * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
         * the monitors are in grid like this
         *
         *   +---+---+---+
         *   | A | B | C |
         *   +---+---+---+
         *   | D | E | F |
         *   +---+---+---+
         *
         * then for each monitor you would call it like this
         *
         *   let w = 1920;
         *   let h = 1080;
         *   let fullWidth = w * 3;
         *   let fullHeight = h * 2;
         *
         *   --A--
         *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
         *   --B--
         *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
         *   --C--
         *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
         *   --D--
         *   camera.setOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
         *   --E--
         *   camera.setOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
         *   --F--
         *   camera.setOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
         *
         *   Note there is no reason monitors have to be the same size or in a grid.
         */
        setViewOffset(fullWidth, fullHeight, x, y, width, height) {

            this._aspect = fullWidth / fullHeight;

            this._view = {
                fullWidth: fullWidth,
                fullHeight: fullHeight,
                offsetX: x,
                offsetY: y,
                width: width,
                height: height
            };

            this.updateProjectionMatrix();

        }

        clearViewOffset() {

            this._view = null;
            this.updateProjectionMatrix();

        }

        updateProjectionMatrix() {
            let near = this._near,
                top = near * Math.tan( Bonnie3D.Math.DEG2RAD * 0.5 * this._fov ) / this._zoom,
                height = 2 * top,
                width = this._aspect * height,
                left = - 0.5 * width,
                view = this._view;

            if ( view !== null ) {

                let fullWidth = view.fullWidth,
                    fullHeight = view.fullHeight;

                left += view.offsetX * width / fullWidth;
                top -= view.offsetY * height / fullHeight;
                width *= view.width / fullWidth;
                height *= view.height / fullHeight;

            }

            let skew = this._filmOffset;
            if ( skew !== 0 ) left += near * skew / this.filmWidth;

            this.projectionMatrix.makePerspective( left, left + width, top, top - height, near, this._far );
        }

    }

    Bonnie3D.Camera = Camera;

}(this));