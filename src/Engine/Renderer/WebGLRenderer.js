(function ($) {

    class WebGLRenderer {

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

            this.lights = [];

            this.currentRenderList = null;

            this.morphInfluences = new Float32Array( 8 );

            this.sprites = [];
            this.lensFlares = [];

            // public properties

            this.domElement = this._canvas;
            this.context = null;

            // clearing

            this.autoClear = true;
            this.autoClearColor = true;
            this.autoClearDepth = true;
            this.autoClearStencil = true;

            // scene graph

            this.sortObjects = true;

            // user-defined clipping

            this.clippingPlanes = [];
            this.localClippingEnabled = false;

            // physically based shading

            this.gammaFactor = 2.0;	// for backwards compatibility
            this.gammaInput = false;
            this.gammaOutput = false;

            // physical lights

            this.physicallyCorrectLights = false;

            // tone mapping

            this.toneMapping = Bonnie3D.LinearToneMapping;
            this.toneMappingExposure = 1.0;
            this.toneMappingWhitePoint = 1.0;

            // morphs

            this.maxMorphTargets = 8;
            this.maxMorphNormals = 4;

            // internal state cache

            this._currentProgram = null;
            this._currentRenderTarget = null;
            this._currentFramebuffer = null;
            this._currentMaterialId = - 1;
            this._currentGeometryProgram = '';
            this._currentCamera = null;

            this._currentScissor = new Bonnie3D.Vector4();
            this._currentScissorTest = null;

            this._currentViewport = new Bonnie3D.Vector4();

            //

            this._usedTextureUnits = 0;

            //

            this._clearColor = new Bonnie3D.Color( 0x000000 );
            this._clearAlpha = 0;

            this._width = this._canvas.width;
            this._height = this._canvas.height;

            this._pixelRatio = 1;

            this._scissor = new Bonnie3D.Vector4( 0, 0, this._width, this._height );
            this._scissorTest = false;

            this._viewport = new Bonnie3D.Vector4( 0, 0, this._width, this._height );

            // frustum

            this._frustum = new Bonnie3D.Frustum();

            // clipping

            this._clipping = new Bonnie3D.WebGLClipping();
            this._clippingEnabled = false;
            this._localClippingEnabled = false;

            // camera matrices cache

            this._projScreenMatrix = new Bonnie3D.Matrix4();

            this._vector3 = new Bonnie3D.Vector3();
            this._matrix4 = new Bonnie3D.Matrix4();
            this._matrix42 = new Bonnie3D.Matrix4();

            // light arrays cache

            this._lights = {

                hash: '',

                ambient: [ 0, 0, 0 ],
                directional: [],
                directionalShadowMap: [],
                directionalShadowMatrix: [],
                spot: [],
                spotShadowMap: [],
                spotShadowMatrix: [],
                rectArea: [],
                point: [],
                pointShadowMap: [],
                pointShadowMatrix: [],
                hemi: [],

                shadows: []

            };

            // info

            this._infoMemory = {
                geometries: 0,
                textures: 0
            };

            this._infoRender = {

                frame: 0,
                calls: 0,
                vertices: 0,
                faces: 0,
                points: 0

            };

            this.info = {

                render: this._infoRender,
                memory: this._infoMemory,
                programs: null

            };

            // initialize gl

            try {

                let contextAttributes = {
                    alpha: this._alpha,
                    depth: this._depth,
                    stencil: this._stencil,
                    antialias: this._antialias,
                    premultipliedAlpha: this._premultipliedAlpha,
                    preserveDrawingBuffer: this._preserveDrawingBuffer
                };

                this._gl = this._context || this._canvas.getContext( 'webgl', contextAttributes ) || this._canvas.getContext( 'experimental-webgl', contextAttributes );;

                if ( this._gl === null ) {

                    if ( this._canvas.getContext( 'webgl' ) !== null ) {

                        throw 'Error creating WebGL context with your selected attributes.';

                    } else {

                        throw 'Error creating WebGL context.';

                    }

                }

                // Some experimental-webgl implementations do not have getShaderPrecisionFormat

                if ( this._gl.getShaderPrecisionFormat === undefined ) {

                    this._gl.getShaderPrecisionFormat = function () {

                        return { 'rangeMin': 1, 'rangeMax': 1, 'precision': 1 };

                    };

                }

                this._canvas.addEventListener( 'webglcontextlost', this.onContextLost, false );

            } catch ( error ) {

                Log.error( 'WebGLRenderer: ' + error );

            }

            //

            let extensions = new Bonnie3D.WebGLExtensions( this._gl );
            extensions.get( 'WEBGL_depth_texture' );
            extensions.get( 'OES_texture_float' );
            extensions.get( 'OES_texture_float_linear' );
            extensions.get( 'OES_texture_half_float' );
            extensions.get( 'OES_texture_half_float_linear' );
            extensions.get( 'OES_standard_derivatives' );
            extensions.get( 'ANGLE_instanced_arrays' );

            if ( extensions.get( 'OES_element_index_uint' ) ) {

                Bonnie3D.BufferGeometry.MaxIndex = 4294967296;

            }
            this.extensions = extensions;

            this.capabilities = new Bonnie3D.WebGLCapabilities( this._gl, extensions, parameters );

            this.state = new Bonnie3D.WebGLState( this._gl, extensions, this.paramToGL );

            this.properties = new Bonnie3D.WebGLProperties();
            this.textures = new Bonnie3D.WebGLTextures( this._gl, extensions, this.state, this.properties, this.capabilities, this.paramToGL, this._infoMemory );
            this.attributes = new Bonnie3D.WebGLAttributes( this._gl );
            this.geometries = new Bonnie3D.WebGLGeometries( this._gl, this.attributes, this._infoMemory );
            this.objects = new Bonnie3D.WebGLObjects( this._gl, this.geometries, this._infoRender );
            this.programCache = new Bonnie3D.WebGLPrograms( this, this.capabilities );
            this.lightCache = new Bonnie3D.WebGLLights();
            this.renderLists = new Bonnie3D.WebGLRenderLists();
            //this.vr = new Bonnie3D.WebVRManager( this );

            this.info.programs = this.programCache.programs;

            this.bufferRenderer = new Bonnie3D.WebGLBufferRenderer( this._gl, extensions, this._infoRender );
            this.indexedBufferRenderer = new Bonnie3D.WebGLIndexedBufferRenderer( this._gl, extensions, this._infoRender );

            //

            this.backgroundPlaneCamera;
            this.backgroundPlaneMesh;
            this.backgroundBoxCamera;
            this.backgroundBoxMesh;

            // shadow map

            this.shadowMap = new Bonnie3D.WebGLShadowMap( this, this._lights, this.objects, this.capabilities );

            // Plugins

            this.spritePlugin = new Bonnie3D.SpritePlugin( this, this.sprites );
            this.lensFlarePlugin = new Bonnie3D.LensFlarePlugin( this, this.lensFlares );

            this.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( this._canvas );

        }

        static getInstance() {
            if (!WebGLRenderer._instance) {
                WebGLRenderer._instance = new WebGLRenderer();
            }
            return WebGLRenderer._instance;
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

            this.setSize( this._width, this._height, false );

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

            this._viewport.set( x, this._height - y - height, width, height )
            this.state.viewport( this._currentViewport.copy( this._viewport ).multiplyScalar( this._pixelRatio ) );

        }

        render(renderTarget, forceClear) {

            let scene = Bonnie3D.SceneManager.currentScene;
            if(scene) {


                // reset caching for this frame

                this._currentGeometryProgram = '';
                this._currentMaterialId = - 1;
                this._currentCamera = null;

                // update scene graph

                if ( scene.autoUpdate === true ) scene.updateMatrixWorld();

                // update camera matrices and frustum

                camera.node.onBeforeRender( this );

                if ( camera.node.parent === null ) camera.node.updateMatrixWorld();

                // if ( vr.enabled ) {
                //
                //     camera = vr.getCamera( camera );
                //
                // }

                this._projScreenMatrix.multiplyMatrices( camera.projectionMatrix, camera.matrixWorldInverse );
                this._frustum.setFromMatrix( this._projScreenMatrix );

                this.lights.length = 0;
                this.sprites.length = 0;
                this.lensFlares.length = 0;

                this._localClippingEnabled = this.localClippingEnabled;
                this._clippingEnabled = this._clipping.init( this.clippingPlanes, this._localClippingEnabled, camera );

                this.currentRenderList = this.renderLists.get( scene, camera );
                this.currentRenderList.init();

                this.projectObject( scene, camera, this.sortObjects );

                this.currentRenderList.finish();

                if ( this.sortObjects === true ) {

                    this.currentRenderList.sort();

                }

                //

                if ( this._clippingEnabled ) this._clipping.beginShadows();

                this.setupShadows( this.lights );

                this.shadowMap.render( scene, camera );

                this.setupLights( this.lights, camera );

                if ( this._clippingEnabled ) this._clipping.endShadows();

                //

                this._infoRender.frame ++;
                this._infoRender.calls = 0;
                this._infoRender.vertices = 0;
                this._infoRender.faces = 0;
                this._infoRender.points = 0;

                if ( renderTarget === undefined ) {

                    renderTarget = null;

                }

                this.setRenderTarget( renderTarget );

                //

                var background = scene.background;

                if ( background === null ) {

                    this.state.buffers.color.setClear( this._clearColor.r, this._clearColor.g, this._clearColor.b, this._clearAlpha, this._premultipliedAlpha );

                } else if ( background instanceof Bonnie3D.Color) {

                    this.state.buffers.color.setClear( background.r, background.g, background.b, 1, this._premultipliedAlpha );
                    forceClear = true;

                }

                if ( this.autoClear || forceClear ) {

                    this.clear( this.autoClearColor, this.autoClearDepth, this.autoClearStencil );

                }

                if ( background instanceof Bonnie3D.CubeTexture ) {

                    if ( this.backgroundBoxCamera === undefined ) {

                        this.backgroundBoxCamera = new Bonnie3D.Camera();

                        this.backgroundBoxMesh = new Bonnie3D.Mesh(
                            new Bonnie3D.BoxBufferGeometry( 5, 5, 5 ),
                            new Bonnie3D.ShaderMaterial( {
                                uniforms: Bonnie3D.ShaderLib.cube.uniforms,
                                vertexShader: Bonnie3D.ShaderLib.cube.vertexShader,
                                fragmentShader: Bonnie3D.ShaderLib.cube.fragmentShader,
                                side: Bonnie3D.BackSide,
                                depthTest: false,
                                depthWrite: false,
                                fog: false
                            } )
                        );

                    }

                    this.backgroundBoxCamera.projectionMatrix.copy( camera.projectionMatrix );

                    this.backgroundBoxCamera.node.matrixWorld.extractRotation( camera.node.matrixWorld );
                    this.backgroundBoxCamera.matrixWorldInverse.getInverse( this.backgroundBoxCamera.node.matrixWorld );


                    this.backgroundBoxMesh.material.uniforms[ "tCube" ].value = background;
                    this.backgroundBoxMesh.node.modelViewMatrix.multiplyMatrices( this.backgroundBoxCamera.matrixWorldInverse, this.backgroundBoxMesh.node.matrixWorld );

                    this.objects.update( this.backgroundBoxMesh );

                    this.renderBufferDirect( this.backgroundBoxCamera, null, this.backgroundBoxMesh.geometry, this.backgroundBoxMesh.material, this.backgroundBoxMesh, null );

                } else if ( background instanceof Bonnie3D.Texture ) {

                    if ( this.backgroundPlaneCamera === undefined ) {

                        this.backgroundPlaneCamera = new Bonnie3D.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

                        this.backgroundPlaneMesh = new Bonnie3D.Mesh(
                            new Bonnie3D.PlaneBufferGeometry( 2, 2 ),
                            new Bonnie3D.MeshBasicMaterial( { depthTest: false, depthWrite: false, fog: false } )
                        );

                    }

                    this.backgroundPlaneMesh.material.map = background;

                    this.objects.update( this.backgroundPlaneMesh );

                    this.renderBufferDirect( this.backgroundPlaneCamera, null, this.backgroundPlaneMesh.geometry, this.backgroundPlaneMesh.material, this.backgroundPlaneMesh, null );

                }

                //

                let opaqueObjects = this.currentRenderList.opaque;
                let transparentObjects = this.currentRenderList.transparent;

                if ( scene.overrideMaterial ) {

                    let overrideMaterial = scene.overrideMaterial;

                    if ( opaqueObjects.length ) this.renderObjects( opaqueObjects, scene, camera, overrideMaterial );
                    if ( transparentObjects.length ) this.renderObjects( transparentObjects, scene, camera, overrideMaterial );

                } else {

                    // opaque pass (front-to-back order)

                    if ( opaqueObjects.length ) this.renderObjects( opaqueObjects, scene, camera );

                    // transparent pass (back-to-front order)

                    if ( transparentObjects.length ) this.renderObjects( transparentObjects, scene, camera );

                }

                // custom render plugins (post pass)

                this.spritePlugin.render( scene, camera );
                this.lensFlarePlugin.render( scene, camera, this._currentViewport );

                // Generate mipmap if we're using any kind of mipmap filtering

                if ( renderTarget ) {

                    this.textures.updateRenderTargetMipmap( renderTarget );

                }

                // Ensure depth buffer writing is enabled so it can be cleared on next render

                // this.state.buffers.depth.setTest( true );
                // this.state.buffers.depth.setMask( true );
                // this.state.buffers.color.setMask( true );

                if ( camera instanceof Bonnie3D.ArrayCamera ) {

                    this.setScissorTest( false );

                }

                camera.node.onAfterRender( this );
            }
        }

        setScissorTest(boolean) {

        }

        renderObjects(renderList, scene, camera, overrideMaterial) {

        }

        renderBufferDirect ( camera, fog, geometry, material, object, group ) {

        }


        projectObject(object, camera, sortObjects) {

        }

        setupShadows( lights ) {

        }

        setupLights( lights, camera ) {

        }

        setRenderTarget ( renderTarget ) {

        }

        resetGLState() {

        }

        setDefaultGLState() {

        }

        onContextLost(event) {

            event.preventDefault();

            this.resetGLState();
            this.setDefaultGLState();

            this.properties.clear();
            this.objects.clear();

        }

        paramToGL(p) {

            let extension;

            if ( p === Bonnie3D.RepeatWrapping ) return this._gl.REPEAT;
            if ( p === Bonnie3D.ClampToEdgeWrapping ) return this._gl.CLAMP_TO_EDGE;
            if ( p === Bonnie3D.MirroredRepeatWrapping ) return this._gl.MIRRORED_REPEAT;

            if ( p === Bonnie3D.NearestFilter ) return this._gl.NEAREST;
            if ( p === Bonnie3D.NearestMipMapNearestFilter ) return this._gl.NEAREST_MIPMAP_NEAREST;
            if ( p === Bonnie3D.NearestMipMapLinearFilter ) return this._gl.NEAREST_MIPMAP_LINEAR;

            if ( p === Bonnie3D.LinearFilter ) return this._gl.LINEAR;
            if ( p === Bonnie3D.LinearMipMapNearestFilter ) return this._gl.LINEAR_MIPMAP_NEAREST;
            if ( p === Bonnie3D.LinearMipMapLinearFilter ) return this._gl.LINEAR_MIPMAP_LINEAR;

            if ( p === Bonnie3D.UnsignedByteType ) return this._gl.UNSIGNED_BYTE;
            if ( p === Bonnie3D.UnsignedShort4444Type ) return this._gl.UNSIGNED_SHORT_4_4_4_4;
            if ( p === Bonnie3D.UnsignedShort5551Type ) return this._gl.UNSIGNED_SHORT_5_5_5_1;
            if ( p === Bonnie3D.UnsignedShort565Type ) return this._gl.UNSIGNED_SHORT_5_6_5;

            if ( p === Bonnie3D.ByteType ) return this._gl.BYTE;
            if ( p === Bonnie3D.ShortType ) return this._gl.SHORT;
            if ( p === Bonnie3D.UnsignedShortType ) return this._gl.UNSIGNED_SHORT;
            if ( p === Bonnie3D.IntType ) return this._gl.INT;
            if ( p === Bonnie3D.UnsignedIntType ) return this._gl.UNSIGNED_INT;
            if ( p === Bonnie3D.FloatType ) return this._gl.FLOAT;

            if ( p === Bonnie3D.HalfFloatType ) {

                extension = this.extensions.get( 'OES_texture_half_float' );

                if ( extension !== null ) return extension.HALF_FLOAT_OES;

            }

            if ( p === Bonnie3D.AlphaFormat ) return this._gl.ALPHA;
            if ( p === Bonnie3D.RGBFormat ) return this._gl.RGB;
            if ( p === Bonnie3D.RGBAFormat ) return this._gl.RGBA;
            if ( p === Bonnie3D.LuminanceFormat ) return this._gl.LUMINANCE;
            if ( p === Bonnie3D.LuminanceAlphaFormat ) return this._gl.LUMINANCE_ALPHA;
            if ( p === Bonnie3D.DepthFormat ) return this._gl.DEPTH_COMPONENT;
            if ( p === Bonnie3D.DepthStencilFormat ) return this._gl.DEPTH_STENCIL;

            if ( p === Bonnie3D.AddEquation ) return this._gl.FUNC_ADD;
            if ( p === Bonnie3D.SubtractEquation ) return this._gl.FUNC_SUBTRACT;
            if ( p === Bonnie3D.ReverseSubtractEquation ) return this._gl.FUNC_REVERSE_SUBTRACT;

            if ( p === Bonnie3D.ZeroFactor ) return this._gl.ZERO;
            if ( p === Bonnie3D.OneFactor ) return this._gl.ONE;
            if ( p === Bonnie3D.SrcColorFactor ) return this._gl.SRC_COLOR;
            if ( p === Bonnie3D.OneMinusSrcColorFactor ) return this._gl.ONE_MINUS_SRC_COLOR;
            if ( p === Bonnie3D.SrcAlphaFactor ) return this._gl.SRC_ALPHA;
            if ( p === Bonnie3D.OneMinusSrcAlphaFactor ) return this._gl.ONE_MINUS_SRC_ALPHA;
            if ( p === Bonnie3D.DstAlphaFactor ) return this._gl.DST_ALPHA;
            if ( p === Bonnie3D.OneMinusDstAlphaFactor ) return this._gl.ONE_MINUS_DST_ALPHA;

            if ( p === Bonnie3D.DstColorFactor ) return this._gl.DST_COLOR;
            if ( p === Bonnie3D.OneMinusDstColorFactor ) return this._gl.ONE_MINUS_DST_COLOR;
            if ( p === Bonnie3D.SrcAlphaSaturateFactor ) return _this.gl.SRC_ALPHA_SATURATE;

            if ( p === Bonnie3D.RGB_S3TC_DXT1_Format || p === Bonnie3D.RGBA_S3TC_DXT1_Format ||
                p === Bonnie3D.RGBA_S3TC_DXT3_Format || p === Bonnie3D.RGBA_S3TC_DXT5_Format ) {

                extension = this.extensions.get( 'WEBGL_compressed_texture_s3tc' );

                if ( extension !== null ) {

                    if ( p === Bonnie3D.RGB_S3TC_DXT1_Format ) return extension.COMPRESSED_RGB_S3TC_DXT1_EXT;
                    if ( p === Bonnie3D.RGBA_S3TC_DXT1_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                    if ( p === Bonnie3D.RGBA_S3TC_DXT3_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                    if ( p === Bonnie3D.RGBA_S3TC_DXT5_Format ) return extension.COMPRESSED_RGBA_S3TC_DXT5_EXT;

                }

            }

            if ( p === Bonnie3D.RGB_PVRTC_4BPPV1_Format || p === Bonnie3D.RGB_PVRTC_2BPPV1_Format ||
                p === Bonnie3D.RGBA_PVRTC_4BPPV1_Format || p === Bonnie3D.RGBA_PVRTC_2BPPV1_Format ) {

                extension = this.extensions.get( 'WEBGL_compressed_texture_pvrtc' );

                if ( extension !== null ) {

                    if ( p === Bonnie3D.RGB_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                    if ( p === Bonnie3D.RGB_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                    if ( p === Bonnie3D.RGBA_PVRTC_4BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                    if ( p === Bonnie3D.RGBA_PVRTC_2BPPV1_Format ) return extension.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;

                }

            }

            if ( p === Bonnie3D.RGB_ETC1_Format ) {

                extension = this.extensions.get( 'WEBGL_compressed_texture_etc1' );

                if ( extension !== null ) return extension.COMPRESSED_RGB_ETC1_WEBGL;

            }

            if ( p === Bonnie3D.MinEquation || p === Bonnie3D.MaxEquation ) {

                extension = this.extensions.get( 'EXT_blend_minmax' );

                if ( extension !== null ) {

                    if ( p === Bonnie3D.MinEquation ) return extension.MIN_EXT;
                    if ( p === Bonnie3D.MaxEquation ) return extension.MAX_EXT;

                }

            }

            if ( p === Bonnie3D.UnsignedInt248Type ) {

                extension = this.extensions.get( 'WEBGL_depth_texture' );

                if ( extension !== null ) return extension.UNSIGNED_INT_24_8_WEBGL;

            }

            return 0;

        }

    }

    Bonnie3D.WebGLRenderer = WebGLRenderer;

}(this));