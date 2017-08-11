/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.Vector2Node = function( x, y ) {

	B3D.InputNode.call( this, 'v2' );

	this.value = new B3D.Vector2( x, y );

};

B3D.Vector2Node.prototype = Object.create( B3D.InputNode.prototype );
B3D.Vector2Node.prototype.constructor = B3D.Vector2Node;

B3D.NodeMaterial.addShortcuts( B3D.Vector2Node.prototype, 'value', [ 'x', 'y' ] );
