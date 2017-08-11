/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.VarNode = function( type ) {

	B3D.GLNode.call( this, type );

};

B3D.VarNode.prototype = Object.create( B3D.GLNode.prototype );
B3D.VarNode.prototype.constructor = B3D.VarNode;

B3D.VarNode.prototype.getType = function( builder ) {

	return builder.getTypeByFormat( this.type );

};

B3D.VarNode.prototype.generate = function( builder, output ) {

	var varying = builder.material.getVar( this.uuid, this.type );

	return builder.format( varying.name, this.getType( builder ), output );

};
