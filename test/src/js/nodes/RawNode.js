/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.RawNode = function( value ) {

	B3D.GLNode.call( this, 'v4' );

	this.value = value;

};

B3D.RawNode.prototype = Object.create( B3D.GLNode.prototype );
B3D.RawNode.prototype.constructor = B3D.RawNode;

B3D.GLNode.prototype.generate = function( builder ) {

	var material = builder.material;

	var data = this.value.parseAndBuildCode( builder, this.type );

	var code = data.code + '\n';

	if ( builder.shader == 'vertex' ) {

		code += 'gl_Position = ' + data.result + ';';

	} else {

		code += 'gl_FragColor = ' + data.result + ';';

	}

	return code;

};
