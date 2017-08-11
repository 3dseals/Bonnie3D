/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.DotScreenPass = function ( center, angle, scale ) {

	B3D.Pass.call( this );

	if ( B3D.DotScreenShader === undefined )
		console.error( "B3D.DotScreenPass relies on B3D.DotScreenShader" );

	var shader = B3D.DotScreenShader;

	this.uniforms = B3D.UniformsUtils.clone( shader.uniforms );

	if ( center !== undefined ) this.uniforms[ "center" ].value.copy( center );
	if ( angle !== undefined ) this.uniforms[ "angle" ].value = angle;
	if ( scale !== undefined ) this.uniforms[ "scale" ].value = scale;

	this.material = new B3D.ShaderMaterial( {

		uniforms: this.uniforms,
		vertexShader: shader.vertexShader,
		fragmentShader: shader.fragmentShader

	} );

	this.camera = new B3D.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene  = new B3D.Scene();

	this.quad = new B3D.Mesh( new B3D.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

B3D.DotScreenPass.prototype = Object.assign( Object.create( B3D.Pass.prototype ), {

	constructor: B3D.DotScreenPass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		this.uniforms[ "tDiffuse" ].value = readBuffer.texture;
		this.uniforms[ "tSize" ].value.set( readBuffer.width, readBuffer.height );

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

} );
