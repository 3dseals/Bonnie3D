/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.LuminanceNode = function( rgb ) {

	B3D.TempNode.call( this, 'fv1' );

	this.rgb = rgb;

};

B3D.LuminanceNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.LuminanceNode.prototype.constructor = B3D.LuminanceNode;

B3D.LuminanceNode.prototype.generate = function( builder, output ) {

	builder.include( 'luminance_rgb' );

	return builder.format( 'luminance_rgb(' + this.rgb.build( builder, 'v3' ) + ')', this.getType( builder ), output );

};
