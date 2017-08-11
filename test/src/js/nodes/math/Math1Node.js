/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.Math1Node = function( a, method ) {

	B3D.TempNode.call( this );

	this.a = a;

	this.method = method || B3D.Math1Node.SIN;

};

B3D.Math1Node.RAD = 'radians';
B3D.Math1Node.DEG = 'degrees';
B3D.Math1Node.EXP = 'exp';
B3D.Math1Node.EXP2 = 'exp2';
B3D.Math1Node.LOG = 'log';
B3D.Math1Node.LOG2 = 'log2';
B3D.Math1Node.SQRT = 'sqrt';
B3D.Math1Node.INV_SQRT = 'inversesqrt';
B3D.Math1Node.FLOOR = 'floor';
B3D.Math1Node.CEIL = 'ceil';
B3D.Math1Node.NORMALIZE = 'normalize';
B3D.Math1Node.FRACT = 'fract';
B3D.Math1Node.SAT = 'saturate';
B3D.Math1Node.SIN = 'sin';
B3D.Math1Node.COS = 'cos';
B3D.Math1Node.TAN = 'tan';
B3D.Math1Node.ASIN = 'asin';
B3D.Math1Node.ACOS = 'acos';
B3D.Math1Node.ARCTAN = 'atan';
B3D.Math1Node.ABS = 'abs';
B3D.Math1Node.SIGN = 'sign';
B3D.Math1Node.LENGTH = 'length';
B3D.Math1Node.NEGATE = 'negate';
B3D.Math1Node.INVERT = 'invert';

B3D.Math1Node.prototype = Object.create( B3D.TempNode.prototype );
B3D.Math1Node.prototype.constructor = B3D.Math1Node;

B3D.Math1Node.prototype.getType = function( builder ) {

	switch ( this.method ) {
		case B3D.Math1Node.LENGTH:
			return 'fv1';
	}

	return this.a.getType( builder );

};

B3D.Math1Node.prototype.generate = function( builder, output ) {

	var material = builder.material;

	var type = this.getType( builder );

	var result = this.a.build( builder, type );

	switch ( this.method ) {

		case B3D.Math1Node.NEGATE:
			result = '(-' + result + ')';
			break;

		case B3D.Math1Node.INVERT:
			result = '(1.0-' + result + ')';
			break;

		default:
			result = this.method + '(' + result + ')';
			break;
	}

	return builder.format( result, type, output );

};
