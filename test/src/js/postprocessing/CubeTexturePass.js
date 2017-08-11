/**
 * @author bhouston / http://clara.io/
 */

B3D.CubeTexturePass = function ( camera, envMap, opacity ) {

	B3D.Pass.call( this );

	this.camera = camera;

	this.needsSwap = false;

	this.cubeShader = B3D.ShaderLib[ 'cube' ];
	this.cubeMesh = new B3D.Mesh(
		new B3D.BoxBufferGeometry( 10, 10, 10 ),
		new B3D.ShaderMaterial( {
			uniforms: this.cubeShader.uniforms,
			vertexShader: this.cubeShader.vertexShader,
			fragmentShader: this.cubeShader.fragmentShader,
			depthTest: false,
			depthWrite: false,
			side: B3D.BackSide
		} )
	);

	this.envMap = envMap;
	this.opacity = ( opacity !== undefined ) ? opacity : 1.0;

	this.cubeScene = new B3D.Scene();
	this.cubeCamera = new B3D.PerspectiveCamera();
	this.cubeScene.add( this.cubeMesh );

};

B3D.CubeTexturePass.prototype = Object.assign( Object.create( B3D.Pass.prototype ), {

	constructor: B3D.CubeTexturePass,

	render: function ( renderer, writeBuffer, readBuffer, delta, maskActive ) {

		var oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		this.cubeCamera.projectionMatrix.copy( this.camera.projectionMatrix );
		this.cubeCamera.quaternion.setFromRotationMatrix( this.camera.matrixWorld );

		this.cubeMesh.material.uniforms[ "tCube" ].value = this.envMap;
		this.cubeMesh.material.uniforms[ "opacity" ].value = this.opacity;
		this.cubeMesh.material.transparent = ( this.opacity < 1.0 );

		renderer.render( this.cubeScene, this.cubeCamera, this.renderToScreen ? null : readBuffer, this.clear );

		renderer.autoClear = oldAutoClear;

	}

} );
