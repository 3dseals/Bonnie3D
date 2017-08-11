/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.BumpNode = function( value, coord, scale ) {

	B3D.TempNode.call( this, 'v3' );

	this.value = value;
	this.coord = coord || new B3D.UVNode();
	this.scale = scale || new B3D.Vector2Node( 1, 1 );

};

B3D.BumpNode.fBumpToNormal = new B3D.FunctionNode( [
"vec3 bumpToNormal( sampler2D bumpMap, vec2 uv, vec2 scale ) {",
"	vec2 dSTdx = dFdx( uv );",
"	vec2 dSTdy = dFdy( uv );",
"	float Hll = texture2D( bumpMap, uv ).x;",
"	float dBx = texture2D( bumpMap, uv + dSTdx ).x - Hll;",
"	float dBy = texture2D( bumpMap, uv + dSTdy ).x - Hll;",
"	return vec3( .5 + ( dBx * scale.x ), .5 + ( dBy * scale.y ), 1.0 );",
"}"
].join( "\n" ), null, { derivatives: true } );

B3D.BumpNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.BumpNode.prototype.constructor = B3D.BumpNode;

B3D.BumpNode.prototype.generate = function( builder, output ) {

	var material = builder.material, func = B3D.BumpNode.fBumpToNormal;

	builder.include( func );

	if ( builder.isShader( 'fragment' ) ) {

		return builder.format( func.name + '(' + this.value.build( builder, 'sampler2D' ) + ',' +
			this.coord.build( builder, 'v2' ) + ',' +
			this.scale.build( builder, 'v2' ) + ')', this.getType( builder ), output );

	} else {

		console.warn( "B3D.BumpNode is not compatible with " + builder.shader + " shader." );

		return builder.format( 'vec3( 0.0 )', this.getType( builder ), output );

	}

};
