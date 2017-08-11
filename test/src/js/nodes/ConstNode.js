/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ConstNode = function( src, useDefine ) {

	B3D.TempNode.call( this );

	this.eval( src || B3D.ConstNode.PI, useDefine );

};

B3D.ConstNode.PI = 'PI';
B3D.ConstNode.PI2 = 'PI2';
B3D.ConstNode.RECIPROCAL_PI = 'RECIPROCAL_PI';
B3D.ConstNode.RECIPROCAL_PI2 = 'RECIPROCAL_PI2';
B3D.ConstNode.LOG2 = 'LOG2';
B3D.ConstNode.EPSILON = 'EPSILON';

B3D.ConstNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.ConstNode.prototype.constructor = B3D.ConstNode;

B3D.ConstNode.prototype.getType = function( builder ) {

	return builder.getTypeByFormat( this.type );

};

B3D.ConstNode.prototype.eval = function( src, useDefine ) {

	src = ( src || '' ).trim();

	var name, type, value;

	var rDeclaration = /^([a-z_0-9]+)\s([a-z_0-9]+)\s?\=?\s?(.*?)(\;|$)/i;
	var match = src.match( rDeclaration );

	this.useDefine = useDefine;

	if ( match && match.length > 1 ) {

		type = match[ 1 ];
		name = match[ 2 ];
		value = match[ 3 ];

	} else {

		name = src;
		type = 'fv1';

	}

	this.name = name;
	this.type = type;
	this.value = value;

};

B3D.ConstNode.prototype.build = function( builder, output ) {

	if ( output === 'source' ) {

		if ( this.value ) {

			if ( this.useDefine ) {

				return '#define ' + this.name + ' ' + this.value;

			}

			return 'const ' + this.type + ' ' + this.name + ' = ' + this.value + ';';

		}

	} else {

		builder.include( this );

		return builder.format( this.name, this.getType( builder ), output );

	}

};

B3D.ConstNode.prototype.generate = function( builder, output ) {

	return builder.format( this.name, this.getType( builder ), output );

};
