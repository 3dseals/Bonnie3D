B3D.MirrorNode = function( mirror, camera, options ) {

	B3D.TempNode.call( this, 'v4' );

	this.mirror = mirror;

	this.textureMatrix = new B3D.Matrix4Node( this.mirror.material.uniforms.textureMatrix.value );

	this.worldPosition = new B3D.PositionNode( B3D.PositionNode.WORLD );

	this.coord = new B3D.OperatorNode( this.textureMatrix, this.worldPosition, B3D.OperatorNode.MUL );
	this.coordResult = new B3D.OperatorNode( null, this.coord, B3D.OperatorNode.ADD );

	this.texture = new B3D.TextureNode( this.mirror.material.uniforms.mirrorSampler.value, this.coord, null, true );

};

B3D.MirrorNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.MirrorNode.prototype.constructor = B3D.MirrorNode;

B3D.MirrorNode.prototype.generate = function( builder, output ) {

	var material = builder.material;

	if ( builder.isShader( 'fragment' ) ) {

		this.coordResult.a = this.offset;
		this.texture.coord = this.offset ? this.coordResult : this.coord;

		if ( output === 'sampler2D' ) {

			return this.texture.build( builder, output );

		}

		return builder.format( this.texture.build( builder, this.type ), this.type, output );

	} else {

		console.warn( "B3D.MirrorNode is not compatible with " + builder.shader + " shader." );

		return builder.format( 'vec4(0.0)', this.type, output );

	}

};
