export default String('\n\
float roughnessFactor = roughness;\n\
\n\
#ifdef USE_ROUGHNESSMAP\n\
\n\
	vec4 texelRoughness = texture2D( roughnessMap, vUv );\n\
\n\
	// reads channel G, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\
	roughnessFactor *= texelRoughness.g;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );