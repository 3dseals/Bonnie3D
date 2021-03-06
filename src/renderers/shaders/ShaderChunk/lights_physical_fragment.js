export default String('\n\
PhysicalMaterial material;\n\
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\n\
material.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n\
#ifdef STANDARD\n\
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n\
#else\n\
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\
	material.clearCoat = saturate( clearCoat ); // Burley clearcoat model\n\
	material.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );