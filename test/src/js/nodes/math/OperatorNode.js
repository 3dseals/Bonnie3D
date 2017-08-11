/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.OperatorNode = function( a, b, op ) {

	B3D.TempNode.call( this );

	this.a = a;
	this.b = b;
	this.op = op || B3D.OperatorNode.ADD;

};

B3D.OperatorNode.ADD = '+';
B3D.OperatorNode.SUB = '-';
B3D.OperatorNode.MUL = '*';
B3D.OperatorNode.DIV = '/';

B3D.OperatorNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.OperatorNode.prototype.constructor = B3D.OperatorNode;

B3D.OperatorNode.prototype.getType = function( builder ) {

	var a = this.a.getType( builder );
	var b = this.b.getType( builder );

	if ( builder.isFormatMatrix( a ) ) {

		return 'v4';

	} else if ( builder.getFormatLength( b ) > builder.getFormatLength( a ) ) {

		// use the greater length vector

		return b;

	}

	return a;

};

B3D.OperatorNode.prototype.generate = function( builder, output ) {

	var material = builder.material,
		data = material.getDataNode( this.uuid );

	var type = this.getType( builder );

	var a = this.a.build( builder, type );
	var b = this.b.build( builder, type );

	return builder.format( '(' + a + this.op + b + ')', type, output );

};
