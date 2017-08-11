/**
 * @author alteredq / http://alteredqualia.com/
 */

B3D.ShaderPass = function ( shader, textureID ) {

	B3D.Pass.call( this );

	this.textureID = ( textureID !== undefined ) ? textureID : "tDiffuse";

	if ( shader instanceof B3D.ShaderMaterial ) {

		this.uniforms = shader.uniforms;

		this.material = shader;

	} else if ( shader ) {

		this.uniforms = B3D.UniformsUtils.clone( shader.uniforms );

		this.material = new B3D.ShaderMaterial( {

			defines: shader.defines || {},
			uniforms: this.uniforms,
			vertexShader: shader.vertexShader,
			fragmentShader: shader.fragmentShader

		} );

	}

	this.camera = new B3D.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );
	this.scene = new B3D.Scene();

	this.quad = new B3D.Mesh( new B3D.PlaneBufferGeometry( 2, 2 ), null );
	this.quad.frustumCulled = false; // Avoid getting clipped
	this.scene.add( this.quad );

};

B3D.ShaderPass.prototype = Object.assign( Object.create( B3D.Pass.prototype ), {

	constructor: B3D.ShaderPass,

	render: function( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer.texture;

		}

		this.quad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.render( this.scene, this.camera );

		} else {

			renderer.render( this.scene, this.camera, writeBuffer, this.clear );

		}

	}

} );
