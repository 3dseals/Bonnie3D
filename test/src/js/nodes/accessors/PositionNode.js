/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.PositionNode = function( scope ) {

	B3D.TempNode.call( this, 'v3' );

	this.scope = scope || B3D.PositionNode.LOCAL;

};

B3D.PositionNode.LOCAL = 'local';
B3D.PositionNode.WORLD = 'world';
B3D.PositionNode.VIEW = 'view';
B3D.PositionNode.PROJECTION = 'projection';

B3D.PositionNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.PositionNode.prototype.constructor = B3D.PositionNode;

B3D.PositionNode.prototype.getType = function( builder ) {

	switch ( this.scope ) {
		case B3D.PositionNode.PROJECTION:
			return 'v4';
	}

	return this.type;

};

B3D.PositionNode.prototype.isShared = function( builder ) {

	switch ( this.scope ) {
		case B3D.PositionNode.LOCAL:
		case B3D.PositionNode.WORLD:
			return false;
	}

	return true;

};

B3D.PositionNode.prototype.generate = function( builder, output ) {

	var material = builder.material;
	var result;

	switch ( this.scope ) {

		case B3D.PositionNode.LOCAL:

			material.requestAttribs.position = true;

			if ( builder.isShader( 'vertex' ) ) result = 'transformed';
			else result = 'vPosition';

			break;

		case B3D.PositionNode.WORLD:

			material.requestAttribs.worldPosition = true;

			if ( builder.isShader( 'vertex' ) ) result = 'vWPosition';
			else result = 'vWPosition';

			break;

		case B3D.PositionNode.VIEW:

			if ( builder.isShader( 'vertex' ) ) result = '-mvPosition.xyz';
			else result = 'vViewPosition';

			break;

		case B3D.PositionNode.PROJECTION:

			if ( builder.isShader( 'vertex' ) ) result = '(projectionMatrix * modelViewMatrix * vec4( position, 1.0 ))';
			else result = 'vec4( 0.0 )';

			break;

	}

	return builder.format( result, this.getType( builder ), output );

};
