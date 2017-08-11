/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.NodePass = function() {

	B3D.ShaderPass.call( this );

	this.textureID = 'renderTexture';

	this.fragment = new B3D.RawNode( new B3D.ScreenNode() );

	this.node = new B3D.NodeMaterial();
	this.node.fragment = this.fragment;

	this.build();

};

B3D.NodePass.prototype = Object.create( B3D.ShaderPass.prototype );
B3D.NodePass.prototype.constructor = B3D.NodePass;

B3D.NodeMaterial.addShortcuts( B3D.NodePass.prototype, 'fragment', [ 'value' ] );

B3D.NodePass.prototype.build = function() {

	this.node.build();

	this.uniforms = this.node.uniforms;
	this.material = this.node;

};
