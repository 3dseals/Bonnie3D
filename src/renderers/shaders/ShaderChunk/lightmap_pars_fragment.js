export default String('\n\
#ifdef USE_LIGHTMAP\n\
\n\
	uniform sampler2D lightMap;\n\
	uniform float lightMapIntensity;\n\
\n\
#endif\n\
').replace( /[ \t]*\/\/.*\n/g, '' ).replace( /[ \t]*\/\*[\s\S]*?\*\//g, '' ).replace( /\n{2,}/g, '\n' );