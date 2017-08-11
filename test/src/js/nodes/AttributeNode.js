/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.AttributeNode = function( name, type ) {

	B3D.GLNode.call( this, type );

	this.name = name;

};

B3D.AttributeNode.prototype = Object.create( B3D.GLNode.prototype );
B3D.AttributeNode.prototype.constructor = B3D.AttributeNode;

B3D.AttributeNode.prototype.getAttributeType = function( builder ) {

	return typeof this.type === 'number' ? builder.getConstructorFromLength( this.type ) : this.type;

};

B3D.AttributeNode.prototype.getType = function( builder ) {

	var type = this.getAttributeType( builder );

	return builder.getTypeByFormat( type );

};

B3D.AttributeNode.prototype.generate = function( builder, output ) {

	var type = this.getAttributeType( builder );

	var attribute = builder.material.getAttribute( this.name, type );

	return builder.format( builder.isShader( 'vertex' ) ? this.name : attribute.varying.name, this.getType( builder ), output );

};
