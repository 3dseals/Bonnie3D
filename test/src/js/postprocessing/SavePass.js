/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.SavePass = function ( renderTarget ) {

	B3D.Pass.call( this );

	if ( B3D.CopyShader === undefined )
		console.error( "B3D.SavePass relies on B3D.CopyShader" );

	var shader = B3D.CopyShader;

	this.textureID = "tDiffuse";

	this.uniforms = B3D.UniformsUtils.clone( shader.uniforms );

	this.material = new B3D.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.renderTarget = renderTarget;

	if ( this.renderTarget === undefined ) {

		this.renderTarget = new B3D.WebGLRenderTarget( window.innerWidth, window.innerHeight, { minFilter: B3D.LinearFilter, magFilter: B3D.LinearFilter, format: B3D.RGBFormat, stencilBuffer: false } );
		this.renderTarget.texture.name = "SavePass.rt";

	}

	this.needsSwap = false;

	this.camera = new B3D.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene = new B3D.Scene();

	this.quad = new B3D.Mesh( new B3D.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

B3D.SavePass.prototype = Object.assign( Object.create( B3D.Pass.prototype ), {

	constructor: B3D.SavePass,

	render: function ( renderer, writeBuffer, readBuffer ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer.texture;

		}

		this.quad.material = this.material;

		renderer.render( this.scene, this.camera, this.renderTarget, this.clear );

	}

} );
