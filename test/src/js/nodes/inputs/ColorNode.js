/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ColorNode = function( color ) {

	B3D.InputNode.call( this, 'c' );

	this.value = new B3D.Color( color || 0 );

};

B3D.ColorNode.prototype = Object.create( B3D.InputNode.prototype );
B3D.ColorNode.prototype.constructor = B3D.ColorNode;

B3D.NodeMaterial.addShortcuts( B3D.ColorNode.prototype, 'value', [ 'r', 'g', 'b' ] );
