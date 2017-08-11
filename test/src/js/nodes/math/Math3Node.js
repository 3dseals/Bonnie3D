/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.Math3Node = function( a, b, c, method ) {

	B3D.TempNode.call( this );

	this.a = a;
	this.b = b;
	this.c = c;

	this.method = method || B3D.Math3Node.MIX;

};

B3D.Math3Node.MIX = 'mix';
B3D.Math3Node.REFRACT = 'refract';
B3D.Math3Node.SMOOTHSTEP = 'smoothstep';
B3D.Math3Node.FACEFORWARD = 'faceforward';

B3D.Math3Node.prototype = Object.create( B3D.TempNode.prototype );
B3D.Math3Node.prototype.constructor = B3D.Math3Node;

B3D.Math3Node.prototype.getType = function( builder ) {

	var a = builder.getFormatLength( this.a.getType( builder ) );
	var b = builder.getFormatLength( this.b.getType( builder ) );
	var c = builder.getFormatLength( this.c.getType( builder ) );

	if ( a > b && a > c ) return this.a.getType( builder );
	else if ( b > c ) return this.b.getType( builder );

	return this.c.getType( builder );

};

B3D.Math3Node.prototype.generate = function( builder, output ) {

	var material = builder.material;

	var type = this.getType( builder );

	var a, b, c,
		al = builder.getFormatLength( this.a.getType( builder ) ),
		bl = builder.getFormatLength( this.b.getType( builder ) ),
		cl = builder.getFormatLength( this.c.getType( builder ) );

	// optimzer

	switch ( this.method ) {
		case B3D.Math3Node.REFRACT:
			a = this.a.build( builder, type );
			b = this.b.build( builder, type );
			c = this.c.build( builder, 'fv1' );
			break;

		case B3D.Math3Node.MIX:
			a = this.a.build( builder, type );
			b = this.b.build( builder, type );
			c = this.c.build( builder, cl == 1 ? 'fv1' : type );
			break;

		default:
			a = this.a.build( builder, type );
			b = this.b.build( builder, type );
			c = this.c.build( builder, type );
			break;

	}

	return builder.format( this.method + '(' + a + ',' + b + ',' + c + ')', type, output );

};
