export default String('\n\
#ifdef USE_SPECULARMAP\n\
\n\
	uniform sampler2D specularMap;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );