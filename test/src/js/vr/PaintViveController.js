/**
 * @author mrdoob / http://mrdoob.com
 */

B3D.PaintViveController = function ( id ) {

	B3D.ViveController.call( this, id );

	var PI2 = Math.PI * 2;

	var MODES = { COLOR: 0, SIZE: 1 };
	var mode = MODES.COLOR;

	var color = new B3D.Color( 1, 1, 1 );
	var size = 1.0;

	//

	function generateHueTexture() {

		var canvas = document.createElement( 'canvas' );
		canvas.width = 256;
		canvas.height = 256;

		var context = canvas.getContext( '2d' );
		var imageData = context.getImageData( 0, 0, 256, 256 );
		var data = imageData.data;
		var swatchColor = new B3D.Color();

		for ( var i = 0, j = 0; i < data.length; i += 4, j ++ ) {

			var x = ( ( j % 256 ) / 256 ) - 0.5;
			var y = ( Math.floor( j / 256 ) / 256 ) - 0.5;

			swatchColor.setHSL( Math.atan2( y, x ) / PI2, 1,( 0.5 - Math.sqrt( x * x + y * y ) ) * 2.0 );

			data[ i + 0 ] = swatchColor.r * 256;
			data[ i + 1 ] = swatchColor.g * 256;
			data[ i + 2 ] = swatchColor.b * 256;
			data[ i + 3 ] = 256;

		}

		context.putImageData( imageData, 0, 0 );

		return new B3D.CanvasTexture( canvas );

	}

	// COLOR UI

	var geometry = new B3D.CircleGeometry( 1, 32 );
	var material = new B3D.MeshBasicMaterial( { map: generateHueTexture() } );
	var colorUI = new B3D.Mesh( geometry, material );
	colorUI.position.set( 0, 0.005, 0.0495 );
	colorUI.rotation.x = - 1.45;
	colorUI.scale.setScalar( 0.02 );
	this.add( colorUI );

	var geometry = new B3D.IcosahedronGeometry( 0.1, 2 );
	var material = new B3D.MeshBasicMaterial();
	material.color = color;
	var ball = new B3D.Mesh( geometry, material );
	colorUI.add( ball );


	// SIZE UI
	var sizeUI = new B3D.Group();
	sizeUI.position.set( 0, 0.005, 0.0495 );
	sizeUI.rotation.x = - 1.45;
	sizeUI.scale.setScalar( 0.02 );
	this.add( sizeUI );

	var triangleShape = new B3D.Shape();
	triangleShape.moveTo( 0, -1 );
	triangleShape.lineTo( 1, 1 );
	triangleShape.lineTo( -1, 1 );

	var geometry = new B3D.ShapeGeometry( triangleShape );
	var material = new B3D.MeshBasicMaterial( { color: 0x222222, wireframe:true } );
	var sizeUIOutline = new B3D.Mesh( geometry, material ) ;
	sizeUIOutline.position.z = 0.001;
	resizeTriangleGeometry(sizeUIOutline.geometry, 1.0);
	sizeUI.add( sizeUIOutline );

	var geometry = new B3D.ShapeGeometry( triangleShape );
	var material = new B3D.MeshBasicMaterial( {side: B3D.DoubleSide } );
	material.color = color;
	var sizeUIFill = new B3D.Mesh( geometry, material ) ;
	sizeUIFill.position.z = 0.0011;
	resizeTriangleGeometry(sizeUIFill.geometry, 0.5);
	sizeUI.add( sizeUIFill );

	sizeUI.visible = false;



	function onAxisChanged( event ) {

		if ( this.getButtonState( 'thumbpad' ) === false ) return;

		var x = event.axes[ 0 ] / 2.0;
		var y = - event.axes[ 1 ] / 2.0;

		if ( mode === MODES.COLOR ) {
			color.setHSL( Math.atan2( y, x ) / PI2, 1, ( 0.5 - Math.sqrt( x * x + y * y ) ) * 2.0 );

			ball.position.set(event.axes[ 0 ], event.axes[ 1 ], 0);
		}

		if ( mode === MODES.SIZE ) {
			var ratio = (0.5 - y);
			size = ratio * 2;

			resizeTriangleGeometry(sizeUIFill.geometry, ratio);
		}

	}

	function resizeTriangleGeometry(geometry, ratio) {

		var x = 0, y = 0;
		var fullWidth = 0.75, fullHeight = 1.5;
		var angle = Math.atan( ( fullWidth / 2 ) / fullHeight );

		var bottomY = y - fullHeight / 2;
		var height = fullHeight * ratio;
		var width = ( Math.tan( angle ) * height ) * 2;

		geometry.vertices[ 0 ].set( x, bottomY, 0 );
		geometry.vertices[ 1 ].set( x + width / 2, bottomY + height, 0 );
		geometry.vertices[ 2 ].set( x - width / 2, bottomY + height, 0 );

		geometry.verticesNeedUpdate = true;

	}

	function onGripsDown( event ) {

		if ( mode === MODES.COLOR ) {
			mode = MODES.SIZE;
			colorUI.visible = false;
			sizeUI.visible = true;
			return;
		}

		if ( mode === MODES.SIZE ) {
			mode = MODES.COLOR;
			colorUI.visible = true;
			sizeUI.visible = false;
			return;
		}

	}

	this.getColor = function () { return color; };
	this.getSize = function () { return size; };

	this.addEventListener( 'axischanged', onAxisChanged );
	this.addEventListener( 'gripsdown', onGripsDown );

};

B3D.PaintViveController.prototype = Object.create( B3D.ViveController.prototype );
B3D.PaintViveController.prototype.constructor = B3D.PaintViveController;
