(function ($) {

    class ColorBuffer {

        setClear(r, g, b, a, premultipliedAlpha) {

        }

    }

    class DepthBuffer {

        setClear(depth) {

        }

    }

    class StencilBuffer {

        setClear(stencil) {

        }

    }

    class WebGLState {

        constructor(gl, extensions, paramToGL) {
            this.buffers = {
                color: new ColorBuffer(),
                depth: new DepthBuffer(),
                stencil: new StencilBuffer()
            }
        }

        viewport(viewport) {

        }

    }

    Bonnie3D.WebGLState = WebGLState;
    Bonnie3D.WebGLState.ColorBuffer = ColorBuffer;
    Bonnie3D.WebGLState.DepthBuffer = DepthBuffer;
    Bonnie3D.WebGLState.StencilBuffer = StencilBuffer;

}(this));