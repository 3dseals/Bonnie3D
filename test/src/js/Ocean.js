B3D.Ocean = function ( renderer, camera, scene, options ) {

	// flag used to trigger parameter changes
	this.changed = true;
	this.initial = true;

	// Assign required parameters as object properties
	this.oceanCamera = new B3D.OrthographicCamera(); //camera.clone();
	this.oceanCamera.position.z = 1;
	this.renderer = renderer;
	this.renderer.clearColor( 0xffffff );

	this.scene = new B3D.Scene();

	// Assign optional parameters as variables and object properties
	function optionalParameter( value, defaultValue ) {

		return value !== undefined ? value : defaultValue;

	}
	options = options || {};
	this.clearColor = optionalParameter( options.CLEAR_COLOR, [ 1.0, 1.0, 1.0, 0.0 ] );
	this.geometryOrigin = optionalParameter( options.GEOMETRY_ORIGIN, [ - 1000.0, - 1000.0 ] );
	this.sunDirectionX = optionalParameter( options.SUN_DIRECTION[ 0 ], - 1.0 );
	this.sunDirectionY = optionalParameter( options.SUN_DIRECTION[ 1 ], 1.0 );
	this.sunDirectionZ = optionalParameter( options.SUN_DIRECTION[ 2 ], 1.0 );
	this.oceanColor = optionalParameter( options.OCEAN_COLOR, new B3D.Vector3( 0.004, 0.016, 0.047 ) );
	this.skyColor = optionalParameter( options.SKY_COLOR, new B3D.Vector3( 3.2, 9.6, 12.8 ) );
	this.exposure = optionalParameter( options.EXPOSURE, 0.35 );
	this.geometryResolution = optionalParameter( options.GEOMETRY_RESOLUTION, 32 );
	this.geometrySize = optionalParameter( options.GEOMETRY_SIZE, 2000 );
	this.resolution = optionalParameter( options.RESOLUTION, 64 );
	this.floatSize = optionalParameter( options.SIZE_OF_FLOAT, 4 );
	this.windX = optionalParameter( options.INITIAL_WIND[ 0 ], 10.0 );
	this.windY = optionalParameter( options.INITIAL_WIND[ 1 ], 10.0 );
	this.size = optionalParameter( options.INITIAL_SIZE, 250.0 );
	this.choppiness = optionalParameter( options.INITIAL_CHOPPINESS, 1.5 );

	//
	this.matrixNeedsUpdate = false;

	// Setup framebuffer pipeline
	var renderTargetType = optionalParameter( options.USE_HALF_FLOAT, false ) ? B3D.HalfFloatType : B3D.FloatType;
	var LinearClampParams = {
		minFilter: B3D.LinearFilter,
		magFilter: B3D.LinearFilter,
		wrapS: B3D.ClampToEdgeWrapping,
		wrapT: B3D.ClampToEdgeWrapping,
		format: B3D.RGBAFormat,
		stencilBuffer: false,
		depthBuffer: false,
		premultiplyAlpha: false,
		type: renderTargetType
	};
	var NearestClampParams = {
		minFilter: B3D.NearestFilter,
		magFilter: B3D.NearestFilter,
		wrapS: B3D.ClampToEdgeWrapping,
		wrapT: B3D.ClampToEdgeWrapping,
		format: B3D.RGBAFormat,
		stencilBuffer: false,
		depthBuffer: false,
		premultiplyAlpha: false,
		type: renderTargetType
	};
	var NearestRepeatParams = {
		minFilter: B3D.NearestFilter,
		magFilter: B3D.NearestFilter,
		wrapS: B3D.RepeatWrapping,
		wrapT: B3D.RepeatWrapping,
		format: B3D.RGBAFormat,
		stencilBuffer: false,
		depthBuffer: false,
		premultiplyAlpha: false,
		type: renderTargetType
	};
	this.initialSpectrumFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, NearestRepeatParams );
	this.spectrumFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, NearestClampParams );
	this.pingPhaseFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, NearestClampParams );
	this.pongPhaseFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, NearestClampParams );
	this.pingTransformFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, NearestClampParams );
	this.pongTransformFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, NearestClampParams );
	this.displacementMapFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, LinearClampParams );
	this.normalMapFramebuffer = new B3D.WebGLRenderTarget( this.resolution, this.resolution, LinearClampParams );

	// Define shaders and constant uniforms
	////////////////////////////////////////

	// 0 - The vertex shader used in all of the simulation steps
	var fullscreeenVertexShader = B3D.ShaderLib[ "ocean_sim_vertex" ];

	// 1 - Horizontal wave vertices used for FFT
	var oceanHorizontalShader = B3D.ShaderLib[ "ocean_subtransform" ];
	var oceanHorizontalUniforms = B3D.UniformsUtils.clone( oceanHorizontalShader.uniforms );
	this.materialOceanHorizontal = new B3D.ShaderMaterial( {
		uniforms: oceanHorizontalUniforms,
		vertexShader: fullscreeenVertexShader.vertexShader,
		fragmentShader: "#define HORIZONTAL \n" + oceanHorizontalShader.fragmentShader
	} );
	this.materialOceanHorizontal.uniforms.u_transformSize = { value: this.resolution };
	this.materialOceanHorizontal.uniforms.u_subtransformSize = { value: null };
	this.materialOceanHorizontal.uniforms.u_input = { value: null };
	this.materialOceanHorizontal.depthTest = false;

	// 2 - Vertical wave vertices used for FFT
	var oceanVerticalShader = B3D.ShaderLib[ "ocean_subtransform" ];
	var oceanVerticalUniforms = B3D.UniformsUtils.clone( oceanVerticalShader.uniforms );
	this.materialOceanVertical = new B3D.ShaderMaterial( {
		uniforms: oceanVerticalUniforms,
		vertexShader: fullscreeenVertexShader.vertexShader,
		fragmentShader: oceanVerticalShader.fragmentShader
	} );
	this.materialOceanVertical.uniforms.u_transformSize = { value: this.resolution };
	this.materialOceanVertical.uniforms.u_subtransformSize = { value: null };
	this.materialOceanVertical.uniforms.u_input = { value: null };
	this.materialOceanVertical.depthTest = false;

	// 3 - Initial spectrum used to generate height map
	var initialSpectrumShader = B3D.ShaderLib[ "ocean_initial_spectrum" ];
	var initialSpectrumUniforms = B3D.UniformsUtils.clone( initialSpectrumShader.uniforms );
	this.materialInitialSpectrum = new B3D.ShaderMaterial( {
		uniforms: initialSpectrumUniforms,
		vertexShader: fullscreeenVertexShader.vertexShader,
		fragmentShader: initialSpectrumShader.fragmentShader
	} );
	this.materialInitialSpectrum.uniforms.u_wind = { value: new B3D.Vector2() };
	this.materialInitialSpectrum.uniforms.u_resolution = { value: this.resolution };
	this.materialInitialSpectrum.depthTest = false;

	// 4 - Phases used to animate heightmap
	var phaseShader = B3D.ShaderLib[ "ocean_phase" ];
	var phaseUniforms = B3D.UniformsUtils.clone( phaseShader.uniforms );
	this.materialPhase = new B3D.ShaderMaterial( {
		uniforms: phaseUniforms,
		vertexShader: fullscreeenVertexShader.vertexShader,
		fragmentShader: phaseShader.fragmentShader
	} );
	this.materialPhase.uniforms.u_resolution = { value: this.resolution };
	this.materialPhase.depthTest = false;

	// 5 - Shader used to update spectrum
	var spectrumShader = B3D.ShaderLib[ "ocean_spectrum" ];
	var spectrumUniforms = B3D.UniformsUtils.clone( spectrumShader.uniforms );
	this.materialSpectrum = new B3D.ShaderMaterial( {
		uniforms: spectrumUniforms,
		vertexShader: fullscreeenVertexShader.vertexShader,
		fragmentShader: spectrumShader.fragmentShader
	} );
	this.materialSpectrum.uniforms.u_initialSpectrum = { value: null };
	this.materialSpectrum.uniforms.u_resolution = { value: this.resolution };
	this.materialSpectrum.depthTest = false;

	// 6 - Shader used to update spectrum normals
	var normalShader = B3D.ShaderLib[ "ocean_normals" ];
	var normalUniforms = B3D.UniformsUtils.clone( normalShader.uniforms );
	this.materialNormal = new B3D.ShaderMaterial( {
		uniforms: normalUniforms,
		vertexShader: fullscreeenVertexShader.vertexShader,
		fragmentShader: normalShader.fragmentShader
	} );
	this.materialNormal.uniforms.u_displacementMap = { value: null };
	this.materialNormal.uniforms.u_resolution = { value: this.resolution };
	this.materialNormal.depthTest = false;

	// 7 - Shader used to update normals
	var oceanShader = B3D.ShaderLib[ "ocean_main" ];
	var oceanUniforms = B3D.UniformsUtils.clone( oceanShader.uniforms );
	this.materialOcean = new B3D.ShaderMaterial( {
		uniforms: oceanUniforms,
		vertexShader: oceanShader.vertexShader,
		fragmentShader: oceanShader.fragmentShader
	} );
	// this.materialOcean.wireframe = true;
	this.materialOcean.uniforms.u_geometrySize = { value: this.resolution };
	this.materialOcean.uniforms.u_displacementMap = { value: this.displacementMapFramebuffer.texture };
	this.materialOcean.uniforms.u_normalMap = { value: this.normalMapFramebuffer.texture };
	this.materialOcean.uniforms.u_oceanColor = { value: this.oceanColor };
	this.materialOcean.uniforms.u_skyColor = { value: this.skyColor };
	this.materialOcean.uniforms.u_sunDirection = { value: new B3D.Vector3( this.sunDirectionX, this.sunDirectionY, this.sunDirectionZ ) };
	this.materialOcean.uniforms.u_exposure = { value: this.exposure };

	// Disable blending to prevent default premultiplied alpha values
	this.materialOceanHorizontal.blending = 0;
	this.materialOceanVertical.blending = 0;
	this.materialInitialSpectrum.blending = 0;
	this.materialPhase.blending = 0;
	this.materialSpectrum.blending = 0;
	this.materialNormal.blending = 0;
	this.materialOcean.blending = 0;

	// Create the simulation plane
	this.screenQuad = new B3D.Mesh( new B3D.PlaneBufferGeometry( 2, 2 ) );
	this.scene.add( this.screenQuad );

	// Initialise spectrum data
	this.generateSeedPhaseTexture();

	// Generate the ocean mesh
	this.generateMesh();

};

B3D.Ocean.prototype.generateMesh = function () {

	var geometry = new B3D.PlaneBufferGeometry( this.geometrySize, this.geometrySize, this.geometryResolution, this.geometryResolution );

	geometry.rotateX( - Math.PI / 2 );

	this.oceanMesh = new B3D.Mesh( geometry, this.materialOcean );

};

B3D.Ocean.prototype.render = function () {

	this.scene.overrideMaterial = null;

	if ( this.changed )
		this.renderInitialSpectrum();

	this.renderWavePhase();
	this.renderSpectrum();
	this.renderSpectrumFFT();
	this.renderNormalMap();
	this.scene.overrideMaterial = null;

};

B3D.Ocean.prototype.generateSeedPhaseTexture = function() {

	// Setup the seed texture
	this.pingPhase = true;
	var phaseArray = new window.Float32Array( this.resolution * this.resolution * 4 );
	for ( var i = 0; i < this.resolution; i ++ ) {

		for ( var j = 0; j < this.resolution; j ++ ) {

			phaseArray[ i * this.resolution * 4 + j * 4 ] =  Math.random() * 2.0 * Math.PI;
			phaseArray[ i * this.resolution * 4 + j * 4 + 1 ] = 0.0;
			phaseArray[ i * this.resolution * 4 + j * 4 + 2 ] = 0.0;
			phaseArray[ i * this.resolution * 4 + j * 4 + 3 ] = 0.0;

		}

	}

	this.pingPhaseTexture = new B3D.DataTexture( phaseArray, this.resolution, this.resolution, B3D.RGBAFormat );
	this.pingPhaseTexture.wrapS = B3D.ClampToEdgeWrapping;
	this.pingPhaseTexture.wrapT = B3D.ClampToEdgeWrapping;
	this.pingPhaseTexture.type = B3D.FloatType;
	this.pingPhaseTexture.needsUpdate = true;

};

B3D.Ocean.prototype.renderInitialSpectrum = function () {

	this.scene.overrideMaterial = this.materialInitialSpectrum;
	this.materialInitialSpectrum.uniforms.u_wind.value.set( this.windX, this.windY );
	this.materialInitialSpectrum.uniforms.u_size.value = this.size;
	this.renderer.render( this.scene, this.oceanCamera, this.initialSpectrumFramebuffer, true );

};

B3D.Ocean.prototype.renderWavePhase = function () {

	this.scene.overrideMaterial = this.materialPhase;
	this.screenQuad.material = this.materialPhase;
	if ( this.initial ) {

		this.materialPhase.uniforms.u_phases.value = this.pingPhaseTexture;
		this.initial = false;

	}else {

		this.materialPhase.uniforms.u_phases.value = this.pingPhase ? this.pingPhaseFramebuffer.texture : this.pongPhaseFramebuffer.texture;

	}
	this.materialPhase.uniforms.u_deltaTime.value = this.deltaTime;
	this.materialPhase.uniforms.u_size.value = this.size;
	this.renderer.render( this.scene, this.oceanCamera, this.pingPhase ? this.pongPhaseFramebuffer : this.pingPhaseFramebuffer );
	this.pingPhase = ! this.pingPhase;

};

B3D.Ocean.prototype.renderSpectrum = function () {

	this.scene.overrideMaterial = this.materialSpectrum;
	this.materialSpectrum.uniforms.u_initialSpectrum.value = this.initialSpectrumFramebuffer.texture;
	this.materialSpectrum.uniforms.u_phases.value = this.pingPhase ? this.pingPhaseFramebuffer.texture : this.pongPhaseFramebuffer.texture;
	this.materialSpectrum.uniforms.u_choppiness.value = this.choppiness;
	this.materialSpectrum.uniforms.u_size.value = this.size;
	this.renderer.render( this.scene, this.oceanCamera, this.spectrumFramebuffer );

};

B3D.Ocean.prototype.renderSpectrumFFT = function() {

	// GPU FFT using Stockham formulation
	var iterations = Math.log( this.resolution ) / Math.log( 2 ); // log2

	this.scene.overrideMaterial = this.materialOceanHorizontal;

	for ( var i = 0; i < iterations; i ++ ) {

		if ( i === 0 ) {

			this.materialOceanHorizontal.uniforms.u_input.value = this.spectrumFramebuffer.texture;
			this.materialOceanHorizontal.uniforms.u_subtransformSize.value = Math.pow( 2, ( i % ( iterations ) ) + 1 );
			this.renderer.render( this.scene, this.oceanCamera, this.pingTransformFramebuffer );

		} else if ( i % 2 === 1 ) {

			this.materialOceanHorizontal.uniforms.u_input.value = this.pingTransformFramebuffer.texture;
			this.materialOceanHorizontal.uniforms.u_subtransformSize.value = Math.pow( 2, ( i % ( iterations ) ) + 1 );
			this.renderer.render( this.scene, this.oceanCamera, this.pongTransformFramebuffer );

		} else {

			this.materialOceanHorizontal.uniforms.u_input.value = this.pongTransformFramebuffer.texture;
			this.materialOceanHorizontal.uniforms.u_subtransformSize.value = Math.pow( 2, ( i % ( iterations ) ) + 1 );
			this.renderer.render( this.scene, this.oceanCamera, this.pingTransformFramebuffer );

		}

	}
	this.scene.overrideMaterial = this.materialOceanVertical;
	for ( var i = iterations; i < iterations * 2; i ++ ) {

		if ( i === iterations * 2 - 1 ) {

			this.materialOceanVertical.uniforms.u_input.value = ( iterations % 2 === 0 ) ? this.pingTransformFramebuffer.texture : this.pongTransformFramebuffer.texture;
			this.materialOceanVertical.uniforms.u_subtransformSize.value = Math.pow( 2, ( i % ( iterations ) ) + 1 );
			this.renderer.render( this.scene, this.oceanCamera, this.displacementMapFramebuffer );

		} else if ( i % 2 === 1 ) {

			this.materialOceanVertical.uniforms.u_input.value = this.pingTransformFramebuffer.texture;
			this.materialOceanVertical.uniforms.u_subtransformSize.value = Math.pow( 2, ( i % ( iterations ) ) + 1 );
			this.renderer.render( this.scene, this.oceanCamera, this.pongTransformFramebuffer );

		} else {

			this.materialOceanVertical.uniforms.u_input.value = this.pongTransformFramebuffer.texture;
			this.materialOceanVertical.uniforms.u_subtransformSize.value = Math.pow( 2, ( i % ( iterations ) ) + 1 );
			this.renderer.render( this.scene, this.oceanCamera, this.pingTransformFramebuffer );

		}

	}

};

B3D.Ocean.prototype.renderNormalMap = function () {

	this.scene.overrideMaterial = this.materialNormal;
	if ( this.changed ) this.materialNormal.uniforms.u_size.value = this.size;
	this.materialNormal.uniforms.u_displacementMap.value = this.displacementMapFramebuffer.texture;
	this.renderer.render( this.scene, this.oceanCamera, this.normalMapFramebuffer, true );

};
