/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.CameraNode = function( scope, camera ) {

	B3D.TempNode.call( this, 'v3' );

	this.setScope( scope || B3D.CameraNode.POSITION );
	this.setCamera( camera );

};

B3D.CameraNode.fDepthColor = new B3D.FunctionNode( [
"float depthColor( float mNear, float mFar ) {",
"	#ifdef USE_LOGDEPTHBUF_EXT",
"		float depth = gl_FragDepthEXT / gl_FragCoord.w;",
"	#else",
"		float depth = gl_FragCoord.z / gl_FragCoord.w;",
"	#endif",
"	return 1.0 - smoothstep( mNear, mFar, depth );",
"}"
].join( "\n" ) );

B3D.CameraNode.POSITION = 'position';
B3D.CameraNode.DEPTH = 'depth';
B3D.CameraNode.TO_VERTEX = 'toVertex';

B3D.CameraNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.CameraNode.prototype.constructor = B3D.CameraNode;

B3D.CameraNode.prototype.setCamera = function( camera ) {

	this.camera = camera;
	this.requestUpdate = camera !== undefined;

};

B3D.CameraNode.prototype.setScope = function( scope ) {

	switch ( this.scope ) {

		case B3D.CameraNode.DEPTH:

			delete this.near;
			delete this.far;

			break;

	}

	this.scope = scope;

	switch ( scope ) {

		case B3D.CameraNode.DEPTH:

			this.near = new B3D.FloatNode( camera ? camera.near : 1 );
			this.far = new B3D.FloatNode( camera ? camera.far : 1200 );

			break;

	}

};

B3D.CameraNode.prototype.getType = function( builder ) {

	switch ( this.scope ) {
		case B3D.CameraNode.DEPTH:
			return 'fv1';
	}

	return this.type;

};

B3D.CameraNode.prototype.isUnique = function( builder ) {

	switch ( this.scope ) {
		case B3D.CameraNode.DEPTH:
		case B3D.CameraNode.TO_VERTEX:
			return true;
	}

	return false;

};

B3D.CameraNode.prototype.isShared = function( builder ) {

	switch ( this.scope ) {
		case B3D.CameraNode.POSITION:
			return false;
	}

	return true;

};

B3D.CameraNode.prototype.generate = function( builder, output ) {

	var material = builder.material;
	var result;

	switch ( this.scope ) {

		case B3D.CameraNode.POSITION:

			result = 'cameraPosition';

			break;

		case B3D.CameraNode.DEPTH:

			var func = B3D.CameraNode.fDepthColor;

			builder.include( func );

			result = func.name + '(' + this.near.build( builder, 'fv1' ) + ',' + this.far.build( builder, 'fv1' ) + ')';

			break;

		case B3D.CameraNode.TO_VERTEX:

			result = 'normalize( ' + new B3D.PositionNode( B3D.PositionNode.WORLD ).build( builder, 'v3' ) + ' - cameraPosition )';

			break;

	}

	return builder.format( result, this.getType( builder ), output );

};

B3D.CameraNode.prototype.updateFrame = function( delta ) {

	switch ( this.scope ) {

		case B3D.CameraNode.DEPTH:

			this.near.number = camera.near;
			this.far.number = camera.far;

			break;

	}

};
