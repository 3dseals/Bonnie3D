/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.FloatNode = function( value ) {

	B3D.InputNode.call( this, 'fv1' );

	this.value = [ value || 0 ];

};

B3D.FloatNode.prototype = Object.create( B3D.InputNode.prototype );
B3D.FloatNode.prototype.constructor = B3D.FloatNode;

Object.defineProperties( B3D.FloatNode.prototype, {
	number: {
		get: function() {

			return this.value[ 0 ];

		},
		set: function( val ) {

			this.value[ 0 ] = val;

		}
	}
} );
