(function ($) {

    class WebGL2Renderer {

        constructor(params) {

            let parameters = params || {};

            this._canvas = parameters.canvas !== undefined ? parameters.canvas : document.createElementNS( 'http://www.w3.org/1999/xhtml', 'canvas' );
            this._context = parameters.context !== undefined ? parameters.context : null;

            this._alpha = parameters.alpha !== undefined ? parameters.alpha : false;
            this._depth = parameters.depth !== undefined ? parameters.depth : true;
            this._stencil = parameters.stencil !== undefined ? parameters.stencil : true;
            this._antialias = parameters.antialias !== undefined ? parameters.antialias : false;
            this._premultipliedAlpha = parameters.premultipliedAlpha !== undefined ? parameters.premultipliedAlpha : true;
            this._preserveDrawingBuffer = parameters.preserveDrawingBuffer !== undefined ? parameters.preserveDrawingBuffer : false;

            // initialize gl

            try {

                let attributes = {
                    alpha: this._alpha,
                    depth: this._depth,
                    stencil: this._stencil,
                    antialias: this._antialias,
                    premultipliedAlpha: this._premultipliedAlpha,
                    preserveDrawingBuffer: this._preserveDrawingBuffer
                };

                this._gl = this._context || this._canvas.getContext( 'webgl2', attributes );

                if ( this._gl === null ) {

                    if ( this._canvas.getContext( 'webgl2' ) !== null ) {

                        throw 'Error creating WebGL2 context with your selected attributes.';

                    } else {

                        throw 'Error creating WebGL2 context.';

                    }

                }

                this._canvas.addEventListener( 'webglcontextlost', this.onContextLost, false );

            } catch ( error ) {

                Log.error( 'WebGL2Renderer: ' + error );

            }

            //

            this._autoClear = true;
            this._autoClearColor = true;
            this._autoClearDepth = true;
            this._autoClearStencil = true;

            this._clearColor = new Bonnie3D.Color( 0x000000 );
            this._clearAlpha = 0;

            this._width = this._canvas.width;
            this._height = this._canvas.height;

            this._pixelRatio = 1;

            this._viewport = new Bonnie3D.Vector4( 0, 0, this._width, this._height );

            let extensions = new Bonnie3D.WebGLExtensions( this._gl );
            this._state = new Bonnie3D.WebGLState( this._gl, extensions, function () {} );

            this.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( this._canvas );

        }

        static getInstance() {
            if (!WebGL2Renderer._instance) {
                WebGL2Renderer._instance = new WebGL2Renderer();
            }
            return WebGL2Renderer._instance;
        }

        clear(color, depth, stencil) {

            let bits = 0;

            if ( color === undefined || color ) bits |= this._gl.COLOR_BUFFER_BIT;
            if ( depth === undefined || depth ) bits |= this._gl.DEPTH_BUFFER_BIT;
            if ( stencil === undefined || stencil ) bits |= this._gl.STENCIL_BUFFER_BIT;

            this._gl.clear( bits );

        }

        setPixelRatio(value) {

            if ( value === undefined ) return;

            this._pixelRatio = value;

            this.setSize( this._viewport.z, this._viewport.w, false );

        }

        setSize(width, height, updateStyle) {

            this._width = width;
            this._height = height;

            this._canvas.width = width * this._pixelRatio;
            this._canvas.height = height * this._pixelRatio;

            if ( updateStyle !== false ) {

                this._canvas.style.width = width + 'px';
                this._canvas.style.height = height + 'px';

            }

            this.setViewport( 0, 0, width, height );

        }

        setViewport(x, y, width, height) {

            this._state.viewport( this._viewport.set( x, y, width, height ) );

        }

        render() {

            let scene = Bonnie3D.SceneManager.currentScene;
            if(scene) {
                let background = scene.background;
                let forceClear = false;

                if ( background instanceof Bonnie3D.Color) {

                    this._state.buffers.color.setClear( background.r, background.g, background.b, 1, this._premultipliedAlpha );
                    forceClear = true;

                } else {

                    this._state.buffers.color.setClear( this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha, this._premultipliedAlpha );

                }

                if ( this._autoClear || forceClear ) {

                    this.clear( this._autoClearColor, this._autoClearDepth, this._autoClearStencil );

                }
            }
        }

        onContextLost(event) {

            event.preventDefault();

        }

    }

    Bonnie3D.WebGL2Renderer = WebGL2Renderer;

}(this));