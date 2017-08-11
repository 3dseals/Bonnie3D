/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.Vector3Node = function( x, y, z ) {

	B3D.InputNode.call( this, 'v3' );

	this.type = 'v3';
	this.value = new B3D.Vector3( x, y, z );

};

B3D.Vector3Node.prototype = Object.create( B3D.InputNode.prototype );
B3D.Vector3Node.prototype.constructor = B3D.Vector3Node;

B3D.NodeMaterial.addShortcuts( B3D.Vector3Node.prototype, 'value', [ 'x', 'y', 'z' ] );
