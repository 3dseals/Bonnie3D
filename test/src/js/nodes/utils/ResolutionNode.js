/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ResolutionNode = function( renderer ) {

	B3D.Vector2Node.call( this );

	this.requestUpdate = true;

	this.renderer = renderer;

};

B3D.ResolutionNode.prototype = Object.create( B3D.Vector2Node.prototype );
B3D.ResolutionNode.prototype.constructor = B3D.ResolutionNode;

B3D.ResolutionNode.prototype.updateFrame = function( delta ) {

	var size = this.renderer.getSize();

	this.x = size.width;
	this.y = size.height;

};
