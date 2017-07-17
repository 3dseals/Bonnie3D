export default String('\n\
#ifdef USE_ENVMAP\n\
\n\
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\
		varying vec3 vWorldPosition;\n\
\n\
	#else\n\
\n\
		varying vec3 vReflect;\n\
		uniform float refractionRatio;\n\
\n\
	#endif\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );