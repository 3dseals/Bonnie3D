/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.JoinNode = function( x, y, z, w ) {

	B3D.TempNode.call( this, 'fv1' );

	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;

};

B3D.JoinNode.inputs = [ 'x', 'y', 'z', 'w' ];

B3D.JoinNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.JoinNode.prototype.constructor = B3D.JoinNode;

B3D.JoinNode.prototype.getNumElements = function() {

	var inputs = B3D.JoinNode.inputs;
	var i = inputs.length;

	while ( i -- ) {

		if ( this[ inputs[ i ] ] !== undefined ) {

			++ i;
			break;

		}

	}

	return Math.max( i, 2 );

};

B3D.JoinNode.prototype.getType = function( builder ) {

	return builder.getFormatFromLength( this.getNumElements() );

};

B3D.JoinNode.prototype.generate = function( builder, output ) {

	var material = builder.material;

	var type = this.getType( builder );
	var length = this.getNumElements();

	var inputs = B3D.JoinNode.inputs;
	var outputs = [];

	for ( var i = 0; i < length; i ++ ) {

		var elm = this[ inputs[ i ] ];

		outputs.push( elm ? elm.build( builder, 'fv1' ) : '0.' );

	}

	var code = ( length > 1 ? builder.getConstructorFromLength( length ) : '' ) + '(' + outputs.join( ',' ) + ')';

	return builder.format( code, type, output );

};
