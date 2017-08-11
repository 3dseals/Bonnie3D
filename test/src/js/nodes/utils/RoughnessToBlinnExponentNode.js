/**
 * @author sunag / http://www.sunag.com.br/
 */

B3D.RoughnessToBlinnExponentNode = function() {

	B3D.TempNode.call( this, 'fv1' );

};

B3D.RoughnessToBlinnExponentNode.getSpecularMIPLevel = new B3D.FunctionNode( [
// taken from here: http://casual-effects.blogspot.ca/2011/08/plausible-environment-lighting-in-two.html
"float getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {",

	//float envMapWidth = pow( 2.0, maxMIPLevelScalar );
	//float desiredMIPLevel = log2( envMapWidth * sqrt( 3.0 ) ) - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );
	"float maxMIPLevelScalar = float( maxMIPLevel );",
	"float desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );",

	// clamp to allowable LOD ranges.
	"return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );",
"}"
].join( "\n" ) );

B3D.RoughnessToBlinnExponentNode.prototype = Object.create( B3D.TempNode.prototype );
B3D.RoughnessToBlinnExponentNode.prototype.constructor = B3D.RoughnessToBlinnExponentNode;

B3D.RoughnessToBlinnExponentNode.prototype.generate = function( builder, output ) {

	var material = builder.material;

	if ( builder.isShader( 'fragment' ) ) {

		if ( material.isDefined( 'PHYSICAL' ) ) {

			builder.include( B3D.RoughnessToBlinnExponentNode.getSpecularMIPLevel );

			if ( builder.isCache( 'clearCoat' ) ) {

				return builder.format( 'getSpecularMIPLevel( Material_ClearCoat_BlinnShininessExponent( material ), 8 )', this.type, output );

			} else {
				
				return builder.format( 'getSpecularMIPLevel( Material_BlinnShininessExponent( material ), 8 )', this.type, output );
				
			}

		} else {

			console.warn( "B3D.RoughnessToBlinnExponentNode is only compatible with PhysicalMaterial." );

			return builder.format( '0.0', this.type, output );

		}

	} else {

		console.warn( "B3D.RoughnessToBlinnExponentNode is not compatible with " + builder.shader + " shader." );

		return builder.format( '0.0', this.type, output );

	}

};
