/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.StandardNodeMaterial = function() {

	this.node = new B3D.StandardNode();

	B3D.NodeMaterial.call( this, this.node, this.node );

};

B3D.StandardNodeMaterial.prototype = Object.create( B3D.NodeMaterial.prototype );
B3D.StandardNodeMaterial.prototype.constructor = B3D.StandardNodeMaterial;

B3D.NodeMaterial.addShortcuts( B3D.StandardNodeMaterial.prototype, 'node',
[ 'color', 'alpha', 'roughness', 'metalness', 'reflectivity', 'clearCoat', 'clearCoatRoughness', 'normal', 'normalScale', 'emissive', 'ambient', 'light', 'shadow', 'ao', 'environment', 'transform' ] );
