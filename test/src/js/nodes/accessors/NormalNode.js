/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.NormalNode = function( scope ) {

	B3D.TempNode.call( this, 'v3' );

	this.scope = scope || B3D.NormalNode.LOCAL;

};

B3D.NormalNode.LOCAL = 'local';
B3D.NormalNode.WORLD = 'world';
B3D.NormalNode.VIEW = 'view';

B3D.NormalNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.NormalNode.prototype.constructor = B3D.NormalNode;

B3D.NormalNode.prototype.isShared = function( builder ) {

	switch ( this.scope ) {
		case B3D.NormalNode.WORLD:
			return true;
	}

	return false;

};

B3D.NormalNode.prototype.generate = function( builder, output ) {

	var material = builder.material;
	var result;

	switch ( this.scope ) {

		case B3D.NormalNode.LOCAL:

			material.requestAttribs.normal = true;

			if ( builder.isShader( 'vertex' ) ) result = 'normal';
			else result = 'vObjectNormal';

			break;

		case B3D.NormalNode.WORLD:

			material.requestAttribs.worldNormal = true;

			if ( builder.isShader( 'vertex' ) ) result = '( modelMatrix * vec4( objectNormal, 0.0 ) ).xyz';
			else result = 'vWNormal';

			break;

		case B3D.NormalNode.VIEW:

			result = 'vNormal';

			break;

	}

	return builder.format( result, this.getType( builder ), output );

};
