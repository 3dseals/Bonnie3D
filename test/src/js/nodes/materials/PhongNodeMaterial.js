/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.PhongNodeMaterial = function() {

	this.node = new B3D.PhongNode();

	B3D.NodeMaterial.call( this, this.node, this.node );

};

B3D.PhongNodeMaterial.prototype = Object.create( B3D.NodeMaterial.prototype );
B3D.PhongNodeMaterial.prototype.constructor = B3D.PhongNodeMaterial;

B3D.NodeMaterial.addShortcuts( B3D.PhongNodeMaterial.prototype, 'node',
[ 'color', 'alpha', 'specular', 'shininess', 'normal', 'normalScale', 'emissive', 'ambient', 'light', 'shadow', 'ao', 'environment', 'environmentAlpha', 'transform' ] );
