/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.NormalMapNode = function( value, uv, scale, normal, position ) {

	B3D.TempNode.call( this, 'v3' );

	this.value = value;
	this.scale = scale || new B3D.FloatNode( 1 );

	this.normal = normal || new B3D.NormalNode( B3D.NormalNode.LOCAL );
	this.position = position || new B3D.PositionNode( B3D.NormalNode.VIEW );

};

B3D.NormalMapNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.NormalMapNode.prototype.constructor = B3D.NormalMapNode;

B3D.NormalMapNode.prototype.generate = function( builder, output ) {

	var material = builder.material;

	builder.include( 'perturbNormal2Arb' );

	if ( builder.isShader( 'fragment' ) ) {

		return builder.format( 'perturbNormal2Arb(-' + this.position.build( builder, 'v3' ) + ',' +
			this.normal.build( builder, 'v3' ) + ',' +
			this.value.build( builder, 'v3' ) + ',' +
			this.value.coord.build( builder, 'v2' ) + ',' +
			this.scale.build( builder, 'v2' ) + ')', this.getType( builder ), output );

	} else {

		console.warn( "B3D.NormalMapNode is not compatible with " + builder.shader + " shader." );

		return builder.format( 'vec3( 0.0 )', this.getType( builder ), output );

	}

};
