export default String('\n\
#ifdef FLIP_SIDED\n\
\n\
	objectNormal = -objectNormal;\n\
\n\
#endif\n\
\n\
vec3 transformedNormal = normalMatrix * objectNormal;\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );