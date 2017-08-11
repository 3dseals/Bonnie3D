/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.BloomPass = function ( strength, kernelSize, sigma, resolution ) {

	B3D.Pass.call( this );

	strength = ( strength !== undefined ) ? strength : 1;
	kernelSize = ( kernelSize !== undefined ) ? kernelSize : 25;
	sigma = ( sigma !== undefined ) ? sigma : 4.0;
	resolution = ( resolution !== undefined ) ? resolution : 256;

	// render targets

	var pars = { minFilter: B3D.LinearFilter, magFilter: B3D.LinearFilter, format: B3D.RGBAFormat };

	this.renderTargetX = new B3D.WebGLRenderTarget( resolution, resolution, pars );
	this.renderTargetX.texture.name = "BloomPass.x";
	this.renderTargetY = new B3D.WebGLRenderTarget( resolution, resolution, pars );
	this.renderTargetY.texture.name = "BloomPass.y";

	// copy material

	if ( B3D.CopyShader === undefined )
		console.error( "B3D.BloomPass relies on B3D.CopyShader" );

	var copyShader = B3D.CopyShader;

	this.copyUniforms = B3D.UniformsUtils.clone( copyShader.uniforms );

	this.copyUniforms[ "opacity" ].value = strength;

	this.materialCopy = new B3D.ShaderMaterial( {

		uniforms: this.copyUniforms,
		vertexShader: copyShader.vertexShader,
		fragmentShader: copyShader.fragmentShader,
		blending: B3D.AdditiveBlending,
		transparent: true

	} );

	// convolution material

	if ( B3D.ConvolutionShader === undefined )
		console.error( "B3D.BloomPass relies on B3D.ConvolutionShader" );

	var convolutionShader = B3D.ConvolutionShader;

	this.convolutionUniforms = B3D.UniformsUtils.clone( convolutionShader.uniforms );

	this.convolutionUniforms[ "uImageIncrement" ].value = B3D.BloomPass.blurX;
	this.convolutionUniforms[ "cKernel" ].value = B3D.ConvolutionShader.buildKernel( sigma );

	this.materialConvolution = new B3D.ShaderMaterial( {

		uniforms: this.convolutionUniforms,
		vertexShader:  convolutionShader.vertexShader,
		fragmentShader: convolutionShader.fragmentShader,
		defines: {
			"KERNEL_SIZE_FLOAT": kernelSize.toFixed( 1 ),
			"KERNEL_SIZE_INT": kernelSize.toFixed( 0 )
		}

	} );

	this.needsSwap = false;

	this.camera = new B3D.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new B3D.Scene();

	this.quad = new B3D.Mesh( new B3D.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

B3D.BloomPass.prototype = Object.assign( Object.create( B3D.Pass.prototype ), {

	constructor: B3D.BloomPass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( maskActive ) renderer.context.disable( renderer.context.STENCIL_TEST );

		// Render quad with blured scene into texture (convolution pass 1)

		this.quad.material = this.materialConvolution;

		this.convolutionUniforms[ "tDiffuse" ].value = readBuffer.texture;
		this.convolutionUniforms[ "uImageIncrement" ].value = B3D.BloomPass.blurX;

		renderer.render( this.scene, this.camera, this.renderTargetX, true );


		// Render quad with blured scene into texture (convolution pass 2)

		this.convolutionUniforms[ "tDiffuse" ].value = this.renderTargetX.texture;
		this.convolutionUniforms[ "uImageIncrement" ].value = B3D.BloomPass.blurY;

		renderer.render( this.scene, this.camera, this.renderTargetY, true );

		// Render original scene with superimposed blur to texture

		this.quad.material = this.materialCopy;

		this.copyUniforms[ "tDiffuse" ].value = this.renderTargetY.texture;

		if ( maskActive ) renderer.context.enable( renderer.context.STENCIL_TEST );

		renderer.render( this.scene, this.camera, readBuffer, this.clear );

	}

} );

B3D.BloomPass.blurX = new B3D.Vector2( 0.001953125, 0.0 );
B3D.BloomPass.blurY = new B3D.Vector2( 0.0, 0.001953125 );
