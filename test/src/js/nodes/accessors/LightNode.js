/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.LightNode = function() {

	B3D.TempNode.call( this, 'v3', { shared: false } );

};

B3D.LightNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.LightNode.prototype.constructor = B3D.LightNode;

B3D.LightNode.prototype.generate = function( builder, output ) {

	if ( builder.isCache( 'light' ) ) {

		return builder.format( 'reflectedLight.directDiffuse', this.getType( builder ), output )

	} else {

		console.warn( "B3D.LightNode is only compatible in \"light\" channel." );

		return builder.format( 'vec3( 0.0 )', this.getType( builder ), output );

	}

};
