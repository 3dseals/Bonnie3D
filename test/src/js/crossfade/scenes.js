function generateGeometry( objectType, numObjects ) {

	var geometry = new B3D.Geometry();

	function applyVertexColors( g, c ) {

		g.faces.forEach( function( f ) {

			var n = ( f instanceof B3D.Face3 ) ? 3 : 4;

			for ( var j = 0; j < n; j ++ ) {

				f.vertexColors[ j ] = c;

			}

		} );

	}

	for ( var i = 0; i < numObjects; i ++ ) {

		var position = new B3D.Vector3();

		position.x = Math.random() * 10000 - 5000;
		position.y = Math.random() * 6000 - 3000;
		position.z = Math.random() * 8000 - 4000;

		var rotation = new B3D.Euler();

		rotation.x = Math.random() * 2 * Math.PI;
		rotation.y = Math.random() * 2 * Math.PI;
		rotation.z = Math.random() * 2 * Math.PI;

		var scale = new B3D.Vector3();

		var geom, color = new B3D.Color();

		scale.x = Math.random() * 200 + 100;

		if ( objectType == "cube" ) {

			geom = new B3D.BoxGeometry( 1, 1, 1 );
			scale.y = Math.random() * 200 + 100;
			scale.z = Math.random() * 200 + 100;
			color.setRGB( 0, 0, Math.random() + 0.1 );

		} else if ( objectType == "sphere" ) {

			geom = new B3D.IcosahedronGeometry( 1, 1 );
			scale.y = scale.z = scale.x;
			color.setRGB( Math.random() + 0.1, 0, 0 );

		}

		// give the geom's vertices a random color, to be displayed
		applyVertexColors( geom, color );

		var mesh = new B3D.Mesh( geom );
		mesh.position.copy( position );
		mesh.rotation.copy( rotation );
		mesh.scale.copy( scale );
		mesh.updateMatrix();

		geometry.merge( mesh.geometry, mesh.matrix );

	}

	return geometry;

}

function Scene ( type, numObjects, cameraZ, fov, rotationSpeed, clearColor ) {

	this.clearColor = clearColor;

	this.camera = new B3D.PerspectiveCamera( fov, window.innerWidth / window.innerHeight, 1, 10000 );
	this.camera.position.z = cameraZ;

	// Setup scene
	this.scene = new B3D.Scene();
	this.scene.add( new B3D.AmbientLight( 0x555555 ) );

	var light = new B3D.SpotLight( 0xffffff, 1.5 );
	light.position.set( 0, 500, 2000 );
	this.scene.add( light );

	this.rotationSpeed = rotationSpeed;

	var defaultMaterial = new B3D.MeshPhongMaterial( { color: 0xffffff, shading: B3D.FlatShading, vertexColors: B3D.VertexColors } );
	this.mesh = new B3D.Mesh( generateGeometry( type, numObjects ), defaultMaterial );
	this.scene.add( this.mesh );

	var renderTargetParameters = { minFilter: B3D.LinearFilter, magFilter: B3D.LinearFilter, format: B3D.RGBFormat, stencilBuffer: false };
	this.fbo = new B3D.WebGLRenderTarget( window.innerWidth, window.innerHeight, renderTargetParameters );

	this.render = function( delta, rtt ) {

		this.mesh.rotation.x += delta * this.rotationSpeed.x;
		this.mesh.rotation.y += delta * this.rotationSpeed.y;
		this.mesh.rotation.z += delta * this.rotationSpeed.z;

		renderer.setClearColor( this.clearColor );

		if ( rtt )
			renderer.render( this.scene, this.camera, this.fbo, true );
		else
			renderer.render( this.scene, this.camera );

	};

}
