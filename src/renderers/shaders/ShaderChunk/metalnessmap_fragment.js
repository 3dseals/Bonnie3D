export default String('\n\
float metalnessFactor = metalness;\n\
\n\
#ifdef USE_METALNESSMAP\n\
\n\
	vec4 texelMetalness = texture2D( metalnessMap, vUv );\n\
\n\
	// reads channel B, compatible with a combined OcclusionRoughnessMetallic (RGB) texture\n\
	metalnessFactor *= texelMetalness.b;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );