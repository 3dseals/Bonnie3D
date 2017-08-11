/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.UVNode = function( index ) {

	B3D.TempNode.call( this, 'v2', { shared: false } );

	this.index = index || 0;

};

B3D.UVNode.vertexDict = [ 'uv', 'uv2' ];
B3D.UVNode.fragmentDict = [ 'vUv', 'vUv2' ];

B3D.UVNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.UVNode.prototype.constructor = B3D.UVNode;

B3D.UVNode.prototype.generate = function( builder, output ) {

	var material = builder.material;
	var result;

	material.requestAttribs.uv[ this.index ] = true;

	if ( builder.isShader( 'vertex' ) ) result = B3D.UVNode.vertexDict[ this.index ];
	else result = B3D.UVNode.fragmentDict[ this.index ];

	return builder.format( result, this.getType( builder ), output );

};
