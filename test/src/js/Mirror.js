/**
 * @author Slayvin / http://slayvin.net
 */

B3D.Mirror = function ( width, height, options ) {

	B3D.Mesh.call( this, new B3D.PlaneBufferGeometry( width, height ) );

	var scope = this;

	scope.name = 'mirror_' + scope.id;
	scope.matrixNeedsUpdate = true;

	options = options || {};

	var textureWidth = options.textureWidth !== undefined ? options.textureWidth : 512;
	var textureHeight = options.textureHeight !== undefined ? options.textureHeight : 512;

	var clipBias = options.clipBias !== undefined ? options.clipBias : 0.0;
	var mirrorColor = options.color !== undefined ? new B3D.Color( options.color ) : new B3D.Color( 0x7F7F7F );

	var mirrorPlane = new B3D.Plane();
	var normal = new B3D.Vector3();
	var mirrorWorldPosition = new B3D.Vector3();
	var cameraWorldPosition = new B3D.Vector3();
	var rotationMatrix = new B3D.Matrix4();
	var lookAtPosition = new B3D.Vector3( 0, 0, - 1 );
	var clipPlane = new B3D.Vector4();

	var textureMatrix = new B3D.Matrix4();

	var mirrorCamera = new B3D.PerspectiveCamera();
	mirrorCamera.matrixAutoUpdate = true;

	var parameters = {
		minFilter: B3D.LinearFilter,
		magFilter: B3D.LinearFilter,
		format: B3D.RGBFormat,
		stencilBuffer: false
	};

	var renderTarget = new B3D.WebGLRenderTarget( textureWidth, textureHeight, parameters );

	if ( ! B3D.Math.isPowerOfTwo( textureWidth ) || ! B3D.Math.isPowerOfTwo( textureHeight ) ) {

		renderTarget.texture.generateMipmaps = false;

	}

	var mirrorShader = {

		uniforms: {
			mirrorColor: { value: new B3D.Color( 0x7F7F7F ) },
			mirrorSampler: { value: null },
			textureMatrix: { value: new B3D.Matrix4() }
		},

		vertexShader: [
			'uniform mat4 textureMatrix;',
			'varying vec4 mirrorCoord;',

			'void main() {',

			'	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );',
			'	vec4 worldPosition = modelMatrix * vec4( position, 1.0 );',
			'	mirrorCoord = textureMatrix * worldPosition;',

			'	gl_Position = projectionMatrix * mvPosition;',

			'}'
		].join( '\n' ),

		fragmentShader: [
			'uniform vec3 mirrorColor;',
			'uniform sampler2D mirrorSampler;',
			'varying vec4 mirrorCoord;',

			'float blendOverlay(float base, float blend) {',
			'	return( base < 0.5 ? ( 2.0 * base * blend ) : (1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );',
			'}',

			'void main() {',
			'	vec4 color = texture2DProj(mirrorSampler, mirrorCoord);',
			'	color = vec4(blendOverlay(mirrorColor.r, color.r), blendOverlay(mirrorColor.g, color.g), blendOverlay(mirrorColor.b, color.b), 1.0);',
			'	gl_FragColor = color;',
			'}'
		].join( '\n' )

	};

	var mirrorUniforms = B3D.UniformsUtils.clone( mirrorShader.uniforms );

	var material = new B3D.ShaderMaterial( {

		fragmentShader: mirrorShader.fragmentShader,
		vertexShader: mirrorShader.vertexShader,
		uniforms: mirrorUniforms

	} );

	material.uniforms.mirrorSampler.value = renderTarget.texture;
	material.uniforms.mirrorColor.value = mirrorColor;
	material.uniforms.textureMatrix.value = textureMatrix;

	scope.material = material;

	function updateTextureMatrix( camera ) {

		camera.updateMatrixWorld();

		mirrorCamera.copy( camera );
		mirrorCamera.updateProjectionMatrix();

		scope.updateMatrixWorld();

		mirrorWorldPosition.setFromMatrixPosition( scope.matrixWorld );
		cameraWorldPosition.setFromMatrixPosition( camera.matrixWorld );

		rotationMatrix.extractRotation( scope.matrixWorld );

		normal.set( 0, 0, 1 );
		normal.applyMatrix4( rotationMatrix );

		var view = mirrorWorldPosition.clone().sub( cameraWorldPosition );
		view.reflect( normal ).negate();
		view.add( mirrorWorldPosition );

		rotationMatrix.extractRotation( camera.matrixWorld );

		lookAtPosition.set( 0, 0, - 1 );
		lookAtPosition.applyMatrix4( rotationMatrix );
		lookAtPosition.add( cameraWorldPosition );

		var target = mirrorWorldPosition.clone().sub( lookAtPosition );
		target.reflect( normal ).negate();
		target.add( mirrorWorldPosition );

		mirrorCamera.position.copy( view );
		mirrorCamera.up.set( 0, - 1, 0 );
		mirrorCamera.up.applyMatrix4( rotationMatrix );
		mirrorCamera.up.reflect( normal ).negate();
		mirrorCamera.lookAt( target );

		mirrorCamera.updateProjectionMatrix();
		mirrorCamera.updateMatrixWorld();

		// Update the texture matrix
		textureMatrix.set(
			0.5, 0.0, 0.0, 0.5,
			0.0, 0.5, 0.0, 0.5,
			0.0, 0.0, 0.5, 0.5,
			0.0, 0.0, 0.0, 1.0
		);
		textureMatrix.multiply( mirrorCamera.projectionMatrix );
		textureMatrix.multiply( mirrorCamera.matrixWorldInverse );

		// Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
		// Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
		mirrorPlane.setFromNormalAndCoplanarPoint( normal, mirrorWorldPosition );
		mirrorPlane.applyMatrix4( mirrorCamera.matrixWorldInverse );

		clipPlane.set( mirrorPlane.normal.x, mirrorPlane.normal.y, mirrorPlane.normal.z, mirrorPlane.constant );

		var q = new B3D.Vector4();
		var projectionMatrix = mirrorCamera.projectionMatrix;

		q.x = ( Math.sign( clipPlane.x ) + projectionMatrix.elements[ 8 ] ) / projectionMatrix.elements[ 0 ];
		q.y = ( Math.sign( clipPlane.y ) + projectionMatrix.elements[ 9 ] ) / projectionMatrix.elements[ 5 ];
		q.z = - 1.0;
		q.w = ( 1.0 + projectionMatrix.elements[ 10 ] ) / projectionMatrix.elements[ 14 ];

		// Calculate the scaled plane vector
		var c = clipPlane.multiplyScalar( 2.0 / clipPlane.dot( q ) );

		// Replacing the third row of the projection matrix
		projectionMatrix.elements[ 2 ] = c.x;
		projectionMatrix.elements[ 6 ] = c.y;
		projectionMatrix.elements[ 10 ] = c.z + 1.0 - clipBias;
		projectionMatrix.elements[ 14 ] = c.w;

	}

	scope.onBeforeRender = function ( renderer, scene, camera ) {

		updateTextureMatrix( camera );

		scope.visible = false;

		var currentRenderTarget = renderer.getRenderTarget();

		renderer.render( scene, mirrorCamera, renderTarget, true );
		renderer.setRenderTarget( currentRenderTarget );

		scope.visible = true;

	};

};

B3D.Mirror.prototype = Object.create( B3D.Mesh.prototype );
