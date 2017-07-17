export default String('\n\
#ifdef USE_ROUGHNESSMAP\n\
\n\
	uniform sampler2D roughnessMap;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );