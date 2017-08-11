/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.InputNode = function( type, params ) {

	params = params || {};
	params.shared = params.shared !== undefined ? params.shared : false;

	B3D.TempNode.call( this, type, params );

};

B3D.InputNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.InputNode.prototype.constructor = B3D.InputNode;

B3D.InputNode.prototype.generate = function( builder, output, uuid, type, ns, needsUpdate ) {

	var material = builder.material;

	uuid = builder.getUuid( uuid || this.getUuid() );
	type = type || this.getType( builder );

	var data = material.getDataNode( uuid );

	if ( builder.isShader( 'vertex' ) ) {

		if ( ! data.vertex ) {

			data.vertex = material.createVertexUniform( type, this.value, ns, needsUpdate );

		}

		return builder.format( data.vertex.name, type, output );

	} else {

		if ( ! data.fragment ) {

			data.fragment = material.createFragmentUniform( type, this.value, ns, needsUpdate );

		}

		return builder.format( data.fragment.name, type, output );

	}

};
