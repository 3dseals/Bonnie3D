/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.FunctionCallNode = function( func, inputs ) {

	B3D.TempNode.call( this );

	this.setFunction( func, inputs );

};

B3D.FunctionCallNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.FunctionCallNode.prototype.constructor = B3D.FunctionCallNode;

B3D.FunctionCallNode.prototype.setFunction = function( func, inputs ) {

	this.value = func;
	this.inputs = inputs || [];

};

B3D.FunctionCallNode.prototype.getFunction = function() {

	return this.value;

};

B3D.FunctionCallNode.prototype.getType = function( builder ) {

	return this.value.getType( builder );

};

B3D.FunctionCallNode.prototype.generate = function( builder, output ) {

	var material = builder.material;

	var type = this.getType( builder );
	var func = this.value;

	var code = func.build( builder, output ) + '(';
	var params = [];

	for ( var i = 0; i < func.inputs.length; i ++ ) {

		var inpt = func.inputs[ i ];
		var param = this.inputs[ i ] || this.inputs[ inpt.name ];

		params.push( param.build( builder, builder.getTypeByFormat( inpt.type ) ) );

	}

	code += params.join( ',' ) + ')';

	return builder.format( code, type, output );

};
