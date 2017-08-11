/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ColorsNode = function( index ) {

	B3D.TempNode.call( this, 'v4', { shared: false } );

	this.index = index || 0;

};

B3D.ColorsNode.vertexDict = [ 'color', 'color2' ];
B3D.ColorsNode.fragmentDict = [ 'vColor', 'vColor2' ];

B3D.ColorsNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.ColorsNode.prototype.constructor = B3D.ColorsNode;

B3D.ColorsNode.prototype.generate = function( builder, output ) {

	var material = builder.material;
	var result;

	material.requestAttribs.color[ this.index ] = true;

	if ( builder.isShader( 'vertex' ) ) result = B3D.ColorsNode.vertexDict[ this.index ];
	else result = B3D.ColorsNode.fragmentDict[ this.index ];

	return builder.format( result, this.getType( builder ), output );

};
