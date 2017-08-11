/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ScreenNode = function( coord ) {

	B3D.TextureNode.call( this, undefined, coord );

};

B3D.ScreenNode.prototype = Object.create( B3D.TextureNode.prototype );
B3D.ScreenNode.prototype.constructor = B3D.ScreenNode;

B3D.ScreenNode.prototype.isUnique = function() {

	return true;

};

B3D.ScreenNode.prototype.getTexture = function( builder, output ) {

	return B3D.InputNode.prototype.generate.call( this, builder, output, this.getUuid(), 't', 'renderTexture' );

};
