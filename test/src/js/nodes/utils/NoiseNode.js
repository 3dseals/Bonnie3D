/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.NoiseNode = function( coord ) {

	B3D.TempNode.call( this, 'fv1' );

	this.coord = coord;

};

B3D.NoiseNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.NoiseNode.prototype.constructor = B3D.NoiseNode;

B3D.NoiseNode.prototype.generate = function( builder, output ) {

	builder.include( 'snoise' );

	return builder.format( 'snoise(' + this.coord.build( builder, 'v2' ) + ')', this.getType( builder ), output );

};
