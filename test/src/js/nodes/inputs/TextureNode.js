/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.TextureNode = function( value, coord, bias, project ) {

	B3D.InputNode.call( this, 'v4', { shared : true } );

	this.value = value;
	this.coord = coord || new B3D.UVNode();
	this.bias = bias;
	this.project = project !== undefined ? project : false;

};

B3D.TextureNode.prototype = Object.create( B3D.InputNode.prototype );
B3D.TextureNode.prototype.constructor = B3D.TextureNode;

B3D.TextureNode.prototype.getTexture = function( builder, output ) {

	return B3D.InputNode.prototype.generate.call( this, builder, output, this.value.uuid, 't' );

};

B3D.TextureNode.prototype.generate = function( builder, output ) {

	if ( output === 'sampler2D' ) {

		return this.getTexture( builder, output );

	}

	var tex = this.getTexture( builder, output );
	var coord = this.coord.build( builder, this.project ? 'v4' : 'v2' );
	var bias = this.bias ? this.bias.build( builder, 'fv1' ) : undefined;

	if ( bias == undefined && builder.requires.bias ) {

		bias = builder.requires.bias.build( builder, 'fv1' );

	}

	var method, code;

	if ( this.project ) method = 'texture2DProj';
	else method = bias ? 'tex2DBias' : 'tex2D';

	if ( bias ) code = method + '(' + tex + ',' + coord + ',' + bias + ')';
	else code = method + '(' + tex + ',' + coord + ')';

	if ( builder.isSlot( 'color' ) ) {

		code = 'mapTexelToLinear(' + code + ')';

	} else if ( builder.isSlot( 'emissive' ) ) {

		code = 'emissiveMapTexelToLinear(' + code + ')';

	} else if ( builder.isSlot( 'environment' ) ) {

		code = 'envMapTexelToLinear(' + code + ')';

	}

	return builder.format( code, this.type, output );

};
