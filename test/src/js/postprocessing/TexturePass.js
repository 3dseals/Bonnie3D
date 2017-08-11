/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.TexturePass = function ( map, opacity ) {

	B3D.Pass.call( this );

	if ( B3D.CopyShader === undefined )
		console.error( "B3D.TexturePass relies on B3D.CopyShader" );

	var shader = B3D.CopyShader;

	this.map = map;
	this.opacity = ( opacity !== undefined ) ? opacity : 1.0;

	this.uniforms = B3D.UniformsUtils.clone( shader.uniforms );

	this.material = new B3D.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader,
		depthTest: false,
		depthWrite: false

	} );

	this.needsSwap = false;

	this.camera = new B3D.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new B3D.Scene();

	this.quad = new B3D.Mesh( new B3D.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

B3D.TexturePass.prototype = Object.assign( Object.create( B3D.Pass.prototype ), {

	constructor: B3D.TexturePass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		var oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		this.quad.material = this.material;

		this.uniforms[ "opacity" ].value = this.opacity;
		this.uniforms[ "tDiffuse" ].value = this.map;
		this.material.transparent = ( this.opacity < 1.0 );

		renderer.render( this.scene, this.camera, this.renderToScreen ? null : readBuffer, this.clear );

		renderer.autoClear = oldAutoClear;
	}

} );
