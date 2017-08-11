/**
 * @author mrdoob / http://mrdoob.com/
 */

B3D.CSS2DObject = function ( element ) {

	B3D.Object3D.call( this );

	this.element = element;
	this.element.style.position = 'absolute';

	this.addEventListener( 'removed', function ( event ) {

		if ( this.element.parentNode !== null ) {

			this.element.parentNode.removeChild( this.element );

		}

	} );

};

B3D.CSS2DObject.prototype = Object.create( B3D.Object3D.prototype );
B3D.CSS2DObject.prototype.constructor = B3D.CSS2DObject;

//

B3D.CSS2DRenderer = function () {

	console.log( 'B3D.CSS2DRenderer', B3D.REVISION );

	var _width, _height;
	var _widthHalf, _heightHalf;

	var vector = new B3D.Vector3();
	var viewMatrix = new B3D.Matrix4();
	var viewProjectionMatrix = new B3D.Matrix4();

	var domElement = document.createElement( 'div' );
	domElement.style.overflow = 'hidden';

	this.domElement = domElement;

	this.setSize = function ( width, height ) {

		_width = width;
		_height = height;

		_widthHalf = _width / 2;
		_heightHalf = _height / 2;

		domElement.style.width = width + 'px';
		domElement.style.height = height + 'px';

	};

	var renderObject = function ( object, camera ) {

		if ( object instanceof B3D.CSS2DObject ) {

			vector.setFromMatrixPosition( object.matrixWorld );
			vector.applyMatrix4( viewProjectionMatrix );

			var element = object.element;
			var style = 'translate(-50%,-50%) translate(' + ( vector.x * _widthHalf + _widthHalf ) + 'px,' + ( - vector.y * _heightHalf + _heightHalf ) + 'px)';

			element.style.WebkitTransform = style;
			element.style.MozTransform = style;
			element.style.oTransform = style;
			element.style.transform = style;

			if ( element.parentNode !== domElement ) {

				domElement.appendChild( element );

			}

		}

		for ( var i = 0, l = object.children.length; i < l; i ++ ) {

			renderObject( object.children[ i ], camera );

		}

	};

	this.render = function ( scene, camera ) {

		scene.updateMatrixWorld();

		if ( camera.parent === null ) camera.updateMatrixWorld();

		viewMatrix.copy( camera.matrixWorldInverse );
		viewProjectionMatrix.multiplyMatrices( camera.projectionMatrix, viewMatrix );

		renderObject( scene, camera );

	};

};
