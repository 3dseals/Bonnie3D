export default String('\n\
#ifdef USE_DISPLACEMENTMAP\n\
\n\
	uniform sampler2D displacementMap;\n\
	uniform float displacementScale;\n\
	uniform float displacementBias;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );