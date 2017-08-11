/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ScreenUVNode = function( resolution ) {

	B3D.TempNode.call( this, 'v2' );

	this.resolution = resolution;

};

B3D.ScreenUVNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.ScreenUVNode.prototype.constructor = B3D.ScreenUVNode;

B3D.ScreenUVNode.prototype.generate = function( builder, output ) {

	var material = builder.material;
	var result;

	if ( builder.isShader( 'fragment' ) ) {

		result = '(gl_FragCoord.xy/' + this.resolution.build( builder, 'v2' ) + ')';

	} else {

		console.warn( "B3D.ScreenUVNode is not compatible with " + builder.shader + " shader." );

		result = 'vec2( 0.0 )';

	}

	return builder.format( result, this.getType( builder ), output );

};
