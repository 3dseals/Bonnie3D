export default String('\n\
#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\
\n\
	#ifdef USE_SKINNING\n\
\n\
		vec4 worldPosition = modelMatrix * skinned;\n\
\n\
	#else\n\
\n\
		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );