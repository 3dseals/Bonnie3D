/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.IntNode = function( value ) {

	B3D.InputNode.call( this, 'iv1' );

	this.value = [ Math.floor( value || 0 ) ];

};

B3D.IntNode.prototype = Object.create( B3D.InputNode.prototype );
B3D.IntNode.prototype.constructor = B3D.IntNode;

Object.defineProperties( B3D.IntNode.prototype, {
	number: {
		get: function() {

			return this.value[ 0 ];

		},
		set: function( val ) {

			this.value[ 0 ] = Math.floor( val );

		}
	}
} );
