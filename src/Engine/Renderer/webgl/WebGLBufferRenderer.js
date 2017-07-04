(function ($) {

    class WebGLBufferRenderer {

        constructor(gl, extensions, infoRender) {
            this.mode = gl.TRIANGLES
        }

        setMode( value ) {

            this.mode = value;

        }

        setIndex(index) {

        }

    }

    Bonnie3D.WebGLBufferRenderer = WebGLBufferRenderer;

}(this));