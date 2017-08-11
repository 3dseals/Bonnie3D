/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.Vector4Node = function( x, y, z, w ) {

	B3D.InputNode.call( this, 'v4' );

	this.value = new B3D.Vector4( x, y, z, w );

};

B3D.Vector4Node.prototype = Object.create( B3D.InputNode.prototype );
B3D.Vector4Node.prototype.constructor = B3D.Vector4Node;

B3D.NodeMaterial.addShortcuts( B3D.Vector4Node.prototype, 'value', [ 'x', 'y', 'z', 'w' ] );
