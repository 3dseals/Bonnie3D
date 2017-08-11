/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.ReflectNode = function( scope ) {

	B3D.TempNode.call( this, 'v3', { unique: true } );

	this.scope = scope || B3D.ReflectNode.CUBE;

};

B3D.ReflectNode.CUBE = 'cube';
B3D.ReflectNode.SPHERE = 'sphere';
B3D.ReflectNode.VECTOR = 'vector';

B3D.ReflectNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.ReflectNode.prototype.constructor = B3D.ReflectNode;

B3D.ReflectNode.prototype.getType = function( builder ) {

	switch ( this.scope ) {
		case B3D.ReflectNode.SPHERE:
			return 'v2';
	}

	return this.type;

};

B3D.ReflectNode.prototype.generate = function( builder, output ) {

	var result;

	switch ( this.scope ) {

		case B3D.ReflectNode.VECTOR:

			builder.material.addFragmentNode( 'vec3 reflectVec = inverseTransformDirection( reflect( -normalize( vViewPosition ), normal ), viewMatrix );' );

			result = 'reflectVec';

			break;

		case B3D.ReflectNode.CUBE:

			var reflectVec = new B3D.ReflectNode( B3D.ReflectNode.VECTOR ).build( builder, 'v3' );

			builder.material.addFragmentNode( 'vec3 reflectCubeVec = vec3( -1.0 * ' + reflectVec + '.x, ' + reflectVec + '.yz );' );

			result = 'reflectCubeVec';

			break;

		case B3D.ReflectNode.SPHERE:

			var reflectVec = new B3D.ReflectNode( B3D.ReflectNode.VECTOR ).build( builder, 'v3' );

			builder.material.addFragmentNode( 'vec2 reflectSphereVec = normalize((viewMatrix * vec4(' + reflectVec + ', 0.0 )).xyz + vec3(0.0,0.0,1.0)).xy * 0.5 + 0.5;' );

			result = 'reflectSphereVec';

			break;
	}

	return builder.format( result, this.getType( this.type ), output );

};
